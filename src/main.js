import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { setupAntd } from './ant-ui/index'  //导入UI封装

const app = createApp(App)

setupAntd(app)
app.use(router)
app.mount('#app')
