import { createApp } from "vue";
import VueClickAway from "vue3-click-away";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faXmark,
  faAngleUp,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import "./assets/styles/main.scss";

library.add(faBars, faXmark, faAngleUp, faAngleRight);

const app = createApp(App);

app.use(VueClickAway);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
