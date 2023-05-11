<template>
  <PageWrapper contentBackground>
    <div class="p-4">
      <a-space>
        <RadioGroup v-model:value="active" button-style="solid" @change="handleChange">
          <RadioButton v-for="(record, index) in recordsData" :key="index" :value="index">
            {{ record.name }}
          </RadioButton>
        </RadioGroup>
        <a-button @click="handleAdd()">+ 添加</a-button>
      </a-space>
    </div>
    <Desc :deepData="false" :schema="schemas" :data="renderData" />

    <RecyclerModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Radio } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import Desc from '/@/views/bus/components/Desc.vue';

  import { useModal } from '/@/components/Modal';
  import RecyclerModal from './RecyclerModal.vue';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { records, descSchema, Record } from './data';

  export default defineComponent({
    components: {
      Desc,
      PageWrapper,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button,
      RecyclerModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const { createMessage } = useMessage();

      const active = ref(0);
      const renderData = ref<any>({});
      const recordsData = ref<Record[]>([]);

      const schemas = descSchema;

      function handleChange() {
        console.log('change', active.value);
        const tmp = recordsData.value[active.value];
        renderData.value = tmp || { name: '暂无数据' };

        // schemas[0].title = renderData.value.name;
      }

      if (records.length) {
        renderData.value = records[0];
        recordsData.value = [...records];
      }

      function handleAdd() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          console.log('isUpdate', values);
          // 直接更新数据
        } else {
          recordsData.value.push(values);
          // 重新请求数据
        }
        createMessage.success('操作成功');
      }

      return {
        schemas,
        renderData,

        active,
        recordsData,
        handleChange,

        handleAdd,
        registerModal,
        handleSuccess,
      };
    },
  });
</script>
