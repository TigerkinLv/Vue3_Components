import { createApp } from "vue";

import App from "./App";
import router from './router'

import 'normalize.css/normalize.css'

import { Picker, Popup } from "vant";

createApp(App)
  .use(Picker)
  .use(Popup)
  .use(router)
  .mount("#app");