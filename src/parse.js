
// 模板解析，注册函数并返回返回dom对象
// TODO 此处只能处理返回字符串的信息


let LifeCycle = ['mounted']
export function template(config,{template,scripts,style}){
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
            dom = dom.replaceAll(i.name+"(",`MindManager._env.${namespace}.${i.name}(`)
            i.params.forEach(((j)=>{

                //TODO 应该还要过滤一遍字面量  此处仅仅处理了变量
                if(!j.startsWith('this') && j!=='event' && !isLiteral(j)){
                    dom = dom.replaceAll(j,`MindManager._env.${namespace}.${j}`)
                }
            }));
        }
    })


    let sty = ''
    if(style){
        style.startsWith('<style>')?(sty = style) : (sty = `<style>${style}</style>`)
    }
    return dom + sty
}


function parse(html){
    // 函数匹配式
    let reg = /(?<name>[a-zA-Z][a-zA-z0-9]+)\((?<param>.*?)\)/g;
    let reHtml = html.replaceAll('\n','')
    let groups = reHtml.matchAll(reg, 'g')
    let result = []
    for (let i of groups){
        let m = i.groups
        let param = m.param
        let params = param.replace(' ','').split(',')
        let re = {name:m.name,params}
        result.push(re)
    }

    // 去重
    const obj = {}
    result = result.reduce((total, next) => {
        obj[next.name] ? '' : obj[next.name] = true && total.push(next)
        return total
    }, [])
    return {dom:reHtml,funcObjs:result}
}


// 该数据是否为字面量
function isLiteral(_) {

    console.log(_,'mmmmmmmmmmmmmmmmmmmmm')

    // 判断是否为字符串
    if(_.startsWith('"') || _.startsWith("'"))return true
    // 判断是否为数字
    if(typeof (+ _) === "number")return true
    if(_ === "true" || _=== "false") return true

    // 还未考虑是否为对象
    return false
}