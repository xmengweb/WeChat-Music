// pages/detail_video/detail_video.ts
import {getDetailVideo,getPlayAddress,getRecommandInfo} from '../../service/videoRequest.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    id:0,
    recommandInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: { id: any }) {
    this.setData({
      id:options.id
    })
    this.fetchDetailVideo()
  },

  /**
   * 自定义函数
   */
  async fetchDetailVideo(){
    const res = await getDetailVideo(this.data.id);
    const res2=await getPlayAddress(this.data.id);
    const res3=await getRecommandInfo(this.data.id);
    this.setData({
      recommandInfo:res3.mvs
    })
    
    if(res.code===404){
      res.data={};
      res.data.address="https://cugdemo.oss-cn-hangzhou.aliyuncs.com/3%E6%9C%885%E6%97%A5.mp4";
    }  
    else  res.data.address=res2.data.url
    
    this.setData({
      detail:res.data
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