import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '@/server'

export const useStore = defineStore('store', () => {
  const list = ref({})

  const getList = async () => {
    const result = await getApiList();
    console.log(result);
  }

  return { list, getList }
})
