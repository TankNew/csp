<template>
  <nuxt/>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: null
    }
  },
  computed: mapGetters({ currentPath: 'pathName/currentPath' }),
  head() {
    return {
      title: this.currentPath,
      meta: [{ hid: 'description', name: 'description', content: 'hi-Sen' }]
    }
  }
}
</script>
