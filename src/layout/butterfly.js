import {toolBoxPlugin} from "../core/ToolBoxPlugin";
import {left} from "./left";
import {right} from "./right";
export function butterfly(pen, recursion = true) {
    pen.mind.direction = 'butterfly'
    let childrenGap = toolBoxPlugin.childrenGap
    let levelGap = toolBoxPlugin.levelGap
    let children = JSON.parse(JSON.stringify(pen.mind.children));
    let worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    let topHeight = 0;
    let topWidth = 0;
    let rightChildren = pen.mind.children.splice(0,butterfly.MAXLENGTH)
    let leftChildren = pen.mind.children
    pen.mind.children = rightChildren
    toolBoxPlugin.calcChildWandH(pen);
    // let childrenLen = children.length;
    // let cutValue = childrenLen / 2
    for(let i = 0;i<children.length;i++){
        let child =  meta2d.store.pens[children[i]]
        let childRect = meta2d.getPenRect(child)
        if(i<butterfly.MAXLENGTH){
            topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            child.mind.connect = butterfly.connectRule(pen,child,i)
            child.mind.x = worldReact.x + worldReact.width + +levelGap;
            child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1/2 * worldReact.height + ((child.mind?.maxHeight / 2 - 1 / 2 * childRect.height) || 0);
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
            if(recursion)right(child,recursion)
            if(i===butterfly.MAXLENGTH-1){
                topHeight = 0
                topWidth = 0
                pen.mind.children = leftChildren
                toolBoxPlugin.calcChildWandH(pen);
            }
        }else{
            topHeight += ((meta2d.store.pens[children[i-1]]?.mind?.maxHeight) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;
            topWidth += ((meta2d.store.pens[children[i-1]]?.mind?.maxWidth) || 0) +(meta2d.store.pens[children[i-1]]?(+childrenGap):0) ;

            if(i === butterfly.MAXLENGTH ){
                topHeight = 0;
                topWidth = 0
            }
            child.mind.connect =butterfly.connectRule(pen,child,i)
            child.mind.x = worldReact.x - childRect.width - +levelGap;
            child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1/2 * worldReact.height + ((child.mind?.maxHeight / 2 - 1 / 2 * childRect.height) || 0);
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
            if(recursion)left(child,recursion)
        }
        pen.mind.children = children

    }
}
 butterfly.connectRule = (pen, child, index)=>{
   return index<butterfly.MAXLENGTH?right.connectRule(pen,child):left.connectRule(pen,child)
 }
butterfly.MAXLENGTH = 8;
