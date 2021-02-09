<template>
  <div class='wrap'>
    <van-divider
      content-position="left"
      class="divider-title"
    >客户信息</van-divider>
    <van-cell-group>
      <van-cell
        v-for="v in cellList"
        :key="v.title"
        :title="v.title"
        :value="v.value || '--'"
      />
    </van-cell-group>
  </div>
</template>
<script>

export default {
  name: 'CustomerInformation',
  data() {
    return {
      cellList: [
        {
          title: '姓名',
          value: '迪丽热巴'
        },
        {
          title: '手机号码',
          value: '15888888888'
        },
        {
          title: '性别',
          value: '女'
        },
        {
          title: '用户来源',
          value: '总部线上/APP/注册'
        },
        {
          title: '省市区',
          value: '上海市/上海市'
        },
        {
          title: '年龄',
          value: '100'
        },
        {
          title: '生日',
          value: '2021/12/33'
        },
        {
          title: '是否有车',
          value: '否'
        },
        {
          title: '详细住址',
          value: '地球'
        },
        {
          title: '收货地址',
          value: '上海市杨浦区'
        }
      ]
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
