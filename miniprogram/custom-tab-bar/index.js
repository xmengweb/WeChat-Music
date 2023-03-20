Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'music',
        text: '音乐',
        url: '/pages/index/index',
			},
			{
				icon: 'video',
				text: '视频',
        url: '/pages/video_page/video_page',
			}
    ],
    isPlaceholder:true
	},

	methods: {
		onChange(event) {
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },
    init(){
      const page = getCurrentPages().pop();
      this.setData({
          active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
  // lifetimes:{
  //   created(){
  //     console.log('created');
  //   },
  //   attached(){
  //     console.log('attached');
  //   },
  //   ready(){
  //     console.log('ready');
  //   },
  //   moved(){
  //     console.log('moved');
  //   },
  //   detached(){
  //     console.log('detached');
  //   }
  // }
});
