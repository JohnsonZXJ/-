// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null,
  },
  onGotUserInfo:function(event){
    app.globalData.userInfo = event.detail.userInfo
    console.log(app.globalData.userInfo)
  },
  
  //普通学生登录
  studentLogin:function(){
    var ordinaryId = '普通用户登录';
    console.log(ordinaryId)
    app.globalData.ordinaryId = ordinaryId;
      // console.log(app.globalData.bestUser);
      //测试（可删除）
      wx.setStorageSync('ptyh', app.globalData.ordinaryId)
      console.log("获取本地缓存");
    wx.reLaunch({
      url: '../index/index',
    })
  },

  userNameinput: function (event) {
    this.setData({
      username: event.detail.value
    })
  },
  userPassword: function (event) {
    this.setData({
      password: event.detail.value
    })
  },
  stuLogin: function () {
    var that = this;
    var username = that.data.username
    var password = that.data.password
    console.log(that.data.username + ":" + that.data.password)
    if (this.data.username == null) {
      wx.showToast({
        title: '账号不能为空',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    if (this.data.password == null) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    wx.showLoading({
      title: '加载中'
    })
    /*
    给13栋的小网管
    账号201913
    密码201913
    */
    if(this.data.username=='928509016'&&this.data.password=='2457893610'){
      app.globalData.bestUser = this.data;
      // console.log(app.globalData.bestUser);
      //测试（可删除）
      wx.setStorageSync('username', app.globalData.bestUser)
      console.log("获取本地缓存");
      wx.reLaunch({
        url: '../index/index'
      })
    }else{
      wx.showToast({
        title: '用户不存在',
        icon: 'none',
        duration: 1000
      })
    }
          //发起网络请求
         /* wx.request({
            url: 'https://hbegob.cn/wx_xcx_kl/wx_login',
            method: 'POST',
            data: {
              username: username,
              password: password,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success(res) {
              app.globalData.userInfo=res.data;
              console.log(app.globalData.userInfo);
              wx.hideLoading();
              //测试（可删除）
              wx.setStorageSync('username', app.globalData.userInfo)
              console.log("获取本地缓存");
              wx.hideLoading();
              console.log(res);
              var result = res.data;
              if (result == 0) {
                wx.showToast({
                  title: '用户不存在',
                  icon: 'none',
                  duration: 1000
                })
              } else {
                console.log(app.globalData.userInfo);
                wx.showToast({
                  title: '登录成功',
                  icon: 'success',
                  duration: 1000
                })
                setTimeout(function () {
                  wx.reLaunch({
                    url: '../index/index'
                  })
                }, 1000)
              }
            },
            fail(res) {
              wx.showToast({
                title: '服务器链接出错',
                icon: 'none',
                duration: 1000
              })
            }
          })*/
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    /*测试（可删除）
    //获取本地数据(后端)
    var session = wx.getStorageSync('username');
    console.log(session);
    if (!(session == null||session =="")){
      app.globalData.userInfo=session;
      console.log(app.globalData.userInfo);
      wx.reLaunch({
        url: '../index/index',
      })
    }
    console.log(app.globalData.userInfo);
  */
    /*测试（可删除）*/
    //获取本地数据(仅前端)
    //网管员部分
    var session1 = wx.getStorageSync('username');
    console.log(session1);
    if (!(session1 == null || session1 == "")) {
      app.globalData.bestUser = session1;
      // console.log(app.globalData.bestUser);
      wx.reLaunch({
        url: '../index/index',
      })
    }
    var session2 = wx.getStorageSync('ptyh');
    console.log(session2);
    if (!(session2 == null || session2 == "")) {
      app.globalData.ordinaryId = session2;
      // console.log(app.globalData.bestUser);
      wx.reLaunch({
        url: '../index/index',
      })
    }
    // console.log(app.globalData.bestUser);
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

  },
  //授权登录
  bindGetUserInfo(res) {
    console.log(res);
    if (res.detail.userInfo) {
      console.log("点击了同意授权");
    } else {
      console.log("点击了拒绝授权");
    }
  }
})
