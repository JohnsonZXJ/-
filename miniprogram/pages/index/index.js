//index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manager: false
  },
  toChild(e) {
    console.log(wx.getStorageSync('myuserInfo'))
    if(wx.getStorageSync('myuserInfo')){
      wx.navigateTo({
        url: '/pages' + e.currentTarget.dataset.url
      })
    }else{
      setTimeout(function(){
        wx.showToast({
          title: '请点击"我的"授权个人信息',
          icon: 'none'
        })
      },2000)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync('username')){
      this.setData({
        manager: true
      })
    }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})