import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '@/server'
import type { RootObject, ChinaDayList, ChinaAdd, ChinaTotal } from './type'

export const useStore = defineStore('store', () => {
  const list = ref<RootObject>()
  const item = ref(<ChinaDayList[]>[])
  const chinaAdd = ref(<ChinaAdd>{})
  const chinaTotal = ref(<ChinaTotal>{})
  const chinaDayList = ref(<ChinaDayList[]>[]);

  const getList = async () => {
    const result = await getApiList();
    list.value = result.data.data;
    chinaAdd.value = result.data.data.chinaTotal.today;
    chinaTotal.value = result.data.data.chinaTotal.total;
    chinaDayList.value = result.data.data.chinaDayList.splice(0, 10);
  }

  return { list,item,chinaAdd,chinaTotal,chinaDayList, getList }
})
