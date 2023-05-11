// import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
// import { uploadApi } from '/@/api/sys/upload';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '食谱名称',
      dataIndex: 'name',
    },
    {
      title: '创建日期',
      dataIndex: 'date',
      width: 200,
    },
    {
      title: '食谱天数',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '供餐类型',
      dataIndex: 'name2',
      width: 150,
    },
    {
      title: '用餐人群',
      width: 180,
      dataIndex: 'number',
    },
    {
      title: '营养评价',
      width: 180,
      dataIndex: 'number',
    },
  ];
}

export function getFavorColumns(): BasicColumn[] {
  return [
    {
      title: '食谱名称',
      dataIndex: 'name',
    },
    {
      title: '用餐人群',
      dataIndex: 'number',
    },
    {
      title: '收藏日期',
      dataIndex: 'date',
      width: 200,
    },
  ];
}
