export default {
  mounted () {
    var share_domain = document.domain;
    var shareData = {
      title: "{{ name }}",
      desc: "{{ name }}活动描述",
      link: "https://" + share_domain + "/activity/{{ name }}/",
      imgUrl: "https://joyrun-activity.b0.upaiyun.com/huodong/2018/01/ceremony/share.jpg"
    };
    this.share(shareData)
  }
}
