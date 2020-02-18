//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //ColorUI导入项目
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getExpressInfo:function(nu,cb){
    wx.request({
      url: 'https://route.showapi.com/64-19?showapi_appid=145813&showapi_sign=deb6cb771c3c436e8c42800027592ecd&com=auto&nu='+nu, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'enctype': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res) {
        cb(res.data)
      },
    })
  },
  getTranslation:function(keyword,ql){
    wx.request({
      url: 'https://route.showapi.com/1196-2?showapi_appid=145813&showapi_sign=deb6cb771c3c436e8c42800027592ecd&keyword='+keyword, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'enctype': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res) {
        ql(res.data)
      },
    })
  },
  getNewInfo:function(nl){
    wx.request({
      url: 'https://route.showapi.com/582-2?showapi_appid=145813&showapi_sign=deb6cb771c3c436e8c42800027592ecd', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'enctype': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res) {
        nl(res.data)
      },
      false:function(res){
        
      }
    })
  },
  getEnglishInfo:function(el){
    wx.request({
      url: 'https://route.showapi.com/1211-1?showapi_appid=145813&showapi_sign=deb6cb771c3c436e8c42800027592ecd&count=10', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'enctype': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res) {
        el(res.data)
      },
      false:function(res){
        
      }
    })
  },
  globalData: {
    userInfo: null,
    ordinaryId: null,
    myuserInfo: null
  }
})
