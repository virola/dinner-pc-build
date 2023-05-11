import { message } from 'ant-design-vue';
import { jsonToSheetXlsx } from '/@/components/Excel';

import componentSetting from '/@/settings/componentSetting';

const { table } = componentSetting;

/**
 * 最大可导出数据记录
 */
const MAX_COUNT = 10000;

// 全局唯一查询处理
let isLoading = false;

/**
 * 导出excel统一处理
 * @param {Object} params { api, where = {}, parseParam, parseData, columns = [], filename }
 * @params {Object} params.datasource 可以直接指定导出的数据源
 */
export const exportData = async function ({
  api,
  where = {},
  parseParam,
  parseData,
  columns = [],
  filename = '导出数据',
  datasource = null,
  fileType = 'xlsx',
}) {
  if (isLoading) {
    return message.warning('正在处理中...');
  }
  const exportColumns = columns.filter(
    (item) => item.key !== 'index' && item.key != 'action' && !item.noExport,
  );
  // 表头
  const header = exportColumns.map((item) => item.title);
  // 数据
  const array = [];

  let result = [];

  if (api) {
    // 请求查询全部(不分页)的接口
    const hide = message.loading('请求中..', 0);
    const query = Object.assign({}, parseParam ? parseParam(where) : where, {
      [table.fetchSetting.pageField]: 1,
      [table.fetchSetting.sizeField]: MAX_COUNT,
    });
    isLoading = true;

    result = await api(query)
      .then((res) => {
        hide();
        let realResult = res || {};
        if (parseData) {
          realResult = parseData(res);
        }
        if (realResult) {
          if (realResult[table.fetchSetting.totalField] > MAX_COUNT) {
            message.warning(
              '导出数据超过' +
                MAX_COUNT +
                '条，仅导出前' +
                MAX_COUNT +
                '条记录，建议修改查询条件后导出！',
              10,
            );
          }
          return realResult[table.fetchSetting.listField] || [];
        } else {
          message.error(realResult.msg || '未知错误');
          return [];
        }
      })
      .catch((e) => {
        hide();
        message.error(e.message);
        return [];
      })
      .finally(() => {
        isLoading = false;
      });
  } else if (datasource) {
    result = datasource;
  }

  if (result && result.length) {
    result.forEach((d) => {
      const tmp = exportColumns.map((i) => {
        if (i.exportRender) {
          return i.exportRender({
            record: d,
            text: d[i.dataIndex],
          });
        }
        if (i.customRender) {
          return i.customRender({
            record: d,
            text: d[i.dataIndex],
          });
        }
        return d[i.dataIndex];
      });
      array.push(tmp);
    });
    // console.log('result array', array);
    // if (true) {
    //   return false;
    // }

    jsonToSheetXlsx({
      data: array,
      header,
      filename,
      write2excelOpts: {
        bookType: fileType,
      },
    });
  } else {
    message.error('没有可导出数据!');
  }
};
