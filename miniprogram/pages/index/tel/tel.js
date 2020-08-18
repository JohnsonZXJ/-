// pages/index/tel/tel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:"网络中心",
        text:"提供专业的校园网络维护服务",
        phone:"32962566",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3314487724,2506321756&fm=26&gp=0.jpg"
      },
      {
        name:"图书馆",
        text:"暂无介绍",
        phone:"32962611",
        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2707941800,2712709325&fm=26&gp=0.jpg"
      },{
        name:"招生就业处/就业指导中心",
        text:"招生就业处咨询电话",
        phone:"32965006",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2982909200,3535644800&fm=26&gp=0.jpg"
      },{
        name:"教务处",
        text:"教务处咨询电话",
        phone:"32962833",
        url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589374454902&di=a8606c5ad054dc99f1f212ebcdf771ef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F04%2F20180104222233_FVhsv.jpeg"
      }
    ]
  },
  // 拨打电话
  makephone:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      fail(err){
        console.log(err)
      }
    })
  },
  morerelation:function(){
    wx.setClipboardData({
      data: 'http://www.gdaib.edu.cn/index/xueyuangaikuang/2013/0106/536.html'
    })
    wx.getClipboardData({
      success: function (res) {
        wx.showToast({
          title: '复制网址成功'
        })
      }
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