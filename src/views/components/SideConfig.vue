<template>
  <div class="side-config">
    <div class="config-title">描边</div>
    <div class="fe-flex">
      <div v-for="(item, index) in colorList" :key="index" class="option-picker" @click="onSelectOutline(item)">
        <div class="color-box" :style="{ background: item }"></div>
      </div>
      <span class="divide">|</span>
      <div class="color-picker-box" :style="{ backgroundColor: currentOutlineColor }"></div>
    </div>

    <div class="config-title">背景</div>
    <div class="fe-flex">
      <div v-for="(item, index) in bgList" :key="index" class="option-picker color-picker-bg" @click="onSelectBg(item)">
        <div class="color-box" :style="{ background: item }"></div>
      </div>
      <span class="divide">|</span>
      <div class="color-picker-box color-picker-box-bg" :style="{ backgroundColor: currentBgColor }"></div>
    </div>

    <div class="config-title">填充</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in fillList" :key="index" class="option-picker color-picker-bg"
        :class="{ 'color-fill-svg': !item.startsWith('#'), 'active-svg-button': item === currentFillColor }"
        @click="onSelectFill(item)">
        <div v-if="item.startsWith('#')" class="color-box" :style="{ background: item }"></div>
        <svg-icon v-else :icon="item" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">描边宽度</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in widthList" :key="index" class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item === currentWidth }" @click="onSelectWidth(item)">
        <svg-icon :icon="item" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">边框样式</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in lineList" :key="index" class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item === currentLine }" @click="onSelectLine(item)">
        <svg-icon :icon="item" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">边角</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in roundList" :key="index" class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item === currentRound }" @click="onSelectRound(item)">
        <svg-icon :icon="item" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">对齐</div>
    <div class="fe-flex color-fill align-picker">
      <div v-for="(item, index) in alignList" :key="index" :title="item.title"
        class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item.option === currentAlign }" @click="onSelectAlign(item.option)">
        <svg-icon :icon="item.option" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">透明度</div>
    <input type="range" @change="onTransparent">


    <div class="config-title">图层</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in levelList" :key="index" :title="item.title"
        class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item.option === currentLevel }" @click="onSelectLevel(item.option)">
        <svg-icon :icon="item.option" class="svg-fill" />
      </div>
    </div>

    <div class="config-title">操作</div>
    <div class="fe-flex color-fill">
      <div v-for="(item, index) in optionList" :key="index" :title="item.title"
        class="option-picker color-picker-bg color-fill-svg"
        :class="{ 'active-svg-button': item.option === currentOption }" @click="onSelectOption(item.option)">
        <svg-icon :icon="item.option" class="svg-fill" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 描边
const currentOutlineColor = ref('#1e1e1e')
const colorList = ['#1e1e1e', '#e03131', '#2f9e44', '#1971c2', '#f08c00']
function onSelectOutline(item: string) {
  currentOutlineColor.value = item
}
// 背景
const currentBgColor = ref('#ffffff')
const bgList = ['#ffffff', '#ffc9c9', '#b2f2bb', '#a5d8ff', '#ffec99']
function onSelectBg(item: string) {
  currentBgColor.value = item
}
// 填充
const currentFillColor = ref('#ffffff')
let fillList = ref(['slash', 'mesh', currentBgColor.value])
watch(currentBgColor, (val) => {
  fillList.value.splice(2, 1, val)
})
function onSelectFill(item: string) {
  currentFillColor.value = item
}
// 描边宽度
const currentWidth = ref('line-1')
const widthList = ref(['line-1', 'line-2', 'line-3'])
function onSelectWidth(item: string) {
  currentWidth.value = item
}
// 边框样式
const currentLine = ref('line-1')
const lineList = ref(['line-1', 'dashed-1', 'dashed-2'])
function onSelectLine(item: string) {
  currentLine.value = item
}
// 圆角
const currentRound = ref('round-1')
const roundList = ref(['round-1', 'round-2'])
function onSelectRound(item: string) {
  currentRound.value = item
}
// 对齐
const currentAlign = ref('')
const alignList = ref([
  { title: '左对齐', option: 'align-left' },
  { title: '水平居中', option: 'align-center-h' },
  { title: '右对齐', option: 'align-right' },
  { title: '顶部对齐', option: 'align-top' },
  { title: '垂直居中', option: 'align-center-v' },
  { title: '底对齐', option: 'align-bottom' },
])
function onSelectAlign(item: string) {
  currentAlign.value = item
}

// 透明度
const transparentValue = ref(1)
function onTransparent(ev: Event) {
  transparentValue.value = Number((<HTMLInputElement>ev.target).value) / 100
}

// 图层
const currentLevel = ref('')
const levelList = ref([
  { title: '置于底层', option: 'level-bottom' },
  { title: '上一层', option: 'level-next' },
  { title: '置于顶层', option: 'level-top' },
  { title: '下一层', option: 'level-prev' },
])
function onSelectLevel(item: string) {
  currentOption.value = item
}

// 操作
const currentOption = ref('')
const optionList = ref([
  { title: '复制', option: 'copy' },
  { title: '删除', option: 'delete' },
  { title: '链接', option: 'link' },
  { title: '编组', option: 'group' },
  { title: '取消编组', option: 'unGroup' },
])
function onSelectOption(item: string) {
  currentOption.value = item
}
</script>

<style lang="less" scoped>
@import './sideConfig.less';
</style>