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


export function removeDuplicates(list){
    const uniqueResults = [];
    const uniqueNames = new Set();
    for (const res of list) {
        if (!uniqueNames.has(res.name)) {
            uniqueNames.add(res.name);
            uniqueResults.push(res);
        }
    }
    return uniqueResults
}