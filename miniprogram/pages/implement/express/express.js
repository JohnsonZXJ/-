// pages/implement/express/express.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressNu:null,
    expressInfo:null
  },

  /*获取搜索框的值*/
  input:function(e){
    this.setData({
      expressNu:e.detail.value
    })
  },
  /*点击查询快递*/
  searchExpress:function(){
    var thispage=this;
    app.getExpressInfo(this.data.expressNu,function(data){
      console.log(data)
      thispage.setData({
        expressInfo:data
      })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})