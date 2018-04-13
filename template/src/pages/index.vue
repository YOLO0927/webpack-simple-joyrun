<template lang="html">
  <div style="margin-top: 20px; text-align: center;" id="index">
    <img src="../assets/logo.png" alt="">
    <p>
      \{{ msg }}
    </p>
  </div>
</template>

<script>
import shareConfig from '@/public/shareConfig'

export default {
  data () {
    return {
      msg: 'welcome to joyrun for vue!'
    }
  },
  mixins: [shareConfig]
}
</script>

<style {{#if_eq cssPerprocessor "less"}} lang="less"{{/if_eq}}{{#if_eq cssPerprocessor "sass"}} lang="scss"{{/if_eq}}>
</style>
