<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '详情',
                onClick: handleOpen.bind(null, record),
              },
              {
                label: '修改',
                onClick: handleEdit.bind(null, record),
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
        <template v-if="column.key === 'customCheckbox'">
          <Space>
            <Checkbox :checked="record.online" @change="handleCheckChange(record, 1)"
              >线上采购</Checkbox
            >
            <Checkbox :checked="record.offline" @change="handleCheckChange(record, 2)"
              >线下采购</Checkbox
            >
          </Space>
        </template>
      </template>
      <template #tableTitle>
        <a-space>
          <a-button type="primary" @click="handleCreate()"><PlusOutlined />添加供应商</a-button>
        </a-space>
      </template>
      <template #toolbar>
        <ExportTableBtn
          defaultName="食材供应商导出"
          :api="demoListApi"
          :columns="tableColumns"
          :where="formQuery"
          @btn-click="getFormValues"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { Checkbox, Space } from 'ant-design-vue';

  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './supplier.data';

  import ExportTableBtn from '/@/views/bus/components/ExportTableBtn.vue';

  import { demoListApi } from '/@/api/demo/table';
  import { demoOptSuccess } from '/@/api/demo/opt';
  // import { uploadApi } from '/@/api/sys/upload';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: {
      PageWrapper,
      BasicTable,
      PlusOutlined,
      ExportTableBtn,
      TableAction,
      Checkbox,
      Space,
    },
    setup() {
      const go = useGo();
      const { createMessage } = useMessage();

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
          width: 150,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        go('/bus-const/supplier/createForm');
      }

      function handleEdit(record: Recordable) {
        go('/bus-const/supplier/createForm?id=' + record.id);
      }
      function handleDelete(record: Recordable) {
        console.log('TODO 点击了删除', record);
        reload();
      }
      function handleOpen(record: Recordable) {
        console.log('点击了详情', record);
        go('/bus-const/supplier/detail?id=' + record.id);
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

      /**
       * 切换线上线下采购
       */
      function handleCheckChange(record, flag) {
        demoOptSuccess(record).then((res) => {
          console.log(res);
          createMessage.success('操作成功！');
          if (flag == 1) {
            record.online = !record.online;
          }
          if (flag == 2) {
            record.offline = !record.offline;
          }
        });
      }

      return {
        registerTable,

        searchInfo,
        formQuery,
        demoListApi,
        tableColumns,
        getFormValues,
        reload,

        handleCreate,
        handleEdit,
        handleDelete,
        handleOpen,
        handleSuccess,
        // custom
        handleCheckChange,
      };
    },
  });
</script>
