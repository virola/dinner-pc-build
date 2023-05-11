import { FormSchema } from '/@/components/Table';
import { getFormSchema } from '/@/views/bus/components/util';

export const demoData = {
  name: '名字1',
  name2: '名字2',
  code: '202209897',
  address: '自来水',
  detail: '直饮水',
  date: '2022-1-1',
};

const waterMethod = ['自来水', '桶装水'];

const drinkMethod = ['直饮水'];

/**
 * 基本信息
 */
export const basicFields = [
  {
    field: 'name',
    label: '分管领导',
    required: true,
  },
  {
    field: 'user',
    label: '联系电话',
  },
  {
    field: 'code',
    label: '学校专管员',
    required: true,
  },
  {
    field: 'type',
    label: '联系电话',
  },
  {
    field: 'address',
    label: '学校供水形式',
    required: true,
    options: waterMethod.map((i) => ({ value: i, label: i })),
  },
  {
    field: 'detail',
    label: '饮水方式',
    required: true,
    options: drinkMethod.map((i) => ({ value: i, label: i })),
  },
  {
    field: 'image',
    label: '专管员健康证',
    render: 'image',
  },
];

/**
 * 企业信息
 */

const basicCols = [
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
    field: 'user',
    label: '法人/经营者',
  },
  {
    field: 'user1',
    label: '企业服务责任人',
    required: true,
  },
  {
    field: 'telephone',
    label: '联系电话',
    required: true,
  },
  {
    field: 'phone',
    label: '投诉电话',
  },
  {
    field: 'image',
    label: '服务责任人健康证',
    render: 'image',
  },
  {
    field: 'image',
    label: '营业执照',
    render: 'image',
  },
  {
    field: 'image',
    label: '安全生产标准化证书',
    render: 'image',
  },
  {
    field: 'image',
    label: '供水终端3C认证书',
    render: 'image',
  },
  {
    field: 'image',
    label: '主机涉水卫生许可批件',
    render: 'image',
  },
  {
    field: 'image',
    label: '供水终端涉水卫生许可批件',
    render: 'image',
  },
  {
    field: 'image',
    label: '卫生许可证',
    render: 'image',
  },
  {
    field: 'image',
    label: '第三方检测报告',
    render: 'file',
  },
  {
    field: 'image',
    label: '企业自检报告',
    render: 'file',
  },
  {
    field: 'image',
    label: '维护记录',
    render: 'file',
  },
];

const tmpCols = [...basicCols];
tmpCols.splice(
  7,
  0,
  {
    field: '_empty',
    label: '',
  },
  {
    field: '_empty',
    label: '',
  },
);

export const corpFields = tmpCols;

const colProps = {
  sm: 24,
  md: 12,
};

/**
 * 增删表单配置
 */

export const editFormSchema: FormSchema[] = getFormSchema(basicFields, colProps);

export const corpFormSchema: FormSchema[] = getFormSchema(corpFields, colProps);
