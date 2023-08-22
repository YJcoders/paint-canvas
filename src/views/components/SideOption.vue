<template>
  <div class="side-option">
    <div v-for="(item, index) in list" :key="index" class="item-option">
      <svg-icon :icon="item.icon" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  { title: '打开', icon: 'open', option: 'open' },
  { title: '保存', icon: 'save', option: 'save' },
  { title: '导出图片', icon: 'export-pic', option: 'export' },
  { title: '重置画布', icon: 'reset', option: 'reset' },
]
function onSetting() {
  console.log('more');
}
</script>

<style lang="less" scoped>
.side-option {
  width: 150px;
  height: auto;
  padding: 10px;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, .05), 0px 0px 3.12708px rgba(0, 0, 0, .0798), 0px 0px .931014px rgba(0, 0, 0, .1702);

  .item-option {
    display: flex;
    align-items: center;
    line-height: 32px;
    padding: 0 10px;
    border-radius: 4px;
    cursor: pointer;
  }


  .item-option:hover {
    background: var(--svg-hover-bg);
  }

  .svg-icon {
    margin-right: 8px
  }
}
</style>