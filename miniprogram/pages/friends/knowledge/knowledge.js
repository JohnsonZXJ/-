// pages/friends/knowledge/knowledge.js
var util = require('../../../utils/util.js');
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database(); //初始化数据库
const KnowledgeCollection = db.collection('Knowledge')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    inputValue: '',
    /*以下获取用户所有信息*/
    thispageAll1: []
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },
  contentInput: function (event) {
    this.setData({
      contentValNew: event.detail.value
    })
    // console.log(event.detail.value)
  },
  contentSend: function () {
    /* 点击发送部分，数据存入云数据库 */
    var that = this;
    var contentValNew = that.data.contentValNew;
    if(contentValNew!=null){
      wx.getStorageSync('myuserInfo')
      // 调用函数时，传入new Date()参数，返回值是日期和时间
      var time = util.formatTime(new Date());
      db.collection('Knowledge').add({
        data: {
          RNickname: app.globalData.userInfo.userInfo.nickName,
          RImgurl: app.globalData.userInfo.userInfo.avatarUrl,
          RContent: contentValNew,
          RTime: time
        },
        success: res => { //箭头函数
          console.log(res);
        },
        fail: err => {
          console.log(err);
        }
      })
      /* 发送后更新页面 */
      db.collection('Knowledge').orderBy('RTime', 'desc').get({
        success(res){
          console.log(res.data)
          that.setData({
            thispageAll1: res.data
          })
        }
      })
    }else{
      wx.showToast({
        title: '消息不能为空!',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo.userInfo)
    wx.getStorageSync('myuserInfo')
    var that = this;
    db.collection('Knowledge').orderBy('RTime', 'desc').get({
      success(res){
        console.log(res.data)
        that.setData({
          thispageAll1: res.data
        })
      }
    })
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
    /* 下拉更新页面 */
    db.collection('Knowledge').orderBy('RTime', 'desc').get({
      success(res){
        console.log(res.data)
        that.setData({
          thispageAll1: res.data
        })
      }
    })
    wx.stopPullDownRefresh();
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