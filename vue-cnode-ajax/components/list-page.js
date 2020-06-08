Vue.component('list-page', {
  template:`
  <div class="pages">
    <span @click='pageChange("up")'>上一页</span>
    <span @click='pageChange("down")'>下一页</span>
  </div>
  `,
  methods: {
    pageChange(type) {
      if (type =='up') {
        this.$emit('prev', 'up')
      } else {
        this.$emit('next', 'down')
      }
    }
  }
})
