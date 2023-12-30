<script setup lang="ts">
import { ref, computed } from "vue";

let firstname = ref("John");
let lastname = ref("Doe");

let name = computed<string>({
  get() {
    return firstname.value + "---" + lastname.value;
  },
  set(val) {
    let parts = val.split("---");
    firstname.value = parts[0];
    lastname.value = parts[1];
  },
});

const changename = () => {
  name.value = "John11---Doe11";
};
</script>

<template>
  <div>
    <input v-model="firstname" type="text" />
    <input v-model="lastname" type="text" />

    <div>{{ name }}</div>

    <button @click="changename">changename</button>
  </div>
</template>

<style scoped>
</style>
