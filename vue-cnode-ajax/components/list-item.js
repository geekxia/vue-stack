Vue.component('list-item', {
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  template: `
  <div class='article'>
    <img alt="头像" :src='article.author.avatar_url'/>
    <div class='num'>
      <span v-text='article.reply_count'></span>
      <span>/</span>
      <span v-text='article.visit_count'></span>
    </div>
    <span class='label'>置顶</span>
    <span class='title' v-text='article.title'></span>
    <span class='time' v-text='article.last_reply_at'></span>
  </div>
  `
})
