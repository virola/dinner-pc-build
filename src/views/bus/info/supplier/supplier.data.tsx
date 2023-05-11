import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { getFormSchema, Field } from '/@/views/bus/components/util';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '供应商名称',
      dataIndex: 'name',
    },
    {
      title: '社会信用统一代码',
      dataIndex: 'name1',
      width: 150,
    },
    {
      title: '业务联系人',
      dataIndex: 'name2',
      width: 100,
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      width: 120,
    },
    {
      title: '供应商采购模式',
      dataIndex: 'name2',
      key: 'customCheckbox',
    },
  ];
}

const colProps = {
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

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
        label: `供应商名称`,
        component: 'Input',
        colProps,
      },
    ],
  };
}

export const basicFields: Field[] = [
  {
    field: 'divider-basic',
    component: 'Divider',
    label: '基础信息',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'name',
    label: '企业名称',
    required: true,
  },
  {
    field: 'code',
    label: '统一社会信用代码',
    required: true,
  },
  {
    field: 'field3',
    label: '注册资金',
    suffix: '万元',
  },
  {
    field: 'field4',
    label: '联系人',
  },
  {
    field: 'field5',
    component: 'Input',
    label: '联系电话',
  },
  {
    field: 'field6',
    component: 'Input',
    label: '联系人身份证',
  },
  {
    field: 'field7',
    component: 'Input',
    label: '法人',
  },
  {
    field: 'field77',
    component: 'Input',
    label: '法人电话',
  },
  {
    field: 'field8',
    component: 'Input',
    label: '法人身份证',
  },
  {
    field: 'field9',
    component: 'Input',
    label: '经营地址',
  },
  {
    field: 'field10',
    component: 'Input',
    label: '详细地址',
  },
  {
    field: 'field11',
    component: 'Input',
    label: '供贷能力',
  },
  {
    field: 'divider-api-select',
    component: 'Divider',
    label: '经营状况',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field31',
    component: 'Input',
    label: '经营面积',
    suffix: '平米',
  },
  {
    field: 'field32',
    component: 'Input',
    label: '配送车辆',
    suffix: '辆',
  },
  {
    field: 'field321',
    component: 'Input',
    label: '员工人数',
    suffix: '人',
  },
  {
    field: 'field323',
    component: 'Input',
    label: '固定资产',
    colProps: {
      span: 8,
    },
    suffix: '万元',
  },
  {
    field: 'field32',
    component: 'Input',
    label: '上年营业额',
    colProps: {
      span: 8,
    },
    suffix: '万元',
  },
  {
    field: 'field324',
    component: 'Input',
    label: '流动资金',
    colProps: {
      span: 8,
    },
    suffix: '万元',
  },
  {
    field: 'divider-linked',
    component: 'Divider',
    label: '附件',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'upload',
    render: 'image',
    label: '营业执照',
  },
  {
    field: 'upload1',
    render: 'image',
    label: '食品经营许可证',
  },
  {
    field: 'upload2',
    render: 'image',
    label: '食品生成许可证',
  },
  {
    field: 'upload3',
    label: '法人身份证',
    render: 'image',
  },
];

/**
 * 增删表单配置
 */

export const schemas: FormSchema[] = getFormSchema(basicFields);
