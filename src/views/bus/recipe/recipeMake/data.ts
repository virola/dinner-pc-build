import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
// import { uploadApi } from '/@/api/sys/upload';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '食谱名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '创建日期',
      dataIndex: 'beginTime',
      width: 180,
    },
    {
      title: '周次',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '食谱时间',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '食谱天数',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '供餐类型',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '用餐人群',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '综合评价',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '食谱分析',
      dataIndex: 'age',
      width: 260,
      key: 'analysis',
    },
  ];
}

/**
 * 搜索条件配置
 * @returns
 */
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `name`,
        label: `创建日期`,
        component: 'RadioButtonGroup',
        colProps: {
          sm: 24,
        },
        componentProps: {
          options: [
            {
              label: '一个月',
              value: '30',
            },
            {
              label: '三个月',
              value: '90',
            },
            {
              label: '半年',
              value: '180',
            },
            {
              label: '自定义时间',
              value: 'custom',
            },
          ],
        },
      },
      {
        field: `rate`,
        label: `综合评价`,
        component: 'Select',
        colProps: {
          sm: 24,
        },
        componentProps: {
          options: [
            {
              label: '优秀',
              value: '优秀',
            },
            {
              label: '良好',
              value: '良好',
            },
            {
              label: '合格',
              value: '合格',
            },
            {
              label: '不合格',
              value: '不合格',
            },
          ],
        },
      },
    ],
  };
}

/**
 * 增删表单配置
 */

const colPropsForm = {
  sm: 24,
};

export const contentSchema: FormSchema[] = [
  {
    label: '商品原料',
    field: 'material',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入商品原料',
      },
    ],
    required: true,
  },
  {
    label: '重量(g)',
    field: 'weight',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入重量',
      },
    ],
    required: true,
  },
];

export const modalFormSchema: FormSchema[] = [
  {
    field: 'configId',
    label: '选择配置',
    component: 'Select',
    rules: [
      {
        required: true,
        message: '请选择食谱配置',
      },
    ],
    componentProps: {
      options: [
        {
          label: '学生食谱',
          value: '1',
        },
      ],
    },
    required: true,
    colProps: colPropsForm,
  },
  {
    field: 'group',
    label: '用餐人群',
    component: 'Render',
    required: true,
    colProps: colPropsForm,
  },
  {
    field: 'week',
    label: '食谱时间',
    component: 'WeekPicker',
    required: true,
    colProps: colPropsForm,
    componentProps: {
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'name',
    label: '食谱名称',
    component: 'Input',
    required: true,
    colProps: colPropsForm,
  },
  {
    field: 'userName',
    label: '制作人',
    component: 'Input',
    required: true,
    colProps: colPropsForm,
  },
];
