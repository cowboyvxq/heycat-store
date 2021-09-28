// components/ProductList/product.js
// var saleList = require('../../data/seckill')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // saleList:[]

  },

   /**
     * 组件的属性列表
     */
    properties: {
      Seckills: {
        type: Object,
        value: null
    }
  },

     // 页面以及类名切换
     toggle(e) {
      this.setData({
        num: e.target.dataset.num,
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.seckills);
    // this.setData({
    //   saleList:saleList.saleList,
    //   num:0
    // });
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