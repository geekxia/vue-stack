var baseUrl = 'https://cnodejs.org/api/v1'

function fetch(url, method, data, callback) {
  $.ajax({
    url: baseUrl+url,
    method: method,
    data: data,
    success: function(res) {
      console.log(res)
      if(res.success) {
        callback && callback(res.data)
      }
    },
    fail: function(err) {
      console.log('调接口失败')
    }
  })
}
