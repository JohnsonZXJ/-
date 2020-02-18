//index.js
var app = getApp();
Page({
  CustomBar: app.globalData.CustomBar,
  /**
   * 页面的初始数据
   */
  data: {
    
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
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    
  },
  methods: {
    toChild(e) {
      var check = wx.getStorageSync('myuserInfo')
      console.log(check)
      if(check){
        wx.navigateTo({
          url: '/pages' + e.currentTarget.dataset.url
        })
      }else{
        setTimeout(function(){
          wx.navigateTo({
            url: '/pages/myInfo/myInfo'
          })
          wx.showToast({
            title: '请点击"我的"授权个人信息',
            icon: 'none'
          })
        },2000)
      }
    },
  }
})