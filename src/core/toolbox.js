import {createDom} from "../utils";

export class ToolBox {
    static instance = null
    constructor(parentHtml,style = {}, dom = null) {
        // 单例模式
        if(!ToolBox.instance){
            ToolBox.instance = this
        }else{
            return ToolBox.instance
        }
        this.box = document.createElement('div');
        this.box.style.backgroundColor = '#fff';
        this.box.style.borderRadius = '5px';
        this.box.style.boxShadow = '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)';
        this.box.style.width = 'max-content';
        this.box.style.height = '40px';
        this.box.style.padding = '6px';
        this.box.className = 'toolBox';
        this.box.style.zIndex = '999';
        this.box.style.display = 'flex';
        this.box.style.visibility = 'hidden'
        this.box.style.justifyContent = 'center';
        this.box.style.alignItems = 'center';
        // this.box.style.transition = 'all 1s ease';
        this.box.style.position = 'relative';
        this.box.style.transform = 'translateX(-50%)';
        this.setStyle(style);
        let stylesheet = document.styleSheets[0]; // 选择第一个样式表
        stylesheet.insertRule(".toolbox_item {" +
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "height: 100%;" +
            "margin: 0 1px;" +
            "cursor: pointer;" +
            "border-radius: 5px;" +
            "padding: 0 5px;" +
            "}", 0);
        stylesheet.insertRule(".toolbox_item:hover {" +
            "background-color: #eee;" +
            "}", 0);
        stylesheet.insertRule(".toolbox_slider_item:hover {" +
            "background-color: #eee;" +
            "}", 0);

        parentHtml.appendChild(this.box);
    }
    setStyle(style){
        Object.keys(style).forEach(i=>{
            this.box.style[i] = style[i];
        });
    }
    // 重写dom函数
    _rewriteDom(dom){
        this.dom = dom
        return dom
    }
    hide(){
        this.box.style.visibility = 'hidden';
    }
    bindPen(pen){
        this.pen = pen;
    }
    show(){
        this.box.style.visibility = 'visible';
    }
    destroy(){
        this.box.parentNode.removeChild(this.box)
    }
    animate = false
    curItem = null
    translatePosition(pen){
        if(!this.animate)this.hide();
        const store = pen.calculative.canvas.store;
        const worldRect = pen.calculative.worldRect;
        this.box.style.position = 'absolute';
        this.box.style.outline = 'none';
        this.box.style.left = worldRect.x + store.data.x + worldRect.width /2 + 'px';
        this.box.style.top = worldRect.y + store.data.y + -80 + 'px';
        this.box.style.userSelect = 'none';
        if(!this.animate)this.show();
    }
    renderFuncList(){
        const fragmentChild = new DocumentFragment();
        this.box.innerHTML = '';
        this.funcList.forEach(i=>{
            preprocess(i,this.pen)
            if(i.name){
                let itemsSpan =this.setChildDom(this.pen,i);
                itemsSpan.className = 'toolbox_item';
                fragmentChild.appendChild(itemsSpan);
            }
        });
        this.box.appendChild(fragmentChild);
    }
    /**
     * @description 创造子节点  设置样式 配置事件函数等；
     * @param pen 操作的图元
     * @param item 该toolItem配置项 包含 显示name 事件event 回调函数func 和该按钮的样式style 与setDom自定义样式
     * */
    setChildDom(pen, item ){
        const dom = document.createElement('div');
        // 构建update方法 用于局部更新
        item.update =(target,keepOpen = false)=> {
            // update 局部更新
            if(target === 'title'){
                renderTitle(item,pen,dom.titleDom)
                return
            }else if(target === 'child'){
                renderChildDom(item,pen,dom,dom.childrenDom,keepOpen)
                return;
            }
            // 清空列表  初始化列表
            renderInit(item,pen,dom)
            // 执行配置项初始化函数
            item.init?.(item,pen,dom)

            // 初始化titleDOM
            let title = createDom('div',{},undefined,undefined,'toolbox_title')
            // 执行titleDom
            title = renderTitle(item,pen,title);

            item.dom = dom
            item.dom.titleDom = title;
            if(item.children || item.setChildrenDom){
                // 打开函数
                title['on'+(item.openChildDomEvent || 'click')] = ()=>{
                    // 关闭其他选项
                    if(toolbox.curItem !== item){
                        toolbox.funcList.filter(i=>i.isOpen).forEach(
                            i=>{
                                i.close()
                            }
                        )
                        // toolbox.curItem?.closeChildDom?.(toolbox.curItem,pen,toolbox.curItem.dom.childrenDom) || (toolbox.curItem?.dom.childrenDom && ( toolbox.curItem.dom.childrenDom.style.visibility = 'hidden' ))
                        // toolbox.curItem?.isOpen? (toolbox.curItem.isOpen = false): ''
                    }
                    if((toolbox.curItem === item) && item.isOpen)return
                    // 将打开逻辑交给用户 或者
                    item.openChildDom?.(item,pen,item.dom.childrenDom) || (item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'visible'));

                    // 执行打开下拉菜单回调函数 TODO 传参应该怎么传
                    item.onOpenChildDom?.(item,pen,item.dom.childrenDom)
                    item.isOpen = true
                    toolbox.curItem = item
                }
            }


            // titleDom添加到dom中
            item.closeShadowDom?dom.appendChild(title):dom.shadowRoot.appendChild(title);

            // 渲染下拉列表
            let containerDom = null;
            renderChildDom(item,pen,dom,containerDom)
            // 事件处理
        }
        item.updateAll = (keepOpen = true)=>{
            item.update('title');
            item.update('child',keepOpen)
        }
        item.update()
        return dom;
    }
    setFuncList(funcList){
        this.funcList = funcList;
        this.renderFuncList();
    }
    clearFuncList(){
        this.setFuncList([]);
    }
}

function renderInit(item,pen,dom){
    if(dom.shadowRoot){
        // 清空
        dom.shadowRoot.innerHTML = ''
    }else{
        item.closeShadowDom?dom.innerHTML = '':dom.attachShadow({mode: "open"});
    }

    //设置样式与事件
    typeof item.style === 'object' && toolbox.setStyle(dom, item.style);

    // 绑定事件，绑定在dom上
    if(item.event){
        let eventFunc = function (e){
            // 绑定事件
            if(item.closeOther){
                toolbox.funcList.filter(i=>i.isOpen).forEach(
                    i=>{
                        i.close()
                    }
                )
            }
            item.func(item,this,dom,e);
        };
        dom.addEventListener(item.event,eventFunc.bind(pen));
    }
    return dom
}

function renderTitle(item,pen,title) {
    title.innerHTML = ''
    if(typeof item.setDom === 'function'){
        let re = item.setDom(item,title);
        switch (typeof re) {
            case "string":
                title.innerHTML = re
                break;
            case "object":
                title.appendChild(re)
                break;
            default:
                throw new Error('function setDom must return string or node object');
        }
    }else {
        title.innerHTML = (item.icon? item.icon : (item.img?`<img src="${item.img}" title="${item.name}" />` : item.name))
    }
    return title
}

function renderChildDom(item,pen,dom,containerDom,keepOpen = false) {
    if(dom.childrenDom)dom.shadowRoot?dom.shadowRoot.removeChild(dom.childrenDom) : dom.removeChild(dom.childrenDom)
    if(item.children && item.children.length > 0 || item.setChildrenDom){
        // 是否重写dom
        if(
            typeof item.setChildrenDom === 'function'
        ){
            // 重新childDom

            let childDom = item.setChildrenDom(item,pen,dom);

            /**
             * @description 若返回的是字符串，则在外部包裹一层div作为其container
             * */
            if(typeof childDom === 'string'){
                let div = document.createElement('div');
                // 默认隐藏节点
                keepOpen? (item.openChildDom?.(item,pen,item.dom.childrenDom) ||  (div.style.visibility = 'visible')):(item.closeChildDom?.(item,pen,div) || (div.style.visibility = 'hidden'));
                div.innerHTML = childDom;
                dom.shadowRoot?dom.shadowRoot.appendChild(div):dom.appendChild(div);
                containerDom = div
            }else{
                containerDom = childDom;
                keepOpen?(item.openChildDom?.(item,pen,item.dom.childrenDom) ||  (childDom.style.visibility = 'visible')):(item.closeChildDom?.(item,pen,childDom) || (childDom.style.visibility = 'hidden'));
            }
        }else{
            containerDom = createDom('div',{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position:'absolute',
                top:'50px',
                backgroundColor:'#fff',
                borderRadius:'5px',
                padding:'3px',
                width:'max-content',
                boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)',
            });
            let gap = createDom('div',{
                position:'absolute',
                height:'10px',
                bottom:'-10px',
                backgroundColor:'#eee',
                width: '100%',
                opacity:0
            })
            dom.appendChild(gap)
            keepOpen?(item.openChildDom?.(item,pen,containerDom) ||  (containerDom.style.visibility = 'visible')):(item.closeChildDom?.(item,pen,containerDom) || (containerDom.style.visibility = 'hidden'));

        }
        let fragment = new DocumentFragment();
        for(let i of item.children || []){
            let node = createDom('div',
                {
                    margin: '5px 8px'
                },i.event,function(e){
                    i.stopPropagation?e.stopPropagation():'';
                    i.func(i, this, dom, item,e);
                }.bind(pen),'toolbox_item');

            //TODO 执行时机是否正确？？？
            i.init?.(i,pen,node)
            if(i.setDom){
                let re = i.setDom(i,node);
                switch (typeof re) {
                    case "string":
                        node.innerHTML = re;
                        break;
                    case "object":
                        node.appendChild(re);
                        break;
                    default:
                        throw new Error('function setDom must return string or node object');
                }
            }else {
                node.innerHTML = (i.icon && i.name) || (i.img && i.name)? '<span style="padding-right: 30px;width: max-content" >'+ (i.icon || `<img src="${i.img}"/>`)+'</span> <span>'+i.name+'</span>' :'<span>'+(i.name || i.icon)+'</span>';
            }
            fragment.appendChild(node);
        }
        dom.style.position = 'relative';
        containerDom?.appendChild(fragment);
        containerDom.classList.add('toolbox_container')
        containerDom.style.position = 'absolute';
        item.closeShadowDom?dom.appendChild(containerDom):dom.shadowRoot.appendChild(containerDom);
        dom.childrenDom = containerDom;
// 添加样式到元素
    }

    if(item.children || item.setChildrenDom || item.closeOther){
        // 关闭下拉菜单
        if(!item.closeOther){
            ((item.closeEventOnChild?dom.childrenDom: dom)['on'+(item.closeChildDomEvent || 'click')] = (()=>{
                dom.offsetHeight
                // 可手动派发隐藏函数
                item.onCloseChildDom?.(item,pen,item.dom.childrenDom)

                item.close()
                toolbox.curItem = null
                item.isOpen = false
            }))
        }
    }
    return containerDom
}

// 配置项预处理
function preprocess(item,pen) {
    if(item.openEventOnTitle == null){
        item.openEventOnTitle = true
    }
    if(item.children || item.setChildrenDom){
        item.isOpen = false
        item.closeOther = false
        item.close = ()=>{
            item.closeChildDom?.(item,pen,item.dom.childrenDom) || (item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'hidden'))
            item.isOpen = false
        }
    }

}