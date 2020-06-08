#### 1、Vue起步

* 渐近式框架：由浅入深、由简单到复杂地使用。
* 优势：代码体积小，基于虚拟DOM，数据双向绑定，生态圈繁荣。
* 可以胜任Web开发、移动端开发、跨平台APP开发。
* 两种安装方式：script标签引入、vue-cli脚手架工程化安装。
* HelloWorld:
	* new Vue()
	* 文本插值 {{ }}
* Vue实例：
	* 响应式体验，动态地改变Vue实例数据：app.msg = "hello 1912"
* Vue指令初体验：
	v-text 插入文本
	v-model 绑定表单的值
	v-on / @  绑定事件
* [在线编码 JSFiddle](https://jsfiddle.net/boilerplate/vue)

#### 2、Vue指令

* 文本类指令
	* 文本用 `{{}}`，用`v-text`优化显示效果
	* 纯HTML，用`v-html`
	* `v-html` ，可以防止XSS,CSRF攻击
	* 表达式，在指令中可以使用js表达式
	* `v-once` 只渲染一次
```
  {{}} 文本插值
  v-text 插入文本
  v-html 插入HTML片段
  v-once 只渲染一次
```

* 动态属性、动态样式
	* 动态样式：`v-bind:class` 和 `v-bind:style`
	* 它们都支持数组语法
	* 它们也支持对象语法
```
  v-bind:title
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
  v-bind:class="[isActive ? activeClass : '', errorClass]"
  v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
  v-bind:style="[baseStyles, overridingStyles]"
```


* 列表渲染
```
  v-for="(item, index) in arr"
  v-bind:key="index"
```

* 对象渲染
```html
<div v-for="(value, name, index) in obj">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

* 条件渲染  
  * 重点区分v-if 和 v-show的区别
	* 前者条件为false时，元素将从DOM中被移除
	* 后者是用`display:none`来实现显示隐藏的
```
  v-if
  v-else-if
  v-else
  v-show
```


* 事件绑定（事件对象，事件修饰符）
	* 事件处理：`v-on`，简写`@`，灵活使用事件修饰符、键盘修饰符等
	* v-on:click
	* @click.stop
```
<div @click='say("hi", $event)'></div>
```

* 表单绑定（表单修饰符）
	* `.lazy` :失去焦点同步一次
	* `.number` :格式化数字
	* `.trim` : 去除首尾空格
	* `v-model` 等价于 `v-bind:value`+`v-on:input`
```
  v-model.trim=''
  v-model.number=''
  v-model.lazy=''
```

* TodoList项目实践

  * [原型](http://www.todolist.cn/)
  * `v-model` 表单数据绑定
  * `v-on` / `@` 事件绑定
  * `v-for` 列表渲染
  * 列表渲染：`v-for` 与 `:key`的使用
	* 变异方法：push() pop() shift() unshift() splice() sort() reverse()
	* 非变异方法：filter(), concat() 和 slice() ,map()


#### 3、Vue生命周期
```js
beforeCreate: function() {
	console.log('beforeCreate')
},
created: function() {
	console.log('created')
},
beforeMount: function() {
	console.log('beforeMount')
},
mounted: function() {
	console.log('mounted')
	// 在这里调接口、创建swiper组件等操作
},
beforeUpdate: function() {
	console.log('beforeUpdate')
},
updated: function() {
	console.log('updated')
},
beforeDestroy: function() {
	console.log('beforeDestroy')
	// 在这里清除耗费性能的东西，比如定时器等
},
destroyed: function() {
	console.log('destroyed')
}
```
* 各种接口请求等操作， 建议放在`mounted` 这个钩子函数里。
* 需要完整的DOM结构才能做初始化渲染的第三方UI相关的库，它们的业务逻辑都要放在`mounted`这里调用、执行。
* 定时器清除等，可以放在`beforeDestroy`中进行执行。
* 使用 `app.$destroy()` 手动触发组件销毁，组件销毁之后它的各种指令都将失效。
* swiper插件库的使用：`https://www.swiper.com.cn/`


#### 4、响应式原理

```js
var app = {}
// 把普通对象的定义，转化成setter/getter方式进行对象定义
Object.defineProperty(app, 'msg', {
  get: function() {
	return value
  },
  set: function(arg) {
	value = arg
	// 在setter操作里面，通知监听器，更新页面
	watch(value)
  }
})

// 当页面数据发生变化时，更新对象，触发setter操作

document.getElementById('input').addEventListener('keyup', function(e){
  // 触发setter
  app.msg = e.target.value
})

// 监听器
function watch(value) {
  document.getElementById('msg').innerHTML = value
}
```


#### 5、虚拟DOM

* 什么是MVP、MVC、MVVM模式？
	* M  model数据
	* V  view视图
	* C  control控制器
* 如何理解MVVM？
	* VM 即视图模型，你可以理解为虚拟DOM
* 什么是虚拟DOM？
	虚拟DOM就是一个json对象，它用于对真实DOM进行描述。
* 什么是diff运算？
	当Vue实例中的数据发生变化时，Vue会获得一份对虚拟DOM的拷贝，如此我们就有两份虚拟DOM，一份是数据变化前的虚拟DOM，一份是数据变化后的虚拟DOM。所谓的Diff运算，就是对这两份虚拟DOM进行差异比较，从而找出它们的最小差异。再把这份最小的差异渲染到真实DOM中去。
	MVVM框架，基于这种虚拟DOM的Diff运算，大大地减少了DOM的频繁操作，减少DOM操作本身就是一种性能优化。所以MVVM框架有利于性能优化，非常适合数据化的产品应用开发。
	
	
#### 6、自定义组件

什么是Vue自定义组件？
* 组件化的目的：扩展 HTML 元素，封装可重用的代码

如何自定义组件？
* 使用 `Vue.component('my-button', {})` 进行全局组件的注册
* template:`<div></div>`，只能有一个根元素。
* props,实现从父组件向子组件动态传值，在子组件中可以 props进行多重验证，比如`type``required`等。
* data,它必须使用一个工厂函数进行返回，目的为了解决作用域问题
* methods,使用自定义事件，实现子组件向父组件的传值通信（$emit）

自定义表单类的组件：
* 自定义表单组件的封装，原理是`v-model`等价于`:value`和 `@input`。
* 自定义input组件
* 自定义select组件
* 自定义radio组件
* 自定义checkbox组件
* 自定义类表单组件

使用slot插槽自定义组件：
* 使用 slot 插槽，扩展自定义组件
* v-slot指令用在template标签上，指定具名插槽
* 每个插槽都有独立的作用域，可以进行动态传值


#### 7、Vue选项

* Vue实例与选项
	* data 声明式渲染
	* 自定义组件的 props / template
	* methods 方法事件
	* 计算属性`computed`
	* 侦听器`watch`
	* 生命周期与钩子函数

* 计算属性 computed
	* 使用计算属性，替代复杂的模板表达式，让代码更加容易维护
	* 计算属性是基于它们的依赖进行缓存的。
	* 计算属性只有在它的相关依赖发生改变时才会重新求值

* 侦听器 watch
	* 所侦听的data数据，有任何一个发生变化，侦听器都会被触发、执行



--------------------------------------------------

#### 1、dpr设备像素比

* 设备像素比：DPR(devicePixelRatio)  dpr=1/2/3
* dpr = 屏幕像素 / 设备物理像素
* 使用`window.devicePixelRatio`可以动态地获取到硬件设备的dpr


#### 2、关于移动端Web

* [使用WebApp meta标签](https://guide.aotu.io/docs/html/webapp.html)
* 使用rem布局时，一定要指定这个`meta`标签，示例如下：
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```


#### 3、rem移动端布局（root）

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


#### 4、Touch事件

* Click事件在移动端，会有300毫秒延迟，用于区分移动设备上的单击、双击事件。
* 给网页指定WebApp meta元数据后，可以降低click事件延迟时间。
* Touch事件由`touchstart``touchmove``touchend`组件，仅在移动端Web中被支持，在PC Web中不支持。



--------------------------------------------------

#### 1、服务端渲染

* [Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh/)
* SSR与BSR的优劣势对比
* SSR有利于搜索引擎优化(SEO)，页面的加载速度会更快(解决首页加载慢的问题)

#### 2、Nuxt.js框架

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

#### 3、项目部署

* 云服务器介绍
* 域名、IP地域、DNS域名解析器、域名备案等

* 如何把本地代码转移至远程服务器上？使用Git，或者使用其它文件上传软件。
* 如何部署前端项目？使用Nginx
* 什么是反向代理？什么是正向代理？
