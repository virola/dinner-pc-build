import { FormSchema, UseFormReturnType, FormProps } from '/@/components/Form';

export type TabsFormType = {
  key: string;
  tab: string;
  forceRender?: boolean;
  Form: UseFormReturnType;
};

export const defaultName = '学生食谱';

export const peopleOptions = [
  {
    label: '学生',
    value: '学生',
  },
  {
    label: '教职工',
    value: '教职工',
  },
];

export const dinerTypes = ['早餐', '早点', '午餐', '午点', '晚餐', '夜宵'];
export const dishTypes = ['多个套餐', '单一套餐', '自由点餐'];

/**
 * 套餐名input
 * @param index
 * @returns
 */
export function getDishNameSchema(index = 0) {
  const name = dinerTypes[index];
  return <FormSchema>{
    field: `dishName${index}-0`,
    label: `套餐名-${name}`,
    colProps: { span: 24 },
    ifShow: ({ values }) => {
      return values.f6 && values.f6.indexOf(name) > -1;
    },
    slot: 'groupInput',
    defaultValue: [],
  };
}

/**
 * 增删按钮
 * @param index
 * @returns
 */
export function getOptBtnSchema(index = 0) {
  const name = dinerTypes[index];
  return <FormSchema>{
    field: `0-${index}`,
    component: 'Input',
    label: ' ',
    colProps: {
      span: 6,
    },
    ifShow: ({ values }) => {
      return values.f6 && values.f6.indexOf(name) > -1;
    },
    slot: 'add',
  };
}

// 公共属性
export const baseFormConfig: Partial<FormProps> = {
  showActionButtonGroup: false,
  labelWidth: 140,
};

const dinerFields: FormSchema[] = [];

export function getSchemas(changeEvent: Function) {
  const recipeSchemas: FormSchema[] = [
    {
      field: `name`,
      label: `配置名称`,
      component: 'Input',
      required: true,
      helpMessage: '为您的配置命名，例如“幼儿园配置”，“小学低年级配置”',
      colProps: { span: 24 },
      defaultValue: defaultName,
      componentProps: () => {
        return {
          placeholder: '请输入配置名称',
          onChange: (e: ChangeEvent) => {
            // console.log(e.target.value);
            changeEvent(e.target.value);
          },
        };
      },
    },
    {
      field: `f2`,
      label: `用餐人群`,
      component: 'Select',
      required: true,
      helpMessage: '若老师与学生一同用餐，可勾选“师生同餐”',
      colProps: { span: 12 },
      componentProps: {
        options: peopleOptions,
      },
    },
    {
      field: `f3`,
      label: `师生同餐`,
      component: 'Checkbox',
      defaultValue: false,
      colProps: { span: 12 },
    },
    {
      field: 'f4',
      label: '食谱类型',
      component: 'RadioGroup',
      required: true,
      colProps: { span: 12 },
      componentProps: {
        options: [
          {
            label: '简易食谱',
            value: '简易食谱',
          },
          {
            label: '带量食谱',
            value: '带量食谱',
          },
        ],
      },
    },
    {
      field: 'f5',
      label: '食谱周期',
      component: 'RadioGroup',
      required: true,
      colProps: { span: 12 },
      componentProps: {
        options: [
          {
            label: '周日至次周六',
            value: '周日至次周六',
          },
          {
            label: '周一至周日',
            value: '周一至周日',
          },
        ],
      },
    },
    {
      field: 'f6',
      label: '选择餐别',
      component: 'CheckboxGroup',
      colProps: { span: 24 },
      componentProps: {
        options: dinerTypes,
      },
      slot: 'checkAll',
    },
    ...dinerFields,
  ];

  return recipeSchemas;
}

// export const recipeSchemas: FormSchema[] = [
//   {
//     field: `name`,
//     label: `配置名称`,
//     component: 'Input',
//     required: true,
//     helpMessage: '为您的配置命名，例如“幼儿园配置”，“小学低年级配置”',
//     colProps: { span: 24 },
//     defaultValue: defaultName,
//     componentProps: ({ formModel }) => {
//       return {
//         placeholder: '同步tabs的值为f1',
//         onChange: (e: ChangeEvent) => {
//           formModel.f2 = e.target.value;
//         },
//       };
//     },
//   },
//   {
//     field: `f2`,
//     label: `用餐人群`,
//     component: 'Select',
//     required: true,
//     helpMessage: '若老师与学生一同用餐，可勾选“师生同餐”',
//     colProps: { span: 12 },
//     componentProps: {
//       options: peopleOptions,
//     },
//     dynamicDisabled: ({ values }) => {
//       return !!values.f3;
//     },
//   },
//   {
//     field: `f3`,
//     label: `师生同餐`,
//     component: 'Checkbox',
//     defaultValue: false,
//     colProps: { span: 12 },
//   },
// ];
