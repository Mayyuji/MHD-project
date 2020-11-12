<template>
  <header class="index-header">
    <a href="#/My">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </a>
    <div class="header-logo"></div>
    <a href="#/Search">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: 'indexheader'
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/mixins.scss';
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
</style>
