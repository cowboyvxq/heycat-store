// seckill/seckill.js
var seckillNav = require('../../data/seckills/seckill_nav');
var saleList = require('../../data/seckills/seckill');
var seckillList2 = require('../../data/seckills/list2');
var seckillList3 = require('../../data/seckills/list3');
var seckillList4 = require('../../data/seckills/list4');
var seckillList5 = require('../../data/seckills/list5');
var seckillList6 = require('../../data/seckills/list6');
var seckillList7 = require('../../data/seckills/list7');
var seckillList8 = require('../../data/seckills/list8');
var seckillList9 = require('../../data/seckills/list9');
var seckillList10 = require('../../data/seckills/list10');
var seckillList11 = require('../../data/seckills/list11');
var seckillList12 = require('../../data/seckills/list12');
var seckillList13 = require('../../data/seckills/list13');
var seckillList14 = require('../../data/seckills/list14');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    seckills:[],
    saleList:[],
    seckillList2:[],
    seckillList3:[],
    seckillList4:[],
    seckillList5:[],
    seckillList6:[],
    seckillList7:[],
    seckillList8:[],
    seckillList9:[],
    seckillList10:[],
    seckillList11:[],
    seckillList12:[],
    seckillList13:[],
    seckillList14:[]
  },
  // 页面以及类名切换
     toggle(e) {
      this.setData({
        num: e.target.dataset.num,
      })
      console.log( e.target.dataset.num);
    },
    // 跳转到详情页
    goDetails1() {
      wx.navigateTo({
        url: '/pages/details/details',
      })
    },
    goDetails2() {
      wx.navigateTo({
        url: '/pages/details2/details2',
      })
    },
    goDetails3() {
      wx.navigateTo({
        url: '/pages/detail3/detail3',
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      seckills:seckillNav.seckillNav,
      saleList:saleList.saleList,
      seckillList2:seckillList2.seckillList2,
      seckillList3:seckillList3.seckillList3,
      seckillList4:seckillList4.seckillList4,
      seckillList5:seckillList5.seckillList5,
      seckillList6:seckillList6.seckillList6,
      seckillList7:seckillList7.seckillList7,
      seckillList8:seckillList8.seckillList8,
      seckillList9:seckillList9.seckillList9,
      seckillList10:seckillList10.seckillList10,
      seckillList11:seckillList11.seckillList11,
      seckillList12:seckillList12.seckillList12,
      seckillList13:seckillList13.seckillList13,
      seckillList14:seckillList14.seckillList14,
      num:0
    });
    console.log(saleList);
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