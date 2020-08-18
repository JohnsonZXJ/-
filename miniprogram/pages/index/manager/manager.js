// pages/index/manager/manager.js
var app = getApp();
wx.cloud.init;
const db = wx.cloud.database(); //初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalName: null,
    textareaAValue: '',
    navbar: ['心里话', '审核列表'],
    currentTab: 0,
    /*获取Team的内容*/
    thisteam:[],
    /*以下获取用户所有信息*/
    thispageAll: []
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  DataDel: function (e) {
    var RcontentDel = e.currentTarget.dataset.src;
    var TimeDel = e.currentTarget.dataset.times;
    var Nickname = e.currentTarget.dataset.names;
    console.log(e)
    //删除主评论
    db.collection('Heart')
      .doc(RcontentDel)
      .remove()
      .then(res => {
        console.log(res)
        /*刷新页面*/
        const pages = getCurrentPages()
        const perpage = pages[pages.length - 1]
        perpage.onLoad()
        wx.showToast({
          title: '删除评论成功！',
          icon: 'success',
          duration: 1000
        })
      }).catch(err => {
        console.log(err)
      })
      //删除追加评论
      wx.cloud.callFunction({
        name: 'heartmoredelete',
        data: {
          a: Nickname,
          b: TimeDel
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },
  DataDel2: function (e) {
    var id = e.currentTarget.dataset.src;
    console.log(id)
    //删除主评论
    db.collection('Team')
      .doc(id)
      .remove()
      .then(res => {
        console.log(res)
        /*刷新页面*/
        const pages = getCurrentPages()
        const perpage = pages[pages.length - 1]
        perpage.onLoad()
        wx.showToast({
          title: '删除评论成功！',
          icon: 'success',
          duration: 1000
        })
      }).catch(err => {
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    db.collection('Heart').orderBy('RTime', 'desc').get({
      success(res) {
        console.log(res.data)
        that.setData({
          thispageAll: res.data
        })
      }
    })
    db.collection('Team').orderBy('Ttime', 'desc').get({
      success(res) {
        console.log(res.data)
        that.setData({
          thisteam: res.data
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