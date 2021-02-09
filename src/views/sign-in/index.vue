<template>
  <div class="wrap">
    <van-button
      type="info"
      @click='btnLogin'
    >授权登录</van-button>
  </div>
</template>
<script>
import defaultSettings from '@/settings.js'

export default {
  data() {
    return {
    }
  },
  methods: {
    btnLogin() {
      // 转换地址
      const redirect_uri = encodeURIComponent(defaultSettings.redirect_uri)
      const str = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${defaultSettings.corp_id}&
      redirect_uri=${redirect_uri}&
      response_type=code&
      scope=snsapi_base&
      state=STATE#wechat_redirect`
      console.log(1111, str)
      // 重新弄个链接
      // window.location.href = str
      this.$router.push({
        name: 'CustomerInformation'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
