import regeneratorRuntime from '../../lib/runtime/runtime';
const { request } = require('../../request/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //详情数据  
        goodInfo: {},
        //是否被保存
        isCollect: false,
        // 登录提示框
        isLogin:false,
        isTrack:false,
        count:0
        // trackList:[]
    },
    GoodInfo: {},
    onLoad() {
        let mount = wx.getStorageSync('cart').length;
        let extent = wx.getStorageSync('trolley').length;
        // console.log(mount + extent);
        this.setData({
            count:mount + extent
        })
    },
    //获取详情数据
    async getGoodInfo(goods_id) {
        const goodInfo = await request({ url: "/goods/detail", data: { goods_id } });
        this.GoodInfo = goodInfo;
        // 足迹信息
       let track = wx.getStorageSync("track") || [];
        let sub = track.findIndex(v => v.goods_id === this.GoodInfo.goods_id);
            //获取收藏信息
         console.log(goodInfo);
        let collect = wx.getStorageSync("collect") || [];
        let index = collect.findIndex(v => v.goods_id === this.GoodInfo.goods_id);
        this.setData({
            goodInfo: {
                goods_name: goodInfo.goods_name,
                goods_price: goodInfo.goods_price,
                goods_introduce: goodInfo.goods_introduce,
                // iphone部分手机不识别webp格式图片
                goods_introduce:goodInfo.goods_introduce.replace(/\.webp/g,'.jpg'),
                pics: goodInfo.pics,
                volume:goods_id
            },
            isCollect: index !== -1 ? true : false,
            isTrack: sub !== -1 ? true : false
        })
        console.log(sub === -1);
        if(sub === -1) {
         wx.setStorageSync('track', [...track,goodInfo]);
        }
    },
    //添加购物车
    handleCartAdd() {
        let login = wx.getStorageSync('userInfo');
        if(login) {
            let cart = wx.getStorageSync("cart") || [];
            let index = cart.findIndex(v => v.goods_id === this.GoodInfo.goods_id);
            if (index === -1) {
                this.GoodInfo.num = 1
                cart.push(this.GoodInfo)
            } else {
                cart[index].num++
            }
            wx.setStorageSync('cart', cart)
            wx.showToast({
                title: '成功加入购物车',
                icon: 'success',
                // true 防止用户 手抖 疯狂点击按钮 
                mask: true
            })
            let mount = wx.getStorageSync('cart').length;
        let extent = wx.getStorageSync('trolley').length;
            this.setData({
                count:mount + extent
            })
        } else {
            this.setData({
                isLogin:true
            })
        }
    },
    // 跳转购物车
    goCart() {
        this.onLoad();
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },
    onClose() {
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
  async showSocial() {
        let login = wx.getStorageSync('userInfo');
        if(login) {
        let goods = wx.getStorageSync('goods') || [];
        wx.setStorageSync('goods', this.GoodInfo);
            wx.navigateTo({
              url: '/pages/payment/payment',
            })
        } else {
            //  console.log(this.GoodInfo);
          this.setData({
            isLogin:true
          })
        }
    },

    //点击收藏
    collectHandle() {
        let login = wx.getStorageSync('userInfo');
        if(login) {
            let collect = wx.getStorageSync("collect") || [];
            let isCollect = false
            let index = collect.findIndex(v => v.goods_id === this.GoodInfo.goods_id)
            if (index === -1) {
                collect.push(
                    this.GoodInfo
                );
                isCollect = true
            } else {
                collect.splice(index, 1)
                isCollect = false
            }
            wx.setStorageSync("collect", collect)
            this.setData({ isCollect })
        } else {
            this.setData({
                isLogin:true
            })
        }
    },
    // 点击轮博图放大预览
    handlePrevewImage(e) {
        const urls = this.GoodInfo.pics.map(v=>v.pics_mid);
        const currents = e.currentTarget.dataset.url;
        wx.previewImage({
        current:currents,
          urls: urls,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function(options) {
        let pages = getCurrentPages();
        let goods_id = pages[pages.length - 1].options.goods_id
        this.getGoodInfo(goods_id)
    }
})