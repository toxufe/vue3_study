<script setup lang="ts">
</script>

<template>
  <div>
    <h1>BEM 架构</h1>
    <div class="fly-div">
      <div class="fly-div__title">你好</div>
      <div class="fly-div--success">
        hello world
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(div){
  background: #ccc;
  @include e(title){
    color: red;
  }
  @include m(success){
    color: green;
  }
}
</style>
