// v-model = v-bind:value + v-on:input

Vue.component('cn-filter', {
  props: {
    list: { type: Array, required: true },
    value: {type: String, required: false, default: ''}
  },
  template: `
  <div class='cates'>
    <span
    v-for='cate in list'
    :key='cate.id'
    v-text='cate.title'
    :class='{"on": cate.tab==value}'
    @click='$emit("input", cate.tab)'
    >
    </span>
  </div>
  `
})
