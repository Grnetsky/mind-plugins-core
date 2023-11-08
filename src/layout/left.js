import {toolBoxPlugin} from "../core/ToolBoxPlugin";
export function left(pen,reset = true,recursion = true,) {
    reset?pen.mind.direction = 'left':''
    let childrenGap = toolBoxPlugin.childrenGap
    let levelGap = toolBoxPlugin.levelGap
    let children = pen.mind.children;
    let worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    let topHeight = 0;
    let topWidth = 0;
    toolBoxPlugin.calcChildWandH(pen);
    for(let i = 0;i<children.length;i++){
        let child =  meta2d.store.pens[children[i]]
        let childRect = meta2d.getPenRect(child)
        topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
        topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
        child.mind.connect = {
            from:pen.id,
            to:child.id,
            startIndex: 3,
            fromAnchor: pen.anchors[3],
            endIndex: 1,
            toAnchor: child.anchors[1]
        }
        child.mind.x = worldReact.x - childRect.width - +levelGap;
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
        if(recursion) left(child,reset,true);
    }
}
