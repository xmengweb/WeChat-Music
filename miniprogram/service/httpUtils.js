// const BASE_URL = 'https://coderwhy-music.vercel.app'

/**
 * 网络请求request
 * obj.data 请求接口需要传递的数据
 * obj.showLoading 控制是否显示加载Loading 默认为false不显示
 * obj.contentType 默认为 application/json
 * obj.method 请求的方法  默认为GET
 * obj.url 请求的接口路径 
 * obj.message 加载数据提示语
 */

 class XRequest{
   constructor(a='https://coderwhy-music.vercel.app'){
    this.BASE_URL=a
   }

   request(params,isShow=true) {
    params.url=this.BASE_URL + params.url
    if(isShow)
      wx.showLoading({
        title: '加载中...',
      })
    return new Promise((resolve, reject) => {
      wx.request({
        ...params,
        success: (res) => {
          wx.hideLoading()
          resolve(res.data)
        },
        fail: (err) => {
          console.log("err:", err);
        }
      })
    })
   }
 }

 export default new XRequest("https://www.xm-cug.xyz:3000");