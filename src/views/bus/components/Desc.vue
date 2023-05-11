<template>
  <div>
    <div class="!m-4" v-for="(item, index) in schema" :key="index">
      <Descriptions :title="item.title" :column="item.column || 3" :bordered="item.bordered">
        <template #extra v-if="item.showExtra">
          <slot name="extra"></slot>
        </template>
        <DescriptionsItem v-for="(desc, dIndex) in item.fields" :key="dIndex" :label="desc.label">
          <div v-if="data">
            <div v-if="desc.render">
              <template v-if="desc.render == 'tags'">
                <Tag
                  color="success"
                  v-for="(text, tindex) in getData(desc.field, item.dataKey)"
                  :key="tindex"
                  >{{ text }}</Tag
                >
              </template>
              <template v-if="desc.render == 'image'">
                <Image
                  :width="120"
                  :src="getData(desc.field, item.dataKey)"
                  :fallback="DEFAULT_IMAGE"
                />
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
            <div v-else>{{ getData(desc.field, item.dataKey) }}</div>
          </div>
        </DescriptionsItem>
      </Descriptions>
      <Divider />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Divider, Descriptions, DescriptionsItem, Tag, Image } from 'ant-design-vue';
  import { SchemaItem } from './typing';
  import { DEFAULT_IMAGE } from '/@/settings/siteSetting';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    name: 'Desc',
    components: {
      Divider,
      Descriptions,
      DescriptionsItem,
      Tag,
      Image,
      BasicUpload,
    },
    props: {
      schema: {
        type: Array as PropType<SchemaItem[]>,
        default: () => [],
      },
      data: { type: Object },
      deepData: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      // 处理上传事件
      function handleUploadChange(event, desc) {
        console.log('handle upload:', event, desc);
      }

      function getData(key, parentKey) {
        const result = props.data || {};
        if (props.deepData) {
          if (!result[parentKey]) {
            return '';
          }
          return result[parentKey][key] || '';
        }
        // console.log(key, result[key]);
        return result[key] || '';
      }
      return {
        DEFAULT_IMAGE,
        uploadApi,
        handleUploadChange,
        getData,
      };
    },
  });
</script>

<style scoped></style>
