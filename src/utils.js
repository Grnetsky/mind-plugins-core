import {type} from "mocha/lib/utils";

export function createDom(tag,config = {
    style :{},
    event: undefined,
    func: undefined,
    className: undefined
}) {
    // 创建dom
    let dom = document.createElement(tag);
    // 设置dom样式
    if(config.style){
        if(typeof config.style === 'object'){
            Object.assign(dom.style,config.style);
            config.className && dom.classList.add(config.className);
        }
        else {
            throw new Error('createDom error: parma "style" must be a Object');
        }
    }
    // 绑定dom事件；
    if(typeof config.event === 'string' && typeof config.func === 'function'){
        dom.addEventListener(config.event,(e)=>{
            config.func(e);
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

export function isObjectLiteral(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}


export function dragElement(element,control) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    control.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // 获取鼠标光标的初始位置
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('mouseup',closeDragElement)
        // 当鼠标光标移动时调用元素位置调整函数
        document.addEventListener('mousemove',elementDrag)
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // 计算鼠标的新位置
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // 设置元素的新位置
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // 停止移动时，移除鼠标事件监听
        document.removeEventListener('mouseup',closeDragElement)
        document.removeEventListener('mousemove',elementDrag)
    }
}

