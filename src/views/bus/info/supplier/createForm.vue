<template>
  <PageWrapper class="!pb-4" title="供应商信息" contentBackground>
    <BasicForm @register="register" />
    <template #rightFooter>
      <a-button type="primary" @click="customSubmitFunc"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { schemas } from './supplier.data';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';

  import { useTabs } from '/@/hooks/web/useTabs';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'FormBasicPage',
    components: { BasicForm, PageWrapper },
    setup() {
      const { closeCurrent } = useTabs();
      const { createMessage } = useMessage();
      const [register, { validate, setProps }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: schemas,
        // actionColOptions: {
        //   offset: 8,
        //   span: 23,
        // },
        // submitButtonOptions: {
        //   text: '提交',
        // },
        // submitFunc: customSubmitFunc,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            createMessage.success('提交成功！');
            closeCurrent();
          }, 2000);
        } catch (error) {}
      }

      return { register, customSubmitFunc };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>
