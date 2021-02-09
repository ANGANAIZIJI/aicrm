<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar
        :data="tabbars"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/index.vue'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        // {
        //   title: '授权登录',
        //   to: {
        //     name: 'SignIn'
        //   },
        //   icon: 'friends-o'
        // },
        {
          title: '客户信息',
          to: {
            name: 'CustomerInformation'
          },
          icon: 'friends-o'
        },
        {
          title: '客户列表',
          to: {
            name: 'CustomerList'
          },
          icon: 'friends-o'
        },
        {
          title: '跟进信息',
          to: {
            name: 'FollowUp'
          },
          icon: 'friends-o'
        },
        {
          title: '话术素材',
          to: {
            name: 'WordMaterial'
          },
          icon: 'chat-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  padding-bottom: 50px;
}
</style>

