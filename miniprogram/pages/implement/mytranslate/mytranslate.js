// pages/implement/translate/translate.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCh:false,//显示提示
    translateNu:null,
    translateInfo:null
  },

  /*获取搜索框的值*/
  input:function(e){
    this.setData({
      translateNu:e.detail.value
    })
  },
  /*点击翻译*/
  searchTranslate:function(){
    // console.log(this.data.translateNu)
    var thatpage=this;
    app.getTranslation(this.data.translateNu,function(data){
      console.log(data)
      thatpage.setData({
        translateInfo:data,
        showCh:true
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