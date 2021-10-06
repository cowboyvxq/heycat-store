import {
    request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // orders: [{
        //     "order_number": "HMDD20190802000000000428",
        //     "order_price": 3999,
        //     "create_time": 1594731556
        // }, {
        //     "order_number": "HMDD201908020000878867874",
        //     "order_price": 3875,
        //     "create_time": 1624898799
        // }, {
        //     "order_number": "HMDD201908020000234567897",
        //     "order_price": 1999,
        //     "create_time": 1647315168
        // }, {
        //     "order_number": "HMDD201908020000967847474",
        //     "order_price": 8888,
        //     "create_time": 1614798734
        // }],
        orders: wx.getStorageSync('order'),
        // 收货地址
        address: wx.getStorageSync('address'),
        //Tabs数据
        Tabs: [{
            id: 0,
            name: '全部订单',
            isActive: true
        }, {
            id: 1,
            name: '待付款',
            isActive: false
        }, {
            id: 2,
            name: '待发货',
            isActive: false
        }, {
            id: 3,
            name: '退款/退货',
            isActive: false
        }],
        minutes:0,
        seconds:0
    },
    onLoad() {
        let time = 900;
        let orders = wx.getStorageSync('order');
        setInterval( () => {
            var minute = parseInt(time / 60);
            var second = parseInt(time % 60);
            time--;
            this.setData({
                minutes:minute,
                seconds:second,
            })
        }, 1000);
    },
    //切换Tab栏
    tabsItemChange(e) {
        const id = e.detail.id;
        const Tabs = this.data.Tabs;
        Tabs.forEach((v, i) => i === id ? v.isActive = true : v.isActive = false)
        this.setData({
            Tabs
        })
    }
})