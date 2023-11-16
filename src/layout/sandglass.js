import {toolBoxPlugin} from "../core/ToolBoxPlugin";
import {top} from "./top"
import {bottom} from "./bottom";
export function sandglass(pen, recursion = true) {
    pen.mind.direction = 'sandglass'
    let childrenGap = toolBoxPlugin.childrenGap
    let levelGap = toolBoxPlugin.levelGap
    let children = JSON.parse(JSON.stringify(pen.mind.children || []));
    let worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    let topHeight = 0;
    let topWidth = 0;
    let bottomChildren = pen.mind.children.splice(0,sandglass.MAXLENGTH)
    let leftChildren = pen.mind.children
    pen.mind.children = bottomChildren
    toolBoxPlugin.calcChildWandH(pen);
    // let childrenLen = children.length;
    // let cutValue = childrenLen / 2
    for(let i = 0;i<children.length;i++){
        let child =  meta2d.store.pens[children[i]]
        let childRect = meta2d.getPenRect(child)
        if(i<sandglass.MAXLENGTH){

            child.mind.connect = sandglass.connectRule(pen,child,i)
            topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1/2 * worldReact.width + ((child.mind?.maxWidth / 2 - 1 / 2 * childRect.width) || 0);
            child.mind.y = worldReact.y - 1/2 * meta2d.getPenRect(child).height + +levelGap;
            if(child.mind.visible){
                meta2d.setValue({
                    id: child.id,
                    x: child.mind.x,
                    y: child.mind.y,
                    color: child.mind.color
                },{render:false});
                // meta2d.setVisible(child,true,false);
            }else{
                meta2d.setVisible(child,false,false);
            }
            if(recursion)bottom(child,recursion)
            if(i===sandglass.MAXLENGTH-1){
                topHeight = 0
                topWidth = 0
                pen.mind.children = leftChildren
                toolBoxPlugin.calcChildWandH(pen);
            }
        }else{
            topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            if(i === sandglass.MAXLENGTH ){
                topHeight = 0;
                topWidth = 0
            }
            child.mind.connect =sandglass.connectRule(pen,child,i);
            child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1/2 * worldReact.width + ((child.mind?.maxWidth / 2 - 1 / 2 * childRect.width) || 0);
            child.mind.y = worldReact.y - 1/2 * meta2d.getPenRect(child).height - +levelGap;

            if(child.mind.visible){
                meta2d.setValue({
                    id: child.id,
                    x: child.mind.x,
                    y: child.mind.y,
                    color: child.mind.color
                },{render:false});
                // meta2d.setVisible(child,true,false);
            }else{
                meta2d.setVisible(child,false,false);
            }
            if(recursion)top(child,recursion)
        }
        pen.mind.children = children

    }
}
sandglass.connectRule = (pen, child, index)=>{
    return index<sandglass.MAXLENGTH?bottom.connectRule(pen,child):top.connectRule(pen,child)
}
sandglass.MAXLENGTH = 8;
