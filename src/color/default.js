import {generateColor} from "../config/default";
function defaultColorRule(pen,recursion = true) {
    let children = pen.mind.children || [];
    let generateColorFunc = generateColor();
    for(let i = 0;i<children.length;i++){
        let child = meta2d.store.pens[children[i]]
        if(!child)continue
        let nodeColor = undefined
        if(pen.mind.level === 0){
            let nextColor = generateColorFunc.next().value;
            nodeColor = child.mind.color || nextColor;
        }else {
            nodeColor = child.mind.color || pen.mind.color || pen.color;
        }
        meta2d.setValue({
            id: child.id,
            color: nodeColor
        },{render:false});

        if(recursion) defaultColorRule(child,true);
    }
}

export default defaultColorRule