import {setLifeCycleFunc, messageChannel, PluginManager} from "mind-diagram";
import {disconnectLine,connectLine,deepClone} from "@meta2d/core";
import {ToolBox} from "./toolbox";
import {colorList, defaultFuncList, generateColor, pluginDefault} from "../config/default.js";
import {top,left,right,bottom,butterfly,sandglass}  from "../layout"
import defaultColorRule from "../color/default";
import {debounce, debounceFirstOnly, deepMerge} from "../utils"

let CONFIGS = ['animate','animateDuration','childrenGap','levelGap','colorList']
export let mindBoxPlugin = {
    name:'mindBox',
    status: false,
    colorList:pluginDefault.colorList,
    childrenGap: pluginDefault.childrenGap, // 子节点间的间距
    levelGap: pluginDefault.levelGap, // 子级间的间距
    layoutFunc:new Map(), // 布局位置函数map
    colorFunc:new Map(), // 布局颜色函数map
    _history:[],
    animate: true,
    animateDuration:1000,
    // 计算子节点的颜色和位置
    calcChildrenPosAndColor(pen, position= pen.mind.direction || 'right',color = 'default',recursion = true){
        if(!pen)return;
        let layoutFunc = mindBoxPlugin.layoutFunc.get(position)
        let colorFunc = mindBoxPlugin.colorFunc.get(color)
        if(!layoutFunc)throw new Error('mindBoxPlugin error : The layout function does not exist')
        try{
            layoutFunc(pen, recursion)
            colorFunc(pen, recursion)
        }catch (e){
            throw new Error(`mindBoxPlugin error : ${e.message}`)
        }
    },
    calcChildrenColor(pen,type = 'default',recursion = true){
        let colorFunc = mindBoxPlugin.colorFunc.get(type)
        if(!colorFunc)return
        try{
            colorFunc(pen,recursion)
        }catch (e){
            throw new Error(`mindBoxPlugin error : ${e.message}`)
        }
    },
    calcChildrenPos(pen,position = pen.mind.direction || 'right',recursion = true){
        let layoutFunc = mindBoxPlugin.layoutFunc.get(position)
        if(!layoutFunc)return
        try{
            layoutFunc(pen, recursion)
        }catch (e){
            throw new Error(`[mindBoxPlugin calcChildrenPos] error : ${e.message}`)
        }
    },
    connectLine(pen,newPen,style = 'mind'){
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
        let line = meta2d.connectLine(from,to,newPen.mind.connect.fromAnchor,newPen.mind.connect.toAnchor,false,true)
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
            if(!child)continue
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
                mindBoxPlugin.resetLinesColor(child,true);
            }
        }
    },
    // 重新递归设置连线的样式
    resetLinesStyle(pen,recursion = true){
        let children = pen.mind.children || [];
        if(!children || children.length === 0 )return;
        let root = meta2d.findOne(pen.mind.rootId)
        if(!root)return;
        for(let i = 0 ;i<children.length;i++){
            const child = meta2d.store.pens[children[i]];
            if(!child)continue;
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
                mindBoxPlugin.resetLinesStyle(child,true);
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
            if(!child)continue;
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
                mindBoxPlugin.disconnectLines(child,true);
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
            if(!child)continue;
            let line = meta2d.findOne(child.mind.lineId);
            if(!line)continue
            let lineAnchor1 = line.anchors[0];
            let lineAnchor2 = line.anchors[line.anchors.length - 1];
            let from = meta2d.store.pens[child.mind.connect.from]
            let to = meta2d.store.pens[child.mind.connect.to]
            let fromAnchor = child.mind.connect.fromAnchor
            let toAnchor = child.mind.connect.toAnchor

            connectLine(from,fromAnchor,line,lineAnchor1)
            connectLine(to,toAnchor,line,lineAnchor2)
            meta2d.canvas.updateLines(child)
            if(recursion){
                mindBoxPlugin.reconnectLines(child,true);
            }
        }
        meta2d.canvas.updateLines(pen)
    },
    // 重新设置连线的位置
    resetLayOut(pen,pos,recursion = true){
        if(!pen)return
        if(!pos)pos = pen.mind.direction
        // 断开连线
        mindBoxPlugin.disconnectLines(pen,recursion)
        // 执行布局函数
        // let layoutFunc = mindBoxPlugin.layoutFunc.get(pos)
        // layoutFunc(pen,recursion)

        // 计算子级节点位置
        mindBoxPlugin.calcChildrenPos(pen,pos,recursion)

        // 重新连线
        mindBoxPlugin.reconnectLines(pen,recursion)

        // 计算子级节点颜色  按默认颜色规则进行配置
        mindBoxPlugin.calcChildrenColor(pen,'default',recursion)
        // 重新设置连线样式
        mindBoxPlugin.resetLinesStyle(pen,recursion)
        mindBoxPlugin.resetLinesColor(pen,recursion)
        mindBoxPlugin.render(pen.mind.rootId);

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
    //             mindBoxPlugin.resetDirection(child,direction,true);
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
        meta2d.delete(lines,false);
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
        let lines = mindBoxPlugin.getLines(pen);

        // 查找到对应的父级，删除其在父级中的子级列表数据
        let parent = meta2d.findOne(pen.mind.preNodeId);
        parent && (pen.mind.preNodeChildren = deepClone(parent.mind.children))
        parent && parent.mind.children.splice(parent.mind.children.indexOf(pen.id),1);

        // 刷新界面

        // 删除meta2d数据
        // 删除数据单不追加到历史记录
        await meta2d.delete(pen.mind?.children.map(i=>meta2d.store.pens[i]).filter(Boolean).concat(lines) || [],true,false);

    },
    getChildrenList(pen,recursion = true){
        if (pen || !pen.mind)return [];
        let childrenId = pen.mind.children
        if(!childrenId || childrenId.length === 0)return []
        let collect = []
        childrenId.forEach((i)=>{
            let child = meta2d.store.pens[i]
            if(!child)return
            collect.push(child)

            if(recursion)collect.concat(mindBoxPlugin.getChildrenList(child))
        })
        return collect
    },
    install:(()=>{
        // 是否是第一次安装，第一次安装则进行初始化
        let isInit = false

        return (pen,options)=>{
            if(!isInit){

                // 初始化布局函数
                mindBoxPlugin.layoutFunc.set('right',right)
                mindBoxPlugin.layoutFunc.set('left',left)
                mindBoxPlugin.layoutFunc.set('top',top)
                mindBoxPlugin.layoutFunc.set('bottom',bottom)
                mindBoxPlugin.layoutFunc.set('butterfly',butterfly)
                mindBoxPlugin.layoutFunc.set('sandglass',sandglass)


                // 设置颜色生成函数
                mindBoxPlugin.colorFunc.set('default',defaultColorRule)
                // 打开时进行初始化
                document.addEventListener('keydown',(e)=>{
                    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                        // 阻止默认的撤销行为
                        e.preventDefault();
                        console.log('Ctrl + Z 被按下');

                        // 在这里执行你想要的操作
                    }
                })
                meta2d.on('opened',()=>{
                    let {pens} = meta2d.data()
                    pens.forEach(i=>{
                        if(i.mind && i.mind.type === 'node'){
                            let pen = meta2d.findOne(i.id)
                            window.PluginManager.messageChannel.publish('open',pen)
                            mindBoxPlugin.combineToolBox(pen)
                            mindBoxPlugin.combineLifeCircle(pen)
                            i.mind.isRoot?window.PluginManager.rootIds.push(pen.id):''

                        }

                    })
                })
                meta2d.on('scale',()=>{
                    if(toolbox.open)toolbox.translateWithPen()
                })
                // meta2d.on('resize',(pen)=>{
                //     if(pen.mind && pen.mind.rootId) mindBoxPlugin.record(meta2d.store.pens[pen.mind.rootId])
                // })
                meta2d.on('undo',(e)=>{
                    // TODO 删除顺序有问题
                    e.pens.reverse().forEach(i=>{
                        if(i.mind){
                            // 撤回节点
                            if(i.mind.type === 'node'){
                                let preNode = meta2d.findOne(i.mind.preNodeId)
                                preNode && (preNode.mind.children.push(i.id))
                                mindBoxPlugin.update(preNode)
                            }else{
                                let preNode = meta2d.findOne(i.mind.from)
                                mindBoxPlugin.update(preNode)
                            }
                        }
                    })
                })

                meta2d.on('inactive',(targetPen)=>{
                    globalThis.toolbox?.hide();
                });
                isInit = true
            }
            let target = null
            let isTag = false
            if(pen.name){
                target = pen.name
            }else if(pen.tag){
                isTag = true
                target = pen.tag
            }else if(pen.pen){
                target = pen
            }
            let toolbox = null;
            if(!globalThis.toolbox){
                toolbox = new ToolBox(meta2d.canvas.externalElements.parentElement,options);
                globalThis.toolbox = toolbox;
            }

            if(typeof target === 'object'){
                let pen = target
                mindBoxPlugin.combineToolBox(pen);
                mindBoxPlugin.combineLifeCircle(pen)
                PluginManager.messageChannel.publish('open',pen)
                mindBoxPlugin.record(pen.id)
                meta2d.render()
                return
            }else {
                meta2d.on('add',(pens)=>{
                    if(pens && pens.length === 1 &&  (isTag?(pens[0].tag === target) : (pens[0].name === target)) && !pens[0].mind){
                        let pen = pens[0]
                        pen.disableAnchor =  true
                        pen.disableRotate = true
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
                        // 跟随移动
                        pen.mind.mindboxOption = deepClone(options);
                        mindBoxPlugin.combineToolBox(pen);
                        mindBoxPlugin.combineLifeCircle(pen);
                        PluginManager.messageChannel.publish('open',pen)
                        mindBoxPlugin.record(pen.id)
                        meta2d.render()
                    }
                })
            // 添加根节点


        }
    }})(),
    uninstall(){
        globalThis.toolbox.destroy()
        globalThis.toolbox = null;
        // 解绑生命周期
        window.PluginManager.rootIds?.forEach(i=>{
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
            throw new Error(`The setFuncList function must take function arguments, get ${funcList}\n`)
        }
        this.funcList = funcList;
    },
    calcChildWandH(pen){
        if(!pen || !pen.mind)return{
            maxHeight: 0,
            childHeight:0,
            childWidth:0,
            maxWidth: 0
        };
        let position = pen.mind.direction;
        let children = pen.mind.children || [];
        let worldRect = meta2d.getPenRect(pen);
        if(children.length === 0 || !pen.mind.childrenVisible){
            pen.mind.maxHeight = pen.mind.height ?? worldRect.height;
            pen.mind.maxWidth = pen.mind.width ?? worldRect.width;
            return {
                maxHeight: pen.mind.maxHeight,
                maxWidth: pen.mind.maxWidth,
                childHeight: 0,
                childWidth: 0
            };
        }
        let maxHeight = 0;
        let maxWidth = 0;
        let maxH = 0;
        let maxW = 0;
        if(position === 'right' || position === 'left' || position === 'butterfly'){
            for(let i = 0;i<children.length;i++){
                let child = meta2d.store.pens[children[i]];
                let maxObj = mindBoxPlugin.calcChildWandH(child,position);
                maxHeight += maxObj.maxHeight;
                maxWidth = maxWidth > maxObj.maxWidth? maxWidth : maxObj.maxWidth;
            }
            maxHeight += +mindBoxPlugin.childrenGap * (children.length - 1);
            maxH = maxHeight > worldRect.height?maxHeight : worldRect.height;
            pen.mind.maxWidth = maxWidth;
            pen.mind.maxHeight = maxH;
            pen.mind.childHeight = maxHeight;
            pen.mind.childWidth = maxWidth
            return {
                maxHeight:maxH,
                maxWidth,
                childHeight: maxHeight,
                childWidth: maxWidth
            };
        }else {
            for(let i = 0;i<children.length;i++){
                let child = meta2d.store.pens[children[i]];
                let maxObj = mindBoxPlugin.calcChildWandH(child,position);
                maxWidth += maxObj.maxWidth;
                maxHeight = maxHeight > maxObj.maxHeight? maxHeight : maxObj.maxHeight;
            }
            maxWidth += +mindBoxPlugin.childrenGap * (children.length - 1);
            maxW = maxWidth > worldRect.width?maxWidth : worldRect.width;
            pen.mind.maxHeight = maxHeight;
            pen.mind.maxWidth = maxW;
            pen.mind.childWidth = maxWidth
            return {
                maxHeight,
                maxWidth: maxW,
                childWidth: maxWidth,
                childHeight: maxHeight
            };
        }
    },
    /**
     * @description 自定义获取功能列表函数  返回值为最终展示的列表
     * @param pen 当前pen图元*/
    getFuncList(pen){
        return pen.mind.isRoot?mindBoxPlugin.funcList['root']:mindBoxPlugin.funcList['leaf']
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
    combineLifeCircle(target,del = false){
        const onDestroy = (targetPen)=>{
            toolbox?.hide();
            mindBoxPlugin.deleteChildrenNode(targetPen);
            // mindBoxPlugin.deleteNodeOnlyOnce(targetPen);
            if(targetPen.mind.isRoot){
                let index = PluginManager.rootIds.indexOf(targetPen.id)
                if(index === -1)return
                PluginManager.rootIds.splice(index,1)
            }
            mindBoxPlugin.update(meta2d.store.pens[targetPen.mind.rootId])
        };
        // const onBeforeDestroy = (pen)=>{
        //     if(pen.mind.isRoot)return
        //    let parent = meta2d.store.pens[pen.mind.preNodeId]
        //     parent.mind.children.splice(parent.mind.children.indexOf(pen.id),1);
        // }
        const onAdd = (targetPen)=>{
            if(!meta2d.store.data.locked){
                toolbox.bindPen(targetPen);
                toolbox.setFuncList(deepClone(this.getFuncList(target)));
                toolbox.translateWithPen(targetPen);
                toolbox.show();
            }
        }
        const onResize  = debounce((pen)=>{
            mindBoxPlugin.record(pen.mind.rootId)
        },500)
        // setLifeCycleFunc(target,'onDestroy',onDestroy,del);
        setLifeCycleFunc(target,'onAdd',onAdd,del);
        setLifeCycleFunc(target,'onDestroy',onDestroy,del);
        setLifeCycleFunc(target, 'onResize',onResize )


    },
    deleteNodeOnlyOnce: debounceFirstOnly(async(pen)=>{
        let children = mindBoxPlugin.getChildrenList(pen)
        if(!children || children.length === 0 )return
        await mate2d.delete(children,true,false)
    },1000),
    combineToolBox(target,del = false){
        let option = meta2d.store.pens[target.mind.rootId].mind.mindboxOption
        let showTrigger = option.trigger?.show || 'onMouseUp'
        let hideTrigger = option.trigger?.hide || 'onMouseDown'


        let toolbox = globalThis.toolbox;
        const onMouseUp = (targetPen)=>{
            if(!meta2d.store.data.locked){
                mindBoxPlugin.loadOptions(meta2d.store.pens[targetPen.mind.rootId].mind.mindboxOption)
                if(toolbox){
                    toolbox._loadOptions(meta2d.store.pens[targetPen.mind.rootId].mind.mindboxOption)
                }
                toolbox.bindPen(targetPen);
                toolbox.setFuncList(deepClone(this.getFuncList(target)));
                toolbox.translateWithPen(targetPen);
                toolbox.show()
            }
        }
        const onMouseDown = (targetPen)=>{
            toolbox.hide();
        }
        // setLifeCycleFunc(target,'onMove',onMove,del);
        setLifeCycleFunc(target,showTrigger,onMouseUp,del);
        setLifeCycleFunc(target,hideTrigger,onMouseDown,del);
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
            disableAnchor: true,
            disableRotate:true,
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
            calculative:{
                x:pen.x,
                y:pen.y
            },
            x:pen.x ,
            y:pen.y ,
            width: pen.width,
            height: pen.height,
            text: '分支主题',
            // color:generateColor((pen.mind.children[pen.mind.children.length-1])?.calculative.color),
            textColor:'#000',
            lineWidth:3,
            fontSize:14,
            borderRadius: pen.borderRadius,
        }
        let scale = pen.calculative.canvas.store.data.scale;
        option.width && (option.width *= scale)
        option.height && (option.height *= scale)

        opt = deepMerge(opt,option)
        let newPen = await meta2d.addPen(opt,false);

        // 设置连接关系
        newPen.mind.connect =pen.mind.level === 0?
            mindBoxPlugin.layoutFunc.get(pen.mind.direction).connectRule(pen,newPen)
            : pen.mind.connect

        window.PluginManager.messageChannel.publish('addNode', {plugin:'toolBox',pen,newPen});
        // 添加节点
        if(position){
            pen.mind.children.splice(position,0,newPen.id);
        }else{
            pen.mind.children.push(newPen.id);
        }
        mindBoxPlugin.combineToolBox(newPen); // 重写生命周期
        mindBoxPlugin.combineLifeCircle(newPen);
        let rootNode = meta2d.findOne(pen.mind.rootId);

        //TODO 这里似乎性能不太好 待优化
        mindBoxPlugin.record(pen.mind.rootId)
        // 连线
        mindBoxPlugin.calcChildrenPos(pen,pen.mind.direction,true)
        let line = mindBoxPlugin.connectLine(pen,newPen,{position:pen.mind.direction,style: rootNode.mind.lineStyle});
        mindBoxPlugin.resetLayOut(rootNode)
        // mindBoxPlugin.resetLayOut(rootNode)
        // 从根节点更新
        // mindBoxPlugin.update(rootNode,true);
        if(mindBoxPlugin.animate){
            setTimeout(()=>{
                globalThis.toolbox.bindPen(newPen);
                globalThis.toolbox.setFuncList(deepClone(this.getFuncList(newPen)));
                globalThis.toolbox.translateWithPen(newPen);
            },mindBoxPlugin.animateDuration +100)

        }else {
            globalThis.toolbox.bindPen(newPen);
            globalThis.toolbox.setFuncList(deepClone(this.getFuncList(newPen)));
            globalThis.toolbox.translateWithPen(newPen);
        }

        // mindBoxPlugin.update(rootNode)
        let list = [newPen,line]
        meta2d.canvas.pushHistory({ type: 0, pens: deepClone(list, true) });

        return newPen
    },
    update: debounce((pen,recursion = true)=>{
        if(!pen)return;
        mindBoxPlugin.record(pen)
        mindBoxPlugin.resetLayOut(pen,pen.mind.direction,recursion)
        messageChannel.publish('update',{form:'toolBox'})
    },50),

    // root 为根节点id
    render(root){
        if(mindBoxPlugin.animate){
            let pens = []
            if(root){
                pens = meta2d.store.data.pens.filter(i=>i.mind?.rootId === root && i.mind.type === 'node')
            }
            else {
                pens = meta2d.store.data.pens.filter(i=>i.mind && i.mind.type === 'node')
            }
            let scale = meta2d.store.data.scale
            pens.forEach(pen=>{
                let source = deepClone(meta2d.getPenRect(pen))

                let origin = meta2d.store.data.origin;

                let x = source.x  - pen.mind.oldWorldRect.x
                let y = source.y - pen.mind.oldWorldRect.y


                pen.calculative.worldRect.x = pen.mind.oldWorldRect.x * scale + origin.x
                pen.calculative.worldRect.y = pen.mind.oldWorldRect.y * scale + origin.y

                pen.calculative.worldRect.ex = pen.calculative.worldRect.x + pen.mind.oldWorldRect.width * scale;
                pen.calculative.worldRect.ey = pen.calculative.worldRect.y +pen.mind.oldWorldRect.height * scale

                pen.animateCycle = 1;
                pen.keepAnimateState = true
                pen.frames = [{
                        duration: mindBoxPlugin.animateDuration,  // 帧时长
                        x: x   ,
                        y: y, // 变化属性,
                    }]
                pen.showDuration = meta2d.calcAnimateDuration(pen);
                //
            })
            meta2d.startAnimate(pens);
            mindBoxPlugin.record(root)
        }else{
            meta2d.render();
        }
        messageChannel.publish('render')
    },

    /**
     * @description 该方法用于记录节点位置坐标信息，用于动画过渡的初始状态
     * @param {string} root 根节点的id值*/
    record(root){
        let pens = [];
        if(root)pens = meta2d.store.data.pens.filter(i=>i.mind?.rootId === root && i.mind.type === 'node')
        else pens = meta2d.store.data.pens.filter(i=>i.mind && i.mind.type === 'node')
        pens.forEach(i=>{
            i.mind.oldWorldRect = deepClone(meta2d.getPenRect(i))
        })
    },

    //  TODO 逻辑重写
    loadOptions(options){
        //加载系统自带的配置项
        for (const optionsKey of Object.keys(pluginDefault)) {
            this[optionsKey] = pluginDefault[optionsKey]
        }
        // 加载特定的配置并作相关处理
        if(!options.funcList){
            this.setFuncList(defaultFuncList)
        }
        for(let option in options){
            if(option === 'funcList'){
                this.setFuncList(deepClone(options.funcList))
                continue
            }
            if(option === 'getFuncList'){
                this.getFuncList = options[option]
                continue
            }
            if(CONFIGS.includes(option)){
                this[option] = options[option]
            }
        }
    }
};

