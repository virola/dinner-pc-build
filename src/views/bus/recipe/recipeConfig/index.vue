<template>
  <PageWrapper v-loading="loading">
    <Tabs class="bg-white" v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
      <TabPane
        v-for="(item, tabIndex) in tabsFormSchema"
        :key="item.key"
        :closable="true"
        v-bind="omit(item, ['Form', 'key'])"
      >
        <div class="px-4">
          <BasicForm @register="item.Form[0]">
            <template #checkAll="{ model, field, schema }">
              <a-space>
                <CheckboxGroup
                  v-model:value="model[field]"
                  :options="schema.componentProps.options"
                  @change="handleCheckboxChange(tabIndex)"
                />
                <a-button
                  size="small"
                  type="primary"
                  @click="handleCheckAll(model, field, schema, tabIndex)"
                  >全选</a-button
                >
              </a-space>
            </template>
          </BasicForm>

          <div class="pb-4">
            <Row :gutter="[16, 16]">
              <Col
                :span="8"
                v-for="(values, dIndex) in dishConfigForm[tabIndex]"
                :key="dIndex"
                v-show="values.show"
              >
                <!-- 套餐设置 -->
                <div class="border-1 border-gray-300 rounded p-4">
                  <div class="flex items-center justify-between">
                    <div class="mr-4 font-bold">{{ dinerTypes[dIndex] }}</div>
                    <a-button @click="addInput(dIndex, tabIndex)">+ 添加套餐</a-button>
                  </div>
                  <a-divider class="!my-4" />
                  <div class="mb-4 flex items-center">
                    <span class="w-30">用餐人数：</span>
                    <a-input v-model:value="values.userCount" placeholder="请输入人数" />
                  </div>
                  <div class="mb-4 flex items-center">
                    <span class="w-30">供餐类型：</span>
                    <a-select
                      class="w-full"
                      v-model:value="values.type"
                      placeholder="请选择类型"
                      :options="dishTypeOptions"
                    />
                  </div>
                  <div
                    class="mb-4 flex items-center"
                    v-for="(ipt, inputIndex) in values.inputs"
                    :key="inputIndex"
                  >
                    <span class="w-30">套餐名称：</span>
                    <a-space class="w-full">
                      <a-input v-model:value="ipt.value" />
                      <a-button
                        v-if="inputIndex > 0"
                        @click="delInput(inputIndex, dIndex, tabIndex)"
                      >
                        <DeleteOutlined />
                      </a-button>
                    </a-space>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </TabPane>
    </Tabs>
    <template #rightFooter>
      <div class="p-2"><a-button type="primary" @click="handleSubmit">提交</a-button></div>
    </template>
  </PageWrapper>
</template>

<script lang="ts">
  import { ref, defineComponent, createVNode } from 'vue';
  import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  import { Tabs, Modal, Checkbox, Row, Col } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { omit } from 'lodash-es';
  // import { deepMerge } from '/@/utils';
  import { BasicForm, useForm, FormProps } from '/@/components/Form';

  import {
    TabsFormType,
    defaultName,
    peopleOptions,
    getSchemas,
    baseFormConfig,
    // getDishNameSchema,
    // getOptBtnSchema,
    dinerTypes,
    dishTypes,
  } from './data';

  export default defineComponent({
    name: 'RecipeConfig',
    components: {
      Tabs,
      TabPane: Tabs.TabPane,
      PageWrapper,
      BasicForm,
      CheckboxGroup: Checkbox.Group,
      Row,
      Col,
      DeleteOutlined,
    },
    setup() {
      const { createMessage } = useMessage();
      const activeKey = ref('tabs1');
      const loading = ref(false);
      const tabsFormSchema = ref<TabsFormType[]>([]);

      const dishConfigForm = ref<any[]>([]);

      const iptProps = {
        value: '',
      };

      // 模拟1个标签页
      add(1);

      // 增加一个标签
      function add(key) {
        const tabsKey = `tabs${key}`;

        const schemas = getSchemas((value) => {
          return onChangeName(value, tabsKey);
        });

        // const [register, { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled }] =
        //   useForm(Object.assign({ schemas }, baseFormConfig) as FormProps);

        dishConfigForm.value[tabsFormSchema.value.length] = dinerTypes.map((_) => {
          return {
            userCount: '',
            type: '',
            inputs: [
              {
                value: '',
              },
            ],
            show: false,
          };
        });

        tabsFormSchema.value.push({
          key: tabsKey,
          tab: defaultName,
          forceRender: true,
          Form: useForm(Object.assign({ schemas }, baseFormConfig) as FormProps),
        });
      }

      /**
       * 联动修改食谱名称
       */
      function onChangeName(name, key) {
        const index = tabsFormSchema.value.findIndex((i) => i.key == key);
        if (index > -1) {
          tabsFormSchema.value[index].tab = name || defaultName;
        }
      }

      async function handleSubmit() {
        let lastKey = '';
        loading.value = true;
        try {
          const values: Recordable = [];
          for (const item of tabsFormSchema.value) {
            lastKey = item.key;
            const { validate, getFieldsValue } = item.Form[1];
            await validate();
            // 表单已支持多级key
            values.push(getFieldsValue());
            // deepMerge(values, getFieldsValue());
          }

          console.log('submit values: ', values);
          createMessage.success('提交成功！请打开控制台查看');
          createMessage.success(JSON.stringify(values));
        } catch (e) {
          // 验证失败或出错，切换到对应标签页
          activeKey.value = lastKey;
          console.log(e);
        } finally {
          loading.value = false;
        }
      }

      function onEdit(targetKey, action) {
        // todo
        if (action === 'add') {
          add(Date.now());
        } else {
          Modal.confirm({
            title: '操作确认',
            icon: createVNode(ExclamationCircleOutlined),
            content: createVNode('div', { style: 'color:red;' }, '确定删除该配置，是否继续？'),
            onOk() {
              remove(targetKey as string);
            },
            onCancel() {
              console.log('Cancel');
            },
          });
        }
      }

      function remove(key = '') {
        if (!key) {
          return false;
        }
        const index = tabsFormSchema.value.findIndex((i) => i.key == key);
        if (index > -1) {
          tabsFormSchema.value.splice(index, 1);
        }
      }

      // 多个套餐的输入框-餐点index - tabIndex
      function addInput(dIndex, tabIndex) {
        // console.log(dIndex, tabIndex, dishConfigForm.value[tabIndex][dIndex]);

        dishConfigForm.value[tabIndex][dIndex].inputs.push(iptProps);
      }
      // 删除input
      function delInput(inputIndex, dIndex, tabIndex) {
        // console.log(inputIndex, dIndex, tabIndex);
        dishConfigForm.value[tabIndex][dIndex].inputs.splice(inputIndex, 1);
      }

      function handleCheckAll(model, field, schema, tabIndex) {
        model[field] = schema.componentProps.options;
        handleCheckboxChange(tabIndex);
      }

      function handleCheckboxChange(tabIndex) {
        // console.log(tabIndex);

        const { getFieldsValue } = tabsFormSchema.value[tabIndex].Form[1];
        const result = getFieldsValue();
        const tabConf = dishConfigForm.value[tabIndex];
        // console.log('tabConf', tabConf);
        tabConf.forEach((conf, i) => {
          console.log(result.f6, conf);
          if (result.f6.indexOf(dinerTypes[i]) > -1) {
            conf.show = true;
          } else {
            conf.show = false;
          }
        });
      }

      return {
        omit,
        loading,
        activeKey,
        tabsFormSchema,
        handleSubmit,

        // options
        peopleOptions,

        onEdit,
        // 自定义组件事件
        addInput,
        delInput,

        dinerTypes,
        dishTypeOptions: dishTypes.map((i) => ({ label: i, value: i })),
        dishConfigForm,
        handleCheckboxChange,
        handleCheckAll,
      };
    },
  });
</script>

<style scoped></style>
