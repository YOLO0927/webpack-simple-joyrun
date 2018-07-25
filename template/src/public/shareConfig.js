export default {
  mounted () {
    var shareData = {
      title: '{{ name }}',
      desc: '{{ name }}活动描述',
      link: 'https://' + document.domain + '/activity/{{ name }}/',
      imgUrl: 'https://www.thejoyrun.com/img/download.png'
    }
    this.share(shareData)
  }
}
