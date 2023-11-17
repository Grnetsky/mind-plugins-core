
// 模板解析，注册函数并返回返回dom对象
// TODO 此处只能处理返回字符串的信息


const EVENTTAG = ['@','on']

import {createDom, replaceAfterPosition} from "./utils";

let LifeCycle = ['mounted']
export function template(config,{template,scripts,style},output = 'string'){
    let namespace = config.key
    if (!namespace)throw new Error('The name attribute is not configured')
    MindManager._env[namespace]? '' : MindManager._env[namespace] = {};
    let {dom, funcObjs} = parse(template)

    let keys = Object.keys(scripts)

    // 暂不考虑 传其他参数情况
    keys.forEach(i=>{
        // 将script的函数传递到全局环境
        MindManager._env[namespace][i] = scripts[i]

        // 执行生命周期函数 放入微队列依次执行
        LifeCycle.includes(i)? Promise.resolve().then(()=>{scripts[i]()}):'';
    })
    funcObjs.forEach(i=>{
        // 出现的函数在script中定义了 则转换
        if(keys.indexOf(i.name) !== -1){
            i.params.forEach(((j)=>{
                //TODO 应该还要过滤一遍字面量  此处仅仅处理了变量
                if(!j.param.startsWith('this') && j.param!=='event' && !isLiteral(j.param)){
                    // TODO 此处应当根据字符的具体位置来替换，而非全部替换
                    // dom = dom.replaceAll(j.param,`MindManager._env.${namespace}.${j}`)
                    dom = replaceAfterPosition(dom,j.index,j.param,`MindManager._env.${namespace}.${j.param}`)
                }
            }));
            dom = dom.replaceAll(i.name+"(",`MindManager._env.${namespace}.${i.name}(`)
        }
    })


    let sty = ''
    if(style){
        style.startsWith('<style>')?(sty = style) : (sty = `<style>${style}</style>`)
    }
    if(output === 'string'){
        return  dom + sty
    }else if(output === 'dom'){
        let res = createDom('div')
        res.innerHTML = dom + sty
        return res
    }
}


function parse(html){
    // 函数匹配式
    let reg = new RegExp(`(${EVENTTAG.join('|')})(?<event>\\w+)\\s*=\\s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)\\s*\\(\\s*(?<param>[^)]*)\\s*\\)["']`, 'g');
    //(@|on)(?<event>w+)\s*=s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)s*(s*(?<param>[w.]*)s*)["']
    //(@|on)(?<event>\w+)\s*=\s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)\s*\(\s*(?<param>[\w\.]*)\s*\)["']// 替换空格 替换@符号
    let reHtml = html.replaceAll('\n','').replaceAll(/@(\w+)="([^"]+)"/g, 'on$1="$2"');

// 使用 matchAll 来匹配所有结果
    let matchs = reHtml.matchAll(reg);

// 请注意，没有传递 'g' 标志给 matchAll，因为 reg 已经带有 'g' 标志

    let result = [];
    for (let match of matchs){
        let {event, name, param,} = match.groups;

        // 获取参数的具体位置

        let params = param.replace(/\s/g, '').split(',');
        let lastIndex = 0
        params = params.map(i=>{
            let strIndex = match[0].indexOf(i,lastIndex);
            let index = match.index + strIndex
            lastIndex = strIndex + i.length
            return {
                param:i,
                index
            }
        })
        // 去除 param 中的空格并按逗号分割参数
        let re = {event, name, params,index:match.index};
        result.push(re);
    }

// 去重逻辑
    const uniqueResults = [];
    const uniqueNames = new Set();
    for (const res of result) {
        if (!uniqueNames.has(res.name)) {
            uniqueNames.add(res.name);
            uniqueResults.push(res);
        }
    }
    return {dom:reHtml,funcObjs:uniqueResults}
}


// 该数据是否为字面量
function isLiteral(_) {
    // 判断是否为字符串
    if(_.startsWith('"') || _.startsWith("'"))return true
    // 判断是否为数字
    // if(typeof (+ _) === "number")return true
    if(!Number.isNaN(+ _))return true

    if(_ === "true" || _=== "false") return true

    // 还未考虑是否为对象
    return false
}