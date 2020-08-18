// pages/wlzx/wlzx.js
var app = getApp();
wx.cloud.init();
const db = wx.cloud.database(); //初始化数据库
const admin = db.collection('NetWork');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft:0,
    navbar: ['ALL','13', '14', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27' ],
    wlzxAll:[],
    countAll:'',
    myPower:true,
    wlzxAll13:[],
    countAll13:'',
    myPower13:true,
    wlzxAll14:[],
    countAll14:'',
    myPower14:true,
    wlzxAll18:[],
    countAll18:'',
    myPower18:true,
    wlzxAll19:[],
    countAll19:'',
    myPower19:true,
    wlzxAll20:[],
    countAll20:'',
    myPower20:true,
    wlzxAll21:[],
    countAll21:'',
    myPower21:true,
    wlzxAll22:[],
    countAll22:'',
    myPower22:true,
    wlzxAll23:[],
    countAll23:'',
    myPower23:true,
    wlzxAll24:[],
    countAll24:'',
    myPower24:true,
    wlzxAll25:[],
    countAll25:'',
    myPower25:true,
    wlzxAll26:[],
    countAll26:'',
    myPower26:true,
    wlzxAll27:[],
    countAll27:'',
    myPower27:true,
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*30
    })
  },
  goAddData:function(){
    wx.navigateTo({
      url: '../wlzx/wlzxadd/wlzxadd',
    })
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
  },
  watchDetail:function(e){
    var detail = e.target.dataset.index
    var detail2 =e.target.dataset.second
    wx.navigateTo({
      url: '../wlzx/wlzxdetail/wlzxdetail?detail='+detail+'&detail2='+detail2,
    })
  },
  dataDelete:function(e){
    db.collection('NetWork').where({
      number: e.target.dataset.index
    }).remove().then(res=>{
      console.log(e.target.dataset.index)
      wx.showToast({
        title: '删除成功！',
      })
    })
    var that = this;
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    that.onShow();
    wx.hideLoading()
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
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    wx.cloud.callFunction({
      name:'wlzxlist',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower:false
          })
        }
        this.setData({
          wlzxAll: res.result.data,
          countAll: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx13',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower13:false
          })
        }
        this.setData({
          wlzxAll13: res.result.data,
          countAll13: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx14',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower14:false
          })
        }
        this.setData({
          wlzxAll14: res.result.data,
          countAll14: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx18',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower18:false
          })
        }
        this.setData({
          wlzxAll18: res.result.data,
          countAll18: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx19',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower19:false
          })
        }
        this.setData({
          wlzxAll19: res.result.data,
          countAll19: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx20',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower20:false
          })
        }
        this.setData({
          wlzxAll20: res.result.data,
          countAll20: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx21',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower21:false
          })
        }
        this.setData({
          wlzxAll21: res.result.data,
          countAll21: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx22',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower22:false
          })
        }
        this.setData({
          wlzxAll22: res.result.data,
          countAll22: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx23',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower23:false
          })
        }
        this.setData({
          wlzxAll23: res.result.data,
          countAll23: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx24',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower24:false
          })
        }
        this.setData({
          wlzxAll24: res.result.data,
          countAll24: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx25',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower25:false
          })
        }
        this.setData({
          wlzxAll25: res.result.data,
          countAll25: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx26',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower26:false
          })
        }
        this.setData({
          wlzxAll26: res.result.data,
          countAll26: res.result.data.length
        })
      }
    })
    wx.cloud.callFunction({
      name:'wlzx27',
      success:res=>{
        // console.log(res.result.data)
        if(res.result.data.length!=0){
          this.setData({
            myPower27:false
          })
        }
        this.setData({
          wlzxAll27: res.result.data,
          countAll27: res.result.data.length
        })
      }
    })
    wx.hideLoading()
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
    var that = this;
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    that.onShow()
    wx.stopPullDownRefresh();
  },
})