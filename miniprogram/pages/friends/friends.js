// pages/friends/friends.js
var app = getApp();
Page({

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
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '运动圈',
        img: 'http://b.zol-img.com.cn/desk/bizhi/image/5/960x600/1403834965131.jpg',
        url: '/friends/sport/sport'
    },
      {
        title: '知识圈',
        img: 'http://5b0988e595225.cdn.sohucs.com/images/20181206/89c2b9fcfcc449d5aeb32a1752b94f88.jpeg',
        url: '/friends/knowledge/knowledge'
      },
      {
        title: '影视圈',
        img: 'http://5b0988e595225.cdn.sohucs.com/images/20180520/688ed41d6f7e4fd78d307e6922468c4a.jpeg',
        url: '/friends/film/film'
      },
      {
        title: '失物招领圈',
        img: 'http://www.isun.org/uploadfile/2018/1220/20181220102609533.png',
        url: '/friends/found/found'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages' + e.currentTarget.dataset.url
      })
    },
  }
})