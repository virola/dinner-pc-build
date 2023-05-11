<template>
  <a-modal v-bind="getBindValue" v-model:visible="visibleRef" :title="getTitle" @ok="handleOk">
    <div class="px-4">
      <BasicForm
        :labelWidth="100"
        :schemas="getSchemas"
        :showActionButtonGroup="false"
        @register="registerForm"
      />
    </div>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, computed, ref, unref, watch } from 'vue';
  import { omit } from 'lodash-es';
  import { BasicForm, useForm } from '/@/components/Form/index';

  import { ModalProps } from './typing';

  export default defineComponent({
    components: { BasicForm },
    props: {
      visible: { type: Boolean },
      defaultValue: String,
      label: String,
      title: String,
      inputPattern: RegExp,
      inputErrorMessage: String,
      required: Boolean,
    },
    emits: ['visible-change', 'cancel', 'ok', 'update:visible'],
    setup(props, { emit, attrs }) {
      const visibleRef = ref(false);
      const propsRef = ref<Partial<ModalProps> | null>(null);

      const getTitle = computed(() => props.title || '');
      const getSchemas = computed(() => {
        return [
          {
            field: 'value',
            component: 'Input',
            label: props.label || '',
            required: props.required,
            rules: [{ pattern: props.inputPattern, message: props.inputErrorMessage }],
            defaultValue: props.defaultValue || '',
            colProps: {
              span: 24,
            },
          },
        ];
      });

      // Custom title component: get title
      const getMergeProps = computed((): Recordable => {
        return {
          ...props,
          ...(unref(propsRef) as any),
        };
      });

      const getBindValue = computed((): Recordable => {
        const attr = {
          ...attrs,
          ...unref(getMergeProps),
        };
        return omit(attr, 'title');
      });

      const [registerForm, { validateFields, resetFields }] = useForm();

      async function handleOk() {
        const res = await validateFields().catch((err) => {
          console.log(err);
          return {};
        });
        const { value = '' } = res;
        if (value) {
          resetFields();
          emit('ok', {
            value,
          });
          visibleRef.value = false;
        }
      }

      watch(
        () => unref(visibleRef),
        (v) => {
          emit('visible-change', v);
          emit('update:visible', v);
        },
        {
          immediate: false,
        },
      );

      watch(
        () => props.visible,
        (v) => {
          visibleRef.value = v;
        },
        {
          immediate: false,
        },
      );

      return {
        getBindValue,
        visibleRef,
        getTitle,
        getSchemas,

        handleOk,
        registerForm,
      };
    },
  });
</script>
