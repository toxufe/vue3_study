<script setup lang="ts">
import {useAttrs} from "vue"
const attrs = useAttrs()
console.log(attrs.name, attrs.title)
</script>

<template>
  <div class="">A组件</div>
</template>

<style lang="scss" scoped></style>
