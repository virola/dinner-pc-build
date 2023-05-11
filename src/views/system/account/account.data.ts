import { getDictValues } from '/@/api/sys/dict';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    width: 120,
  },
  {
    title: '部门',
    dataIndex: ['dept', 'deptName'],
    width: 120,
  },
  {
    title: '手机号码',
    dataIndex: 'phonenumber',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    key: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

const searchColProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
};

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: searchColProps,
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    colProps: searchColProps,
  },
  {
    field: 'phonenumber',
    label: '手机号码',
    component: 'Input',
    colProps: searchColProps,
  },
  {
    field: 'status',
    label: '状态',
    component: 'ApiSelect',
    colProps: searchColProps,
    componentProps: {
      api: () => {
        return getDictValues('sys_normal_disable');
      },
      labelField: 'dictLabel',
      valueField: 'dictValue',
    },
  },
  {
    field: '[beginTime, endTime]',
    label: '创建时间',
    component: 'RangePicker',
    colProps: searchColProps,
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      placeholder: ['开始日期', '结束日期'],
    },
  },
];

const formColProps = {
  xs: 24,
  sm: 12,
};
export const accountFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
    colProps: formColProps,
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    show: false,
    componentProps: {
      maxlength: 20,
    },
    colProps: formColProps,
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    required: true,
    colProps: formColProps,
  },
  {
    field: 'deptId',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'label',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
    colProps: formColProps,
  },
  {
    label: '手机号码',
    field: 'phonenumber',
    component: 'Input',
    required: true,
    componentProps: {
      maxlength: 11,
    },
    rules: [{ pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, message: '请输入正确的手机号码' }],
    colProps: formColProps,
  },
  {
    label: '用户性别',
    field: 'sex',
    component: 'ApiSelect',
    colProps: formColProps,
    componentProps: {
      api: () => {
        return getDictValues('sys_user_sex');
      },
      labelField: 'dictLabel',
      valueField: 'dictValue',
    },
  },
  {
    label: '角色',
    field: 'roleIds',
    component: 'Select',
    componentProps: {
      mode: 'multiple',
    },
    colProps: formColProps,
  },
  {
    label: '岗位',
    field: 'postIds',
    component: 'Select',
    componentProps: {
      mode: 'multiple',
    },
    colProps: formColProps,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    colProps: formColProps,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    colProps: {
      span: 24,
    },
  },
];
