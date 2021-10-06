import regeneratorRuntime from '../../lib/runtime/runtime';
const { request } = require('../../request/index.js')
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
            name: '价格',
            isActive: false
        }],
        //商品列表数据
        goodList: [],
    },
    //获取商品列表参数
    goodParams: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
    },
    GoodInfo:{},

    //总页数
    maxPagenum: 1,
    //Tabs切换
    tabsItemChange(e) {
        const id = e.detail.id;
        const Tabs = this.data.Tabs;
        Tabs.forEach((v, i) => i === id ? v.isActive = true : v.isActive = false)
        this.setData({
            Tabs
        })
    },
    //获取商品列表数据
    async getGoodsList() {
        await request({ url: "/goods/search", data: this.goodParams });
        const goodList = await request({ url: "/goods/search", data: this.goodParams });
        this.maxPagenum = Math.ceil(goodList.total / this.goodParams.pagesize)
        this.setData({
            goodList: [...this.data.goodList, ...goodList.goods],
        })
        console.log(goodList);
        wx.stopPullDownRefresh()
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.goodParams.cid = options.cid || '';
        this.goodParams.query = options.query || '';
        this.getGoodsList()
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        this.goodParams.pagenum = 1,
            this.data.goodList = []
        this.getGoodsList()
    },

    async addTrack(e) {
        const goodInfo = await request({ url: "/goods/detail", data: { goods_id } });
        this.GoodInfo = goodInfo;
        console.log(goodInfo);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        if (this.goodParams.pagenum >= this.maxPagenum) {
            wx.showToast({ title: '没有更多数据了' });
        } else {
            this.goodParams.pagenum++;
            this.getGoodsList()
        }
    }
})