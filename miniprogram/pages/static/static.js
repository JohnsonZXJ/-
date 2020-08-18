// pages/static/static.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goTools:function(){
    wx.navigateTo({
      url: '../implement/tools/tools',
    })
  },
  showPic:function(){
    wx.previewImage({
      urls: ['https://776c-wlzx-q5sjr-1258985448.tcb.qcloud.la/help.jpg?sign=1f82988d3055c8181a548b0548cdc9c1&t=1585634683'],
    })
  },
  stuCard:function(){
    wx.navigateTo({
      url: './stucard/stucard',
    })
  },
  psyGo:function(){
    wx.navigateTo({
      url: './psychological/psychological',
    })
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