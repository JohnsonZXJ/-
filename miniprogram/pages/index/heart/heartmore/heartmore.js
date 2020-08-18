// pages/index/heart/heartmore/heartmore.js
var util = require('../../../../utils/util.js');
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database();
const Heartmore = db.collection('Heartmore')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    inputValue: '',
    // 获取列表所有评论
    list: [],
    // 更新信息
    loadingbox:false,
    // 获取回复名
    listname: [],
    listnum:''
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
    // console.log(this.data.listnum)
    wx.showLoading({
      title: '发送中...',
      icon: 'none'
    })
    /* 点击发送部分，数据存入云数据库 */
    var that = this;
    var contentValNew = that.data.contentValNew;
    var check = wx.getStorageSync('myuserInfo');
    var name = wx.getStorageSync('kkname');
    var faketime = wx.getStorageSync('kktime')
    if (contentValNew != null) {
      // 调用函数时，传入new Date()参数，返回值是日期和时间
      var time = util.formatTime(new Date());
      db.collection('Heartmore')
      .add({
        data: {
          // push向尾部添加数据，如果是向顶部添加则用unshfit
          /*MuserContent: _.push(new Array([check.userInfo.avatarUrl, check.userInfo.nickName,contentValNew,time,_openid]))*/
          MContent:contentValNew,
          MImg:check.userInfo.avatarUrl,
          MName:check.userInfo.nickName,
          MTime:time,
          RNickname:name,
          RTime:faketime,
          number:that.data.listnum+1
        },
        success: res => { //箭头函数
          console.log(res);
        },
        fail: err => {
          console.log(err);
        }
      })
      db.collection('Heart').where({
        RNickname: wx.getStorageSync('kkname'),
        RTime: wx.getStorageSync('kktime')
      }).update({
        data:{
          Conlen: _.inc(1) //报错区域
        },success(res){
          console.log(res)
        },fail(err){
          console.log(err)
        }
      })
      /* 发送后返回顶部并更新页面 */
      wx.pageScrollTo({
        scrollTop: 0
      })
      Heartmore.where({
        RNickname: wx.getStorageSync('kkname'),
        RTime: wx.getStorageSync('kktime')
      }).get({
        success(res) {
          console.log(res.data)
          that.setData({
            list: res.data,
            listnum:res.data.length
          })
        }
      })
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('kkname', options.name),
    wx.setStorageSync('kktime', options.time)
    var that = this;
    that.setData({
      listname: wx.getStorageSync('kkname')
    })
    Heartmore.where({
      RNickname: wx.getStorageSync('kkname'),
      RTime: wx.getStorageSync('kktime')
    }).get({
      success(res) {
        console.log(res.data)
        that.setData({
          list: res.data,
          listnum:res.data.length,
          countContent: res.data.length
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
    Heartmore.where({
      RNickname: wx.getStorageSync('kkname'),
      RTime: wx.getStorageSync('kktime')
    }).get({
      success(res) {
        console.log(res.data)
        that.setData({
          list: res.data,
          listnum:res.data.length
        })
      }
    })
    wx.stopPullDownRefresh()
  },
  onReachBottom: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      loadingbox:true,
      isLoad:false
    })
    console.log(that.data.countContent)
    Heartmore
    .skip(that.data.countContent).limit(10)
    .where({
      RNickname: wx.getStorageSync('kkname'),
      RTime: wx.getStorageSync('kktime')
    })
    .orderBy('MTime', 'desc')
    .get({
      success(res) {
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            var temp = res.data[i]
            var thispageAll = that.data.list.concat(temp)
            that.setData({
              list: thispageAll
            })
          }
          that.setData({
            countContent: that.data.countContent+res.data.length,
            isLoad:true
          })
          console.log(that.data.isLoad)
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