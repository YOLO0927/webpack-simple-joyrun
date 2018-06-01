export default {
  mounted () {
    var shareData = {
      title: '{{ name }}',
      desc: '{{ name }}活动描述',
      link: 'https://' + document.domain + '/activity/{{ name }}/',
      imgUrl: 'https://joyrun-activity.b0.upaiyun.com/huodong/2018/01/ceremony/share.jpg'
    }
    this.share(shareData)
    if (this.nativeService.isJoyRunwebview()) {
      this.nativeService.setCloseButtonStatus(true)
    }
  }
}
