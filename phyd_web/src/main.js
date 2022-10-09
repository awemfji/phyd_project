import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import memoryUtils from "@/utils/memoryUtils"
import storageUtils from '@/utils/storageUtils'

Vue.use(ElementUI)
Vue.config.productionTip = false;
const user = storageUtils.getUser()
if (user && user._id) {
  memoryUtils.user = user
}
import './permission'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
