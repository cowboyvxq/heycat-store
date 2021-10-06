import { getSetting, chooseAddress, openSetting, showModal, showToast } from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //收货地址
        address: {},
        //购物车
        cart: [],
        // 全选状态
        allChecked: true,
        //总价
        totalPrice: 0,
        //总数量
        totalNum: 0,
        trolley:[],
        count:0,
        // input默认是1  
      num: 1,  
      // 使用data数据对象设置样式名  
      minusStatus: 'disabled'  
    },
    onLoad() {
        let trolley = wx.getStorageSync('trolley') || [];
        let cart = wx.getStorageSync('cart') || [];
        console.log(cart);
        let mount = wx.getStorageSync('cart').length;
        let extent = wx.getStorageSync('trolley').length;
        this.setData({
            trolley:trolley,
            count:mount + extent
        })
    },
    onShow() {
        //收货地址接收
        const address = wx.getStorageSync('address');
        this.setData({
                address
            })
            //购物车接收
        const cart = wx.getStorageSync('cart') || [];
        this.setCart(cart);
        // 存储订单
    },

    //添加收货地址事件
    async addressChoose() {
        try {
            const scope = await getSetting()
            if (scope === false) {
                await openSetting();
            }
            let address = await chooseAddress();
            address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
            wx.setStorageSync('address', address)
        } catch (err) {
            console.log(err);
        }
    },
    //商品选择状态改变
    handleItemChange(e) {
        const { id } = e.currentTarget.dataset;
        const { cart } = this.data;
        const index = cart.findIndex(v => v.goods_id === id);
        cart[index].checked = !cart[index].checked;
        this.setCart(cart);
        console.log(id);
    },
    changeState(e) {
        const { id } = e.currentTarget.dataset;
        const { trolley } = this.data;
        const index = trolley.findIndex(v => v.detailData1[0].itemInfo.itemId === id);
        trolley[index].checked = !trolley[index].checked;
        // this.setCart(trolley);
        console.log(id);
    },
    // 全选按钮改变
    handleItemAllChange() {
        const { allChecked, cart } = this.data;
        cart.forEach(v => v.checked = !allChecked);
        this.setCart(cart)
    },
    //数量改变
    async numChange(e) {
        const { id, opration } = e.currentTarget.dataset;
        const { cart } = this.data;
        const index = cart.findIndex(v => v.goods_id === id);
        if (cart[index].num === 1 && opration === -1) {
            const res = await showModal('是否删除商品')
            if (res.confirm) {
                cart.splice(index, 1);
                this.setCart(cart)
                return
            }
        }
        cart[index].num += opration
        this.setCart(cart)
    },
    //结算
    async allPlay() {
        const { totalNum, address } = this.data;
        console.log(totalNum,address);
        if (!address.userName) {
            await showToast('未填联系方式')
        } else if (totalNum === 0) {
            await showToast('未选择商品')
        } else {
            wx.navigateTo({
                url: '/pages/pay/pay',
            })
        }
    },
    goCategory() {
        wx.switchTab({
          url: '/pages/category/category',
        })
    },
         /* 点击减号 */  
         bindMinus: function() {  
            var num = this.data.num;  
            // 如果大于1时，才可以减  
            if (num > 1) {  
                num --;  
            }  
            // 只有大于一件的时候，才能normal状态，否则disable状态  
            var minusStatus = num <= 1 ? 'disabled' : 'normal';  
            // 将数值与状态写回  
            this.setData({  
                num: num,  
                minusStatus: minusStatus  
            });  
        },  
        /* 点击加号 */  
        bindPlus: function() {  
            var num = this.data.num;  
            // 不作过多考虑自增1  
            num ++;  
            // 只有大于一件的时候，才能normal状态，否则disable状态  
            var minusStatus = num < 1 ? 'disabled' : 'normal';  
            // 将数值与状态写回  
            this.setData({  
                num: num,  
                minusStatus: minusStatus  
            });  
        },  
        /* 输入框事件 */  
        bindManual: function(e) {  
            var num = e.detail.value;  
            // 将数值与状态写回  
            this.setData({  
                num: num  
            });  
        },
    //更新购物车数据
    setCart(cart) {
        let totalPrice = 0;
        let totalNum = 0;
        let allChecked = true;
        cart.forEach(v => {
            if (v.checked) {
                totalPrice += v.num * v.goods_price;
                totalNum += v.num
            } else {
                allChecked = false
            }
        });
        allChecked = cart.length ? allChecked : false
        this.setData({
            cart,
            allChecked,
            totalPrice,
            totalNum
        })
        wx.setStorageSync('cart', cart)
    }
})