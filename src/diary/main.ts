import {createApp} from "vue";
import naive from 'naive-ui';
import {router} from "./router/router";
import {i18n} from "./i18n/i18n";

let app = createApp({});
app.use(naive);
app.use(router);
app.use(i18n);
app.mount("#app");
