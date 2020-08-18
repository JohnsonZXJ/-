// miniprogram/pages/wlzx/wlzxadd/wlzxadd.js
var util = require('../../../utils/util.js');
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database(); //初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameData:'',
    numData:'',
    homeData:'',
    homedetailData:'',
    idData:'',
    alztData:'',
    textareaBInput1:''
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
  homeData(e) {
    this.setData({
      homeData: e.detail.value
    })
  },
  homedetailData(e) {
    this.setData({
      homedetailData: e.detail.value
    })
  },
  idData(e) {
    this.setData({
      idData: e.detail.value
    })
  },
  alztData(e) {
    this.setData({
      alztData: e.detail.value
    })
  },
  textareaBInput1(e) {
    this.setData({
      textareaBInput1: e.detail.value
    })
  },
  datasetGo:function(){
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    var that = this;
    var nameData = that.data.nameData
    var  numData = that.data. numData
    var homeData = that.data.homeData
    var homedetailData = that.data.homedetailData
    var idData = that.data.idData
    var alztData = that.data.alztData
    var textareaBInput1 = that.data.textareaBInput1
    if(that.data.nameData!=''&&that.data. numData!=''&&that.data.homeData!=''&&that.data.homedetailData!=''&&that.data.idData!=''&&that.data.alztData!=''&&that.data.textareaBInput1!=''){
      wx.showLoading({
        title: '加载中'
      })
      db.collection('NetWork').add({
        data: {
          name: nameData,
          number:  numData,
          home: homeData,
          homedetail: homedetailData,
          id: idData,
          alzt: alztData,
          errortext: textareaBInput1,
          time: time
        },
        success: res => { //箭头函数
          console.log(res);
          wx.hideLoading();
          wx.showToast({
            title: '录入成功！',
            icon:'success'
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})