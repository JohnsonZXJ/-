// pages/myInfo/myInfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      '/images/zsm.jpg'
    ],
    mylist:[]
  },

  onGotUserInfo:function(event){
    var that = this;
    // console.log(event.detail.rawData)
    if(event.detail.rawData){
      wx.showToast({
        title: '获取成功',
        icon: 'success'
      })
      app.globalData.userInfo = event.detail
      wx.setStorageSync('myuserInfo', app.globalData.userInfo)
      console.log(app.globalData.userInfo.userInfo)
      that.setData({
        mylist: app.globalData.userInfo.userInfo
      })
    }
  },

  /*打电话功能*/
  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '32962566',
      success:{
      }
    })
  },
  /*赞赏作者,显示隐藏二维码*/
  LA:function(e){
    wx.previewImage({
      urls: ['https://776c-wlzx-q5sjr-1258985448.tcb.qcloud.la/zsm.jpg?sign=650e344dc3db13ca666502bfa9e3e45a&t=1585635495'],
    })
  },

  exit:function(){
    wx.showModal({
      title: '提示',
      content: '确定退出此账号?',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          /*清除本地缓存*/
          wx.clearStorage();
          wx.clearStorageSync();
          app.globalData.userInfo=null;
          app.globalData.bestUser = null;
          app.globalData.ordinaryId = null;
          app.globalData.myuserInfo = null;
          console.log('本地缓存已清除')
          wx.reLaunch({
            url: '../login/login',
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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