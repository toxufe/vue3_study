import { createApp } from 'vue'
import App from './App.vue'
import Tree from './components/Tree.vue'
import vcolorpicker from 'vcolorpicker'
import 'vcolorpicker/lib/style.css'

const app = createApp(App);
app.component('Tree', Tree);

app.use(vcolorpicker);

app.mount('#app')
