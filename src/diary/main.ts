import {createApp} from "vue";
import naive from 'naive-ui';
import {router} from "./router/router";

let app = createApp({});
app.use(naive);
app.use(router);
app.mount("#app");
