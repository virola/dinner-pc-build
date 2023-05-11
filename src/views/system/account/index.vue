<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'status'">
          <Switch :checked="record.status == '0'" @change="handleStatusChange(record)" />
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
                ifShow: record.userId !== 1,
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
                ifShow: record.userId !== 1,
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
              {
                icon: 'clarity:key-line',
                tooltip: '重置密码',
                ifShow: record.userId !== 1,
                onClick: handleResetPwd.bind(null, record),
              },
              {
                icon: 'clarity:info-standard-line',
                tooltip: '角色分配',
                ifShow: record.userId !== 1,
                onClick: handleView.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />

    <InputModal v-bind="optsPwd" v-model:visible="showInputModal" @ok="handlePwdSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { Switch } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { InputModal } from '/@/components/InputModal';
  import {
    getAccountList,
    changeAccountStatus,
    deleteAccount,
    resetUserPwd,
  } from '/@/api/sys/system';
  import { PageWrapper } from '/@/components/Page';
  import DeptTree from './DeptTree.vue';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './AccountModal.vue';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { columns, searchFormSchema } from './account.data';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'AccountManagement',
    components: {
      BasicTable,
      PageWrapper,
      DeptTree,
      AccountModal,
      TableAction,
      Switch,
      InputModal,
    },
    setup() {
      const go = useGo();
      const { createMessage, createConfirm } = useMessage();
      const [registerModal, { openModal }] = useModal();

      const showInputModal = ref(false);
      const searchInfo = reactive<Recordable>({});

      const [registerTable, { reload }] = useTable({
        title: '账号列表',
        api: getAccountList,
        rowKey: 'id',
        columns,
        formConfig: {
          name: 'search-form',
          labelWidth: 100,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          // console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 160,
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
        // console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        // console.log(record);
        deleteAccount(record.userId).then(() => {
          createMessage.success('删除成功');
          reload();
        });
      }

      function handleSuccess({ isUpdate }) {
        if (isUpdate) {
          reload();
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      /** 跳转角色分配 */
      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.userId);
      }

      /** 用户状态修改  */
      function handleStatusChange(row) {
        let text = row.status === '1' ? '启用' : '停用';
        const status = row.status === '1' ? '0' : '1';
        createConfirm({
          iconType: 'warning',
          title: '确认',
          content: '确认要"' + text + '""' + row.userName + '"用户吗?',
          onOk: async () => {
            const res = await changeAccountStatus(row.userId, status);
            if (res.code == 200) {
              createMessage.success(text + '成功');
              row.status = status;
            }
          },
        });
      }

      let currentRow: any = null;

      const optsPwd = ref({});

      /** 重置密码按钮操作 */
      function handleResetPwd(row) {
        currentRow = row;
        optsPwd.value = {
          title: '请输入"' + row.userName + '"的新密码',
          required: true,
          inputPattern: /^.{5,20}$/,
          inputErrorMessage: '用户密码长度必须介于 5 和 20 之间',
        };
        showInputModal.value = true;
      }

      function handlePwdSuccess({ value }) {
        if (!value) {
          return false;
        }
        resetUserPwd(currentRow && currentRow.userId, value).then(() => {
          createMessage.success('修改成功，新密码是：' + value);
        });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
        handleStatusChange,
        handleResetPwd,

        handlePwdSuccess,
        optsPwd,

        showInputModal,
      };
    },
  });
</script>
