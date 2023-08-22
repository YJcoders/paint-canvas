<template>
  <main class="paint">
    <Header />
    <SideBar />

    <canvas width="100%" height="100%"></canvas>
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import SideBar from './SideBar.vue'
</script>

<style lang="less" scoped>
.paint {
  width: 100%;
  height: 100vh;
}
</style>
