var baseUrl = 'http://10.36.147.164:9999'

function fetch(url, method, data, callback) {
  data.userId = 'sz191613035'
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
