import {mindBoxPlugin} from "../core/MindBoxPlugin";

// 是否应当用面向切面的方式来暴露给用户
export function right(pen,recursion = true,) {
    pen.mind.direction = 'right'
    let childrenGap = mindBoxPlugin.childrenGap
    let levelGap = mindBoxPlugin.levelGap
    let children = pen.mind.children || [];
    let worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    let topHeight = 0;
    let topWidth = 0;
    mindBoxPlugin.calcChildWandH(pen);
    for(let i = 0;i<children.length;i++){
        let child =  meta2d.store.pens[children[i]]
        if(!child)continue
        let childRect = meta2d.getPenRect(child)
        topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
        topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
        child.mind.connect = right.connectRule(pen,child)
        child.mind.x = worldReact.x + worldReact.width + +levelGap;
        if(worldReact.height > pen.mind.childHeight){
            child.mind.y = worldReact.y + 1 / 2 * pen.mind.maxHeight + topHeight - 1/2 * pen.mind.childHeight + ((child.mind?.maxHeight / 2 - 1 / 2 * childRect.height) || 0);
        }else {
            child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1/2 * worldReact.height + ((child.mind?.maxHeight / 2 - 1 / 2 * childRect.height) || 0);
        }
        meta2d.setValue({
            id: child.id,
            x: child.mind.x,
            y: child.mind.y,
        },{render:false});

        if(recursion) right(child,true);
    }
}
right.connectRule = (pen,child)=>{
    return {
        from:pen.id,
        to:child.id,
        startIndex: 1,
        fromAnchor: pen.anchors[1],
        endIndex: 3,
        toAnchor: child.anchors[3]
    }
}