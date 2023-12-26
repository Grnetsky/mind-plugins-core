介绍
乐吾乐mind-diagram脑图组件为mate2d提供了一套独特的脑图设计解决方案，为meta2d赋能，该组件基于插件式开发，可扩展性较高，开发较为灵活，可将功能随意组合。在不安装任何插件时，脑图组件与普通图元没有任何区别，只有当安装相关插件后脑图组件才能够有更多更强大的功能，mind-diagram为插件提供了运行环境，提供了全局消息总线，插件间通讯更为灵活。为了兼容不同插件的逻辑，使其相互隔离，mind-diagram在不更改meta2d源码的情况下，重写了图元生命周期函数逻辑，使得各个插件都能监听图元的生命周期而不互相影响，另一方面，mind-diagram附带的插件库也提供了一套开箱即用的工具，在编写自定义代码时助你一臂之力。
特点
● 插件式开发，拔插方便
● 灵活度高
● API丰富
● 开发简单
使用教程
安装

npm install @meta2d/mind-diagram  --save

导入

// 导入包
import { mindPens } from "@meta2d/mind-diagram"

// 注册到meta2d
meta2d.register(mindPens())
这样你就可以在meta2d中自由的使用脑图组件了。
API
meta2dPluginManager
在mindPens被注册后会向全局（window）创建meta2dPluginManager对象，用于管理整个图纸的脑图系统，该对象上有以下属性：
属性	类型	描述	使用方法
rootIds	array 	用于存放脑图根节点id的数组
plugins	array	已安装的脑图插件对象
installPlugin	function	安装插件，同下文的installPlugin	meta2dPluginManager.installPlugin( plugin, ...arg)
uninstallPlugin	function	卸载插件，同下文的uninstallPlugin	meta2dPluginManager.uninstallPlugin( name, ...arg)
pluginMessageChannel	object	脑图插件通讯管道，用于插件间数据通信，本质是发布订阅模式	发布：meta2dPluginManager.pluginMessageChannel.publish('event', data)
订阅：
meta2dPluginManager.pluginMessageChannel.subscribe('event', callback)

installPlugin
用于安装插件
参数：
● plugin：需要安装的插件对象
● ...args：可选，向插件对象提供的参数，传递给插件的 install 方法，需根据相关插件的需求传递。
返回：
boolean：true则安装成功，false则安装失败
示例：
import { installPlugin } from "@meta2d/mind-diagram"
import { mindBoxPlugin } from "@meta2d/mind-plugin-core"
installPlugin(mindBoxPlugin, ...args)
若相关插件不需要接受参数，那么除了通过installPlugin显示安装插件，你还可以在注册mindPens时将插件对象作为mindPens的参数进行隐式的安装，示例如下：
import { mindPens } from "@meta2d/mind-diagram"
import { mindBoxPlugin } from "@meta2d/mind-plugin-core"

//注册mindPens同时安装相关插件
meta2d.register(mindPens(mindBoxPlugin))

uninstallPlugin
用于卸载插件
参数：
● pluginName：插件的名称（不要插件对象），该名称可以通过插件对象的name属性获取。
● ...args：可选，卸载插件时提供额外的参数，传递给插件的uninstall方法，需根据相关插件的需求传递。
返回：
boolean：true则卸载成功，false则卸载失败
示例：
import { uninstallPlugin } from "@meta2d/mind-diagram"
import { mindBoxPlugin } from "@meta2d/mind-plugin-core"
uninstallPlugin(mindBoxPlugin.name, ...args)
在开发阶段一般都是根据需求安装插件，很少有插件卸载的需求，所以该方法用的较少。

getPlugin
根据插件名获取已经安装的插件对象
参数：
● name：插件名
返回值：
插件对象
示例：
import { getPlugin } from "mind-diagram"
getPlugin('toolBox') // 返回已安装的插件对象

setLifeCycleFunc
用于设置图元的生命周期函数，由于图元原生命周期是通过赋值绑定（pen.onClick = func），这意味着我们无法通过这种方式在一个生命周期事件中执行多个函数，setLifeCycleFunc将多个函数打包，维护为一个函数列表，并在触发相关事件后依次执行函数
参数：
● pen: 目标图元，需要绑定生命周期函数的对象。
● lifeCycle：生命周期事件。
● func：触发时候后的回调函数。
● del：可选，在图元生命周期中移除该函数。
返回值：
void
示例：
import { setLifeCycleFunc } from "@meta2d/mind-diagram";
function onDestroy(pen){
conmsole.log('destory')
}
setLifeCycleFunc(pen,'onDestroy',onDestroy,false);

mind-plugin-core 脑图核心插件
该插件为脑图核心功能插件，提供了脑图的基本功能。
API





mind-plugin-collapse 脑图展开隐藏插件







插件开发指南

插件概念

插件安装方法

● 传参安装
● installPlugin方法动态安装

相关参数

name

install

uninstall

status

安装过程

校验插件 validatePlugin

执行插件安装前置钩子 beforeInstallPlugin

执行插件安装前置钩子 afterInstallPlugin

设置自定义功能列表

引入ui组件

功能列表获取原理

获取

全局插件通讯管道

插件生命周期

插件管理

API