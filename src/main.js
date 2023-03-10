import { createApp } from "vue";
import "./styles/reset.scss";
import "./style.scss";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(store);

app.mount("#app");
