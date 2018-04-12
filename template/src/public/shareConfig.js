export default {
  mounted () {
    var share_domain = document.domain;
    var shareData = {
      title: "{{ name }}",
      desc: "{{ name }}活动描述",
      link: "https://" + share_domain + "/activity/{{ name }}/",
      imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=804982338,1260503455&fm=27&gp=0.jpg"
    };
    this.share(shareData)
  }
}
