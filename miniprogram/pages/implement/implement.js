// pages/implement/implement.js
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
      title: '故障解决方案',
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1553403879,1270427243&fm=26&gp=0.jpg',
      url: '/implement/tools/tools'
    },
      {
        title: '快递查询通道',
        img: 'http://5b0988e595225.cdn.sohucs.com/images/20190706/6f0ac35bf084456394fe5ec6641fc1e2.jpeg',
        url: '/implement/express/express'
    },
      {
        title: '微信精选文章',
        img: 'http://image.woshipm.com/wp-files/2017/10/timg-23.jpg',
        url: '/implement/new/new'
      },
      {
        title: '中华成语大全',
        img: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6a600c338744ebf870b18c3addf9d72a6159a7f7.jpg',
        url: '/implement/mytranslate/mytranslate'
      },
      {
        title: '英语励志语录',
        img: 'http://i0.hdslb.com/bfs/archive/1dd806a6ef839ef4ed54e58c354e90980b111e6e.jpg',
        url: '/implement/english/english'
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