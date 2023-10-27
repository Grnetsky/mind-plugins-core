# mind-plugins-core

## 介绍
乐吾乐脑图组件核心插件，扩展meta2d脑图组件mind-diagram，此包为脑图实现的核心部分，为meta2d赋能。

## 使用教程

### 安装
```shell
npm install @meta2d/mind-plugin-core --save
```

### 导入

```javascript
// 前提你需要安装mind-diagram脑图组件 才能安装该插件
import { installPlugin } from "mind-diagram"

import { toolBoxPlugin } from "@meta2d/mind-plugin-core"

// 安装插件 
installPlugin(toolBoxPlugin)
```

## 插件开发教程

### 插件概念

### 插件安装方法
* 传参安装
* installPlugin方法动态安装
### 相关参数
#### name
#### install
#### uninstall
#### status
### 安装过程
#### 校验插件 validatePlugin
#### 执行插件安装前置钩子 beforeInstallPlugin
#### 执行插件安装前置钩子 afterInstallPlugin

### 设置自定义功能列表

#### 引入ui组件

#### 功能列表获取原理
#### 获取
### 全局插件通讯管道

### 插件生命周期

### 插件管理

### API


