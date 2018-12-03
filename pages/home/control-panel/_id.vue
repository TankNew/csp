<template>
  <section class="p-3">{{ id }}</section>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  validate({ params }) {
    // 必须是number类型
    // return /^\d+$/.test(params.id)
    return true
  },
  created() {
    console.log('当前home参数ID：' + this.id)
  }
}
</script>
