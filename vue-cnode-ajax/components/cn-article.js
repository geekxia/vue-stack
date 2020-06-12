Vue.component('cn-article', {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 把tab英文转化成对应的中文显示
    label: function() {
      var cates = [
        { id: 1, title: '全部', tab: ''},
        { id: 2, title: '精华', tab: 'good'},
        { id: 3, title: '分享', tab: 'share'},
        { id: 4, title: '问答', tab: 'ask'},
        { id: 5, title: '招聘', tab: 'job'}
      ]
      var ele = cates.find(ele=>ele.tab==this.article.tab)
      return ele ? ele.title : '置顶'
    },
    time: function() {
      // 用现在的时间戳 - 返回的reply时间戳
      var d = (Date.now() - Date.parse(this.article.last_reply_at)) / (1000*60*60*24)
      return d < 1 ? (d*24<1 ? Math.round(d*24*60)+'分钟前' : Math.round(d*24)+'小时前') : Math.round(d)+'天前'
    }
  },
  template: `
  <div class='article'>
    <img :src='article.author.avatar_url' :title='article.author.loginname' />
    <div class='num'>
      <span v-text='article.reply_count'></span>
      <span>/</span>
      <span v-text='article.visit_count'>100</span>
    </div>
    <span class='label' v-text='label'></span>
    <span class='title' v-text='article.title'></span>
    <span class='time' v-text='time'></span>
  </div>
  `
})
