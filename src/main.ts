// import './index.css'
// import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import Tree from './components/Tree.vue'
// import vcolorpicker from 'vcolorpicker'
// import 'vcolorpicker/lib/style.css'
import useResize from "v-resize-fly";
import useDark from 'v-usedark-fly';
import Loading from './components/Loading/loading'
import myUse from './myuse'
import { createPinia } from 'pinia'
import type { PiniaPluginContext } from 'pinia'


type Options = {
    key?: string
}


const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

const __pininKey__: string = "xiaoman";
const piniaPlugin = (options: Options) => {
    return (content: PiniaPluginContext) => {
        const { store } = content;
        const data = getStorage(`${options.key ?? __pininKey__}-${store.$id}`);
        console.log("---",data);
        store.$subscribe(() => {
            setStorage(`${options.key ?? __pininKey__}-${store.$id}`, toRaw(store.$state));
        })
        return {
            ...data
        }
    }
}
const pinia = createPinia();
pinia.use(piniaPlugin({
    key: 'pinia'
}));
export const app = createApp(App);
app.component('Tree', Tree);

app.use(useResize);
app.use(useDark);
app.use(pinia);
// app.use(Loading);

myUse(Loading);


app.config.globalProperties.$env = "dev";
app.config.globalProperties.$filter = {
    filter<T>(str: T) {
        return `满神-${str}`
    }
}

type Filter = {
    filter<T>(str: T): string
}
type Loading = {
    show(): void,
    hide(): void
}


declare module 'vue' {
    export interface ComponentCustomProperties {
        $env: string,
        $filter: Filter,
        $loading: Loading
    }
}



app.mount('#app')
