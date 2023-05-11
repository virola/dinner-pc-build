import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { uploadApi } from '/@/api/sys/upload';

/**
 * 从业人员岗位数据源
 */
const positions = [
  {
    label: '食堂经理',
    value: '1',
  },
  {
    label: '厨师',
    value: '2',
  },
  {
    label: '保洁',
    value: '3',
  },
  {
    label: '切配',
    value: '4',
  },
];

/**
 * 性别字典
 * @returns
 */
const sexOptions = [
  {
    label: '男',
    value: '男',
  },
  {
    label: '女',
    value: '女',
  },
];

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      width: 100,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '岗位',
      dataIndex: 'name2',
      width: 150,
    },
    {
      title: '身份证',
      width: 180,
      dataIndex: 'number',
    },
    {
      title: '健康证号',
      width: 180,
      dataIndex: 'number',
    },
    {
      title: '健康证到期日期',
      width: 180,
      dataIndex: 'endTime',
    },
    {
      title: '入职日期',
      width: 180,
      dataIndex: 'beginTime',
    },
    {
      title: '状态',
      width: 180,
      dataIndex: 'bool',
      format: (text) => {
        return text == '1' ? '在职' : '离职';
      },
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
        label: `姓名`,
        component: 'Input',
        colProps,
      },
      {
        field: `position`,
        label: `岗位`,
        component: 'Select',
        colProps,
        componentProps: {
          options: positions,
        },
      },
    ],
  };
}

/**
 * 增删表单配置
 */

const colPropsStaff = {
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

export const staffFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入姓名',
      },
    ],
    colProps: colPropsStaff,
  },
  {
    field: 'id',
    label: '身份证',
    component: 'Input',
    colProps: colPropsStaff,
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: colPropsStaff,
  },
  {
    field: 'inTime',
    label: '入职日期',
    component: 'DatePicker',
    colProps: colPropsStaff,
  },
  {
    field: 'hno',
    label: '健康证号',
    component: 'Input',
    colProps: colPropsStaff,
  },
  {
    field: 'endTime',
    label: '健康证到期',
    component: 'DatePicker',
    colProps: colPropsStaff,
  },
  {
    field: 'sex',
    label: '性别',
    component: 'Select',
    colProps: colPropsStaff,
    componentProps: {
      options: sexOptions,
    },
  },
  {
    field: 'position',
    label: '岗位',
    component: 'Select',
    colProps: colPropsStaff,
    componentProps: {
      options: positions,
    },
  },
  {
    field: 'education',
    label: '学历',
    component: 'Select',
    colProps: colPropsStaff,
    componentProps: {
      options: positions,
    },
  },
  {
    field: 'idpic',
    label: '身份证',
    component: 'Upload',
    colProps: colPropsStaff,
    componentProps: {
      maxNumber: 1,
      maxSize: 10,
      accept: ['.png', '.jpg'],
      api: uploadApi,
    },
  },
  {
    field: 'hpic',
    label: '健康证',
    component: 'Upload',
    colProps: colPropsStaff,
    componentProps: {
      maxNumber: 1,
      maxSize: 10,
      accept: ['.png', '.jpg'],
      api: uploadApi,
    },
  },
];
