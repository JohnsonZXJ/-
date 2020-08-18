// pages/index/teamsreach/teamsreach.js
var app = getApp();
wx.cloud.init;
const db = wx.cloud.database();
const Team = db.collection("Team")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Teamlist:[]
  },

  add:function(){
    wx.navigateTo({
      url: './edit/edit',
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
    var that = this;
    Team.orderBy('Ttime','desc').get({
      success:res=>{
        console.log(res.data)
        that.setData({
          Teamlist:res.data
        })
      },fail:err=>{
        console.log(err)
      }
    })
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