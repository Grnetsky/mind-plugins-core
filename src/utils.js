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

export function replaceAfterPosition(str, position, regex, replacement) {
    // 判断位置是否超出字符串长度
    if (position >= str.length) return str;

    // 截取从指定位置开始到字符串末尾的子字符串
    const substringToReplace = str.slice(position);

    // 在子字符串中执行替换操作
    const replacedSubstring = substringToReplace.replace(regex, replacement);

    // 将替换后的子字符串与前面的部分结合
    const resultString = str.slice(0, position) + replacedSubstring;

    return resultString;
}


export function debounceFirstOnly(func, wait) {
    let timeout;
    let executed = false; // 标志是否已经执行过一次

    return function(...args) {
        const context = this;

        if (!executed) {
            func.apply(context, args);
            executed = true;
        }

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            executed = false; // 重置执行标志，使得函数可以在下一次防抖周期首次被触发时执行
        }, wait);
    };
}