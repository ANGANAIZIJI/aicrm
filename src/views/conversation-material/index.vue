<template>
  <div class="wrap">
    <van-divider
      content-position="left"
      class="divider-title"
    >话术素材</van-divider>
    <van-grid
      :gutter="10"
      :column-num="2"
      :square="true"
      :clickable="true"
    >
      <van-grid-item
        v-for="v in 10"
        :key="`${v}`"
        icon="shop-collect-o"
        :title="v"
      ></van-grid-item>
    </van-grid>
  </div>
</template>
<script>

export default {
  name: 'ConversationMaterial',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
  .wrap{
    .divider-title{
      color: #33C0CD;
      border-color: #33C0CD;
      padding: 0 20px
    }
  }
</style>
