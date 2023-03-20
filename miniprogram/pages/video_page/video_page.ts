import {getVideoList} from '../../service/videoRequest.js'

// pages/video/video_page.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allItems:[],
    totalPages:0,
    triggered:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
      this.fetchList(20,0)
  },

  /**
   * 自定义函数
   */
  async fetchList(limit: number | undefined,offset: number | undefined,reload=false,isShow=true) {
    const res=await getVideoList(limit,offset,isShow)
    if(reload){
      this.setData({
        allItems:res.data
      })
      return;
    }
    if(res.code!==400){
      this.setData({
        allItems:this.data.allItems.concat(res.data)
      })
    }
  },

  OnLoadingMore(){
    this.fetchList(10,20+this.data.totalPages*10)
    this.setData({
      totalPages:this.data.totalPages+1
    })
  },
  OnRefresh(){
    this.fetchList(20+10*this.data.totalPages,0,true,false)
      setTimeout(() => {
        this.setData({
        triggered:false
      })
    }, 1000);
  },
  openVideoDetail(event:any){
    let id=event.target.dataset.item.id
    wx.navigateTo({
      url:`../detail_video/detail_video?id=${id}`
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})