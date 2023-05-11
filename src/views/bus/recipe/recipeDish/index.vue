<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                color: 'error',
                popConfirm: {
                  title: '是否删除该数据？',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
      <template #tableTitle>
        <a-space>
          <a-button type="primary" @click="handleCreate()"><PlusOutlined />添加菜品</a-button>
        </a-space>
      </template>
    </BasicTable>
    <DishModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  // 菜品管理 Page
  import { defineComponent, ref, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { getBasicColumns, getFormConfig } from './data';
  import { PlusOutlined } from '@ant-design/icons-vue';

  // import ExportTableBtn from '/@/views/bus/components/ExportTableBtn.vue';
  // import { ImpExcelModal } from '/@/components/Excel';

  import { demoListApi } from '/@/api/demo/table';

  // import { uploadApi, impDataApi } from '/@/api/sys/upload';

  import { useModal } from '/@/components/Modal';
  import DishModal from './DishModal.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      BasicTable,
      PlusOutlined,
      TableAction,
      DishModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});

      const formQuery = ref({});
      const tableColumns = getBasicColumns();

      const [registerTable, { getForm, reload, updateTableDataRecord }] = useTable({
        api: demoListApi,
        columns: tableColumns,
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: true,
        rowKey: 'id',
        canResize: false,
        actionColumn: {
          width: 180,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      function handleDelete(record: Recordable) {
        console.log('TODO 点击了删除', record);
        reload();
      }

      function getFormValues() {
        formQuery.value = getForm().getFieldsValue();
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      return {
        registerTable,
        registerModal,

        searchInfo,
        formQuery,
        demoListApi,
        // apiImport: impDataApi,
        tableColumns,
        getFormValues,
        reload,

        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
