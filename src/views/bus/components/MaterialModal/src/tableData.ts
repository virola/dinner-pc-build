import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const shopFoodTypes = [
  '米面类',
  '肉蛋类',
  '果蔬类',
  '油脂类',
  '乳制品',
  '豆及豆制品',
  '干货类',
  '学校耗材',
  '其他',
];

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '商品名称',
      dataIndex: 'name',
      // fixed: 'left',
      width: 200,
    },
    {
      title: '商品分类',
      dataIndex: 'name1',
      width: 150,
    },
    {
      title: '单位',
      dataIndex: 'address',
    },
    {
      title: '库存',
      dataIndex: 'no',
      width: 150,
    },
  ];
}

const colProps = {
  sm: 24,
};

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `types`,
        label: `商品类型`,
        component: 'RadioButtonGroup',
        colProps,
        componentProps: {
          options: [
            {
              label: '全部',
              value: '',
            },
            ...shopFoodTypes.map((i) => ({ value: i, label: i })),
          ],
        },
      },
      {
        field: `name`,
        label: `商品名称`,
        component: 'Input',
        colProps,
      },
    ],
  };
}
