import { defHttp } from '/@/utils/http/axios';

enum Api {
  // The address does not exist
  Success = '/opt/success',
}

/**
 * @description: 触发一个操作成功的post请求
 */
export const demoOptSuccess = (params) => defHttp.post({ url: Api.Success, params });
