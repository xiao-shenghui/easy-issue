import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// 全局引入mavonEditor组件
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
// 全局引入view-ui-plus
import * as ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia).use(mavonEditor).use(ViewUIPlus).mount('#app')
