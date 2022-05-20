import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
// import { setupStore } from './store'; // 状态管理
import App from './App.vue';
import router from './routes';

const app = createApp(App);
app.use(router);
app.use(Antd);
// setupStore(app);

app.mount('#app');
