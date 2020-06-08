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


#### 2、HelloWorld

* 两种安装方式：script标签引入、vue-cli脚手架工程化安装。
```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

* HelloWorld:
	* new Vue()
	* 文本插值 {{ }}

```html
<div id='app'>
  <h1>{{msg}}</h1>
  <input type="text" name="" v-model='username'>
</div>
```

```js
var app = new Vue({
  el: "#app",   // 与哪一个DOM节点进行关联
  data: {
    msg: '1916',  // 声明式渲染，数据双向绑定
    username: 'shaoqiang'
  }
})
```

* 认识Vue实例：
	* 响应式体验，动态地改变Vue实例数据：app.msg = "hello 1912"


#### 3、响应式编程体验

```html
<div id='app'>
  <h1>{{msg}}</h1>
  <input type="text" v-model='msg'>
  <button type="button" v-on:click='change'></button>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    msg: 'hello world'
  },
  methods: {
    change() {
      this.msg = 'hello 2020'
    }
  }
})
```

* 在浏览器控制台，`app.msg` 进行“双向绑定”调试，感受Vue响应式编程。
* 知识点：基于Vue声明式渲染，数据双向绑定。Vue实例数据发生变化，DOM界面自动更新；DOM界面变化，Vue实例数据也自动更新。


#### 4、Vue指令

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



#### 5、Vue生命周期与钩子函数

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
  },
  beforeUpdate: function() {
  	console.log('beforeUpdate')
  },
  updated: function() {
  	console.log('updated')
  },
  beforeDestroy: function() {
  	console.log('beforeDestroy')
  },
  destroyed: function() {
  	console.log('destroyed')
  }
```
* 各种接口请求等操作， 建议放在`mounted` 这个钩子函数里。
* 需要完整的DOM结构才能做初始化渲染的第三方UI相关的库，它们的业务逻辑都要放在`updated`这里调用、执行。
* 定时器等可以放在`beforeDestroy`中进行执行。
* 使用 `app.$destroy()` 手动触发组件销毁，组件销毁之后它的各种指令都将失效。
* swiper插件库的使用：`https://www.swiper.com.cn/`


#### 6、自定义组件

**什么是Vue自定义组件？**
* 组件化的目的：扩展 HTML 元素，封装可重用的代码

**如何自定义组件？**
* 使用 `Vue.component('my-button', {})` 进行全局组件的注册
* template:`<div></div>`，只能有一个根元素。
* props,实现从父组件向子组件动态传值，在子组件中可以 props进行多重验证，比如`type``required`等。
* data,它必须使用一个工厂函数进行返回，目的为了解决作用域问题
* methods,使用自定义事件，实现子组件向父组件的传值通信（$emit）

**自定义表单类的组件**
* 自定义表单组件的封装，原理是`v-model`等价于`:value`和 `@input`。
* 自定义input组件
* 自定义select组件
* 自定义radio组件
* 自定义checkbox组件
* 自定义类表单组件

**使用slot插槽自定义组件**
* 使用 slot 插槽，扩展自定义组件
* v-slot指令用在template标签上，指定具名插槽
* 每个插槽都有独立的作用域，可以进行动态传值



#### 7、计算属性与侦听器

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

#### 7、事件总线

> 事件总线可以解决组件之间通过的复杂度问题，比如兄弟组件之间的通信
```
var bus = new Vue()  创建事件总线对象
```
* 在某个组件中，使用 `$emit(eventName)` 触发事件，并发送数据
* 在其它组件的`mounted`钩子函数中，使用 `$on(eventName)` 监听事件，可以接收数据

#### 8、ref / $refs

* `ref` 是Vue提供的一个通用的标签属性，所有的HTML标签和自定义组件都可以使用它
* `this.$refs`可以访问到所有的 `ref` DOM节点元素或自定义的组件对象


#### 9、动态组件

* `<component>`内置组件，可以动态地绑定多个组件，使用 `is` 属性来指定当前要显示的组件
* `<keep-alive>`内置组件可以保留组件状态，避免组件的状态丢失，避免重复渲染


#### 10、mixin混入

> 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。


#### 11、虚拟DOM与Diff运算

* Diff运算的规则
  * 把树按照层级分解
  * 同key值对比
  * 同组件对比
* Diff运算的目标是对虚拟DOM变化前后进行对比，找出最小的变化，执行最少的DOM操作

#### 12、Vue过渡动画

> Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果，供我们使用。

* 使用`<transition>`内置组件
* 单元素/组件过渡（详细学习资源，见Vue官网）
  * 可以使用css过渡
  * 可以使用css动画
  * 还可以结合animate.css动画库使用
* 多个元素使用过渡动画时，要设置key值
  * mode 指定动画模式 `in-out`代表“先进后出”，`out-in`代表“先出后进”
* 多个组件过渡（详细学习资源，见Vue官网）
* 列表使用过渡动画时，也要设置key （详细学习资源，见Vue官网）
* `<transition-group>`不同于 `<transition>`,它会以一个真实的HTML元素呈现，默认为一个 <span>。你也可以通过`tag`特性更换为其他元素。
* animate.css动画库的使用
  * [animate.css官网](https://daneden.github.io/animate.css/)
  * [animate.css仓库](https://github.com/daneden/animate.css)
