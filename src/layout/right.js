import {toolBoxPlugin} from "../core/ToolBoxPlugin";
function right(pen,recursion = true) {
    let childrenGap = toolBoxPlugin.childrenGap
    let levelGap = toolBoxPlugin.levelGap
    let children = pen.mind.children;
    let worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    let topHeight = 0;
    let topWidth = 0;
    toolBoxPlugin.calcChildWandH(pen,'right');
    for(let i = 0;i<children.length;i++){
        let child = children[i]
        let childRect = meta2d.getPenRect(child)
        topHeight += ((children[i-1]?.mind?.maxHeight) || 0) +(children[i-1]?(+childrenGap):0) ;
        topWidth += ((children[i-1]?.mind?.maxWidth) || 0) +(children[i-1]?(+childrenGap):0) ;
        child.mind.x = worldReact.x + worldReact.width + +levelGap;
        child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1/2 * worldReact.height + ((child.mind?.maxHeight / 2 - 1 / 2 * childRect.height) || 0);
        if(child.mind.visible){
            meta2d.setValue({
                id: child.id,
                x: child.mind.x,
                y: child.mind.y,
                color: child.mind.color
            },{render:false});
            meta2d.setVisible(child,true,false);
        }else{
            meta2d.setVisible(child,false,false);
        }
        if(recursion) right(child,true);
    }
}

export default right