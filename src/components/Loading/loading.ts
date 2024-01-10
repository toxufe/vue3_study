
import type { App } from 'vue'
import {createVNode, render} from 'vue'
import Loading from './loading.vue'

/**
 * 转成Vnode 并且 挂载到body上
 */

export default {
    install(app: App) {
        const Vnode = createVNode(Loading);
        render(Vnode, document.body);
        app.config.globalProperties.$loading = {
            show:Vnode.component?.exposed?.show,
            hide:Vnode.component?.exposed?.hide
        }

        // app.config.globalProperties.$loading.show();
        // console.log(app,Vnode);
    }
}
