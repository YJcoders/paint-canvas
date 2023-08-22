<template>
  <div class="side-bar">
    <svg-icon icon="setting" class="svg-button svg-setting" @click="onChange" />

    <side-config v-if="isConfig" />
    <side-option v-else />
    <side-zoom />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideConfig from './components/SideConfig.vue'
import SideOption from './components/SideOption.vue'
import SideZoom from './components/SideZoom.vue'

const isConfig = ref(true)
function onChange() {
  isConfig.value = !isConfig.value
}
</script>

<style lang="less" scoped>
.side-bar {
  position: absolute;
  left: 20px;
  top: 20px;

  .svg-setting {
    padding: 7px;
    border: 1px solid var(--border-color)
  }
}
</style>