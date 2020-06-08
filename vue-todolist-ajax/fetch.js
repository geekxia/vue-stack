var baseUrl = 'http://10.36.136.170:9999'

function fetch(url, method, data, callback) {
  $.ajax({
    url: baseUrl+url,
    method: method,
    data: data,
    success: function(res) {
      console.log(res)
      if(res.err==0) {
        callback && callback(res)
      }
    },
    fail: function(err) {
      console.log('调接口失败')
    }
  })
}
