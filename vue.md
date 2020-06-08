
#### 5、rem移动端布局

* 在`public/index.html`中引入这个`rem.js`文件，把根字体设置成html宽度的十分之一。
```js
function resetRootFZ(){
  var oHtml = document.querySelector('html');
  var w = oHtml.getBoundingClientRect().width;
  oHtml.style.fontSize = w/10 + 'px';
};

resetRootFZ();

window.addEventListener('resize',function(){
  resetRootFZ();
});
```
* 在编辑器中安装px转换rem的插件，并设置其fontSize=75，在写代码时就可以自动地把px单位转化成rem单位。
* [教程：VScode中如何将px转rem](https://blog.csdn.net/wjnf012/article/details/92074232)




## Vue第06天

#### 1、关于移动端Web

* [使用WebApp meta标签](https://guide.aotu.io/docs/html/webapp.html)
* 使用rem布局时，一定要指定这个`meta`标签，示例如下：
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

#### 2、dpr设备像素比

* 设备像素比：DPR(devicePixelRatio)  dpr=1/2/3
* dpr = 屏幕像素 / 设备物理像素
* 使用`window.devicePixelRatio`可以动态地获取到硬件设备的dpr

#### 3、Touch事件

* Click事件在移动端，会有300毫秒延迟，用于区分移动设备上的单击、双击事件。
* 给网页指定WebApp meta元数据后，可以降低click事件延迟时间。
* Touch事件由`touchstart``touchmove``touchend`组件，仅在移动端Web中被支持，在PC Web中不支持。







#### 2、服务端渲染

* [Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh/)
* SSR与BSR的优劣势对比
* SSR有利于搜索引擎优化(SEO)，页面的加载速度会更快(解决首页加载慢的问题)

#### 3、Nuxt.js框架

* [Nuxt.js入门指南](https://zh.nuxtjs.org/guide/installation)
* 使用`create-nuxt-app`脚手架
* [Nuxt项目的配置说明](https://zh.nuxtjs.org/guide/configuration)
* Nuxt路由：Nuxt.js 依据 pages 目录结构自动生成 vue-router 模块的路由配置。
* 声明式路由：<nuxt-link>，支持`active-class`属性。
* Nuxt嵌套路由：创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。
* Nuxt动态路由：必须加下划线 (文件夹也可以加下划线(多级嵌套)， 文件也可以加下划线)。
* 编程式路由：`this.$router.push()`等等。
* Nuxt视图：在layout目录下的 default.vue 即根组件的模板了，用<nuxt>指定视图容器。
* Nuxt子视图：<nuxt-child>用于渲染二级的子视图组件。
* 在Nuxt项目中使用axios请求后端数据，使用`asyncData`属性。
```js
// 异步数据请求
  asyncData() {
    return axios.get(url).then(res=>{
      // 这里是无法访问当前组件的this对象
      console.log('this', this)
      console.log('res34', res.data.data.song.list.length)
      // 在这里return 的数据，在页面组件中可以直接使用
      return {
        list: res.data.data.song.list
      }
    })
  }
```
* 在Nuxt项目中使用Vuex，Nuxt项目建议Vuex状态分模块（即多个module）。
```
export const state = () => ({
  list: [1,2,3,4,5]
})

export const mutations = {
  add (state, payload) {
    state.list.push(payload)
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
```


## Vue第15天

* 云服务器介绍
* 域名、IP地域、DNS域名解析器、域名备案等
* 如何把本地代码转移至远程服务器上？使用Git，或者使用其它文件上传软件。
* 如何部署前端项目？使用Nginx
* 什么是反向代理？什么是正向代理？
