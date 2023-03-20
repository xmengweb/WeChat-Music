// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    searchValue:'',
    swiperItems:[]
  },
  // 事件处理函数

  onLoad() {

  },
  onShow(){
    this.getTabBar().init();
  },

  onChange(){
    wx.switchTab({
      url:'/pages/video_page/video_page',
    })
  }

})
