import { setLifeCycleFunc,pluginsMessageChannels } from "mind-diagram";
import {disconnectLine,connectLine,deepClone} from "@meta2d/core";
import {ToolBox} from "./toolbox";
import config,{colorList, defaultFuncList, generateColor} from "../config/default.js";
import {top,left,right,bottom,butterfly,sandglass}  from "../layout"
import defaultColorRule from "../color/default";
import {debounce, deepMerge} from "../utils"
export let toolBoxPlugin = {
    name:'toolBox',
    status: false,
    colorList:colorList,
    childrenGap: config.childrenGap, // 子节点间的间距
    levelGap: config.levelGap, // 子级间的间距
    layoutFunc:new Map(), // 布局位置函数map
    colorFunc:new Map(), // 布局颜色函数map
    // 计算子节点的颜色和位置
    calcChildrenPosAndColor(pen, position= pen.mind.direction || 'right',color = 'default',recursion = true){
        if(!pen)return;
        let layoutFunc = toolBoxPlugin.layoutFunc.get(position)
        let colorFunc = toolBoxPlugin.colorFunc.get(color)
        if(!layoutFunc)throw new Error('toolBoxPlugin error : The layout function does not exist')
        try{
            layoutFunc(pen, recursion)
            colorFunc(pen, recursion)
        }catch (e){
            throw new Error(`toolBoxPlugin error : ${e.message}`)
        }
    },
    calcChildrenColor(pen,type = 'default',recursion = true){
        let colorFunc = toolBoxPlugin.colorFunc.get(type)
        if(!colorFunc)return
        try{
            colorFunc(pen,recursion)
        }catch (e){
            throw new Error(`toolBoxPlugin error : ${e.message}`)
        }
    },
    calcChildrenPos(pen,position = pen.mind.direction || 'right',recursion = true){
        let layoutFunc = toolBoxPlugin.layoutFunc.get(position)
        if(!layoutFunc)return
        // try{
            layoutFunc(pen, recursion)
        // }catch (e){
        //     throw new Error(`[toolBoxPlugin calcChildrenPos] error : ${e.message}`)
        // }
    },
    connectLine(pen,newPen,style = 'polyline'){
        // let line = null;
        // switch (option.position){
        //     case 'right':
        //         line = meta2d.connectLine(pen, newPen, pen.anchors[1], newPen.anchors[3], false);
        //         break;
        //     case 'left':
        //         line = meta2d.connectLine(newPen, pen, newPen.anchors[1],pen.anchors[3] , false);
        //         break;
        //     case 'bottom':
        //         line = meta2d.connectLine(pen, newPen, pen.anchors[2],newPen.anchors[0] , false);
        //         break;
        //     case 'top':
        //         line = meta2d.connectLine(newPen, pen, newPen.anchors[2],pen.anchors[0] , false);
        //         break;
        // }
        let from = meta2d.store.pens[newPen.mind.connect.from]
        let to = meta2d.store.pens[newPen.mind.connect.to]
        let line = meta2d.connectLine(from,to,newPen.mind.connect.fromAnchor,newPen.mind.connect.toAnchor,false)
        line.mind = {
            type:'line',
            from:from.id,
            fromAnchor:newPen.mind.connect.fromAnchor,
            to:to.id,
            toAnchor:newPen.mind.connect.toAnchor,
            rootId:newPen.mind.rootId
        }
        newPen.mind.lineId = line.id
        meta2d.setValue({
            id:line.id,
            lineWidth:meta2d.findOne(pen.mind.rootId).mind.lineWidth,
            locked: 2
        },{render:false})
        meta2d.updateLineType(line, style);
        return line
    },

    // 重新设置线颜色
    resetLinesColor(pen,recursion = true){
        let colors = generateColor();
        let children = pen.mind.children || [];
        if(!children || children.length === 0 )return;
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            let line = child.connectedLines?.[0];
            if(line){
                line.mind? '' : (line.mind = {});
                if(child.mind.level > 1){
                    line.mind.color = pen.mind.lineColor || pen.mind.color || pen.calculative.color
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
    resetLinesStyle(pen,recursion = true){
        let children = pen.mind.children || [];
        if(!children || children.length === 0 )return;
        let root = meta2d.findOne(pen.mind.rootId)
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            child.mind.lineStyle = pen.mind.lineStyle
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
                toolBoxPlugin.resetLinesStyle(child,true);
            }
        }
    },
    disconnectLines(pen,recursion = true){
        let children = pen.mind.children || [];
        if(!children || children.length === 0 ){
            return;
        };
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            if(!child.connectedLines || child.connectedLines.length === 0)return;
            // 保留lineId
            let line = meta2d.findOne(child.connectedLines[0]?.lineId);
            if(!line)continue
            let lineAnchor1 = line.anchors[0];
            let lineAnchor2 = line.anchors[line.anchors.length - 1];
            let from = meta2d.store.pens[child.mind.connect.from]
            let to = meta2d.store.pens[child.mind.connect.to]
            let fromAnchor = child.mind.connect.fromAnchor
            let toAnchor = child.mind.connect.toAnchor

            // 断开连线
            disconnectLine(from,fromAnchor,line,lineAnchor1)
            disconnectLine(to,toAnchor,line,lineAnchor2)
            if(recursion){
                toolBoxPlugin.disconnectLines(child,true);
            }
        }
    },
    reconnectLines(pen,recursion = true){
        let children = pen.mind.children || [];
        if(!children || children.length === 0 ){
            return;
        };
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            let line = meta2d.findOne(child.mind.lineId);
            if(!line)continue
            let lineAnchor1 = line.anchors[0];
            let lineAnchor2 = line.anchors[line.anchors.length - 1];
            let from = meta2d.store.pens[child.mind.connect.from]
            let to = meta2d.store.pens[child.mind.connect.to]
            let fromAnchor = child.mind.connect.fromAnchor
            let toAnchor = child.mind.connect.toAnchor

            // 断开连线
            connectLine(from,fromAnchor,line,lineAnchor1)
            connectLine(to,toAnchor,line,lineAnchor2)
            meta2d.canvas.updateLines(child)
            if(recursion){
                toolBoxPlugin.reconnectLines(child,true);
            }
        }
        meta2d.canvas.updateLines(pen)
    },
    // 重新设置连线的位置
    resetLayOut(pen,pos,recursion = true){
        if(!pen)return
        if(!pos)pos = pen.mind.direction
        // 断开连线
        toolBoxPlugin.disconnectLines(pen,recursion)
        // 执行布局函数
        // let layoutFunc = toolBoxPlugin.layoutFunc.get(pos)
        // layoutFunc(pen,recursion)

        // 计算子级节点位置
        toolBoxPlugin.calcChildrenPos(pen,pos,recursion)

        // 重新连线
        toolBoxPlugin.reconnectLines(pen,recursion)

        // 计算子级节点颜色  按默认颜色规则进行配置
        toolBoxPlugin.calcChildrenColor(pen,'default',recursion)
        // 重新设置连线样式
        toolBoxPlugin.resetLinesStyle(pen,recursion)
        toolBoxPlugin.resetLinesColor(pen,recursion)
        toolBoxPlugin.render();

        // 更新连线
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
    /**
     * @description 删除连线
     * @param pen {Object} 图元对象
     * @param recursion {Boolean} 是否递归
     * @example
     * deleteLines(pen,true)
     */
    deleteLines(pen,recursion = false){
        if(!pen)return;
        let lines = [];
        pen.connectedLines?.forEach((
            i
        )=>{

            let line = meta2d.findOne(i.lineId);
            if(!line)return
            line.locked = 0;
            line && lines.push(line);
        });
        meta2d.delete(lines,true);
    },
    getLines(pen){
        if(!pen)return;
        let lines = [];
        pen.connectedLines?.forEach((
            i
        )=>{
            let line = meta2d.findOne(i.lineId);
            if(!line)return
            line.locked = 0;
            line && lines.push(line);
        });
        return lines;
    },

    // 删除node下的子节点
    async deleteChildrenNode(pen){
        // 删除与之相关的线
        let lines = toolBoxPlugin.getLines(pen);

        // 查找到对应的父级，删除其在父级中的子级列表数据
        let parent = meta2d.findOne(pen.mind.preNodeId);
        parent && (pen.mind.preNodeChildren = deepClone(parent.mind.children))
        parent && parent.mind.children.splice(parent.mind.children.indexOf(pen.id),1);

        // 刷新界面

        // 删除meta2d数据
        // 删除数据单不追加到历史记录
        await meta2d.delete(pen.mind?.children.map(i=>meta2d.store.pens[i]).filter(Boolean).concat(lines) || [],true,true);

    },
    install:(...args)=>{
        let toolbox = null;
        if(!globalThis.toolbox){
            toolbox = new ToolBox(meta2d.canvas.externalElements.parentElement,...args);
            globalThis.toolbox = toolbox;
        }

        // 初始化布局函数
        toolBoxPlugin.layoutFunc.set('right',right)
        toolBoxPlugin.layoutFunc.set('left',left)
        toolBoxPlugin.layoutFunc.set('top',top)
        toolBoxPlugin.layoutFunc.set('bottom',bottom)
        toolBoxPlugin.layoutFunc.set('butterfly',butterfly)
        toolBoxPlugin.layoutFunc.set('sandglass',sandglass)


        // 设置颜色生成函数
        toolBoxPlugin.colorFunc.set('default',defaultColorRule)
        // 打开时进行初始化
        meta2d.on('opened',()=>{
            let {pens} = meta2d.data()
            pens.forEach(i=>{
                if(i.mind && i.mind.type === 'node'){
                    let pen = meta2d.findOne(i.id)
                    toolBoxPlugin.combineToolBox(pen)
                    i.mind.isRoot?window.MindManager.rootIds.push(pen.id):''
                }

            })
        })

        meta2d.on('undo',(e)=>{
            // TODO 删除顺序有问题
            e.pens.reverse().forEach(i=>{
                if(i.mind){
                    // 撤回节点
                    if(i.mind.type === 'node'){
                        let preNode = meta2d.findOne(i.mind.preNodeId)
                        preNode && (preNode.mind.children.push(i.id))
                        toolBoxPlugin.update(preNode)
                    }else{
                        let preNode = meta2d.findOne(i.mind.from)
                        toolBoxPlugin.update(preNode)
                    }
                }
            })
        })

        // 添加根节点
        meta2d.on('add',(pens)=>{
            if(pens && pens.length === 1 && (pens[0].target === 'mind' || pens[0].name === 'mindNode2') && !pens[0].mind){
                let pen = pens[0]
                pen.mind = {
                    isRoot: true,
                    type:'node',
                    preNodeId:null,
                    rootId: pen.id,
                    children: [],
                    width: 0,
                    height: 0,
                    maxWidth:0, // 包含了自己和子节点的最大宽度
                    maxHeight:0, // 包含了自己和子节点的最大高度
                    direction:'right',
                    lineStyle: 'mind',
                    lineColor:'',
                    childrenVisible: true,
                    visible: true,
                    lineWidth: 2,
                    level:0,
                };
                window.MindManager.rootIds.push(pen.id)
                // 跟随移动
                toolBoxPlugin.combineToolBox(pen);
            }
        })
        meta2d.on('inactive',(targetPen)=>{
            globalThis.toolbox?.hide();
        });
    },
    uninstall(){
        globalThis.toolbox.destroy()
        globalThis.toolbox = null;
        // 解绑生命周期
        window.MindManager.rootIds?.forEach(i=>{
            let root = meta2d.findOne(i)
            this.unCombineToolBox(root)
        })
    },

    unCombineToolBox(pen){
        if(!pen.mind.children || pen.mind.children.length === 0)return;
        this.combineToolBox(pen,true)
        pen.mind.children.forEach(i=>{
            let child = meta2d.store.pens[i]
            this.unCombineToolBox(child)
        })
    },

    funcList: defaultFuncList,
    setFuncList(funcList){
        if(Object.prototype.toString.call(funcList) !== '[object Object]'){
            throw new Error('The setFuncList function must take function arguments\n')
        }
        this.funcList = funcList;
    },
    calcChildWandH(pen){
        if(!pen || !pen.mind)return;
        let position = pen.mind.direction;
        let children = pen.mind.children || [];
        let worldRect = meta2d.getPenRect(pen);
        if(children.length === 0 || !pen.mind.childrenVisible){
            pen.mind.maxHeight = pen.mind.height ?? worldRect.height;
            pen.mind.maxWidth = pen.mind.width ?? worldRect.width;
            return {
                maxHeight: worldRect.height,
                maxWidth: worldRect.width
            };
        }
        let maxHeight = 0;
        let maxWidth = 0;
        let maxH = 0;
        let maxW = 0;
        if(position === 'right' || position === 'left' || position === 'butterfly'){
            for(let i = 0;i<children.length;i++){
                let child = meta2d.store.pens[children[i]];
                let maxObj = toolBoxPlugin.calcChildWandH(child,position);
                maxHeight += maxObj.maxHeight;
                maxWidth = maxWidth > maxObj.maxWidth? maxWidth : maxObj.maxWidth;
            }
            maxHeight += +toolBoxPlugin.childrenGap * (children.length - 1);
            maxH = maxHeight > worldRect.height?maxHeight : worldRect.height;
            pen.mind.maxWidth = maxWidth;
            pen.mind.maxHeight = maxH;
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
     * @param pen 当前pen图元*/
    getFuncList(pen){
        return pen.mind.isRoot?toolBoxPlugin.funcList['root']:toolBoxPlugin.funcList['leaf']
    },

    /**
     * @description 动态添加方法函数
     * @param tag 添加到目标种类上
     * @param func 方法函数
     * @param pos 插入的目标位置
     * */
    appendFuncList(tag,func,pos
    ){
        if(typeof tag !=="string" || typeof func !== "function"){
            throw new Error('appendFuncList error: appendFuncList parma error ')
        }
        let funcList = this.funcList[tag]
        if(Object.prototype.toString.call(funcList) === '[object Array]' ){
            if (pos == null){
                funcList.push(func)
            }else{
                funcList.splice(pos,0,func)
            }
        }else {
            throw new Error('appendFuncList error: no such tag')
        }
    },

    //
    combineToolBox(target,del = false){
        let toolbox = globalThis.toolbox;
        // const onMove = (targetPen)=>{
        //     toolbox.hide();
        // };
        const onDestroy = (targetPen)=>{
            toolbox?.hide();
            toolBoxPlugin.deleteChildrenNode(targetPen);
            if(targetPen.mind.isRoot){
                let index = MindManager.rootIds.indexOf(targetPen.id)
                if(index === -1)return
                MindManager.rootIds.splice(index,1)
            }
            toolBoxPlugin.update(meta2d.store.pens[targetPen.mind.rootId])
        };
        const onMouseUp = (targetPen)=>{
            if(!meta2d.store.data.locked){
                toolbox.bindPen(targetPen);
                toolbox.setFuncList(this.getFuncList(target));
                toolbox.translatePosition(targetPen);
                toolbox.show()
            }
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
                type:'node',
                isRoot: false,
                rootId: pen.mind.rootId,
                preNodeId:pen.id,
                children: [],
                width: undefined,
                height: undefined,
                maxHeight:0, // 包含了自己和子节点的最大高度
                maxWidth:0,// 包含了自己和子节点的最大宽度
                direction:pen.mind.direction,
                childrenVisible: true,
                visible: true,
                lineStyle:pen.mind.lineStyle || '',
                lineColor:'',
                level: pen.mind.level + 1,
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

        opt = deepMerge(opt,option)
        let newPen = await meta2d.addPen(opt);

        // 设置连接关系
        newPen.mind.connect =pen.mind.level === 0?
            toolBoxPlugin.layoutFunc.get(pen.mind.direction).connectRule(pen,newPen)
            : pen.mind.connect

        window.MindManager.pluginsMessageChannels.publish('addNode',newPen);
        // 添加节点
        if(position){
            pen.mind.children.splice(position,0,newPen.id);
        }else{
            pen.mind.children.push(newPen.id);
        }
        toolBoxPlugin.combineToolBox(newPen); // 重写生命周期
        let rootNode = meta2d.findOne(pen.mind.rootId);

        //TODO 这里似乎性能不太好 d待优化

        // 连线
        toolBoxPlugin.calcChildrenPos(pen,pen.mind.direction,true)
        let line = toolBoxPlugin.connectLine(pen,newPen,{position:pen.mind.direction,style: rootNode.mind.lineStyle});
        toolBoxPlugin.resetLayOut(pen)
        // toolBoxPlugin.resetLayOut(rootNode)
        // 从根节点更新
        // toolBoxPlugin.update(rootNode,true);
        globalThis.toolbox.bindPen(newPen);
        globalThis.toolbox.setFuncList(this.getFuncList(newPen));
        globalThis.toolbox.translatePosition(newPen);
        // toolBoxPlugin.update(rootNode)
        let list = [newPen,line]
        meta2d.canvas.pushHistory({ type: 0, pens: deepClone(list, true) });

        return newPen
    },
    update: debounce((pen,recursion = true)=>{
        if(!pen)return;
        toolBoxPlugin.resetLayOut(pen,pen.mind.direction,recursion)
        pluginsMessageChannels.publish('update')
    },50),


    render(){
        meta2d.render();
        pluginsMessageChannels.publish('render')
    }
};



