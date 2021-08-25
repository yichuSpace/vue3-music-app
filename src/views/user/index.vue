<template>
  <div>user</div>
</template>

<script>
  import { getRecommend } from '@/api/recommend'
  export default {
    async created() {
      const result = await getRecommend()
      this.sliders = result.sliders
      this.albums = result.albums
    },
  }
</script>

<style lang="scss" scoped></style>
