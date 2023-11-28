
// 模板解析，注册函数并返回返回dom对象
// TODO 此处只能处理返回字符串的信息
const EVENTTAG = ['@','on']

import {createDom, removeDuplicates, replaceAfterPosition} from "./utils";

let LifeCycle = ['mounted']
/**
 * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
 * @param self 此配置项自身
 * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
 * @return string dom字符串
 * */

export function Component(config,{template,scripts,style},output = 'dom',root = null){
    let res = createDom('div')

    scripts.$update = ()=>{
        if(!root)root = res
        // 直接进行dom替换 有问题  事件不生效
        root.innerHTML = Component(config,{template,style,scripts:MindManager._env[namespace]},output,root).innerHTML
    }

    if(!scripts)scripts = {}
    if(!style)style = ''
    let namespace = config.key
    if (!namespace)throw new Error('The name attribute is not configured')
    MindManager._env[namespace]? '' : MindManager._env[namespace] = {};
    let {dom, funcObjs,varObj} = parse(template)
    let keys = Object.keys(scripts)

    // 暂不考虑 传其他参数情况
    // keys.forEach(i=>{
    //     // 将script的函数传递到全局环境
    //     MindManager._env[namespace][i] = scripts[i]
    //
    //     // 执行生命周期函数 放入微队列依次执行
    //
    // })
    MindManager._env[namespace] = scripts
    LifeCycle.forEach(i=>{
        Object.keys(scripts).includes(i)?scripts[i]():''
    })
    funcObjs.forEach(i=>{
        // 出现的函数在script中定义了 则转换
        if(keys.indexOf(i.name) !== -1){
            // 处理函数传参的变量
            i.params.forEach(((j)=>{
                //TODO 应该还要过滤一遍字面量  此处仅仅处理了变量
                if(!j.param.startsWith('this') && j.param!=='event' && !isLiteral(j.param)){
                    // TODO 此处应当根据字符的具体位置来替换，而非全部替换
                    // dom = dom.replaceAll(j.param,`MindManager._env.${namespace}.${j}`)
                    dom = replaceAfterPosition(dom,j.index,j.param,`MindManager._env.${namespace}.${j.param}`)
                }
            }));
            // 处理函数名
            dom = dom.replaceAll(i.name+"(",`MindManager._env.${namespace}.${i.name}(`)
        }
    })

    varObj.forEach(i=>{
        //TODO 暂时不支持表达式
        if(keys.indexOf(i.name) !== -1){
            let regex = new RegExp(`\\{\\{\\s*${i.name}\\s*\\}\\}`)
            // 处理变量
            dom = replaceAfterPosition(dom,i.index,regex,MindManager._env[namespace][i.name])
        }
    })


    let sty = ''
    if(style){
        style.startsWith('<style>')?(sty = style) : (sty = `<style>${style}</style>`)
    }
    if(output === 'string'){
        return  dom + sty
    }else if(output === 'dom'){
        res.innerHTML = dom + sty
        res.expose = scripts
        return res
    }
}


function parse(html){
    // 函数匹配式
    let funcReg = new RegExp(`(${EVENTTAG.join('|')})(?<event>\\w+)\\s*=\\s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)\\s*\\(\\s*(?<param>[^)]*)\\s*\\)["']`, 'g');
    let varReg = /\{\{\s*(?<variable>\w+)\s*\}\}/g
    // 变量匹配

    let reHtml = html.replaceAll('\n','').replaceAll(/@(\w+)="([^"]+)"/g, 'on$1="$2"');

// 使用 matchAll 来匹配所有结果
    let funcMatchs = reHtml.matchAll(funcReg);
    let varMaths = reHtml.matchAll(varReg);
    let varResult = []
    for(let match of varMaths){
        let { variable } = match.groups;
        let strIndex = match.index
        varResult.push({name:variable,index:strIndex})
    }

// 请注意，没有传递 'g' 标志给 matchAll，因为 reg 已经带有 'g' 标志

    let result = [];
    for (let match of funcMatchs){
        let {event, name, param,} = match.groups;

        // 获取参数的具体位置

        let params = param.replaceAll(/\s/g, '').split(',');
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
    let funcObjs = removeDuplicates(result)
    // let varObj = removeDuplicates(varResult)
    return {dom:reHtml,funcObjs,varObj:varResult}
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