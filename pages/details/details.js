// pages/details/details.js
var detailsData1 = require('../../data/details/detail1')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData1:[],
    // 图文详情
    detailImage:[],
    swiperList:[],
    // 轮播图数据
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    // 控制弹出层
    show: false,
    flag: false,
    // 服务内容数据
    services:[],
    // sku列表
    skusList:[],
    picnum:1,
    index:1,
    count:wx.getStorageSync('cart').length,
    isTrolley: false,
    count:0,
    isLogin:false
  },
  // 加入购物车
  joinCart() {
    let login = wx.getStorageSync('userInfo');
    if(login) {
      let trolley = wx.getStorageSync('trolley') || [];
      // let itemId = detailsData1.detailData1[0].itemInfo.itemId;
      let index = trolley.findIndex(v => v.detailData1[0].itemInfo.itemId=== detailsData1.detailData1[0].itemInfo.itemId);
      console.log(index);
      // console.log(detailsData1.detailData1[0].itemInfo.itemId);
      if(index !== 0) {
        wx.setStorageSync('trolley', [...trolley,detailsData1]);
        let mount = wx.getStorageSync('cart').length;
      let extent = wx.getStorageSync('trolley').length;
      this.setData({
      // console.log(detailsData1.detailData1[0].itemInfo.itemId);
        count:mount + extent,
        flag:false
      })
      } else {
        this.setData ({
        flag:false
        })
      }
    } else {
      this.setData({
        isLogin:true
      })
    }
  },
  // 立即购买
  shoppingNow() {
    let login = wx.getStorageSync('userInfo');
    if(login) {
      console.log(22);
    } else {
      this.setData({
        isLogin:true
      })
    }
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
  // 跳转购物车
  goCart() {
    this.onShow();
    wx.switchTab({
      url: '/pages/cart/cart',
    }) 
  },
  // 页面以及类名切换
  toggleClass(e) {
    this.setData({
      num: e.target.dataset.num,
    })
    console.log( e.target.dataset.num);
  },
  // 开启弹出层
  showPopup() {
    this.setData({ show: true });
  },
  showSocial() {
    this.setData({
      flag:true,
      index:1 
    })
  },
  showBottom() {
    this.setData({
      flag:true,
      index:2
    })
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
  changePic2() {
    this.setData({
      picnum:2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let mount = wx.getStorageSync('cart').length;
    let extent = wx.getStorageSync('trolley').length;
      this.setData({
        count:mount + extent,
        detailsData1:detailsData1,
        // 轮播图
        swiperList:detailsData1.detailData1[0].topImages,
        // 图文详情
        detailImage:detailsData1.detailData1[0].detailInfo.detailImage,
        // 服务
        services:detailsData1.detailData1[0].itemServices.services,
        // sku
        skusList:detailsData1.detailData1[0].skuInfo.skus,

      })
      // console.log(detailsData1.detailData1[0].topImages[0]);
  },

  // 点击轮博图放大预览
  handlePrevewImage(e) {
    const urls = detailsData1.detailData1[0].topImages.map(v=>v);
    const currents = e.currentTarget.dataset.url;
    wx.previewImage({
    current:currents,
      urls: urls,
    })
    console.log(detailsData1.detailData1[0].topImages);
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