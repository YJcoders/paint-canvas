import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './theme/index.less'
// svg组件注册导入
import SvgIcon from './components/svgIcon/index.vue'
import "virtual:svg-icons-register";
const app = createApp(App)
app.component("SvgIcon", SvgIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
