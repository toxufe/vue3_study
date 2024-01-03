<template>
    <h1>transition-group 列表的移动过度</h1>

    <div>
        <button @click="random">random</button>
        <TransitionGroup move-class="xxx" class="wraps" tag="div">
            <div class="items" :key="item.id" v-for="item in list">
                {{ item.number }}
            </div>
        </TransitionGroup>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import "animate.css";
import _ from "lodash";

const list = ref(
    Array.apply(null, { length: 81 } as number[]).map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1,
        };
    }),
);

const random = () => {
    list.value = _.shuffle(list.value);
};
</script>
<style scoped lang="scss">
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.xxx {
    transition: all 0.5s;
}
</style>
