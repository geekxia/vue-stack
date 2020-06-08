Vue.component('list-loading', {
  props: {
    show: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  template:`
  <div class="loading" v-show='show'>
    <img src="./static/loading.gif" alt="加载中" />
  </div>
  `
})
