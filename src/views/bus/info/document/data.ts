import { BasicColumn } from '/@/components/Table/src/types/table';
import { DescItem } from '/@/components/Description/index';

/**
 * 文件列表
 */
const fileList: any[] = [];

/**
 * 详情展示
 */
const schema: DescItem[] = [];

/**
 * 详情数据源
 */
const detailData: any = {};

const optData: any = {};

fileList.push({
  name: '食品安全领导小组',
  url: '',
  filename: '岳麓区中学食品安全管理机构.doc',
});
fileList.push({
  name: '食堂卫生管理制度',
  url: '',
  filename: '岳麓区中学卫生检查及餐厅.doc',
});
fileList.push({
  name: '从业人员卫生管理制度',
  url: '',
  filename: '',
});
fileList.push({
  name: '事物安全突法事件应急预案',
  url: '',
  filename: '',
});
fileList.push({
  name: '食材采购管理制度',
  url: '',
  filename: '岳麓区中学食材采购规定.doc,岳麓区中学食材存储规定.doc',
});

fileList.push({
  name: '食堂主要岗位职责',
  url: '',
  filename: '',
});
fileList.push({
  name: '食品留样管理制度',
  url: '',
  filename: '',
});
fileList.push({
  name: '陪餐管理制度',
  url: '',
  filename: '',
});
fileList.push({
  name: '其他制度',
  url: '',
  filename: '',
});

// 整理文件列表
fileList.forEach((i, index) => {
  if (i.filename) {
    i.fileList = i.filename.split(',') || [];
  }
  if (i.url) {
    i.urlList = i.url.split(',') || [];
  }

  const key = `field${index}`;

  schema.push({
    field: key,
    label: i.name,
  });
  detailData[key] = i.filename;
  optData[key] = i;
});

/**
 * 这几个输出给详情展示用
 */
export const descSchema = schema;
export const descData = detailData;
export const descOpt = optData;

export function getBasicData() {
  return fileList;
}

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '文档',
      dataIndex: 'name',
      width: 250,
      align: 'left',
    },
    {
      title: '文件名',
      dataIndex: 'filename',
      align: 'left',
      key: 'fileList',
    },
  ];
}
