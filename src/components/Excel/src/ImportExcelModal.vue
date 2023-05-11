<template>
  <div>
    <div @click="handleUpload">
      <slot></slot>
    </div>
    <BasicModal
      v-bind="$attrs"
      :title="t('component.excel.importModalTitle')"
      :footer="null"
      @register="register"
    >
      <UploadDragger
        :limit="1"
        :before-upload="beforeUpload"
        :show-upload-list="false"
        accept=".xlsx, .xls"
        :auto-upload="false"
        :disabled="isUploadingRef"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <LoadingOutlined spin v-if="isUploadingRef" />
          <upload-outlined v-else />
        </p>
        <p class="ant-upload-text">将文件拖到此处，或<em>点击上传</em></p>
        <p class="ant-upload-hint">
          <span>仅允许导入xls、xlsx格式文件。</span>
        </p>
      </UploadDragger>
    </BasicModal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Upload } from 'ant-design-vue';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { UploadOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { isFunction } from '/@/utils/is';
  import { warn } from '/@/utils/log';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  //   types
  import { FileItem, UploadResultStatus } from '../../Upload/src/typing';

  const { t } = useI18n();

  export default defineComponent({
    components: { BasicModal, UploadDragger: Upload.Dragger, UploadOutlined, LoadingOutlined },
    props: {
      // 文件最大多少MB
      maxSize: {
        type: Number as PropType<number>,
        default: 20,
      },
      /**
       * 导入文件的上传地址
       */
      api: {
        type: Function as PropType<PromiseFn>,
        default: null,
        required: true,
      },
      name: {
        type: String as PropType<string>,
        default: 'file',
      },
      filename: {
        type: String as PropType<string>,
        default: null,
      },
    },
    emits: ['success', 'register'],
    setup(props, { emit }) {
      const { createMessage } = useMessage();

      //   是否正在上传
      const isUploadingRef = ref(false);
      const [register, { openModal }] = useModal();

      async function uploadApiByItem(item: FileItem) {
        const { api } = props;
        if (!api || !isFunction(api)) {
          return warn('upload api must exist and be a function');
        }
        try {
          isUploadingRef.value = true;
          item.status = UploadResultStatus.UPLOADING;
          const { data } = await props.api?.(
            {
              file: item.file,
              name: props.name,
              filename: props.filename,
            },
            function onUploadProgress(progressEvent: ProgressEvent) {
              const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              item.percent = complete;
            },
          );
          item.status = UploadResultStatus.SUCCESS;
          item.responseData = data;
          return {
            success: true,
            error: null,
          };
        } catch (e) {
          console.log(e);
          item.status = UploadResultStatus.ERROR;
          isUploadingRef.value = false;
          return {
            success: false,
            error: e,
          };
        }
      }

      function handleUpload() {
        openModal(true);
      }

      async function handleOk() {
        emit('success');
        openModal(false);
      }

      // 上传前校验
      function beforeUpload(file: File) {
        // const { size, name } = file;
        const { maxSize } = props;
        // 设置最大值，则判断
        if (maxSize && file.size / 1024 / 1024 >= maxSize) {
          createMessage.error(t('component.upload.maxSizeMultiple', [maxSize]));
          return false;
        }
        return false;
      }

      function handleChange(ev) {
        console.log(ev.fileList);
        if (ev.fileList && ev.fileList.length) {
          uploadApiByItem(ev.fileList[0]);
        }
      }

      return {
        beforeUpload,
        handleOk,
        // registerModal,
        register,
        t,
        handleChange,
        handleUpload,
        isUploadingRef,
      };
    },
  });
</script>
