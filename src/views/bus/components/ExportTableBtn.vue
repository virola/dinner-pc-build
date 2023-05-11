<template>
  <div>
    <a-button @click="clickBtn">导出</a-button>
    <ExpExcelModal :defaultName="defaultName" @register="register" @success="defaultHeader" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ExpExcelModal, ExportModalResult } from '/@/components/Excel';
  import { useModal } from '/@/components/Modal';
  // import { TableCol } from './typing';
  import { BasicColumn } from '/@/components/Table/src/types/table';
  import { exportData } from './exportData';

  export default defineComponent({
    name: 'ExportTableBtn',
    components: { ExpExcelModal },
    props: {
      columns: {
        type: Array as PropType<BasicColumn[]>,
        default: () => [],
      },
      data: {
        type: Array,
        default: () => [],
      },
      api: {
        type: [String, Function],
        default: '',
      },
      where: Object,
      defaultName: {
        type: String,
        default: '导出',
      },
    },
    emits: ['btn-click'],
    setup(props, { emit }) {
      const [register, { openModal }] = useModal();

      function defaultHeader({ filename, bookType }: ExportModalResult) {
        exportData({
          api: props.api,
          columns: props.columns,
          datasource: props.data,
          filename,
          where: props.where,
          fileType: bookType,
        });
      }

      function clickBtn() {
        emit('btn-click');
        openModal();
      }

      return {
        defaultHeader,
        register,
        clickBtn,
      };
    },
  });
</script>
