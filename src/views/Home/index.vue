<template>
  <div class="page-home">
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <Swper
      :autoplay="3000"
      :loop="true"
      @change="changehandel"
      class="myswiper"
      v-if="bannerList.length > 0"
    >
      <SwperItem v-for="item in bannerList" :key="item.id">
        <img :src="item.imageurl" :alt="item.name" />
      </SwperItem>
    </Swper>
  </div>
</template>

<script>
import { Swper, SwperItem } from '@/components/Swper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    Swper,
    SwperItem
  },
  methods: {
    changehandel (payload) {
      console.log(payload)
    }
  },
  created () {
    getBanner()
      .then((res) => {
        // 数据判断 code 值
        if (res.code === 200) {
          this.bannerList = res.info
        } else {
          alert(res.code + res.code_msg)
        }
      })
      .catch((e) => {
        alert('网络错误,请稍后尝试' + e)
      })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/mixins.scss';
  .page-home {
    display: flex;
    flex-direction: column;
    height: 100%;
    .myswiper {
      img {
        width: 100%;
      }
    }
    .index-header {
      display: flex;
      height: 44px;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      @include boder-bottom;
      .user-btn {
        width: 25px;
        height: 25px;
        background: url(~@/assets/icon/user-btn.png) no-repeat;
        background-size: 100%;
      }
      .header-logo {
        width: 92px;
        height: 28px;
        background: url(~@/assets/logo.png);
        background-size: 100%;
      }
      .header-search {
        width: 25px;
        height: 25px;
        background: url(~@/assets/icon/icon-search.png) no-repeat;
        background-size: 100%;
      }
    }
  }
</style>
