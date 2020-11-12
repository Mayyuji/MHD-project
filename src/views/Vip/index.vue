<template>
  <div class="page-vip">
    <normalheader titles="VIP专区"></normalheader>
    <div class="vip-main">
      <cartoonslist></cartoonslist>
    </div>
  </div>
</template>

<script>
import normalheader from '@/components/NormalHeader'
import cartoonslist from '@/components/CartoonsList'
import { getVipkList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'VIP',
  components: {
    normalheader,
    cartoonslist
  },
  data () {
    return {
      viplist: []
    }
  },
  methods: {
    getVipkList () {
      getVipkList().then((res) => {
        // 数据判断 code 值
        if (res.code === 200) {
          this.viplist = JSON.parse(unformat(res.info)).comicsList
        } else {
          alert(res.code + res.code_msg)
        }
      })
    }
  },
  created () {
    this.getVipkList()
  }
}
</script>

<style lang="scss" scoped>
  .page-vip {
    display: flex;
    flex-direction: column;
    height: 100%;

    .vip-main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
