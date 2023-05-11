<template>
  <DescriptionsItem v-if="desc" :label="desc.label">
    <div>
      <div v-if="desc.render">
        <template v-if="desc.render == 'tags'">
          <Tag color="success" v-for="(text, tindex) in data" :key="tindex">{{ text }}</Tag>
        </template>
        <template v-if="desc.render == 'image'">
          <Image :width="120" :src="data" :fallback="DEFAULT_IMAGE" />
        </template>
        <!-- 图片上传/文件上传TODO -->
        <template v-if="desc.render == 'upload'">
          <BasicUpload
            :maxSize="20"
            :maxNumber="1"
            @change="handleUploadChange($event, desc)"
            :api="uploadApi"
            :accept="['image/*']"
          />
        </template>
      </div>
      <div v-else>{{ data }}</div>
    </div>
  </DescriptionsItem>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { DescriptionsItem, Tag, Image } from 'ant-design-vue';

  import { DEFAULT_IMAGE } from '/@/settings/siteSetting';
  import { uploadApi } from '/@/api/sys/upload';
  import { BasicUpload } from '/@/components/Upload';

  export default defineComponent({
    components: {
      DescriptionsItem,
      Tag,
      Image,
      BasicUpload,
    },
    props: {
      desc: Object,
      data: Object,
    },
    setup() {
      // 处理上传事件
      function handleUploadChange(event, desc) {
        console.log('handle upload:', event, desc);
      }

      return {
        DEFAULT_IMAGE,
        uploadApi,
        handleUploadChange,
      };
    },
  });
</script>

<style scoped></style>
