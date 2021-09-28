// pages/supermarket/supermarket.js
var supermarkets = require('../../data/supermarket');
var newgoodsList = require('../../data/sup_news');
var supvolume = require('../../data/sup_volume')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //Tabs数据
    Tabs: [{
      id: 0,
      name: '综合',
      isActive: true
    }, {
      id: 1,
      name: '销量',
      isActive: false
    }, {
      id: 2,
      name: '新品',
      isActive: false
    }],
    supermarkets:[],
    newgoodsList:[],
    supvolumeList:[]
  },

   //Tabs切换
   tabsItemChange(e) {
    const id = e.detail.id;
    const Tabs = this.data.Tabs;
    Tabs.forEach((v, i) => i === id ? v.isActive = true : v.isActive = false)
    this.setData({
        Tabs
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      supermarkets:supermarkets.supermarkets[0].docs,
      newgoodsList:newgoodsList.newgoodsList.docs,
      supvolumeList:supvolume.supvolume
    })
    console.log(supvolume);
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