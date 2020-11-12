<template>
  <div class="page-classify">
    <normalheader titles="分类"></normalheader>
    <div class="classify-main">
      <headertype :types="types" @listclick="listchange"></headertype>
      <cartoonslist :list="list"></cartoonslist>
    </div>
  </div>
</template>

<script>
import normalheader from '@/components/NormalHeader'
import headertype from '@/components/HeaderType'
import cartoonslist from '@/components/CartoonsList'
import { getTypes, getTypesList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Classify',
  components: {
    normalheader,
    headertype,
    cartoonslist
  },
  data () {
    return {
      types: [],
      cartoonslist: []
    }
  },
  // 统一传入cartonnlist的数据格式  数据格式不合适 通过计算属性整理
  computed: {
    list () {
      return this.cartoonslist.map((item) => {
        return {
          id: item.bookstore_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview,
          coverurl: item.coverurl
        }
      })
    }
  },
  methods: {
    listchange (payload) {
      this.getTypesList(payload.data.targetargument)
    },
    getTypes () {
      getTypes()
        .then((res) => {
          // 数据判断 code 值
          if (res.code === 200) {
            this.types = res.info
          } else {
            alert(res.code + res.code_msg)
          }
        })
        .catch((e) => {
          alert('网络错误,请稍后尝试' + e)
        })
    },
    getTypesList (targetargument) {
      getTypesList(targetargument)
        .then((res) => {
          // 数据判断 code 值
          if (res.code === 200) {
            this.cartoonslist = JSON.parse(unformat(res.info)).comicsList
          } else {
            alert(res.code + res.code_msg)
          }
        })
        .catch((e) => {
          alert('网络错误,请稍后尝试' + e)
        })
    }
  },
  async created () {
    await this.getTypes(3)
    this.getTypesList()
  }
}
</script>

<style lang="scss" scoped>
  .page-classify {
    display: flex;
    flex-direction: column;
    height: 100%;

    .classify-main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
