import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
import App from "./App.vue";

import "./assets/styles/main.scss";

createApp(App).use(VueClickAway).mount("#app");
