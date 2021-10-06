// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        //收藏数量
        collectNumber: 0,
        // 浏览数量
        trackNumber:0
    },
    // 退出登录
    loginOut() {
        wx.removeStorageSync('userInfo');
        this.onLoad();
    },
    // 全部订单
    allOrder() {
        wx.navigateTo({
          url: '/pages/order/order?type=1',
        })
    },
    callUp() {
        wx.makePhoneCall({
            phoneNumber: '400-786-4134',
        })
    },
    onShow: function () {
        const userInfo = wx.getStorageSync('userInfo');
        console.log(userInfo);
        if (userInfo) {
            const collect = wx.getStorageSync('collect') || [];
            this.setData({
                userInfo,
                collectNumber: collect.length
            })
        }
        const track = wx.getStorageSync('track') || [];
            this.setData({
                userInfo,
                trackNumber: track.length
            })
    }
})