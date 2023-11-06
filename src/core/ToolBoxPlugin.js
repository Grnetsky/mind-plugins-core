import { setLifeCycleFunc,pluginsMessageChannels } from "mind-diagram";
import {disconnectLine,connectLine} from "@meta2d/core";
import {ToolBox} from "./toolbox";
import config,{colorList, defaultFuncList, generateColor} from "../config/default.js";
import { right,left,top,bottom } from "../layout"
import defaultColorRule from "../color/default";
export let toolBoxPlugin = {
    name:'toolBox',
    status: false,
    colorList:colorList,
    childrenGap: config.childrenGap, // 子节点间的间距
    levelGap: config.levelGap, // 子级间的间距
    layoutFunc:new Map(), // 布局位置函数map
    colorFunc:new Map(), // 布局颜色函数map  TODO 目前只支持默认颜色规则
    // 计算子节点的颜色和位置
    calChildrenPosAndColor(pen,recursion = true, position='right'){
        if(!pen)return;
        let layoutFunc = toolBoxPlugin.layoutFunc.get(position)
        let colorFunc = toolBoxPlugin.colorFunc.get('default')
        if(!layoutFunc)throw new Error('toolBoxPlugin error : The layout function does not exist')
        try{
            layoutFunc(pen)
            colorFunc(pen)
        }catch (e){
            throw new Error(`toolBoxPlugin error : ${e.message}`)
        }
    },
    connectLine(pen,newPen,option = {position: 'top',style : 'polyline'}){
        let line = null;
        switch (option.position){
            case 'right':
                line = meta2d.connectLine(pen, newPen, pen.anchors[1], newPen.anchors[3], false);
                break;
            case 'left':
                line = meta2d.connectLine(newPen, pen, newPen.anchors[1],pen.anchors[3] , false);
                break;
            case 'bottom':
                line = meta2d.connectLine(pen, newPen, pen.anchors[2],newPen.anchors[0] , false);
                break;
            case 'top':
                line = meta2d.connectLine(newPen, pen, newPen.anchors[2],pen.anchors[0] , false);
                break;
        }
        meta2d.setValue({
            id:line.id,
            lineWidth:meta2d.findOne(pen.mind.rootId).mind.lineWidth,
            locked: 2
        },{render:false})
        meta2d.updateLineType(line, option.style);
    },

    // 重新设置线颜色
    resetLinesColor(pen,recursion = true){
        let colors = generateColor();
        let children = pen.mind.children;
        if(!children || children.length === 0 )return;
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            let line = child.connectedLines?.[0];
            if(line){
                line.mind? '' : (line.mind = {});
                if(child.mind.level > 1){
                    line.mind.color = pen.mind.lineColor || pen.color
                }else {
                    line.mind.color = pen.mind.lineColor|| colors.next().value;
                }
                meta2d.setValue({
                    id:line.lineId,
                    color: line.mind.color
                },{render:false});
            }
            if(recursion){
                toolBoxPlugin.resetLinesColor(child,true);
            }
        }
    },
    // 重新递归设置连线的样式
    resetLineStyle(pen,recursion = true){
        let children = pen.mind.children;
        if(!children || children.length === 0 )return;
        let root = meta2d.findOne(pen.mind.rootId)
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            let line = meta2d.findOne(child.connectedLines?.[0]?.lineId);
            if(line){
                meta2d.updateLineType(line,meta2d.findOne(pen.mind.rootId).mind.lineStyle);
                meta2d.setValue({
                    id:line.id,
                    lineWidth: root.mind.lineWidth
                },{
                    render:false
                })
            }
            if(recursion){
                toolBoxPlugin.resetLineStyle(child,true);
            }
        }
    },
    // 重新设置连线的位置 TODO 有问题 当元素只有两个锚点时，有问题  该方法只适用于四个锚点的图元
    resetLinePos(pen,pos,recursion = true){
        let children = pen.mind.children;
        if(!children || children.length === 0 ){
            pen.mind.direction = pos;
            return;
        };
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            if(!child.connectedLines || child.connectedLines.length === 0)return;
            let line = meta2d.findOne(child.connectedLines[0]?.lineId);
            let penAnchor = null;
            let lineAnchor1 = line.anchors[0];
            let childAnchor = null;
            let lineAnchor2 = line.anchors[line.anchors.length - 1];

            // 改变之前是什么方向 来按要求断开
            switch (pen.mind.direction) {
                case 'right':
                    penAnchor = pen.anchors[1];
                    childAnchor = child.anchors[3];

                    disconnectLine(child,childAnchor,line,lineAnchor2);
                    disconnectLine(pen,penAnchor,line,lineAnchor1);
                    break;
                case 'left':
                    penAnchor = pen.anchors[3];
                    childAnchor = child.anchors[1];
                    disconnectLine(child,childAnchor,line,lineAnchor1);
                    disconnectLine(pen,penAnchor,line,lineAnchor2);
                    break;
                case 'bottom':
                    penAnchor = pen.anchors[2];
                    childAnchor = child.anchors[0];

                    disconnectLine(child,childAnchor,line,lineAnchor2);
                    disconnectLine(pen,penAnchor,line,lineAnchor1);
                    break;
                case 'top':
                    penAnchor = pen.anchors[0];
                    childAnchor = child.anchors[2];

                    disconnectLine(child,childAnchor,line,lineAnchor1);
                    disconnectLine(pen,penAnchor,line,lineAnchor2);
                    break;
            }

            switch (pos){
                case 'right':
                    penAnchor = pen.anchors[1];
                    childAnchor = child.anchors[3];
                    connectLine(pen,penAnchor,line,lineAnchor1)
                    connectLine(child,childAnchor,line,lineAnchor2)
                    break;
                case 'left':
                    penAnchor = pen.anchors[3];
                    childAnchor = child.anchors[1];
                    connectLine(pen,penAnchor,line,lineAnchor2)
                    connectLine(child,childAnchor,line,lineAnchor1)
                    break;
                case 'bottom':
                    penAnchor = pen.anchors[2];
                    childAnchor = child.anchors[0];
                    connectLine(pen,penAnchor,line,lineAnchor1)
                    connectLine(child,childAnchor,line,lineAnchor2)
                    break;
                case 'top':
                    penAnchor = pen.anchors[0];
                    childAnchor = child.anchors[2];
                    connectLine(pen,penAnchor,line,lineAnchor2)
                    connectLine(child,childAnchor,line,lineAnchor1)
                    break;
            }

            if(recursion){
                toolBoxPlugin.resetLinePos(child,pos,true);
                child.mind.direction = pos
            }
        }
        pen.mind.direction = pos
        meta2d.canvas.updateLines(pen)
    },
    // 递归修改子节点的direction属性
    // resetDirection(pen,direction,recursion = true){
    //     let children = pen.mind.children;
    //     if(!children || children.length === 0 )return;
    //     for(let i = 0 ;i<children.length;i++){
    //         const child = children[i];
    //         child.mind.direction = direction;
    //         this.connectLine()
    //         if(recursion){
    //             toolBoxPlugin.resetDirection(child,direction,true);
    //         }
    //     }
    // },
    // 删除连线
    deleteLines(pen){
        if(!pen)return;
        let lines = [];
        pen.connectedLines?.forEach((
            i
        )=>{
            let line = meta2d.findOne(i.lineId);
            line && lines.push(line);
        });
        meta2d.delete(lines);
    },

    // 删除node
    async deleteNode(pen){
        // 删除与之相关的线
        toolBoxPlugin.deleteLines(pen);

        // 查找到对应的父级，删除其在父级中的子级列表数据
        let parent = meta2d.findOne(pen.mind.preNodeId);
        parent && parent.mind.children.splice(parent.mind.children.indexOf(pen.id),1);

        // 刷新界面

        // 删除meta2d数据
        await meta2d.delete(pen.mind.children.map(i=>meta2d.store.pens[i]));
        toolBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
    },
    install:()=>{
        let toolbox = null;
        if(!globalThis.toolbox){
            toolbox = new ToolBox(meta2d.canvas.externalElements.parentElement,{
            });
            globalThis.toolbox = toolbox;
        }

        // 初始化布局函数
        toolBoxPlugin.layoutFunc.set('right',right)
        toolBoxPlugin.layoutFunc.set('left',left)
        toolBoxPlugin.layoutFunc.set('top',top)
        toolBoxPlugin.layoutFunc.set('bottom',bottom)

        toolBoxPlugin.colorFunc.set('default',defaultColorRule)
        // 打开时进行初始化
        meta2d.on('opened',()=>{
            let {pens} = meta2d.data()
            pens.forEach(i=>{
                if(i.mind){
                    let pen = meta2d.findOne(i.id)
                    toolBoxPlugin.combineLifeCycle(pen)
                    i.mind.isRoot?window.MindManager.rootIds.push(pen):''
                    i.mind.children.forEach(i=>{

                    })
                }

            })
        })

        // 添加根节点
        meta2d.on('add',(pens)=>{
            if(pens && pens.length === 1 && (pens[0].target === 'mind' || pens[0].name === 'mindNode2') && !pens[0].mind){
                let pen = pens[0]
                pen.mind = {
                    isRoot: true,
                    preNodeId:null,
                    rootId: pen.id,
                    children: [],
                    width: 0, // 包含了自己和子节点的最大宽度
                    height: 0, // 包含了自己和子节点的最大高度
                    direction:'right',
                    lineStyle: 'curve',
                    lineColor:'',
                    childrenVisible: true,
                    visible: true,
                    lineWidth: 2,
                    level:0,
                };
                window.MindManager.rootIds.push(pen)
                // 跟随移动
                toolBoxPlugin.combineLifeCycle(pen);
            }
        })
        meta2d.on('inactive',(targetPen)=>{
            globalThis.toolbox.hide();
        });
    },
    uninstall(){
        globalThis.toolbox = null;
        // 解绑生命周期
        window.MindManager.rootIds?.forEach(i=>{
            let root = meta2d.findOne(i)
            this.unCombineLifeCycle(root)
        })
    },

    unCombineLifeCycle(pen){
        if(!pen.mind.children || pen.mind.children.length === 0)return;
        this.combineLifeCycle(pen,true)
        pen.mind.children.forEach(i=>{
            let child = meta2d.store.pens[i]
            this.unCombineLifeCycle(child)
        })
    },

    funcList: defaultFuncList,
    setFuncList(funcList){
        if(Object.prototype.toString.call(funcList) !== '[object Object]'){
            throw new Error('The setFuncList function must take function arguments\n')
        }
        this.funcList = funcList;
    },
    calcChildWandH(pen,position = 'right'){
        let children = pen.mind.children || [];
        let worldRect = meta2d.getPenRect(pen);
        if(children.length === 0 || !pen.mind.childrenVisible){
            pen.mind.maxHeight = worldRect.height;
            pen.mind.maxWidth = worldRect.width;
            return {
                maxHeight: worldRect.height,
                maxWidth: worldRect.width
            };
        }
        let maxHeight = 0;
        let maxWidth = 0;
        let maxH = 0;
        let maxW = 0;
        if(position === 'right' || position === 'left'){
            for(let i = 0;i<children.length;i++){
                let child = meta2d.store.pens[children[i]];
                let maxObj = toolBoxPlugin.calcChildWandH(child,position);
                maxHeight += maxObj.maxHeight;
                maxWidth = maxWidth > maxObj.maxWidth? maxWidth : maxObj.maxWidth;
            }
            maxHeight += +toolBoxPlugin.childrenGap * (children.length - 1);
            maxH = maxHeight > worldRect.height?maxHeight : worldRect.height;
            pen.mind.maxHeight = maxH;
            pen.mind.maxWidth = maxWidth;
            return {
                maxHeight:maxH,
                maxWidth
            };
        }else {
            for(let i = 0;i<children.length;i++){
                let child = meta2d.store.pens[children[i]];
                let maxObj = toolBoxPlugin.calcChildWandH(child,position);
                maxWidth += maxObj.maxWidth;
                maxHeight = maxHeight > maxObj.maxHeight? maxHeight : maxObj.maxHeight;
            }
            maxWidth += +toolBoxPlugin.childrenGap * (children.length - 1);
            maxW = maxWidth > worldRect.width?maxWidth : worldRect.width;
            pen.mind.maxHeight = maxHeight;
            pen.mind.maxWidth = maxW;
            return {
                maxHeight,
                maxWidth: maxW
            };
        }
    },
    /**
     * @description 自定义获取功能列表函数  返回值为最终展示的列表
     * @param target 当前pen图元*/
    getFuncList(target){
        return target.mind.isRoot?toolBoxPlugin.funcList['root']:toolBoxPlugin.funcList['leaf']
    },

    /**
     * @description 动态添加方法函数
     * @param kind 添加到目标种类上
     * @param func 方法函数
     * */
    appendFuncList(kind,
    ){
        if(typeof kind !=="string" || typeof func !== "function"){
            throw new Error('appendFuncList error: appendFuncList parma error ')
        }
        let funcList = this.funcList[kind]
        if(Object.prototype.toString.call(funcList) === '[object Array]' ){
            funcList.push(func)
        }else {
            throw new Error('appendFuncList error: no such kind')
        }
    },

    //
    combineLifeCycle(target,del = false){
        let toolbox = globalThis.toolbox;
        // const onMove = (targetPen)=>{
        //     toolbox.hide();
        // };
        const onDestroy = (targetPen)=>{
            toolbox.hide();
            toolBoxPlugin.deleteNode(targetPen);
        };
        const onMouseUp = (targetPen)=>{
            toolbox.bindPen(targetPen);
            toolbox.setFuncList(this.getFuncList(target));
            toolbox.translatePosition(targetPen);
            toolbox.show()
        }
        const onMouseDown = (targetPen)=>{
            toolbox.hide();
        }
        // setLifeCycleFunc(target,'onMove',onMove,del);
        setLifeCycleFunc(target,'onDestroy',onDestroy,del);
        setLifeCycleFunc(target,'onMouseUp',onMouseUp,del);
        setLifeCycleFunc(target,'onMouseDown',onMouseDown,del);
    },

    // setDirection(pen,direction){
    //   return pen.mind?.direction? pen.mind.direction = direction:((pen.mind = {}) && (pen.mind.direction = direction));
    // },

    // 增加节点  同级设level为true
    /**
     * @description 添加节点
     * @param pen 添加节点的目标节点
     * @param position 添加节点的位置 默认为追加*/
    async addNode(pen,position = 0, type = "mindNode2",option={}){
        let opt = {
            name:type,
            mind:{
                isRoot: false,
                rootId: pen.mind.rootId,
                preNodeId:pen.id,
                children: [],
                width: 0, // 包含了自己和子节点的最大宽度
                height: 0, // 包含了自己和子节点的最大高度
                direction:pen.mind.direction,
                childrenVisible: true,
                visible: true,
                lineStyle:pen.mind.lineStyle || '',
                lineColor:'',
                level: pen.mind.level + 1
            },
            x:pen.x ,
            y:pen.y ,
            width: pen.width,
            height: pen.height,
            text: '分支主题',
            // color:generateColor((pen.mind.children[pen.mind.children.length-1])?.calculative.color),
            textColor:'#000',
            lineWidth:3,
            fontSize:16,
            borderRadius: pen.borderRadius,
        }
        let scale = pen.calculative.canvas.store.data.scale;
        option.width && (option.width *= scale)
        option.height && (option.height *= scale)

        Object.assign(opt,option)
        let newPen = await meta2d.addPen(opt);
        window.MindManager.pluginsMessageChannels.publish('addNode',newPen);
        // 添加节点
        if(position){
            pen.mind.children.splice(position,0,newPen.id);
        }else{
            pen.mind.children.push(newPen.id);
        }
        toolBoxPlugin.combineLifeCycle(newPen); // 重写生命周期
        let rootNode = meta2d.findOne(pen.mind.rootId);
        // 连线
        toolBoxPlugin.connectLine(pen,newPen,{position:pen.mind.direction,style: rootNode.mind.lineStyle});

        // 从根节点更新
        toolBoxPlugin.update(rootNode,true);
        globalThis.toolbox.bindPen(newPen);
        globalThis.toolbox.setFuncList(this.getFuncList(newPen));
        globalThis.toolbox.translatePosition(newPen);
    },
    update(pen,recursion = true){
        if(!pen)return;
        toolBoxPlugin.calChildrenPosAndColor(pen,recursion,pen.mind.direction);
        toolBoxPlugin.resetLinesColor(pen,recursion);
        toolBoxPlugin.resetLineStyle(pen,recursion);
        toolBoxPlugin.render();
        pluginsMessageChannels.publish('update')
    },
    render(){
        meta2d.render();
        pluginsMessageChannels.publish('render')
    }
};



