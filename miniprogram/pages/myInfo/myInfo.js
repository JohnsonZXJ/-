// pages/myInfo/myInfo.js
wx.cloud.init();
const db = wx.cloud.database();//初始化数据库
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
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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