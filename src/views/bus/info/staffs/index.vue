<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '修改',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '离职',
                popConfirm: {
                  title: '是否设置为已离职？',
                  confirm: handleLeave.bind(null, record),
                },
              },
              {
                label: '删除',
                color: 'error',
                popConfirm: {
                  title: '是否删除该数据？',
                  confirm: handleDelete.bind(null, record),
                },
                // onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
      <template #tableTitle>
        <a-space>
          <a-button type="primary" @click="handleCreate()"><PlusOutlined />添加从业人员</a-button>
        </a-space>
      </template>
      <template #toolbar>
        <ExportTableBtn
          defaultName="从业人员导出"
          :api="demoListApi"
          :columns="tableColumns"
          :where="formQuery"
          @btn-click="getFormValues"
        />
        <ImpExcelModal @success="handleImport" :api="apiImport">
          <a-button class="ml-3">数据导入</a-button>
        </ImpExcelModal>
      </template>
    </BasicTable>
    <StaffModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { ImpExcelModal } from '/@/components/Excel';
  import { getBasicColumns, getFormConfig } from './staff.data';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import ExportTableBtn from '/@/views/bus/components/ExportTableBtn.vue';

  import { demoListApi } from '/@/api/demo/table';

  import { uploadApi, impDataApi } from '/@/api/sys/upload';

  import { useModal } from '/@/components/Modal';
  import StaffModal from './StaffModal.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      BasicTable,
      PlusOutlined,
      ExportTableBtn,
      TableAction,
      StaffModal,
      ImpExcelModal,
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
      function handleLeave(record: Recordable) {
        console.log('点击了启用', record);
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

      // 数据导入
      function handleImport(file) {
        // console.log('TODO', file);
        uploadApi(
          {
            file,
            name: 'file',
          },
          function onUploadProgress(progressEvent: ProgressEvent) {
            const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
            console.log('complete', complete);
          },
        );
      }

      return {
        registerTable,
        registerModal,

        searchInfo,
        formQuery,
        demoListApi,
        apiImport: impDataApi,
        tableColumns,
        getFormValues,
        reload,

        handleCreate,
        handleEdit,
        handleDelete,
        handleLeave,
        handleSuccess,
        handleImport,
      };
    },
  });
</script>
