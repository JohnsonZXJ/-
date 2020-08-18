// pages/index/fun/fun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleList: 24, //圆点
    awardList: [{
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2021567064,690008005&fm=15&gp=0.jpg",
      name: "快乐餐"
    }, {
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4038827368,107077730&fm=26&gp=0.jpg",
      name: "麻辣烫"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589382000720&di=ae8775e227af3a03f91c28c7fa2938de&imgtype=0&src=http%3A%2F%2Fwww.hfys168.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20181221%2F1545386491741254.jpg",
      name: "营养餐(窗口饭)"
    }, {
      img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=285547556,1065857208&fm=26&gp=0.jpg",
      name: "炒面炒粉"
    }, {
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2058094854,1262936893&fm=26&gp=0.jpg",
      name: "广式烧腊"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589381778085&di=9d886db94fe648ea88ea366c6fb77b2c&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2015%2F09%2F27%2FFigfI1K4_TNF1QD4kGTD4pyRIRYq.jpg%2521280x280.jpg",
      name: "汤面河粉"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589381732642&di=a3e037330afaa06c6c15d838365077a6&imgtype=0&src=http%3A%2F%2Fwww.gzlib.gov.cn%2FFCKeditor%2FUploadFiles%2FImage%2Fa81f711ad0f9574f91a3cb39798c0713.jpg",
      name: "粥和肠粉"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589381656757&di=1d38d27dca3098803bd96f5edbe65b56&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F30%2F13%2F50%2F596775e3c34fd.png%2521%2Ffwfh%2F804x647%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue",
      name: "牛奶面包"
    }], //奖品数组
    indexSelect: 0, //被选中的奖品index
    isRunning: false //是否正在抽奖
  },
  //获取随机数
  getRandom: function(u) {
    let rnd = Math.random() > 0.5 ? "2" : "1";
    u = u || 3;
    for (var i = 0; i < u; i++) {
      rnd += Math.floor(Math.random() * 10);
    }
    return Number(rnd);
  },
  //开始抽奖
  startDrawing: function() {
    if (this.data.isRunning) return
    this.setData({
      isRunning: true
    })
    let indexSelect = 0
    let i = 0;
    let randomNum = this.getRandom(3);
    let timer = setInterval(() => {
      ++indexSelect;
      //这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
      indexSelect = indexSelect % 8;
      this.setData({
        indexSelect: indexSelect
      })
      i += 40;
      if (i > randomNum) {
        //去除循环
        clearInterval(timer)
        timer = null;
        //获奖提示
        wx.showModal({
          title: '填饱肚子才有力气！',
          content: `你的选择是【${this.data.awardList[indexSelect].name}】`,
          confirmColor: '#5677FC',
          showCancel: false, //去掉取消按钮
          success: (res) => {
            if (res.confirm) {
              this.setData({
                isRunning: false
              })
            }
          }
        })
      }
    }, (70 + i))
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