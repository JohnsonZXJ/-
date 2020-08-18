// pages/index/teamsreach/edit/edit.js
var util = require('../../../../utils/util.js');
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database(); //初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kindData:'',
    bossData:'',
    nameData:'',
    numData:'',
    relationData:'',
    requestData:''
  },
  kindData(e) {
    this.setData({
      kindData: e.detail.value
    })
  },
  bossData(e) {
    this.setData({
      bossData: e.detail.value
    })
  },
  nameData(e) {
    this.setData({
      nameData: e.detail.value
    })
  },
  numData(e) {
    this.setData({
      numData: e.detail.value
    })
  },
  relationData(e) {
    this.setData({
      relationData: e.detail.value
    })
  },
  requestData(e) {
    this.setData({
      requestData: e.detail.value
    })
  },
  datasetGo:function(){
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    var that = this;
    if(that.data.kindData!=''&&that.data.bossData!=''&&that.data.nameData!=''&&that.data.numData!=''&&that.data.relationData!=''&&that.data.requestData!=''){
      wx.showLoading({
        title: '加载中'
      })
      db.collection('Team').add({
        data: {
          Tkind: that.data.kindData,
          Tboss:  that.data.bossData,
          Tname: that.data.nameData,
          Tnum: that.data.numData,
          Trelation: that.data.relationData,
          Trequest: that.data.requestData,
          Ttime: time
        },
        success: res => { //箭头函数
          console.log(res);
          wx.hideLoading();
          wx.navigateBack({
            delta: 1
          })
          wx.showToast({
            title: '发送成功！',
            icon:'success',
            duration:1000
          })
        },
        fail: err => {
          console.log(err);
        }
      })
    }else{
      wx.showToast({
        title: '值都不能为空！',
        icon: 'none',
        duration: 1000
      })
      return;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideLoading()
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

  }
})