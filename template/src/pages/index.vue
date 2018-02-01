<template lang="html">
  <div style="margin-top: 20px; text-align: center;" id="index">
    <img src="../assets/logo.png" alt="">
    <div>
      \{{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'welcome to joyrun for vue!'
    }
  }
}
</script>

<style {{#less}} lang="less"{{/less}}>
</style>
