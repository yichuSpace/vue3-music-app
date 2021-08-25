<template>
  <Header></Header>
  <Tab></Tab>
  <router-view></router-view>
</template>

<script>
  import Header from '@/components/header/index.vue'
  import Tab from '@/components/tab/index.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Tab,
    },
  }
</script>

<style></style>
