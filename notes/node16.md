## 一、开班

#### 1、自我介绍

* 夏海峰 GeekXia
* QQ: 448914712
* [简书博客](https://www.jianshu.com/u/cad3fc2bf0e5)


#### 2、三阶段学习内容（9周）

* node.js、数据库开发（1周） 
* vue（3周） 
* react、跨平台APP开发（3周）  
* 微信开发：小程序、公众号开发（1周） 
* 就业周（1周）

--------------------------------------------------
技术重点：CSS、JavaScript/DOM/BOM、ES6、Vue/React、小程序开发。
目标：管理系统 webapp 小程序 跨平台APP

**前端框架的发展历史**

* [一篇文章了解前端框架演变](https://segmentfault.com/a/1190000015051472)
* [前端框架的发展现状与趋势](https://2018.stateofjs.com/cn/front-end-frameworks/overview/)
* [The best of JavaScript, HTML and CSS](https://bestofjs.org/)
* [2018 JavaScript Rising Stars](https://risingstars.js.org/2018/en/)

**学习笔记建议**

* 随堂笔记，当天的内容当天消化。
* 每天整理所学内容（Markdown 文档与语法、xmind 思维导图、有道云笔记或印象笔记）

**三阶段学习建议**

* 官方文档就是最好的成长资料
	* 框架是为了解决问题，它为什么存在？为什么要学习它？
	* 学习内容多，API多，死记硬背是不可能的
	* 多翻官方文档，从中找到解决方案，学习到更多的知识
* 培养项目能力
	* 前端工程师与产品、UI、后端、测试等配合
	* 工程搭建、项目架构、业务开发、项目部署，都要懂
	* 初级阶段更重要的业务开发能力，如UI稿还原、交互功能开发
* 动手
	* 只要动手敲代码，就会有Bug出现
	* 解决Bug，小组式地交流学习，社区网站，写写博客，在Bug中成长
	* 工作中遇到的很多需求，都要新的，甚至是从来没有做过的，敢于动手去实现


**知识点讲解**

* [HBuilderX安装](https://www.dcloud.io/hbuilderx.html)
* 开始学习Node.js

--------------------------------------------------


## 二、MarkDown语法介绍

#### 0、介绍

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
> Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。
> Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
> Markdown 编写的文档后缀为 .md, .markdown。

* [HbuilderX](https://www.dcloud.io/hbuilderx.html)

HbuilderX的优化：轻巧、快速、流畅
	文档结构图


#### 1、标题

快捷键：`h1~h6`

#### 2、列表

1. 第一行
2. 第二行

快捷键：`li`
* 第一行
* 第二行



#### 3、引用

>欲穷千里目，更上一楼层。


#### 4、链接

快捷键：`a`  `img`

[百度](https://www.baidu.com)

![图片](https://img0.pcbaby.com.cn/pcbaby/vedio/000031346/1707/351x200.jpg)


#### 5、文字样式

快捷键：`b`

**aaaa**
*aaaa*
~~aaaa~~

**90909304**

#### 6、表格

快捷键：`table3*3`

|	|	|	|	|	|
|--	|--	|--	|--	|--	|
|	|	|	|	|	|
|	|	|	|	|	|

--------------------------------------------------


#### 7、代码

快捷键：`code`   `ctrl + /`

```
console.log(1)
```

注释：<!-- 这里注释，不显示 -->

#### 8、其它

快捷键：`hr`


快捷键：`day`  `time`

2019-12-16
2019-12-16 10:27:59




## 三、Node.js基础

#### 1、Node.js介绍

**为什么要学习node.js？**
	
* 辅助前端开发，搭建前端工程
* 编写服务端业务、数据库开发


**什么是Node.js？**

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript运行环境。
> Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。

* Chrome V8
* 事件驱动
* 非阻塞I/O
	
> Node.js 可以解析JS代码（没有浏览器安全级别的限制），提供很多系统级别的API，如fs/net/process/os等。
	
	
**什么是NPM？**
	
> Node.js 的包管理器 npm，成为世界上最大的开放源代码的生态系统。

体验 npm 
```
npm -v   // 查看npm版本
npm install nodemon -g  // 全局安装nodemon
```
	
**学习资源推荐**
	
* node.js官网：文档查询
* npm官网：模块搜索
* GitHub：大量的开源工具可供学习和使用
* StackOverflow：学习中遇到的问题查询
* SegmentFault：问题查询


--------------------------------------------------
#### 2、Node.js安装
	
**版本识别：**

* LTS  稳定版本，建议安装
* Current  最新版本
* 主版本号.子版本号.修订版本号  v6.8.x
* 子版本号为偶数的版本是稳定版本，为奇数的是非稳定版本
* 建议安装LTS的偶数版本

**下载安装：**

* 在官网下载.msi安装包
* 验证安装是否成功：在Git Bash中
```
node -v
npm -v
```
	

#### 3、Node.js代码初体验

* Node.js和谷歌浏览器一样，都是通过V8引擎来解析JS代码的。
* 宿主环境（Node.js和谷歌浏览器）的差异对比，分别在浏览器控制台和 Node.js交互模式(REPL)下实验如下代码：

```
// 函数
function add(x,y) {return x+y}
add(2,3)
```

```
// 全局对象的差异
window
document
global
process
```	
		
* 使用 node 命令执行.js脚本
```
node test.js [arg1 arg2 arg3]
```


#### 4、Hello World 第一个Node.js程序

[Nodejs官方介绍](https://nodejs.org/en/about/)

* 实现步骤：
	* require('http')  导入http模块
	* http.createServer()创建服务器对象，同时会自动地绑定request事件，该事件需要传递一个事件处理函数
	* 我们在request事件处理函数中处理客户端请求、并进行响应
		* 响应体对象：res.writeHeader() / Content-Type
	* listen()设置监听端口号

* 处理浏览器请求一直转圈的问题
	* 添加 res.end()

* 处理`favicon.ico`的请求问题
	* 打开浏览器中的network，查看`favicon.ico`的请求状态
	* 这是因为浏览会默认访问服务端根目录下的favicon图标导致的
	* 解决 "/favicon.ico" 的问题


#### 5、Node.js内置模块

* http / https
* path
* fs
* stream  .pipe()管道流
* querystring
* url

--------------------------------------------------

## 四、Node.js内置模块

#### 1、URL模块

url.parse('http://www.baidu.com:8080/api?user=geekxia&pwd=123#100')
url.parse('http://www.baidu.com:8080/api?user=geekxia&pwd=123#100', true)
url.parse('://www.baidu.com:8080/api?user=geekxia&pwd=123#100', true, true)
	{
		protocol: 'http:',
		slashes: true,
		auth: null,
		host: 'www.baidu.com:8080',
		port: '8080',
		hostname: 'www.baidu.com',
		hash: '#100',
		search: '?user=geekxia&pwd=123',
		query: 'user=geekxia&pwd=123',
		pathname: '/api',
		path: '/api?user=geekxia&pwd=123',
		href: 'http://www.baidu.com:8080/api?user=geekxia&pwd=123#100'
	}
	URL的组成

url.format({
	protocol: 'http:',
	slashes: true,
	auth: null,
	host: 'www.baidu.com:8080',
	port: '8080',
	hostname: 'www.baidu.com',
	hash: '#100',
	search: '?user=geekxia&pwd=123',
	query: 'user=geekxia&pwd=123',
	pathname: '/api',
	path: '/api?user=geekxia&pwd=123',
})	把对象解析成URL
	
url.resolve('http://www.baidu.com', '/api/getList')
	把两段URL片段，组合成一个完整的URL

#### 2、QueryString模块
* 对查询字符串执行更加强大的解析

querystring.string()

	querystring.stringify({
		name: 'qf',
		course: ['nodejs', 'vue', 'react']
	})  默认使用 & 进行分隔，键值用 = 连接

	querystring.stringify({
		name: 'qf',
		course: ['nodejs', 'vue', 'react']
	}, ',')  自定义分隔符
		
	querystring.stringify({
		name: 'qf',
		course: ['nodejs', 'vue', 'react']
	}, ',', ':')  自定义键值对之间的分隔符

querystring.parse()
	
	querystring.string() 的逆方法，也可以接受后面的两参数

querystring.escape('北京')

querystring.unescape()
	与 querystring.escape 互逆
	
	
#### 3、HTTP/HTTPS 模块 - get()

目标：实现一个HTTP爬虫

需求讲解：
	打开拉勾网 https://www.lagou.com
	我们的目标是抓取到了一级品类和二级品类的内容
	审查元素，分析其源码结构
	
	第一步：抓取首页源码字符串
		https.get(url, fn)
		用于抓取页面中的静态内容和数据
			
	第二步：使用 cheerio 进一步处理源码字符串，获取到品类名称
		```
		npm install cheerio -D
		```
	第三步：在控制台上打印出我们获取到的品类名称

#### 4、HTTP/HTTPS 模块 - request()

目标：获取cnode开放数据
	
	https.request() 报错“Error: getaddrinfo ENOTFOUND https://cnodejs.org”
		解决办法：把 hostname 中的"https://wwww"去掉
	
	GET 的请求方式
		demo:从cnode开放平台获取文章列表
	
	POST 的请求方式
		demo:执行cnode开放平台上的文件收藏功能


#### 5、events模块、事件触发器

如何创建一个事件触发器？
```
var EventEmitter = require('events')
var myEvent = new EventEmitter()
```
如何定义事件监听器？
	myEvent.on('xxx', fn)
	myEvent.once('xxx', fn)

如何触发事件？如何传递事件参数？
	myEvent.emit('xxx', args)

#### 6、fs模块，文件(夹)的增删改查

与文件夹相关的操作：创建、改名称、读、删

与文件相关的操作：写、读、删、改名称

#### 7、stream模块

为什么需要使用流？
	当文件较大时，避免一次性把数据读入到内存，所以使用流批量读取文件数据。

	.pipe() 管道流的使用
	
--------------------------------------------------


## 五、Node.js原生Api 搭建服务器


#### 1、什么是服务器？

> 提供服务的程序或设备，它的功能有接收并处理请求，处理并响应数据信息。

* 接收客户请求
* 处理请求
* 响应请求

#### 2、Node.js原生路由实现WebServer

原理，就是根据 req.url 来区分客户的请求路径，根据不同的访问路径响应不同内容。

nodejs代码实时编辑工具：
	nodemon

res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8;'})
	参见：HTTP媒体类型/MIME_Types

项目需求描述：
	使用node.js原生代码，实现图片、HTML/CSS/JS文件的访问

```js
var http = require('http')
var fs = require('fs')
var path = require('path')

var express = require('express')

var server = http.createServer(function(req, res) {
	var url = req.url
	// favicon.ico
	if (url != '/favicon.ico') {
		// url路径处理
		// 当用户直接访问 根路径 时
		url = url === '/' ? '/index.html' : url
		var filePath = path.join(__dirname, '/public' + url)
		// 判断是不是文件
		fs.stat(filePath, function(err, stats) {
			// 报错、或文件不存在时
			if (err || !stats) {
				res.writeHead(404, {'Content-Type':'text/plain;charset=utf-8;'})
				res.end('文件不存在 ')
			}
			// 如果是一个文件
			if (stats && stats.isFile()) {
				res.statusCode = 200
				res.setHeader('Content-text', 'text/plain;')
				// 读取文件，响应给客户端
				fs.createReadStream(filePath).pipe(res)
			}
		})
	}
})

// 端口监听
server.listen(8000, function() {
	console.log('server is running on 8000')
})
```

--------------------------------------------------


## 七、用Express 重构WebServer

Express安装：`npm install express -S`

**实现静态资源服务器static**

```
var express = require('express')
var app = express()

// 静态服务，在根目录创建 public 目录，把静态资源放进去
app.use(express.static('public'))

// 路由
app.get('/', (req, res) => {
  res.send('hello world')
})
// 端口监听
app.listen(8000, ()=>{
  console.log('server in running on 8000')
})
```
--------------------------------------------------


## 八、NPM 入门使用

**1、认识**
* npm 是基于CommonJS规范的包管理工具
* Node.js安装完成后，npm同步安装
```
node -v
npm -v
```

**仓库源切换，建议使用淘宝镜像**

```
npm install nrm -g
nrm ls
nrm use taobao
nrm ls
```
	

**2、管理模块：package.json**

* package.json初始化
```
npm init
```

* 作用：
	* 便于模块管理
	* 便于代码转移
	* package.json 文件属性讲解
		* 项目依赖
		* 开发时依赖
	
**3、模块安装**
* 全局安装：
```
npm install name -g/--global
npm i name -g
```
* 本地安装：
```
npm install react -S/--save
npm install gulp -D/--save-dev
```
	
* 安装指定版本：
```
npm info react
npm install react@16.9.0 -S
npm list	
rm -rf node_modules
npm install
```

* 三个标识：
```
npm outdated
```
	1. ^  保留主版本号不变，后面最新
	2. ~  保留主版本和次版本号不变，后面取最新
	3. `*`安装最新版本

	
**4、模块卸载**
```
npm uninstall name -g
npm uninstall react -S
npm uninstall gulp -D
```

**5、nrm 源管理**
```
npm install nrm -g
nrm list  查看源
nrm use taobao  切换源
npm test  测试源的速度
```
	
**6、如果安装某个模块报错，重新安装又没有覆盖怎么办？**

* 先卸载，再清除缓存，最后重新安装
```
npm uninstall nodemon -g
npm cache clear
```
* 或者，删除node_modules后，再npm install
* [NPM官网](https://www.npmjs.com/)

--------------------------------------------------

## 九、MongoDB/Robo3T安装

#### 1、MongoDB安装

1、MongoDB安装
	[下载.msi文件](https://www.mongodb.com/download-center/community?jmp=docs)
	安装时，取消勾选“MongoDB Compass”，它是MongoDB官方的图形化工具，无须安装。
2、配置环境变量
	系统设置->环境变量->添加PATH：D:\mongo\bin
3、启动mongodb服务
	mongod --dbpath "D:\mongo\data"
		
4、使用 mongo shell 连接mongodb服务
	连接服务：`mongo`
	查看数据库列表：`show dbs;`

#### 2、Robo3T安装
* [Robo3T](https://robomongo.org/)
* [adminMongo](https://adminmongo.markmoffat.com/)
以Robo3T为例，使用步骤如下：
	官网下载 robo3t-1.3.1-windows-x86_64-7419c406.exe
	点击安装
	填写相关信息，启动 Robo3T
	GitBash启动 MongoDB服务
	在Robo3T中创建连接、完成
* 使用Robo3T
	* 连接本地MongoDB服务
	* 查看集合，切换三种显示方式——json视图、表格视图、对象视图
	* 使用Robo3T Shell：输入mongo shell命令，点击“执行”按钮

--------------------------------------------------

## 十、CommonJS 模块规范

**1、问题：如果不使用模块化开发，会怎么样？**
* 同一个文件中的函数定义与调用（demo演示）
* 跨文件无法复用


**2、模块化开发，有哪些好处？**

* 最重要是解决了命名空间的问题，避免了命名冲突、全局变量的污染
* 清晰的依赖关系
* 清晰的代码组织，避免代码臃肿
* 代码复用

**3、Node.js使用CommonJS模块规范**
* Node.js、Webpack、小程序原生开发都采用了CommonJS模块规范
* 通过 npm install 安装的第三方模块，都实现了CommonJS规范
* 通过这种模块化的方式，我们可以开发出功能强大的程序应用


**3、ES6模块**	

```
export function() {}
import {} from './xxx'
```
* 在后面学习Vue、React时，会进一步学习。

**4、CommonJS模块的定义与引用**
```
var util = {
	eat: function() {},
	sayHello: function() {}
}
module.exports = util
```
```
exports.eat = util.eat  // 推荐这种写法，更清晰
exports.sayHello = util.sayHello  // 推荐这种写法，更清晰
```
	
```
// 模块的引用与调用：
require('./util')   // 整体引入
require('./util').sayHello  // 引入单个方法
```

* 在后续Node.js开发时，我都将采用CommonJS进行模块编写，大家要熟练使用

**5、关于路径**

* 相对路径：  ./  ../
* 绝对路径：  D:\code\img\boy.jpg

**6、模块的加载优先级**

两种模块：内置核心模块、文件模块
* 优先加载node.js内置模块
* 其次node_modules第三方模块
* 常用的内置模块：process/util/url/fs/path/http

**7、省略后缀**

* 后缀优先级：.js -> .json -> .node
```
var Test = require('./test')   // .js后缀可以省略
```

> 资源推荐：

* [CommonJS规范-阮一峰](http://www.w3cbus.com/nodejs/module.html)
* [CommonJS官网](http://www.commonjs.org/)
* [深入理解 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394?utm_source=tag-newest)

--------------------------------------------------


## 十一、MongoDB 数据库

#### 1、MongoDB vs. MySQL 及其概念讲解
	
	MongoDB是一个基于分布式文件存储的数据库，由C++编写，旨在为WEB应用提供可扩展的高性能数据存储解决方案。
	特点：高性能、易部署、易使用、存储数据非常方便。
	
	相关术语：
		database  数据库
		collection  集合
		document  文档
		field  域
		index  索引
		primary_key  自动地使用_id字段作为主键
	
	文档：即键值对(BSON，二进制的JSON)，文档中不需要设置对等的字段，并且相同字段的值可以是不同的数据类型，这是与关系型数据库有很大的区别。
	示例：{"_id": ObjectId{"s232323232"}, name: geekxia, age: 20}
	
	集合：集合是文档的组，集合存在于数据库中，集合中没有固定的数据结构。但同一个集合中的文档通常有一定的关联性。
	
	MongoDB的数据类型：
		String
		Integer
		Boolean
		Double
		Min/Max keys
		Array
		Timestamp
		Object
		Null
		Symbol
		Date
		Object ID
		Binary Data
		Code
		Regular expression	

#### 2、使用 mongo shell，常用命令
	
	1、帮助命令
		help
		db.help()
		db.test.help()
		db.test.find().help()

	2、数据库操作命令
		show dbs
		use dbname  切换数据库
		db / db.getName()  查看当前数据库名称
		db.stats()  显示当前DB的状态
		db.version()  查看当前DB的版本
		db.getMongo()  查看当前DB的连接的主机地址
		db.dropDatabase()  删除当前DB
	
	3、创建数据库和集合
		use project  不存在就创建，存在就切换至
		db.createCollection('user')  // 创建user集合
		db.createCollection('music', {size:20,capped:true,max:100})  创建固定容量的集合
		show dbs
		show collections / db.getCollectionNames()
		db.user.isCapped()  判断集合是否为定容量
		db.getCollection('music')  获取指定集合
		db.printCollectionStats()  打印指定集合的状态
	
	4、集合中的文档操作：
		db.user.insertOne({})  向集合中插入文档
		db.user.insertMany([{},{}])
		db.user.save({})
		
		db.user.updateOne({"name":"geekxia"}, {$set:{"age":100}})
		db.user.updateMany({},{$set:{}})
		
		db.user.deleteOne({"name":"jiaming"})
		db.user.deleteMany()
		db.user.remove({})   // 要指出删除的条件
		
		db.user.find()
	
	5、文档操作的综合示例
		db.user.findAndModify({
			query: {age: {$gte: 25}},
			sort: {age: -1},
			update: {$set:{name:'a'},$inc:{age:2}},
			remove: true
		});
		等价于下面这个命令：
		db.runCommand({
			findandmodify: 'user',
			query: {age: {$gte: 25}},
			sort: {age: -1},
			update: {$set:{name:'a'},$inc:{age:2}},
			remove: true
		});
	
	6、聚集集合查询
		db.user.find()     查询所有记录
		db.user.distinct('name')    以name字段去重查询
		db.user.find({age:22})     查询age=22的记录
		db.user.find({age:{$gt: 22}})   查询age>22的记录
		db.user.find({age:{$lt: 22}})   查询age<22的记录
		db.user.find({age:{$gte: 22}})   查询age>=22的记录
		db.user.find({age:{$lte: 22}})   查询age<=22的记录
		db.user.find({age:{$gte:20, $lte:30}})  查询age>=20 && age<=30的记录
		db.user.find({name:/geek/})  查询name中包含'geek'的记录
		db.user.find({name:/^geek/})  查询name以'geek'开头的记录
		db.user.find({},{name:1,age:1})  查询所有记录，只返回name和age字段（1-显示 0-不显示）
		db.user.find({age:{$gt:20}},{name:1,age:1})  查询age>20的记录，只返回name和age字段
		db.user.find().sort({age:1})  按age进行升序排列
		db.user.find().sort({age:-1})  按age进行降序排列
		db.user.find({},{name:1,age:1,_id:0}).sort({age:1})
		db.user.find({name:'geek',age:22})  查询name='geek' && age=22的记录
		db.user.find().limit(5)  只查询前5条记录
		db.user.find().skip(10)  查询10条以后的所有数据
		db.user.find().skip(5).limit(5)  查询第6~10条记录
		db.user.find({$or:[{age:20},{age:25}]})  查询age=20或者age=25的记录
		db.user.findOne()  查询满足条件的第一条记录
		db.user.find({age:{$gte:25}}).count()  查询满足条件的记录的总条数
		db.user.find({grade:{$exists:true}})  查询含有grade字段的记录
		db.user.find({grade:{$exists:true}}).count()  查询存在sex字段的记录的总条数
	
	7、实战mongo shell
		构造一批假数据，使用insertMany()入库
		然后就可以使用上述命令进行实战练习了


#### 3、mongoose 模块连接数据库

* 安装：`npm install mongoose -S`
* 文档：
	* [Mongoose快速上手](http://www.mongoosejs.net/docs/index.html)
	* [mongoose](https://www.npmjs.com/package/mongoose)
	* [mongoose中文网](http://www.mongoosejs.net/)

* [Node.js实战项目原型](https://uxu2kj.axshare.com)

* 使用express-generator脚手架，创建工程项目
```
npm install express-generator -g
express --view=ejs project   // -e 指的是使用 EJS模板引擎
cd project
npm install
npm start   // nodemon ./bin/www
```

* 使用mongoose驱动，连接数据库
```js
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', function(err) {
  console.log('数据库连接成败')
})
db.once('open', function() {
  console.log('数据库连接成功')
})
```

* 使用mongoose创建Model模型，用于对集合进行增删改查
```js
var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  name: String,
  age: Number
})

var userModel = mongoose.model('users', userSchema)

module.exports = userModel
```

--------------------------------------------------


## 十二、使用 express-generator 搭建工程项目

#### 1、express 简介

* [express官网](http://www.expressjs.com.cn/)
* express的优势：让Web开发更简洁，这也是框架存在的意义。
* 学习 express-generator 这个脚手架工具
* express安装：`npm install express -S`

#### 2、使用express-generator初始化项目

```
npm install express-generator -g
express --view=ejs project   // -e 指的是使用 EJS模板引擎
cd project
npm install
npm start   // nodemon ./bin/www
```
	
		
#### 3、详解express-generator脚手架搭建的项目架构
	
	(1)package.json文件详解
		body-parser 用于解析HTTP请求体中的body数据
		cookie-parser 用于解析cookie会话数据
		ejs 页面模块
		morgan 是一个日志工具
		serve-favicon 用于设置网站的favicon
		
	(2) /bin/www 入口文件详解
		端口号设置
		服务启动时的事件监听onError / onListen
		
	(3)app.js文件详解
		中间件：next()表示交给下一个中间件处理
		路由配置：res.render('index', {})渲染index模板引擎
		模块引擎的配置
		express.static()，设置静态资源目录
		bodyParser中间件，用于处理form表单默认的 application/x-www-form-urlencoded 数据编码
		cookieParser中间件，用于解析cookie数据
		404中间件，渲染error模板引擎
		
	(4)路由详解
		不能两次调用 res.send()
		向前端发送文件
			res.sendFile(__dirname+'form.html')
		如何定义一个路由？
			router.get('/xxx',function(req,res,next){})
			router.post('/xxx',function(req,res,next){})
			同时支持GET/POST：
			router.all('/xxx', function(req,res,next){})
			路由可以使用正则表达式
			router.get('/ab*cd', fn)
			
	(5)ejs模板引擎详解
		结合ejs官网，介绍什么是ejs？
		常用标签介绍（在代码中演示一下这些标签的用法）：
			<% %>  流程控制标签，用于包裹js代码
			<%= %> 直接输出值，不对“值”执行解析
			<%- %> 输出值，会对“值”中的HTML进行解析
			<%# %> 注释标签
			% 对特殊符号进行转义，如 %%
			<%- include('head', data) %>
		express渲染ejs的语法：
			res.render('ejs', data, options)

--------------------------------------------------

## 十三、RSETful规范及相关概念

#### 1、RESTful规范

* AJAX：GET / POST
	* GET: 
	* POST:
* [RESTful API 最佳实践](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

* 接口文档：举例，[CNode API 接口文档](https://cnodejs.org/api)

#### 2、接口测试

* 使用Postman 接口测试，安装Postman

* curl 客户端URL工具
* [curl 的用法指南](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
* [curl tutorial](https://curl.haxx.se/docs/manual.html)

```bash
curl -h
curl --help

// GET请求
curl https://cnodejs.org/api/v1/topics

// POST请求：使用-d 参数传递数据
curl -d'login=emma＆password=123'-X POST https://google.com/login
```

#### 3、BSR客户端渲染

> 前端利用ajax等数据交互手段获取服务端提供的数据之后，渲染到HTML页面.
> 方法：(ajax/jsonp/fetch) -> 获取数据 -> 文档碎片插入，拼接字符串，模板引擎，客户端运行了页面之后才进行.

* 优点：灵活，真正的前后端分离，方便于前后台各自更新维护。
* 缺点：对SEO不友好，增加了http请求次数，减缓了页面加载速度。


#### 4、SSR服务端渲染

> 在后端看来，页面文件其实就是一个“字符串”，所以服务端完全可以在获取到HTML文件的内容之后经过一些处理再返回给客户端，也就说，服务端可以将数据插入到HTML字符串中之后再返回给客户端。

* 优点: 对SEO友好，减少了http请求次数，加速了页面初次渲染速度。
* 缺点：不灵活，前后端耦合度太高。

--------------------------------------------------

## 十四、综合项目实战

* [Node.js实战项目原型](https://uxu2kj.axshare.com)
* 原型需求和UI需求简述

#### 1、实现注册功能

```html
<div class="form-box">
    <form action="/users/regist" method="post">
      <input type="text" name="username" value="" placeholder="请输入用户名">
      <input type="password" name="password" value="" placeholder="请输入密码">
      <input type="password" name="password2" value="" placeholder="请确认密码">
      <input type="submit" name="" value="注册">
    </form>
    <div>已有账号，<a href="/login">立即登录</a>！</div>
</div>
```
```js
router.post('/users/regist', (req, res, next)=>{})
```

#### 2、实现登录功能

```html
<div class="form-box">
    <form action="/users/login" method="post">
      <input type="text" name="username" value="" placeholder="请输入用户名">
      <input type="password" name="password" value="" placeholder="请输入密码">
      <input type="submit" name="" value="登录">
    </form>
    <div>已有账号，<a href="/regist">立即注册</a>！</div>
</div>
```
```
router.post('/users/login', (req, res, next)=>{})
```

#### 3、ES6解构赋值

```js
var obj = { a:1, b:2, c:3 }
let { a, b, c } = obj
```
* [变量的解构赋值](http://es6.ruanyifeng.com/#docs/destructuring)

#### 4、实现文章发布功能

```
<div class="article">
	<form action="/articles/write" method="post">
		<input type="text" name="title" placeholder="请输入文章标题" value="">
		<textarea name="content" class="xheditor"></textarea>
		<input type="submit" value="发布">
	</form>
</div>

<script type="text/javascript" src="/xheditor/jquery/jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="/xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript" src="/xheditor/xheditor_lang/zh-cn.js"></script>
<script>
    $('.xheditor').xheditor({
      tools: 'full',
      skin: 'default',
      upImgUrl: '/upload/img',  // 指定文件上传的接口
      html5Upload: false,
      upMultiple: 1    // 每次允许一张图片上传
    });
</script>
```


* <form> 标签的 enctype 属性
	* `application/x-www-form-urlencoded` 对所有数据进行默认编码，用于普通表单数据提交。
	* `multipart/form-data` 不对数据进行编码，在使用包含文件上传控件的表单时必须使用该值，用于文件上传。

* 图片文件上传过程
	* 前端，富文本编程器指定<form enctype="multipart/form-data"></form>
	* Node.js端使用`multiparty`解析文件数据
	* Node.js端使用`fs`管道流，把文件数据写入到 /public 静态资源服务器中
	* 文件写入成功后，把文件的访问路径返回给前端，插入到<img src="">的 src中。
	
	
#### 5、首页文章列表与分页查询

```html
<div class="list">
    <div class="row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
            <a href="">编辑</a>
            <a href="">删除</a>
        </span>
    </div>

    <div class="pages">
        <a href=""></a>
    </div>
</div>
```

#### 6、文章详情页

```html
<div class="detail">
    <div class="title"><%=item.title%></div>
    <div class='desc'>
      <span>作者：<%=item.username%></span>
      <span>发布时间：<%=item.time%></span>
    </div>
    <div class="content"><%-item.content%></div>
</div>
```


#### 7、阶段性Bug修复

* 修复图片上传Bug，`POST /articles/upload`
```
// 把 form 对象的创建，放到 /upload 接口内部去
var form = new multiparty.Form()
```
* 连接mongodb时，如果控制台提示 URL 解析有问题，在`db/connect.js`中为 connect方法添加两个配置项。
```js
// 引入模块
var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/express-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', (err)=>{
  console.log('数据库连接错误')
})
db.once('open', ()=>{
  console.log('数据库连接成功')
})
```


#### 8、文章编辑功能

* 复用`/write`页面，复用`POST /articles/write`接口。
* 使用`doc._id`来判断是文章新增，还是文章编辑。
* 当文章编辑时，`/articles/write`不能使query字符串传参，我们使用input隐藏域来传递参数。
```html
<%# POST请求不能使用 query字符串的方式传值 %>
<%# 我们使用 input 隐藏域传值 %>
<input type="hidden" name="username" value="<%= doc.username %>">
<input type="hidden" name="id" value="<%= doc._id %>">
```

#### 9、Session与登录拦截

* [Cookie 与 Session 入门学习](https://www.jianshu.com/p/6625fd1e8240)
* 安装：`npm install express-session -S`
* [express-session参考手册](https://www.npmjs.com/package/express-session)
```js
// session配置
app.use(session({
  secret: 'qf project',   // 任意字符串
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 5 }   // 指定登录会话的有效时长
}))

// 登录拦截
app.get('*', function(req, res, next) {
  var username = req.session.username
  var path = req.path
  console.log('session', username)
  if (path != '/login' && path != '/regist') {
    if (!username) {
      res.redirect('/login')
    }
  }
  next()
})
```
* 在登录`POST /users/login`成功时，设置Session
```js
req.session.username = username
req.session.isLogin = true
```

* 在网站内部页面顶部显示用户名、Logo、退出按钮等
```html
<div class="bar">
  <span><%= username %></span>
  <a href="/write">写文章</a>
  <a href="/users/logout">退出</a>
  <a href="/" class="home">
    <img src="/images/home.png" alt="首页">
  </a>
</div>
```
```
在其它页面中：<%- include('bar', {title: ''}) %>
```
* 在退出登录`GET /users/logout`时，重置或销毁Session
```
req.session.username = ''
req.session.isLogin = false
或者：
res.session.distroy()
// 跳转至登录页
res.redirect('/login')
```

#### 10、给网站加favicon图标

* [制作favicon图标](https://tool.lu/favicon/)
* 把生成的favicon图标，放到`/public`目录中去
* 安装：`npm install serve-favicon -S`
```
var favicon = require('serve-favicon')
var app = express();
// favicon配置
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
```


## 十五、WebSocket

#### 1、WebSocket是什么？
	
> 它用于建立客户端到服务端的双向交互通信，打开一条会话通道，让双方可以进行实时通信，这个连接的每一端就被称为是Socket。避免了使用传统的轮询方式来实现通信。

* 它的主要功能有二：
	* 一是向对方发送消息
	* 二是基于事件驱动的方式来接受对方发来的消息
	
#### 2、WebSocket 和 socket.io 之间的区别是什么

* socket.io是一个开源库，它对WebSocket进行分装。
	* 增强了浏览器的兼容性
	* 使用起来更加方便、功能也更加强大

#### 3、任务明确

* socket服务端开发
	* 接收客户端发来的消息
	* 然后分发给聊天室里所有其它的用户
* socket客户端开发
	* 把消息发送至服务端
	* 接收服务端的消息，并在客户端进行展示
		
#### 4、学习资源

* [HTML5 WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [socket.io 官网](https://socket.io/)
* [socket.io 仓库](https://github.com/socketio/socket.io/blob/HEAD/docs/README.md)
* [BootCDN 静态资源](https://www.bootcdn.cn/)



## 十六、跨域问题

#### 1、什么跨域？

> 跨域指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对javascript施加的安全限制。

* 同源策略：是指协议、域名、端口都要相同，只要三者有一个不同就会产生跨域。
* 例如：a页面想获取b页面资源，如果a、b页面的协议、域名、端口、子域名有不同，所进行的访问行为都是跨域的，而浏览器为了安全问题一般都限制了跨域访问，也就是不允许跨域请求资源。注意：**跨域限制访问，事实上是浏览器的限制策略，理解这一点很重要**。


#### 2、三种方式解决跨域问题

* JSONP（需前后端配合来完成）
	* 前端使用script标签来调用接口。
	* 后端需要配合使用res.jsonp()返回数据。
	* JSONP只适用于GET请求，POST请求用不了。
```html
// 第一种写法
<script>
	function handleData(res) {console.log('res', res)}
</script>
<script src="http://localhost:8001/user/list?callback=handleData"></script>
```
```html
// 第二种写法
<script>
	function handleData(res) {console.log('res', res)}
	
	var oScript = document.createElement('script')
	oScript.src = "http://localhost:8001/user/list?callback=handleData"
	oScript.type = "text/javascript"
	document.body.appendChild(oScript)
</script>
```

* 代理：使用`http-proxy-middleware`中间件来实现代理
	* 在Node.js中使用`http-proxy-middleware`来进行接口代理
	* 后端还可以使用Nginx进行接口代理
	* 前端可以使用Webpack进行接口代理（Vue阶段会讲）
```js
const app = require('express')()
const proxy = require('http-proxy-middleware')

app.use('/user', proxy({
	target: 'http://10.36.136.170:9999',
	changeOrigin: true
}))
```

* CORS
	* 只需要后端工程师来处理
```js
const app = require('express')()
//设置跨域访问（前端需要清除缓存后，才能再测试跨域）
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```


## 十七、Token 规范
		
* [JSON Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
* [JSON Web Tokens](https://jwt.io/)
* [接口文档 参考](https://cnodejs.org/api)
* Token长什么样？
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
* Token从哪里来？
	Token在服务端生成，当用户登录时，或者调用指定接口时，会返回Token给客户端用户，客户端用户收到Token后，保存在前端（比如保存在localStorage中），之后再请求其它有访问权限的后端接口时，需要把Token携带上传递给后端进行验证。
* 如何把Token传递至后端呢？这根据后端的要求，通常会把Token放在 headers 中进行传递。用 jQuery.ajax() 示例如下：
```js
$.ajax({
	type: "GET"
	url: "http://192.168.0.204:8000/api/getOrderList",
	data: {},
	headers: {
		token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	},
	success: function(data){
		console.log(data)
	}
})
```