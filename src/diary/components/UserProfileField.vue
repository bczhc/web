<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {useMessage} from 'naive-ui';

let props = defineProps<{
  title: string,
  content?: string,
  onSave?: (newValue: string) => Promise<void>,
}>();
let {t} = useI18n();

let message = useMessage();

let editStatus = ref(false);
let editContent = ref('');
let updating = ref(false);

function onSaveClicked() {
  updating.value = true;
  message.loading('Updating...');
  props.onSave?.(editContent.value).then(_ => {
    message.destroyAll();
    message.success('Updating succeeded');
  }).catch(_ => {
    message.destroyAll();
    message.error('Updating failed');
  }).finally(() => {
    updating.value = false;
  })
}
</script>

<template>
  <div>
    <n-text style="font-weight: bold; font-size: larger">
      {{ title }}
    </n-text>
    <br>
    <n-space align="center" v-if="!editStatus">
      <span v-if="content">{{ content }}</span>
      <span v-else>
          <n-text italic style="color: gray">{{ t('user_profile_unset') }}</n-text>
          </span>
      <n-button v-if="onSave" @click="editStatus = true">Edit</n-button>
    </n-space>

    <n-space v-if="editStatus" align="center">
      <n-input :default-value="content" v-model:value="editContent"></n-input>
      <n-button @click="onSaveClicked" :disabled="!updating ? null : 'disabled'">Save</n-button>
    </n-space>
  </div>
</template>

<style scoped>

</style>
