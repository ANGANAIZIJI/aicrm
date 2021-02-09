<template>
  <div class="wrap">
    <van-divider
      content-position="left"
      class="divider-title"
    >客户列表</van-divider>
    <van-index-bar highlight-color="#33C0CD">
      <template v-for="v in UpperCase">
        <van-index-anchor
          :key="v"
          :index="v.toUpperCase()"
        />
        <van-cell
          v-for="k in cellListObj[v]"
          :key="k"
          :title="k"
        />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import mixin from '@/views/mixin/mixin.js'
export default {
  name: 'CustomerList',
  mixins: [mixin],
  data() {
    return {
      UpperCase: [],
      cellListObj: {},
      contactList: ['苏婉清', '二狗子', '三毛', '阿甘', '张三', '李四', '王五', '赵六', '郑爽', '阿强', '马云', '阿里巴巴', '侯亚情', '马化腾', '刘强东', '贾玲', '沈腾', '撒贝宁', '阿香']
    }
  },
  mounted() {
    // A-Z: 65-90 a-z: 97-122
    const { temp, obj } = this.getUpperAlpha(this.contactList)
    this.UpperCase = temp
    this.cellListObj = obj
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
