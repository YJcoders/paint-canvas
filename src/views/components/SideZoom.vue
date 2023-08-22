<template>
  <div class="side-zoom">
    <div class="minus">
      <svg-icon icon="minus" @click="onZoom(false)" />
    </div>
    <div class="percent" title="重置">100%</div>
    <div class="plus">
      <svg-icon icon="plus" @click="onZoom(true)" />
    </div>

    <div class="minus back">
      <svg-icon icon="back" @click="onJump(false)" />
    </div>
    <div class="plus">
      <svg-icon icon="go" @click="onJump(true)" />
    </div>
  </div>
</template>

<script setup lang="ts">

function onZoom(flag: boolean) {
}

function onJump(flag: boolean) {
}
</script>

<style lang="less" scoped>
.side-zoom {
  display: flex;
  width: 150px;
  height: auto;
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;

  .minus,
  .percent,
  .plus {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 6px;
    border: 1px solid var(--border-color)
  }

  .minus {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .plus {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .percent {
    padding: 0 10px;
    border-left: none;
    border-right: none;
    user-select: none;
  }

  .minus:hover,
  .percent:hover,
  .plus:hover {
    background: var(--svg-selected-color);
  }

  .back {
    margin-left: 15px;
    border-right: none;
  }
}
</style>