<script setup lang="ts">
import { onMounted } from "vue";
import bg from "./assets/1.jpg";
import { useStore } from "./stores";
import * as echarts from "echarts";
import "@/assets/china.js";
import { geoCoordMap } from "@/assets/geoMaps";
import "animate.css";

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

    const charts = echarts.init(document.querySelector("#china") as HTMLElement, null, { height: 800 });
    charts.setOption(option);

    // 点击事件
    charts.on("click", (e: any) => {
        store.item = e.data.children;
    });
};

const initPie = () => {
    const charts = echarts.init(document.querySelector(".box-left-pie") as HTMLElement);
    const option = {
        backgroundColor: "#223651",
        tooltip: {
            trigger: "item",
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        series: [
            {
                // name: 'Access From',
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 4,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                label: {
                    show: true,
                    // position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        // fontWeight: 'bold'
                    },
                },
                // labelLine: {
                //   show: false
                // },
                data: store.chinaDayList.map((v) => {
                    return {
                        name: v.date,
                        value: v.today.confirm,
                    };
                }),
            },
        ],
    };
    charts.setOption(option);
};
const initLine = () => {
    const charts = echarts.init(document.querySelector(".box-left-line") as HTMLElement);
    const option = {
        backgroundColor: "#223651",
        xAxis: {
            type: "category",
            data: store.chinaDayList.map((v) => v.date),
            axisLine: {
                lineStyle: {
                    color: "#fff",
                },
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#fff",
                },
            },
        },
        label: { show: true },
        tooltip: {
            trigger: "axis",
        },
        series: [
            {
                data: store.chinaDayList.map((v) => v.today.confirm),
                type: "line",
                smooth: true,
            },
        ],
    };
    charts.setOption(option);
};
onMounted(async () => {
    await store.getList();
    initCharts();
    initPie();
    initLine();
});
</script>

<template>
    <div class="box" :style="{ background: `url(${bg})` }">
        <div class="box-left">
            <div class="box-left-card">
                <section>
                    <div>较上日+ {{ store.chinaAdd.storeConfirm % 10 }}</div>
                    <div>{{ store.chinaTotal.confirm }}</div>
                    <div>本土现有确诊</div>
                </section>
                <section>
                    <div>较上日+ {{ store.chinaAdd.storeConfirm % 10 }}</div>
                    <div>{{ store.chinaTotal.confirm }}</div>
                    <div>现有确诊</div>
                </section>
                <section>
                    <div>较上日+ {{ store.chinaAdd.confirm % 10 }}</div>
                    <div>{{ store.chinaTotal.confirm }}</div>
                    <div>累计确诊</div>
                </section>
                <section>
                    <div>较上日+ {{ store.chinaAdd.heal }}</div>
                    <div>{{ store.chinaTotal.heal }}</div>
                    <div>无症状感染者</div>
                </section>
                <section>
                    <div>较上日+ {{ store.chinaAdd.input }}</div>
                    <div>{{ store.chinaTotal.input }}</div>
                    <div>境外输入</div>
                </section>
                <section>
                    <div>较上日+ {{ store.chinaAdd.dead }}</div>
                    <div>{{ store.chinaTotal.dead }}</div>
                    <div>累计死亡</div>
                </section>
            </div>
            <div class="box-left-pie"></div>
            <div class="box-left-line"></div>
        </div>
        <div id="china" class="box-center"></div>
        <div class="box-right">
            <table class="table" cellspacing="0" border="1">
                <thead>
                    <tr>
                        <th>地区</th>
                        <th>新增确诊</th>
                        <th>累计确诊</th>
                        <th>治愈</th>
                        <th>死亡</th>
                    </tr>
                </thead>
                <transition-group enter-active-class="animate__animated animate__flipInY" tag="tbody">
                    <tr :key="item.id" v-for="(item, index) in store.item">
                        <td>{{ item.name }}</td>
                        <td>{{ item.today.confirm }}</td>
                        <td>{{ item.total.confirm }}</td>
                        <td>{{ item.total.heal }}</td>
                        <td>{{ item.total.dead }}</td>
                    </tr>
                </transition-group>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

$itemColor: #41b0db;
$itemBg: #223651;
$itemBorder: #212028;

.table {
    width: 100%;
    background: #212028;

    tr {
        th {
            padding: 5px;
            white-space: nowrap;
        }

        td {
            padding: 5px 10px;
            width: 100px;
            white-space: nowrap;
            text-align: center;
        }
    }
}
html,
body,
#app {
    height: 100%;
    overflow: hidden;
}
.box {
    height: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    color: #fff;
    &-left {
      > div {
        box-shadow: 0 0 10px #000;
      }
        width: 400px;

        &-pie {
            height: 320px;
            margin-top: 20px;
        }

        &-line {
            height: 320px;
            margin-top: 20px;
        }

        &-card {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto;

            section {
                background: $itemBg;
                border: 1px solid $itemBorder;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;

                div:nth-child(2) {
                    color: $itemColor;
                    padding: 10px 0;
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
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
