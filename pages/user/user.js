// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        //收藏数量
        collectNumber: 0
    },
    callUp() {
        wx.makePhoneCall({
          phoneNumber: '400-618-4000',
        })
    },
    onShow: function() {
        const userInfo = wx.getStorageSync('userInfo');
        const collect = wx.getStorageSync('collect') || [];
        this.setData({
            userInfo,
            collectNumber: collect.length
        })
    }
})