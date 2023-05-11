import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

/**
 * 定义一个详情字段
 */
export interface Field {
  field: string;
  label: string;
  render?: string;
  required?: boolean;
}

export interface Record {
  name: string;
  code: string;
  address: string;
  detail: string;
  date: string;
}

const renderData1 = {
  name: 'ABC废弃物处理公司',
  code: '202209897',
  address: '湖南省长沙市开福区',
  detail: '开福区第二大道123号',
  date: '2022-1-1',
};
const renderData2 = {
  name: 'XXX垃圾处理公司',
  code: '12344325',
  address: '湖南省长沙市开福区',
  detail: '开福区第二大道123号',
  date: '2022-2-1',
};

const basicFields = [
  {
    field: 'name',
    label: '公司名称',
    required: true,
  },
  {
    field: 'user',
    label: '法人代表',
  },
  {
    field: 'code',
    label: '统一社会信用代码',
  },
  {
    field: 'type',
    label: '收运人',
  },
  {
    field: 'address',
    label: '公司地址',
  },
  {
    field: 'date',
    label: '审核/年检日期',
  },
];

const schemas = [
  {
    title: '基本信息',
    dataKey: 'basicInfo',
    column: 3,
    fields: basicFields,
  },
  {
    title: '附件',
    dataKey: 'staffInfo',
    column: 2,
    fields: [
      {
        field: 'image',
        label: '公司资质',
        render: 'image',
      },
      {
        field: 'contract',
        label: '合同',
        render: 'file',
      },
    ],
  },
];

export const descSchema = schemas;

export const records = [renderData1, renderData2];

/**
 * 增删表单配置
 */
const schemaList: FormSchema[] = [];

schemas.forEach((item) => {
  item.fields &&
    item.fields.forEach((field: Field) => {
      const tmp: FormSchema = {
        field: field.field,
        label: field.label,
        component: 'Input',
        colProps: {
          sm: 24,
          md: 12,
          lg: 8,
          xl: 8,
          xxl: 8,
        },
      };
      if (field.required) {
        tmp.rules = [
          {
            required: true,
            message: `请输入${field.label}`,
          },
        ];
      }
      if (field.render && field.render == 'image') {
        tmp.component = 'Upload';
        tmp.componentProps = {
          maxNumber: 5,
          maxSize: 10,
          accept: ['.png', '.jpg'],
          api: uploadApi,
        };
      }
      if (field.render && field.render == 'file') {
        tmp.component = 'Upload';
        tmp.componentProps = {
          maxNumber: 5,
          maxSize: 10,
          // accept: ['.png', '.jpg'],
          api: uploadApi,
        };
      }
      schemaList.push(tmp);
    });
});

export const editFormSchema: FormSchema[] = [...schemaList];
