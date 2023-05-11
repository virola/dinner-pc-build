<template>
  <PageWrapper contentBackground>
    <Desc :schema="header" :data="headerData" :deepData="false">
      <template #extra>
        <a-button @click="handleBasicEdit">编辑</a-button>
      </template>
    </Desc>
    <Desc :schema="content" :data="contentData" :deepData="false">
      <template #extra>
        <a-button @click="handleCorpAdd" v-if="!contentData || !contentData.id">新增</a-button>
        <a-button @click="handleCorpEdit" v-else>编辑</a-button>
      </template>
    </Desc>
    <BasicInfoModal @register="register1" @success="handleSuccess" />
    <CorpInfoModal @register="register2" @success="handleCorpSuccess" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';

  import Desc from '/@/views/bus/components/Desc.vue';

  import { useModal } from '/@/components/Modal';
  import BasicInfoModal from './BasicInfoModal.vue';
  import CorpInfoModal from './CorpInfoModal.vue';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { basicFields, corpFields, demoData } from './data';

  export default defineComponent({
    components: {
      PageWrapper,
      Desc,
      BasicInfoModal,
      CorpInfoModal,
    },
    setup() {
      const [register1, { openModal: openModal1 }] = useModal();
      const [register2, { openModal: openModal2 }] = useModal();

      const { createMessage } = useMessage();

      const headerData = ref({});
      const contentData = ref({
        id: 0,
      });

      const header = [
        {
          title: '基本信息',
          fields: basicFields,
          column: 2,
          showExtra: true,
        },
      ];
      headerData.value = demoData;

      const content = [
        {
          title: '饮用水企业信息',
          column: 3,
          showExtra: true,
          fields: corpFields,
          bordered: true,
        },
      ];

      function handleBasicEdit() {
        openModal1(true, {
          isUpdate: true,
          record: headerData.value,
        });
      }

      function handleCorpAdd() {
        openModal2(true, {
          isUpdate: false,
        });
      }
      function handleCorpEdit() {
        openModal2(true, {
          isUpdate: true,
          record: contentData.value,
        });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // console.log('isUpdate', values);
          headerData.value = values;
          // 直接更新数据
        } else {
          // 重新请求数据
        }
        createMessage.success('操作成功');
      }

      function handleCorpSuccess({ isUpdate, values }) {
        if (isUpdate) {
          console.log('isUpdate', values);
          // 直接更新数据
          contentData.value = values;
          contentData.value.id = 123;
        } else {
          contentData.value = values;
          contentData.value.id = 123;
          // 重新请求数据
        }
        createMessage.success('操作成功');
      }

      return {
        header,
        headerData,

        content,
        contentData,

        register1,
        handleSuccess,
        handleBasicEdit,

        register2,
        handleCorpSuccess,
        handleCorpEdit,
        handleCorpAdd,
      };
    },
  });
</script>
