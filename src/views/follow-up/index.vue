<template>
  <div class="wrap">
    <van-divider
      content-position="left"
      class="divider-title"
    >跟进信息</van-divider>
    <van-collapse
      v-model="activeName"
      accordion
    >
      <van-collapse-item
        v-for="v in followList"
        :key="v.name"
        :name="v.name"
        :label="v.mobile"
      >
        <template #title>
          <div>{{ v.customer }}</div>
        </template>
        <template #value>
          <div>{{ v.time }}</div>
          <div>已完成</div>
        </template>
        <van-steps
          direction="vertical"
          :active='stepList.length - 1'
          active-color="#33C0CD"
          inactive-color="#556677"
        >
          <van-step
            v-for="v in stepList"
            :key="v.time"
          >
            <div class="title">{{ v.time }}</div>
            <div class="content">
              <div style="background: #33C0CD1F;">{{ v.followContent }}</div>
              <van-icon
                class="avater"
                color="#33c0cd"
                size="30px"
                name="user-circle-o"
              />
            </div>
          </van-step>
        </van-steps>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>

export default {
  name: 'FollowUp',
  data() {
    return {
      activeName: '1',
      followList: [
        {
          name: '1',
          time: '2020/12/12 12:12:12',
          customer: '苏先生',
          mobile: '15350905082'
        },
        {
          name: '2',
          time: '2020/11/11 11:11:11',
          customer: '三先生',
          mobile: '15350905082'
        },
        {
          name: '3',
          time: '2020/10/10 10:10:10',
          customer: '毛女士',
          mobile: '15350905082'
        },
        {
          name: '4',
          time: '2020/09/09 09:09:09',
          customer: '二先生',
          mobile: '15350905082'
        }
      ],
      stepList: [
        {
          time: '2020年10月30日 下午 07:16',
          followContent: '微信号：xxxxxx，还没有添加微信，已经预约明天下午三点到店试乘试驾活动'
        },
        {
          time: '2020年10月31日 上午 10:10',
          followContent: '已添加微信，待确认'
        },
        {
          time: '2020年11月03日 下午 05:11',
          followContent: '微信号：xxxxxx，还没有添加微信，已经预约明天下午三点到店试乘试驾活动'
        },
        {
          time: '2020年11月04日 上午 10:58',
          followContent: '已沟通，邀约周六进行试驾，麻烦元兵继续跟进'
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
    .flex-spacebet{
      display: flex;
      justify-content: flex-start
    }

    .avater{
      background: #fff;
      position: absolute;
      left: -10px;
      top: 0;
      border-radius: 50%;
      z-index: 2
    }

    .title{
      background: #33C0CD;
      color: #fff;
      margin-bottom: 10px;
      padding-left: 10px;
      border-radius: 10px;
    }

    .content{
    position: relative;
    padding-top: 15px;
    padding-left: 20px;
    }
  }
</style>
