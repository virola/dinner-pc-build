import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
// import { uploadApi } from '/@/api/sys/upload';

/**
 * 菜品类型
 */
export const dishAreaTypes = ['肉菜', '素菜', '主食', '凉菜', '汤羹', '包点', '粉面', '其他'];

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '菜品名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '菜品内容',
      dataIndex: 'gender',
      width: 100,
    },
    {
      title: '类型',
      dataIndex: 'age',
      width: 100,
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
        label: `菜品名称`,
        component: 'Input',
        colProps: {
          sm: 24,
        },
      },
      // 多选
      // {
      //   field: `type`,
      //   label: `菜品类型`,
      //   component: 'Select',
      //   colProps: {
      //     sm: 24,
      //   },
      //   componentProps: {
      //     mode: 'multiple',
      //     options: dishAreaTypes.map((i) => ({ value: i, label: i })),
      //   },
      // },
      // 单选
      {
        field: `type`,
        label: `菜品类型`,
        component: 'RadioButtonGroup',
        colProps: {
          sm: 24,
        },
        componentProps: {
          options: [
            {
              label: '全部',
              value: '',
            },
            ...dishAreaTypes.map((i) => ({ value: i, label: i })),
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
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
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
    field: 'name',
    label: '菜品名称',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入菜品名称',
      },
    ],
    required: true,
    colProps: colPropsForm,
  },
];
