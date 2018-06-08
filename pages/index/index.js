//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},//个人信息
    loverInfo: {},//对象信息
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.showModal({
      title:"提示框",
      content:"提示内容",

    })
  },
  onLoad: function () {
    
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
