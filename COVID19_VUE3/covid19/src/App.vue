<script setup lang="ts">
import { onMounted } from "vue";
import bg from "./assets/1.jpg";
import { useStore } from "./stores";
import * as echarts from "echarts";
import "@/assets/china.js";
import { geoCoordMap } from "@/assets/geoMaps";

const store = useStore();

const initCharts = () => {
    const city = store.list!.areaTree[2].children;
    store.item = city[5].children;
    const data = city.map((v) => {
        return {
            name: v.name,
            value: geoCoordMap[v.name].concat(v.total.confirm),
            children: v.children,
        };
    });

    var option = {
        geo: {
            map: "china",
            aspectScale: 0.8,
            layoutCenter: ["50%", "50%"],
            layoutSize: "120%",
            itemStyle: {
                areaColor: {
                    type: "linear-gradient",
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#152E6E", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#0673AD", // 50% 处的颜色
                        },
                    ],
                    global: true, // 缺省为 false
                },
                shadowColor: "#0f5d9d",
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },

            emphasis: {
                areaColor: "#0f5d9d",
            },

            regions: [
                {
                    name: "南海诸岛",
                    itemStyle: {
                        areaColor: "rgba(0, 10, 52, 1)",
                        borderColor: "rgba(0, 10, 52, 1)",
                        opacity: 0,
                        label: {
                            show: false,
                            color: "#009cc9",
                        },
                    },
                    label: {
                        show: false,
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                },
            ],
        },
        series: [
            {
                type: "map",
                map: "china",
                aspectScale: 0.8,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: "120%",
                zoom: 1, //当前视角的缩放比例
                scaleLimit: {
                    //滚轮缩放的极限控制
                    min: 1,
                    max: 2,
                },
                label: {
                    show: true,
                    color: "#FFFFFF",
                    fontSize: 12,
                },
                itemStyle: {
                    areaColor: "#0c3653",
                    borderColor: "#1cccff",
                    borderWidth: 1.8,
                },
                emphasis: {
                    areaColor: "#56b1da",
                    label: {
                        show: true,
                        color: "#fff",
                    },
                },
                data: data,
            },
            {
                // name: 'Top 5',
                type: "scatter",
                coordinateSystem: "geo",
                symbol: "pin",
                symbolSize: [45, 45],
                label: {
                    show: true,
                    color: "#fff",
                    formatter(v: any) {
                        return v.data.value[2];
                    },
                },
                itemStyle: {
                    color: "#1e90ff", //标志颜色
                },
                data: data,
            },
        ],
    };

    const charts = echarts.init(document.querySelector("#china") as HTMLElement,null,{ height: 800});
    charts.setOption(option);

    // 点击事件
    charts.on("click", (e: any) => {
        store.item = e.data.children;
    });
};

onMounted(async () => {
    await store.getList();
    initCharts();
});
</script>

<template>
    <div class="box" :style="{ background: `url(${bg})` }">
        <div class="box-left"></div>
        <div id="china" class="box-center">
        </div>
        <div class="box-right"></div>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    height: 100%;
    overflow: hidden;
}
.box {
    display: flex;
    height: 100%;
    overflow: hidden;
    &-left {
        width: 400px;
    }
    &-center {
        flex: 1;
        display: flex;
        align-items: center;
    }
    &-right {
        width: 400px;
    }
}
</style>
