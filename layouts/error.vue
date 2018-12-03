<template>
  <div class="container">
    <p class="head">Error</p>
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
  // layout: 'panel'
}
</script>
