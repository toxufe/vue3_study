
import type { App } from 'vue';
import { app } from './main'


interface IPlugin {
    install: (app: App, ...options: any[]) => void

}

let pluginList = new Set();

export default function <T extends IPlugin>(plugin: T, ...options: any[]) {
    if (pluginList.has(plugin)) {
        console.error('重复注册插件', plugin);
    } else {
        plugin.install(app, ...options);
        pluginList.add(plugin);
    }

}