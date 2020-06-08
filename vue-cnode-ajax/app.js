var app = new Vue({
  el: '#app',
  data: {
    page: 1,  // 控制分页
    tab: '',  // 用于分类筛选
    list: [], // 文章列表
    loaded: true,  // 加载中
    cates: [
      {id:1, title:'全部', value:''},
      {id:1, title:'精华', value:'good'},
      {id:1, title:'分享', value:'share'},
      {id:1, title:'问答', value:'ask'},
      {id:1, title:'招聘', value:'job'}
    ]
  },
  mounted() {
    this.getList()
  },
  watch: {
    // 侦听器，监听tab的变化，如果变化就重新调接口刷新页面
    tab (val) {
      this.page = 1
      this.getList()
    }
  },
  methods: {
    // 分页
    pageHandle(type) {
      if (type === 'down') {
        this.page++
        this.getList()
      } else {
        // 页面不能小于1
        if(this.page===1) {
          alert('已经是第一页了')
        } else {
          this.page--
          this.getList()
        }

      }
    },
    getList() {
      // 显示“加载中”
      this.loaded = false
      var params = {
        page: this.page,
        tab: this.tab,
        limit: 5,
        mdrender: false
      }
      var that = this
      fetch('/topics', 'GET', params, function(arr) {
        that.list = arr
        // 隐藏“加载中”
        that.loaded = true
      })
    }
  }
})
