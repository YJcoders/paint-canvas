<template>
  <header>
    <svg-icon icon="unlock" class="svg-button" :class="{ 'active-item': isLock }" @click="onLock" />
    <span class="divide">|</span>
    <svg-icon v-for="item in list" :key="item" :icon="item" class="svg-button"
      :class="{ 'active-svg-button': activeItem === item }" @click="onClick(item)" />

    <span class="divide">|</span>
    <svg-icon icon="more" class="svg-button" @click="onMore" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ['drag', 'select', 'diamond', 'circle', 'arrow-right', 'line', 'pen', 'text', 'pic', 'eraser']

const isLock = ref(false)
function onLock() {
  isLock.value = !isLock.value
}

const activeItem = ref('select')
function onClick(item: string) {
  activeItem.value = item
}

function onMore() {
  console.log('more');
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  width: auto;
  height: 42px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, .05), 0px 0px 3.12708px rgba(0, 0, 0, .0798), 0px 0px .931014px rgba(0, 0, 0, .1702);

  .svg-button,
  .divide {
    margin-right: 5px;
  }

  .svg-button:last-child {
    margin-right: 0;
  }

  .svg-button.active-svg-button {
    color: #5b57de;
    background: var(--svg-selected-bg);
  }
}
</style>
