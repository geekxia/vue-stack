var app = new Vue({
  el: '#app',
  data: {
    todo: '',
    data: {}
  },
  mounted() {
    // 调接口
    this.getTodoList()
  },
  methods: {
    confirm() {
      var that = this
      if (!this.todo) return
      fetch('/todo/addTodo', 'POST', {task: this.todo}, function() {
        that.todo = ''
        that.getTodoList()
      })
    },
    remove(item) {
      var that = this
      fetch('/todo/deleteTodo', 'GET', {id: item._id}, function() {
        that.getTodoList()
      })
    },
    transform(item, type) {
      var that = this
      var status = '0'
      if (type === 'up') {
        status = '1'
      }
      fetch('/todo/changeTodoStatus', 'GET', {id:item._id, status:status}, function(){
        that.getTodoList()
      })
    },
    edit(item,idx,type) {
      var that = this
      fetch('/todo/editTodo', 'POST', {id:item._id,task:item.task}, function() {
        that.getTodoList()
      })
    },
    // 第次页面刷新时，调用该方法
    getTodoList() {
      var that = this
      fetch('/todo/getMyTodos', 'GET', {}, function(res) {
        that.data = res.data
        console.log('this', that.data)
      })
    }
  }
})
