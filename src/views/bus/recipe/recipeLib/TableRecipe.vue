<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '详情',
                onClick: handleDetail.bind(null, record),
              },
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
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { getBasicColumns } from './data';
  // import { PlusOutlined } from '@ant-design/icons-vue';

  import { useGo } from '/@/hooks/web/usePage';

  import { demoListApi } from '/@/api/demo/table';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
    },
    setup() {
      const go = useGo();
      const searchInfo = reactive<Recordable>({});

      const formQuery = ref({});
      const tableColumns = getBasicColumns();

      const [registerTable, { getForm, reload, updateTableDataRecord }] = useTable({
        api: demoListApi,
        columns: tableColumns,
        useSearchForm: false,
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

      function handleDetail(record: Recordable) {
        console.log(record);
        go('/bus-const/recipeLib/detail?id=' + record.id);
      }

      function handleEdit(record: Recordable) {
        console.log(record);
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

        searchInfo,
        formQuery,
        demoListApi,
        tableColumns,
        getFormValues,
        reload,

        handleDetail,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
