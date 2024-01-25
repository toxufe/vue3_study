<script setup lang="ts">
import {} from "vue"
</script>

<template>
  <RouterLink to="/user1">user1</RouterLink>
  <RouterLink style="margin-left: 20px;" to="/user2">user2</RouterLink>
  <hr>
  <RouterView></RouterView> 
  <RouterView name="aaa"></RouterView> 
  <RouterView name="bbb"></RouterView> 
</template>

<style lang="scss" scoped></style>
