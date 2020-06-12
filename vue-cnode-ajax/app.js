// 组件化开发的意义
// 1、使用第三方组件库可以快速开发
// 2、便于代码复用和维护

var app = new Vue({
  el: '#app',
  data: {
    // 业务需要
    cates: [
      { id: 1, title: '全部', tab: ''},
      { id: 2, title: '精华', tab: 'good'},
      { id: 3, title: '分享', tab: 'share'},
      { id: 4, title: '问答', tab: 'ask'},
      { id: 5, title: '招聘', tab: 'job'}
    ],
    // 接口需要
    artList: [],  // 文章列表
    tab: '',      // 控制筛选
    page: 1,      // 控制分页
    // 状态、交互需要
    loaded: true  // 控制“加载中”的显示与隐藏
  },
  watch: {
    // 监听筛选组件变化，重新调接口
    tab: function(newVal, oldVal) {
      this.page = 1
      this.getList()
    },
    page: function() {
      this.getList()
    }
  },
  mounted: function() {
    this.getList()
  },
  methods: {
    getList: function() {
      var that = this
      // 调接口开始
      that.loaded = false
      var data = {
        page: this.page,  // 动态的入参
        tab: this.tab,
        limit: 5,         // 静态的入参
        mdrender: 'false'
      }
      fetch('/topics', 'GET', data, function(arr) {
        console.log('app', arr)
        that.artList = arr
        // 调接口结束
        that.loaded = true
      })
    }
  }

})
