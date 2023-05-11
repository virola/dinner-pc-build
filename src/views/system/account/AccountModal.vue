<template>
  <BasicModal
    v-bind="$attrs"
    :width="660"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './account.data';
  import { getDeptTreeList, addAccount, updateAccount, getAccountInfo } from '/@/api/sys/system';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.userId;
          setFieldsValue({
            ...data.record,
          });
        }
        // 角色、岗位从用户信息中取
        const {
          roles = [],
          posts = [],
          roleIds = [],
          postIds = [],
        } = await getAccountInfo(rowId.value);
        if (unref(isUpdate)) {
          // 更新角色的岗位、角色
          setFieldsValue({
            roleIds,
            postIds,
          });
        }

        const treeData = await getDeptTreeList();

        // console.log(roles);
        updateSchema([
          {
            field: 'password',
            show: !unref(isUpdate),
            required: false,
          },
          {
            field: 'deptId',
            componentProps: { treeData },
          },
          {
            field: 'roleIds',
            componentProps: {
              multiple: true,
              options: roles.map((item) => {
                return {
                  label: item.roleName,
                  value: item.roleId,
                  disabled: item.status == 1,
                };
              }),
            },
          },
          {
            field: 'postIds',
            componentProps: {
              multiple: true,
              options: posts.map((item) => {
                return {
                  label: item.postName,
                  value: item.postId,
                  disabled: item.status == 1,
                };
              }),
            },
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (unref(isUpdate)) {
            await updateAccount(
              Object.assign({}, values, {
                userId: rowId.value,
              }),
            );
          } else {
            await addAccount(values);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } catch (error) {
          console.log(error);
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
