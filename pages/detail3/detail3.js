// pages/details/details.js
var detailsData3 = require('../../data/details/detail3')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData3:[],
    // 图文详情
    detailImage:[],
    swiperList:[],
    // 轮播图数据
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    // 控制弹出层
    show: false,
    flag: false,
    // 服务内容数据
    services:[],
    // sku列表
    skusList:[],
    picnum:1,
    isLogin:false,
    index:1
  },
   // 加入购物车
   joinCart() {
    console.log(111);
  },
  onCloseLogin() {
    this.setData({
        isLogin:false
    })
},
goLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
    this.setData({
        isLogin:false
    })
},
showBottom() {
  this.setData({
    flag:true,
    index:2
  })
},
  // 开启弹出层
  showPopup() {
    this.setData({ show: true });
  },
  showSocial() {
    this.setData({flag:true,index:1})
  },
  // 关闭弹出层
  onClose() {
    this.setData({ show: false });
  },
  closePopup() {
    this.setData({flag:false})
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  // 点击sku颜色改变图片
  changePic1() {
    this.setData({
      picnum:1
    })
  },
  changePic3() {
    this.setData({
      picnum:2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(detailsData3.detailData3[0]);
      this.setData({
        detailsData3:detailsData3,
        // 轮播图
        swiperList:detailsData3.detailData3[0].result.topImages,
        // 图文详情
        detailImage:detailsData3.detailData3[0].result.detailInfo.detailImage,
        // 服务
        services:detailsData3.detailData3[0].result.itemServices.services,
        // sku
        skusList:detailsData3.detailData3[0].result.skuInfo.skus,
      })
  },
  // 跳转购物车
  goCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    }) 
  },

  // 点击轮博图放大预览
  handlePrevewImage(e) {
    const urls = detailsData3.detailData3[0].result.topImages.map(v=>v);
    const currents = e.currentTarget.dataset.url;
    wx.previewImage({
    current:currents,
      urls: urls,
    })
    console.log(detailsData3.detailData3[0].result.topImages);
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
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  }
})