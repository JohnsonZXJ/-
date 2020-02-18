// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');//获取请求

// 云函数入口函数
exports.main = async (event, context) => {

  //获取结果直接return
  return rp(`http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`)
  .then(function (res) {
      // Process html...
      console.log(res)
      return res;
  })
  .catch(function (err) {
      // Crawling failed...
      console.err(err);
  });
}