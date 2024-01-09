import { createApp } from 'vue'
import App from './App.vue'
import Tree from './components/Tree.vue'
// import vcolorpicker from 'vcolorpicker'
// import 'vcolorpicker/lib/style.css'
import useResize from "v-resize-fly";
import useDark from 'v-usedark-fly';


const app = createApp(App);
app.component('Tree', Tree);

app.use(useResize);
app.use(useDark);
app.mount('#app')
