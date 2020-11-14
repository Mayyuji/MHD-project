<template>
  <div class="page-home">
    <index-header></index-header>
    <div class="index-main">
      <Swper
        :autoplay="3000"
        :loop="true"
        @change="changehandel"
        class="myswiper"
        v-if="bannerList.length > 0"
      >
        <SwperItem v-for="item in bannerList" :key="item.id">
          <img v-lazy="item.imageurl" :alt="item.name" />
        </SwperItem>
      </Swper>
      <index-nav></index-nav>
      <index-recommend
        v-for="item in recommendlist"
        :key="item.specialid"
        :item="item"
      ></index-recommend>
      <div class="my-icp">
        <a
          class="record"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214"
          target="_blank"
        >
          <img
            class="img"
            src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg"
          />
          <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">
          增值电信业务经营许可证沪B2-20170022<br />网络文化经营许可证沪网文（2016）3206-227号<br />出版物经营许可证新出发沪批字第U7659号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swper, SwperItem } from '@/components/Swper'
import { getBanner, recommendList } from '@/api/cartoon'
import indexHeader from './components/indexHeader'
import indexNav from './components/indexNav'
import indexRecommend from './components/indexRecommend'

export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      recommendlist: []
    }
  },
  components: {
    Swper,
    SwperItem,
    indexHeader,
    indexNav,
    indexRecommend
  },
  methods: {
    changehandel (payload) {
      console.log(payload)
    },
    getBanner () {
      getBanner().then((res) => {
        // 数据判断 code 值
        if (res.code === 200) {
          this.bannerList = res.info
        } else {
          alert(res.code + res.code_msg)
        }
      })
    },
    recommendList () {
      recommendList().then((res) => {
        // 数据判断 code 值
        if (res.code === 200) {
          this.recommendlist = res.info
        } else {
          alert(res.code + res.code_msg)
        }
      })
    }
  },
  created () {
    // 获取轮播图数据
    this.getBanner()
    // 获取首页推荐
    this.recommendList()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/mixins.scss';
  .page-home {
    display: flex;
    flex-direction: column;
    height: 100%;

    .index-main {
      flex: 1;
      overflow-y: auto;
    }
    .myswiper {
      img {
        width: 100%;
      }
    }
    .my-icp {
      padding: 0.26666667rem 0;
      font-size: 0.32rem;
      @include astyle;
      .record {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }
      .licence {
        margin: 0.13333333rem 0 0;
        text-align: center;
      }
    }
  }
</style>
