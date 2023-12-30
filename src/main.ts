import { createApp } from 'vue'
import App from './App.vue'
import Tree from './components/Tree.vue'

const app = createApp(App);
app.component('Tree', Tree);

app.mount('#app')
