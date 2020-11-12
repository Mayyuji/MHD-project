<template>
  <div class="page-ranking">
    <normalheader titles="排行"></normalheader>
    <div class="ranking-main">
      <headertype :types="types" @listclick="listchange"></headertype>
      <cartoonslist :list="ranklist" :isRanking="true"></cartoonslist>
    </div>
  </div>
</template>

<script>
import normalheader from '@/components/NormalHeader'
import headertype from '@/components/HeaderType'
import cartoonslist from '@/components/CartoonsList'
import { getRankList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Classify',
  data () {
    return {
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],
      ranklist: []
    }
  },
  components: {
    normalheader,
    headertype,
    cartoonslist
  }, // 统一传入cartonnlist的数据格式  数据格式不合适 通过计算属性整理
  computed: {
    list () {
      return this.ranklist.map((item) => {
        return {
          id: item.bookstore_id,
          name: item.name,
          author: item.author,
          view: item.sales,
          coverurl: item.coverurl
        }
      })
    }
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then((res) => {
        // 数据判断 code 值
        if (res.code === 200) {
          this.ranklist = JSON.parse(unformat(res.info)).ranklist
        } else {
          alert(res.code + res.code_msg)
        }
      })
    },
    listchange (payload) {
      this.getRankList(payload.data.ranktype)
    }
  },
  created () {
    this.getRankList(6)
  }
}
</script>

<style lang="scss" scoped>
  .page-ranking {
    display: flex;
    flex-direction: column;
    height: 100%;

    .ranking-main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
