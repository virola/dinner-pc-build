<template>
  <BasicModal
    v-bind="$attrs"
    destroyOnClose
    @register="register"
    title="选择原料"
    :width="1000"
    @visible-change="handleShow"
    @ok="handleOk"
  >
    <BasicTable
      style="padding: 0"
      @register="registerTable"
      :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
    >
      <template #headerTop>
        <a-alert show-icon>
          <template #message>
            <template v-if="checkedKeys.length > 0">
              <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
              <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
            </template>
            <template v-else>
              <span>未选中任何项目</span>
            </template>
          </template>
        </a-alert>
      </template>
    </BasicTable>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { Alert } from 'ant-design-vue';

  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicModal, BasicTable, AAlert: Alert },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const loading = ref(true);
      const lines = ref(10);
      const [register, { setModalProps, redoModalHeight, closeModal }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        },
      );

      function handleShow(visible: boolean) {
        if (visible) {
          loading.value = true;
          setModalProps({ loading: true, confirmLoading: true });
          setTimeout(() => {
            lines.value = Math.round(Math.random() * 30 + 5);
            loading.value = false;
            setModalProps({ loading: false, confirmLoading: false });
          }, 3000);
        }
      }

      function setLines() {
        lines.value = Math.round(Math.random() * 20 + 10);
      }

      const checkedKeys = ref<Array<string | number>>([]);
      // 选中项目
      let checkedRows: any[] = [];

      const [registerTable, { getForm }] = useTable({
        title: '',
        api: demoListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        clickToRowSelect: true,
        canResize: false,
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelectChange(selectedRowKeys: (string | number)[], selectedRows) {
        checkedKeys.value = selectedRowKeys;
        checkedRows = selectedRows;
      }

      async function handleOk() {
        try {
          const results = checkedRows;
          // console.log(results);
          setModalProps({ confirmLoading: true });
          emit('success', { data: results });
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        register,
        loading,
        handleShow,
        lines,
        setLines,

        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,

        handleOk,
      };
    },
  });
</script>
<style scoped>
  .empty-tips {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
