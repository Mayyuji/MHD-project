<template>
  <nav class="index-nav">
    <a href="#/Classify">
      <div class="nav-item">
        <div class="nav-pic pic-1"></div>
        <p class="nav-text font-24">分类</p>
      </div>
    </a>
    <a href="#/Ranking">
      <div class="nav-item">
        <div class="nav-pic pic-2"></div>
        <p class="nav-text font-24">排行</p>
      </div>
    </a>
    <a href="#/Vip">
      <div class="nav-item">
        <div class="nav-pic pic-3"></div>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </a>
    <a href="#/Other">
      <div class="nav-item">
        <div class="nav-pic pic-4"></div>
        <p class="nav-text font-24">历史</p>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'indexNav'
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/mixins.scss';
  .index-nav {
    @include boder-bottom;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    height: 2.66666667rem;
    margin: 0 auto;
    padding: 0 0.66666667rem;
    @include astyle;
    .nav-item {
      .nav-pic {
        background-repeat: no-repeat;
        background-size: contain;
        width: 1.46666667rem;
        height: 1.46666667rem;
      }
      @for $i from 1 through 4 {
        .pic-#{$i} {
          background-image: url('~@/assets/images/pic0#{$i}.png');
        }
      }
      .nav-text {
        margin: 0.13333333rem 0 0;
        color: #8d8d8d;
        font-weight: 500;
        text-align: center;
      }
      .font-24 {
        font-size: 0.32rem;
      }
    }
  }
</style>
