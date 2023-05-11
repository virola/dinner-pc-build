import { defHttp } from '/@/utils/http/axios';
import { DictResult } from './model/dictModel';

enum Api {
  GetDictValues = '/system/dict/data/type/',
  GetDictList = '/system/dict/data/list',

  DictApi = '/system/dict/data',
}

/**
 * @description: 根据字典类型查询字典数据信息
 */
export const getDictValues = (dictName) => {
  return defHttp.get<DictResult>({ url: Api.GetDictValues + dictName }).then((res) => {
    // console.log(res.data);
    return res.data || [];
  });
};

/**
 * 查询字典数据详细
 * @param dictCode
 * @returns
 */
export const getDictData = (dictCode) => {
  return defHttp.get<DictResult>({ url: Api.DictApi + '/' + dictCode });
};

export const addDict = (data) => {
  return defHttp.post<DictResult>({ url: Api.DictApi, data });
};

/**
 * 修改字典的值
 * @param data
 * @returns
 */
export const updateDict = (data) => {
  return defHttp.put<DictResult>({ url: Api.DictApi, data });
};

/**
 * 删除字典
 * @param dictCode
 * @returns
 */
export const deleteDict = (dictCode) => {
  return defHttp.delete<DictResult>({ url: Api.DictApi + '/' + dictCode });
};
