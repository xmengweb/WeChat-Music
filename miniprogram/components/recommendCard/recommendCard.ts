// components/recommendCard/recommendCard.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    suggestInfo:{
      type:null,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    OpenDetailVideo(event: any){
      wx.navigateTo({
        url:`/pages/detail_video/detail_video?id=${event.currentTarget.dataset.id}`
      })
    }
  }
})
