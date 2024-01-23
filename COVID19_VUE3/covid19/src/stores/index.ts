import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '@/server'
import type { RootObject, ChinaDayList, ChinaAdd, ChinaTotal } from './type'

export const useStore = defineStore('store', () => {
  const list = ref<RootObject>()

  const getList = async () => {
    const result = await getApiList();
    list.value = result.data.data;
  }

  return { list, getList }
})
