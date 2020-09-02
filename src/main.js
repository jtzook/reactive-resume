import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import "./assets/tailwind.css";

library.add(faBars);

createApp(App).mount("#app");
