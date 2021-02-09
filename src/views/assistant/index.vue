<template>
  <div class="assistant-wrap">
    <div class="wrap-top">
      <div class="wrap-top-ctn">
        <!-- 头像 -->
        <div class="picture">
          <img src="@/assets/touxiang.jpeg" alt="头像">
        </div>
        <!-- 名字 -->
        <div class="name">
          <span>销售大神</span>
        </div>
      </div>
    </div>
    <div class="wrap-mid">
      <van-grid :column-num="3">
        <van-grid-item v-for="(item,idx) in gridAry" :key="idx" icon="photo-o" :text="item.text" />
      </van-grid>
    </div>
    <div class="wrap-btm">
      <!-- #808080 -->
      <div class="item" @click="handClick(1)">
        <van-circle v-model="task.value" :rate="task.rate" :color="circleColor" text="0" />
        <div>任务</div>
      </div>
      <div class="item" @click="handClick(2)">
        <van-circle v-model="addressBook.value" :rate="addressBook.rate" :color="circleColor" text="0/290" />
        <div>通讯录</div>
      </div>
      <div class="item" @click="handClick(3)">
        <van-circle v-model="achievement.value" :rate="achievement.rate" :color="circleColor" text="83" />
        <div>业绩</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assistant',
  data() {
    return {
      gridAry: [
        {
          text: '我的名片'
        },
        {
          text: '服务号'
        },
        {
          text: '名片工厂'
        },
        {
          text: '到店预约'
        },
        {
          text: '券码兑换'
        },
        {
          text: '精品店'
        }
      ],
      circleColor: '#808080',
      task: {
        value: 0,
        rate: 30
      },
      addressBook: {
        value: 0,
        rate: 40
      },
      achievement: {
        value: 0,
        rate: 50
      }
    }
  },
  methods: {
    handClick(args) {
      console.log(args)
    }
  }
}
</script>

<style lang="scss" scoped>
.assistant-wrap {
  h1 {
    margin: 0;
  }
  .wrap-top {
    height: 240px;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrap-top-ctn {
      text-align: center;
      .picture {
        height: 200px;
        width: 200px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100px;
        }
      }
    }
  }
  .wrap-mid {
    background-color: plum;
  }
  .wrap-btm {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item {
      text-align: center;
    }
  }
}
</style>
