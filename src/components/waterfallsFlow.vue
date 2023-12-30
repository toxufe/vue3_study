<script setup lang="ts">
import { onMounted, reactive } from "vue";

const props = defineProps<{
    list: any[];
}>();

const waterfallsData:any[] = reactive([]);
const heightArr:any[] = reactive([]);
const init = () => {
  let boxwidth = 130;
  let clientWidth = document.body.clientWidth;
  let cols = Math.floor(clientWidth / boxwidth);

  for(let i=0;i<props.list.length;i++){
    if(i<cols){
      props.list[i].top = 0;
      props.list[i].left = i*boxwidth;
      waterfallsData.push(props.list[i]);
      heightArr.push(props.list[i].height);
    }else{
      let minHeight = Math.min(...heightArr);// 获取最小高度
      let minIndex = heightArr.indexOf(minHeight);// 获取最小高度的索引
      props.list[i].top = minHeight + 10;// 设置top值 距顶部距离
      props.list[i].left = minIndex*boxwidth;// 设置left值 距左边距离
      waterfallsData.push(props.list[i]);
      heightArr[minIndex] += props.list[i].height + 10;
    }
  }
};

onMounted(() => {
    init();
});
</script>

<template>
    <div class="wrap">
        <div :style="{top:item.top+'px',left:item.left+'px',background:item.background,height:item.height+'px'}" v-for="item in waterfallsData" class="item"></div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: relative;
  height: 100%;
  .item {
    position: absolute;
    width: 120px;
  }
}
</style>
