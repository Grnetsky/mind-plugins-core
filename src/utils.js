function visibleChild(children) {
    if(!Array.isArray(children))return
    return children.map(i=>i.mind.visible)
}


export function createDom(tag,style = {},event = undefined,func = undefined,className = undefined) {
    // 创建dom
    let dom = document.createElement(tag);
    // 设置dom样式
    if(style && typeof style === 'object'){
        Object.assign(dom.style,style);
        className && dom.classList.add(className);
    }else {
        throw new Error('createDom error: parma "style" must be a Object');
    }
    // 绑定dom事件；
    if(typeof event === 'string' && typeof func === 'function'){
        dom.addEventListener(event,(e)=>{
            func(e);
        });
    }
    return dom;
}


export function debounce(fn, delay) {
    let timer = null;
    return function(pen,recursion = true) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, pen,recursion);
        }, delay);
    };
}


export function deepMerge(obj1, obj2) {
    let newObj = Object.assign({}, obj1);

    for (let key in obj2) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            newObj[key] = deepMerge(obj1[key], obj2[key]);
        } else {
            newObj[key] = obj2[key];
        }
    }

    return newObj;
}

