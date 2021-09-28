// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";
Page({
    data: {
        // 轮播图数组
        swiperList: [],
        // 楼层数据
        floorList: [],
        //分类数据
        catesList: []
    },
    // 页面开始加载 就会触发
    onLoad: function(options) {
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
        this.getCateList()
    },
    // 获取 分类导航数据
    getCateList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
                console.log(result);
            })
    },
    switchTab(e) {
        let index = e.currentTarget.dataset.index;
        console.log(JSON.stringify(index));
        if(index === 0) {
            wx.switchTab({
              url: '/pages/category/category',
            })  
        } else if (index === 1) {
            wx.navigateTo({
                url: '/pages/seckill/seckill',
              })  
        } else if(index === 2) {
            wx.navigateTo({
              url: '/pages/supermarket/supermarket',
            })
        } else {
            wx.navigateTo({
              url: '/pages/infant/infant',
            })
        }
    },
    // 获取轮播图数据
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                result.forEach((v, i) => {
                    result[i].navigator_url = v.navigator_url.replace('main', 'goods_detail')
                })
                this.setData({
                    swiperList: result
                })
            })
    },
    // 获取 分类导航数据
    getCateList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
                console.log(result);
            })
    },
    // 获取 楼层数据
    getFloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
            })
    },
})