<template>
  <svg :class="svgClass()" aria-hidden="true" width="16px" height="16px" fill="currentColor">
    <use :xlink:href="iconName()" />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    require: true
  },
  prefix: {
    type: String
  },
  className: {
    type: String
  }
})
const iconName = () => {
  return props.prefix
    ? `#icon-${props.prefix}-${props.icon}`
    : `#icon-${props.icon}`;
}
const svgClass = () => {
  return props.className ? `svg-icon ${props.className}` : "svg-icon"
}
</script>
<style lang="less" scoped>

</style>
