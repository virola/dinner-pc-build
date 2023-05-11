<template>
  <div class="m-4">
    <Descriptions size="small" class="bg-white p-4" bordered :column="1">
      <DescriptionsItem v-for="(desc, dIndex) in schemas" :key="dIndex" :label="desc.label">
        <div v-if="!renderData[desc.field]" class="text-secondary">暂无文件</div>
        <div v-else>
          <div
            v-for="(file, index) in optData[desc.field].fileList"
            :key="index"
            class="flex items-center py-1"
          >
            <div>{{ file }}</div>
            <div class="ml-6">
              <Space>
                <a-button type="primary" @click="handleOpen(optData[desc.field], index)"
                  >预览</a-button
                >
                <a-button type="primary" @click="handleDownload(optData[desc.field], index)"
                  >下载</a-button
                >
              </Space>
            </div>
          </div>
        </div>
      </DescriptionsItem>
    </Descriptions>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Space, Descriptions, DescriptionsItem } from 'ant-design-vue';

  import { getBasicColumns, getBasicData, descData, descSchema, descOpt } from './data';

  export default defineComponent({
    components: { Space, Descriptions, DescriptionsItem },
    setup() {
      const loading = ref(false);

      // 预览
      function handleOpen(record, index) {
        const file = record.fileList[index];
        console.log(file);
      }

      // 下载
      function handleDownload(record, index) {
        const file = record.fileList[index];
        console.log(file);
      }

      return {
        columns: getBasicColumns(),
        data: getBasicData(),
        loading,
        handleOpen,
        handleDownload,

        schemas: descSchema,
        renderData: descData,
        optData: descOpt,
      };
    },
  });
</script>
<style lang="less" scoped></style>
