// pages/index/heart/heart.js
var util = require('../../../utils/util');
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database(); //初始化数据库
const Heart = db.collection('Heart')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    inputValue: '',
    /*以下获取用户所有信息*/
    thispageAll: [],
    // 更新信息
    loadingbox: false,
    list: [],
    // 显示评论与否
    getItem: false,
    // 获取heart数据库数据的条数
    allcount: '',
    //点赞图标切换
    appreciateIcon: 'appreciate',
    iconColor: 'grey',
    flag: false
  },
  appreciateAdd:function(){
    var that = this;
    if (that.data.flag == true){
      that.setData({
        appreciateIcon:'appreciatefill',
        iconColor: 'red',
        flag: false
      })
    }else{
      that.setData({
        appreciateIcon:'appreciate',
        iconColor: 'grey',
        flag: true
      })
    }
    
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
  moreContent:function(e){
    var name = e.target.dataset.index
    var time = e.target.dataset.second
    wx.navigateTo({
      url: '../heart/heartmore/heartmore?name='+name+'&time='+time,
    })
  },
  contentInput: function (event) {
    this.setData({
      contentValNew: event.detail.value
    })
    // console.log(event.detail.value)
  },
  contentSend: function () {
    console.log(wx.getStorageSync('myuserInfo'))
    if(wx.getStorageSync('myuserInfo')){
      wx.showLoading({
        title: '发送中...',
        icon: 'none'
      })
      /* 点击发送部分，数据存入云数据库 */
      var that = this;
      var contentValNew = that.data.contentValNew;
      var countContentlen = that.data.countContent;
      var check = wx.getStorageSync('myuserInfo')
      if (contentValNew != null) {
        // 调用函数时，传入new Date()参数，返回值是日期和时间
        var time = util.formatTime(new Date());
        Heart.add({
          data: {
            RNickname: check.userInfo.nickName,
            RImgurl: check.userInfo.avatarUrl,
            RContent: contentValNew,
            RTime: time,
            number: countContentlen+1,
            RFavor:0,
            Conlen:0
          },
          success: res => { //箭头函数
            console.log(res);
          },
          fail: err => {
            console.log(err);
          }
        })
        /* 发送后返回顶部并更新页面 */
        wx.pageScrollTo({
          scrollTop: 0
        })
        this.onShow()
        this.setData({
          inputValue: ''
        })
        wx.hideLoading()
        wx.showToast({
          title: '发送成功！',
          icon: 'success',
          duration: 1000
        })
      } else {
        wx.showToast({
          title: '消息不能为空!',
          icon: 'none'
        })
      }
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
  onLoad: function (event) {
    
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
    wx.getStorageSync('myuserInfo')
    console.log(wx.getStorageSync('myuserInfo'))
    var that = this;
    Heart.count({
      success(res){
        that.setData({
          countContent:res.total
        })
        // console.log(res.total)
      }
    })
    Heart.orderBy('RTime', 'desc').get({
      success(res) {
        console.log(res.data)
        that.setData({
          thispageAll: res.data,
          homelength:res.data.length
        })
      }
    })
    // 获取评论
    wx.cloud.callFunction({
      name:"getheartmore",
      success:res=>{
        that.setData({
          list: res.result.data.data,
          listNum:res.result.data.data.length
        })
        console.log(res)
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
    /* 下拉更新页面 */
    this.onLoad()
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (event) {
    // console.log(event)
    var that = this;
    that.setData({
      loadingbox:true,
      isLoad:false
    })
    // console.log(that.data.homelength)
    Heart.skip(that.data.homelength).limit(10).orderBy('RTime', 'desc').get({
      success(res) {
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            var temp = res.data[i]
            var thispageAll = that.data.thispageAll.concat(temp)
            that.setData({
              thispageAll: thispageAll
            })
          }
          that.setData({
            homelength: that.data.homelength+res.data.length,
            isLoad:true
          })
        }else{
          that.setData({
            isLoad:true
          })
        }
      }
    })
    wx.stopPullDownRefresh();
  }
})