export function createDom(name,style,even = undefined,func = undefined,className = undefined) {
  // 创建dom
  let dom = document.createElement(name);
  // 设置dom样式
  if(style && typeof style === 'object'){
    Object.assign(dom.style,style);
    className && dom.classList.add(className);
  }else {
    throw new Error('createDom error: parma "style" must be a Object');
  }
  // 绑定dom事件；
  if(typeof even === 'string' && typeof func === 'function'){
    dom.addEventListener(even,(e)=>{
      func();
    });
  }
  return dom;
}


export class ToolBox {
  constructor(parentHtml,style = {}) {
    this.box = document.createElement('div');
    this.box.style.backgroundColor = '#fff';
    this.box.style.borderRadius = '5px';
    this.box.style.boxShadow = '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)';
    this.box.style.width = 'max-content';
    this.box.style.height = '40px';
    this.box.style.padding = '6px';
    this.box.className = 'toolBox';
    this.box.style.display = 'none';
    this.box.style.zIndex = '999';
    this.box.style.display = 'flex';
    this.box.style.justifyContent = 'center';
    this.box.style.alignItems = 'center';
    // this.box.style.overflow = 'hidden';
    this.box.style.position = 'relative';
    this.box.style.transform = 'translateX(-50%)';
    this.setStyle(this.box,style);
    let stylesheet = document.styleSheets[0]; // 选择第一个样式表
    stylesheet.insertRule(".toolbox_item {" +
      "display: flex;" +
      "justify-content: center;" +
      "align-items: center;" +
      "height: 100%;" +
      "margin: 0 1px;" +
      "cursor: pointer;" +
      "transition: all .3s ease;" +
      "border-radius: 5px;" +
      "padding: 0 5px;" +
      "}", 0);
    stylesheet.insertRule(".toolbox_item:hover {" +
      "background-color: #eee;" +
      "}", 0);

    parentHtml.appendChild(this.box);
  }
  setStyle(box, style){
    Object.keys(style).forEach(i=>{
      box.style[i] = style[i];
    });
  }
  hide(){
    this.box.style.display = 'none';
  }
  bindPen(pen){
    this.pen = pen;
  }
  show(){
    this.box.style.display = 'flex';
    this.box.style.flexDirection = 'row';
  }
  translatePosition(pen){
    this.hide();
    const store = pen.calculative.canvas.store;
    const worldRect = pen.calculative.worldRect;
    this.box.style.position = 'absolute';
    this.box.style.outline = 'none';
    this.box.style.left = worldRect.x + store.data.x + worldRect.width /2 + 'px';
    this.box.style.top = worldRect.y + store.data.y + -80 + 'px';
    this.box.style.userSelect = 'none';
    this.show();
  }
  renderChildren(){
    const fragmentChild = new DocumentFragment();
    this.box.innerHTML = '';
    this.funcList.forEach(i=>{
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
    // 是否应该在这设置为WebComponent？
    const dom = document.createElement('div');
    // TODO 影子DOM 实现 自定义工具栏item样式
    if(typeof item.setDom === 'function'){
      let re = item.setDom(item,dom);
      switch (typeof re) {
        case "string":
          dom.attachShadow({mode: "open"}).innerHTML = re;
          break;
        case "object":
          dom.attachShadow({mode: "open"}).appendChild(re);
          break;
        default:
          throw new Error('function setDom must return string or node object');
      }
    }else {
      dom.attachShadow({mode: "open"}).innerHTML = (item.icon? `<img/ src="${item.icon}" title="${item.name}">` : item.name);
    }

    // 设置style样式
    typeof item.style === 'object' && this.setStyle(dom, item.style);
    if(item.event){
      let eventFunc = function (){
        // 绑定事件
        item.func(item,this,dom);
      };
      dom.addEventListener(item.event,eventFunc.bind(pen));
    }
    if(item.children || item.setChildrenDom){
      dom.addEventListener('click',()=>{
        //TODO 此处 container显示和隐藏 应当实现
        // e.stopPropagation();
        (dom).childrenDom.style.visibility === 'visible'? (dom).childrenDom.style.visibility = 'hidden' : (dom).childrenDom.style.visibility = 'visible';
      });
    }
    let containerDom = null;
    if(item.children && item.children.length > 0 || item.setChildrenDom){
      // 是否重写dom

      // TODO setChildrenDom是否也需要实现影子dom
      if(
        typeof item.setChildrenDom === 'function'
      ){
        // 重新childDom

        let childDom = item.setChildrenDom(item,pen,dom);
        if(typeof childDom === 'string'){
          let div = document.createElement('div');
          div.innerHTML = childDom;
          dom.shadowRoot.appendChild(div);
          containerDom = div.childNodes[0];
        }else{
          containerDom = childDom;
        }
      }else{
        containerDom = createDom('div',{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position:'absolute',
          visibility:'hidden',
          top:'50px',
          backgroundColor:'#fff',
          borderRadius:'5px',
          padding:'3px',
          width:'max-content',
          boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)',
        });
      }
      let fragment = new DocumentFragment();
      for(let i of item.children || []){
        let node = createDom('div',
          {
            padding: '5px 8px'
          },i.event,function(){
            i.func(i,this);
          }.bind(pen),'toolbox_item');
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
          node.innerHTML = (i.icon && i.name)? '<span style="padding-right: 30px">'+ i.icon+'</span> <span>'+i.name+'</span>' :'<span>'+(i.name || i.icon)+'</span>';
        }
        fragment.appendChild(node);
      }
      dom.style.position = 'relative';
      containerDom?.appendChild(fragment);
      containerDom.style.position = 'absolute';
      dom.shadowRoot.appendChild(containerDom);
      (dom).childrenDom = containerDom;

// 添加样式到元素
    }
    return dom;
  }
  setFuncList(funcList){
    this.funcList = funcList;
    this.renderChildren();
  }
  clearFuncList(){
    this.setFuncList([]);
  }
}

