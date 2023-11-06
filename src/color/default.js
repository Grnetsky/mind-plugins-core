import {generateColor} from "../default";
function defaultColorRule(pen,recursion = true) {
    let children = pen.mind.children;
    let generateColorFunc = generateColor();
    for(let i = 0;i<children.length;i++){
        let child = children[i]
        let nodeColor = undefined
        if(child.mind.level === 1){
            let nextColor = generateColorFunc.next().value;
            nodeColor = child.mind.color || pen.mind.color || nextColor;
        }else {
            nodeColor = child.mind.color || pen.mind.color || pen.color;
        }
        if(child.mind.visible){
            meta2d.setValue({
                id: child.id,
                color: nodeColor
            },{render:false});
            meta2d.setVisible(child,true,false);
        }else{
            meta2d.setVisible(child,false,false);
        }
        if(recursion) defaultColorRule(child,true);
    }
}

export default defaultColorRule