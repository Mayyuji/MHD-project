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
    <Swper :autoplay="2000" :loop="true">
      <SwperItem>1</SwperItem>
      <SwperItem>2</SwperItem>
      <SwperItem>3</SwperItem>
    </Swper>
  </div>
</template>

<script>
import { Swper, SwperItem } from '@/components/Swper'
export default {
  name: 'Home',
  components: {
    Swper,
    SwperItem
  }
}
</script>

<style lang="scss" scoped>
  .page-home {
    display: flex;
    flex-direction: column;
    height: 100%;
    .index-header {
      display: flex;
      height: 44px;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
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
