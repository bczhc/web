import {createApp} from "vue";
import Diary from "./Diary.vue";
import naive from 'naive-ui';

let app = createApp(Diary);
app.use(naive);
app.mount("#app");
