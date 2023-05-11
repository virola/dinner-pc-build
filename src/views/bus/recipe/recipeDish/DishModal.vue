<template>
  <div>
    <BasicModal
      v-bind="$attrs"
      @register="registerModal"
      :title="getTitle"
      :width="800"
      @ok="handleSubmit"
    >
      <div v-for="(record, index) in foodList" :key="index">
        <a-form
          ref="formRef"
          :model="record"
          name="basic"
          :label-col="{ style: { width: '120px' } }"
          :wrapper-col="{ span: 18 }"
          autocomplete="off"
        >
          <a-form-item
            v-for="(schema, sIndex) in modalFormSchema"
            :key="sIndex"
            :label="schema.label"
            :name="schema.field"
            :rules="schema.rules"
          >
            <a-input v-model:value="record[schema.field]" />
          </a-form-item>
          <!-- 菜品内容 -->
          <a-space align="start">
            <div class="text-right ant-form-item-label" style="width: 120px"
              ><label>菜品内容</label></div
            >
            <div>
              <div v-for="(content, mIndex) in record.content" :key="mIndex">
                <a-space align="start">
                  <a-form-item
                    v-for="(sub, subIndex) in contentSchema"
                    :key="subIndex"
                    :label="sub.label"
                    :name="['content', index, sub.field]"
                    :label-col="{ style: { width: '80px' } }"
                    :rules="sub.rules"
                  >
                    <a-input v-model:value="content[sub.field]" disabled />
                  </a-form-item>
                  <a-button v-if="mIndex > 0" @click="delInput(mIndex, record.content)">
                    <DeleteOutlined />
                  </a-button>
                </a-space>
              </div>
            </div>
          </a-space>
        </a-form>
        <div class="text-center">
          <a-button @click="openMaterModal(index)">+ 添加原料</a-button>
        </div>
        <a-divider />
      </div>
      <div class="text-center" v-if="!isUpdate">
        <a-button type="primary" @click="addFood">添加菜品</a-button>
      </div>
    </BasicModal>
    <MaterialModal @register="registerMater" @success="handleMaterial" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { DeleteOutlined } from '@ant-design/icons-vue';
  import { BasicModal, useModalInner, useModal } from '/@/components/Modal';
  // import { BasicForm } from '/@/components/Form/index';
  import { modalFormSchema, contentSchema } from './data';
  import { FormSchema } from '/@/components/Form';

  import { MaterialModal } from '/@/views/bus/components/MaterialModal';

  import type { FormInstance } from 'ant-design-vue';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'DishesModal',
    components: {
      BasicModal,
      DeleteOutlined,
      MaterialModal,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const formRef = ref<FormInstance[]>([]);
      const { createMessage } = useMessage();

      // 选择原料的modal
      const [registerMater, { openModal: openModal1 }] = useModal();

      const isUpdate = ref(true);
      const rowId = ref('');

      const foodList = ref<any[]>([]);

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        // resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          const values = { ...data.record };
          if (!values.content) {
            values.content = [];
          }
          foodList.value = [values];
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜品' : '编辑菜品'));

      async function handleSubmit() {
        try {
          for (const form of formRef.value) {
            await form.validate();
          }
          const values = foodList.value;
          let pass = true;
          values.forEach((i) => {
            if (!i.name) {
              pass = false;
            }
            if (!i.content || !i.content.length) {
              pass = false;
            } else {
              i.content.forEach((record) => {
                if (!record.material) {
                  pass = false;
                }
                if (!record.weight) {
                  pass = false;
                }
              });
            }
          });
          if (pass) {
            setModalProps({ confirmLoading: true });
            // TODO custom api
            console.log(values);
            closeModal();
            emit('success', {
              isUpdate: unref(isUpdate),
              values: { ...values, id: rowId.value },
            });
          } else {
            createMessage.warn('表单验证不通过，请检查');
          }
        } catch (error) {
          console.log(error);
          setModalProps({ confirmLoading: false });
        }
      }

      function getFields(schema: FormSchema[] = []) {
        const values: any = {};
        schema.forEach((i) => {
          values[i.field] = i.defaultValue || '';
        });

        return values;
      }

      // 新增菜品
      function addFood() {
        const values = getFields(modalFormSchema);
        values.content = [];
        foodList.value.push(values);
      }

      const nowFood = ref(0);

      function addMaterial(index, values) {
        foodList.value[index].content.push(values);
      }

      function openMaterModal(index) {
        nowFood.value = index;
        openModal1(true);
      }

      function handleMaterial(vals) {
        const result = vals.data || [];
        console.log(result);

        result.forEach((item) => {
          addMaterial(nowFood.value, {
            material: item.name,
            weight: item.weight,
          });
        });
      }

      function delInput(index, content) {
        content.splice(index, 1);
      }

      // 初始化显示1个菜品表单
      if (!foodList.value.length) {
        addFood();
      }

      return {
        registerModal,
        getTitle,
        handleSubmit,

        foodList,
        modalFormSchema,
        contentSchema,

        isUpdate,

        addFood,
        addMaterial,
        delInput,

        formRef,

        // 原料
        registerMater,
        openMaterModal,
        handleMaterial,
      };
    },
  });
</script>
