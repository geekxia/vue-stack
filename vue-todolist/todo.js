var app = new Vue({
  el: '#app',
  data: {
    todo: '',
    list1: [],
    list2: []
  },
  methods: {
    confirm() {
      console.log(this.todo)
      if (!this.todo) return
      this.list1.push({
        title: this.todo,
        time: Date.now()
      })
      this.todo = ''
    },
    remove(idx, type) {
      if (type === 'up') {
        this.list1.splice(idx, 1)
      } else {
        this.list2.splice(idx, 1)
      }
    },
    transform(idx, type) {
      if (type === 'up') {
        var res = this.list1.splice(idx, 1)
        this.list2.push(res[0])
      } else {
        var res = this.list2.splice(idx, 1)
        this.list1.push(res[0])
      }
    }
  }
})
