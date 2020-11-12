<template>
  <div class="header-type">
    <div
      :class="{ active: index === avtiveIndex, item: true }"
      v-for="(item, index) in types"
      :key="index"
      @click="handelClick(item, index)"
    >
      {{ item.name || item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderType',
  // 外部传入数据
  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      avtiveIndex: 0
    }
  },
  methods: {
    handelClick (data, index) {
      this.avtiveIndex = index
      // 要实现排行榜的切换,还是需要父组件完成
      this.$emit('listclick', { data, index })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-type {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 1px solid #dbd9dc;
    .item {
      width: 20%;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #000;
      &.active {
        color: #e7370c;
      }
    }
  }
</style>
