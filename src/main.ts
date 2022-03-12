import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './global.less';

import router from './routes';

import App from './App.vue';

const app = createApp(App)

app
    .use(router)
    .use(ElementPlus)
    .mount('#app')
