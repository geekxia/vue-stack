一、工程架构
	搭环境  vue/cli  create-react-app
	脚手架
	打包工具 webpack
	编译器 使用更新更高效的js/scss/jsx  babel
	热更新HMR
	ESLint
	本地服务器devServer，代理配置
	版本管理 git/svn
	Node.js/npm
	

二、项目架构
	技术选型
	MVVM:  vue react 小程序 angular
	路由：vue-router  react-router
	状态管理：vuex  redux  mobx
	UI组件：C端产品，B端产品，element  ant-design
	前后端分离：axios，fetch封装，baseUrl, token, 登录拦截，错误处理、异常处理，HTTP
	第三方模块的选择与使用：npm / yarn

三、业务实现
	UI稿还原、组件拆解与封装（搭积木）、CSS
	交互实现：页面跳转、组件跳转，数据状态的变化，样式变化
	功能实现：算法基础、设计模式、特效
	B端产品：增删改查、表单、表格
	C端产品：样式、用户体验
	
四、项目部署
	项目打包 webpack
	baseUrl切换：开发环境dev  生产环境pro
	性能优化：代码压缩、请求合并、数据缓存、图片处理、静态资源放置到CDN/OSS、图片规格处理、JS层面优化
	运维、域名、备案、DNS、云服务器购买
	
	
* UI管理：蓝湖* API在线文档：Swagger、其它免费线上文档
* 项目管理工具：TAPD、禅道


## React中，跨组件的数据解决方案

* 事件通信
* 状态提升
* Context上下文
* 状态管理工具：
* mobx / mobx-react
* redux / react-redux


## Mobx 数据架构

**安装 Mobx**
```
npm install mobx -S
npm install mobx-react -S
```

**使用两个 Babel 插件，支持ES6装饰器语法**
```
npm install @babel/plugin-proposal-decorators -D
npm install @babel/plugin-proposal-class-properties -D
```
**在 .babelrc 中配置如下**
```
{
  "presets": ["@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties",{"loose": true}]
  ]
}
```


## Redux 数据架构


* redux
  * createStore,  用于创建唯一的store
  * combineReducers,  用于合并多个Reducer纯函数
  * applyMiddleware  使用中间件，比如使用redux-thunk来解决异步数据请求
* react-redux
  * <Provider store={store}>
  * connect(mapStateToProps, mapActionToProps)(UiComponent)
* redux-thunk
  * 来解决异步数据请求
  * 异步数据需要三个action  {type:'', payload: ''}
  * 同步数据只需要一个action


## APP 开发  WebApp、NativeApp、HybridApp

#### WebApp

* 直接在手机网页上访问，也叫m站。

优点 : 

	1、无需下载安装包，节约手机空间，便于应用传播。
	2、整体量级较轻，开发成本低，便于迭代。
	3、基于浏览器，无跨平台压力，与其他网站之间跳转更方便。
	4、应用开发者直接在后台更新，不需要用户手动更新，用户每次看到的都是全新版本，更便于业务的开展。

缺点 : 

1、整体效果和体验很难达到Native App的效果。
2、WebApp访问手机本地文件和应用不如Native App方便。
3、由于要在浏览器中打开，多了打开浏览器—找到书签—打开书签的操作（没有书签将有更多步骤），没有Native App便捷。用户黏性不高。
4、数据没有实现本地化，用户容易流失数据。
5、云计算还在发展中，网站实现还在发展。主观上：没有使用WebApp的习惯。

#### NativeApp
优点 : 

1、提供最佳用户体验(不同平台不同体验)，最优质的用户界面，流畅的交互，打开速度更快。
2、可以访问本地资源。
3、可以调用移动硬件设备，比如摄像头、麦克风等。
4、可节约带宽成本。
5、盈利模式明朗。

缺点 : 

1、开发成本高。Android、IOS需要独立的开发项目，针对不同平台要提供不同体验。
2、发布新版本慢。下载是用户控制的，需同时维护多个版本，成本较高。
3、应用商店发布审核周期长：安卓需1～3天，IOS需要的时间更长。
4、盈利需要与第三方分成。

#### HybridApp

* WebApp嵌入到NativeApp  webview

特点 : 

1、在实现更多功能的前提下，使得app安装包不至于过大。
2、在应用内部打开web网页，省去了跳转浏览器的麻烦。
3、主要功能区相对稳定下，增加的功能区采用web形式，使得迭代更加方便。
4、web页面在用户设置不同的网络制式时会以不同的形式呈现。（以微信朋友圈为例 : 在数据流量下，设置APNS为WAP时，微信订阅号内容将屏蔽图片和视频，这样能为用户省去一部分流量，当然整个页面阅读就不那么友好了）

Cordova/PhoneGap
AppCan
Ionic Framework
非常多


H5主导的Hybrid开发
Native主导的Hybrid开发


## 跨平台App开发（H5主导）

UniApp -- 基于Vue技术
ReactNative -- 基于React

Flutter -- 新编程语言

Application  应用程序 -- 手机端App
System  系统程序
系统内核


CSS
ES5 -- DOM/BOM -- jQuery
ES6

React Vue -- Diff  路由、状态管理

uni-app  Vue+小程序  --> HTMLplus APP
taro    React+小程序  --> RN App
RN   原生APP开发的替代方案
小程序  uni-app  taro  wepy  mpvue


## ReactNative环境搭建

安装node.js
	环境变量 PATH

安装JDK
配置JDK环境变量：	
	JAVA_HOME=D:\java
	PATH=D:\java\bin
	
Python安装
	PATH=C:\python27

AndroidStudio安装
	安装Android SDK
		ANDROID_HOME=C:\Users\qf\AppData\Local\Android\Sdk
		PATH=C:\Users\qf\AppData\Local\Android\Sdk\platform-tools
	
	安装Android ADB

创建RN项目、启动项目
	npm install react-native-cli
	react-native init MyApp
	cd MyApp
	npm run android
	
	
	var a = 1
	
	
	var a
	a = 1
	
```	
let promise = new Promise(function(resolve, reject) {
	reject('2')
	resolve('1')	
})

promise.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('总会执行')
})
```