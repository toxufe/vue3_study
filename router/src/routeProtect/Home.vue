<script setup lang="ts">
import {} from "vue"
import {useRouter} from 'vue-router'
const router = useRouter();

</script>

<template>
  <div></div>
<RouterLink v-for="item in router.getRoutes()" :to="item.path"> {{ item.name }} </RouterLink>
</template>

<style lang="scss" scoped>
a {
  margin-right: 20px;
}
</style>
