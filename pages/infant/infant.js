// pages/infant/infant.jsv
var infantList = require('../../data/infant_index.js');
var volume = require('../../data/infant_xiaoliang.js');
var news = require('../../data/infant_newgoods.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 综合商品数据
    dataList: [],
    // 销量商品数据
    volumeList:[],
    // 新品数据
    newsList:[],
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
    },
     ],
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
      dataList: infantList.infantList[0].docs,
      volumeList:volume.volumeList[0].docs,
      newsList:news.newGoods[0].docs
    })
    console.log(news);
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