// components/Tabs/Tabs.js
var navbarList = require('../../data/navbar.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      Navbars: {
          type: Array,
          value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navbars:[]
  },

  onLoad: function (options) {
      this.setData({
          navbars:navbarList
      })
      console.log(navbarList);
  },

  /**
   * 组件的方法列表
   */
  methods: {
      navTap(e) {
          const { id } = e.currentTarget.dataset;
          this.triggerEvent("tabsChange", { id })

      }
  }
})