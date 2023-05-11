import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  // MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/user/list',
  // post / put / delte
  AccountApi = '/system/user',
  AccountInfo = '/system/user/',
  IsAccountExist = '/system/accountExist',
  AcountPwdReset = '/system/user/resetPwd',
  AccountStatus = '/system/user/changeStatus',

  DeptList = '/system/dept/list',
  DeptTreeList = '/system/dept/treeselect',
  setRoleStatus = '/system/role/changeStatus',
  MenuList = '/system/menu/list',

  // 角色-增 post 删 delete /?id 改 put
  RoleApi = '/system/role',
  RolePageList = '/system/role/list',
  GetAllRoleList = '/system/getAllRoleList',
}

// 账号管理
export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const addAccount = (data) =>
  defHttp.post({
    url: Api.AccountApi,
    data,
  });

export const updateAccount = (data) =>
  defHttp.put({
    url: Api.AccountApi,
    data,
  });

export const deleteAccount = (userId) =>
  defHttp.delete({
    url: Api.AccountApi + '/' + userId,
  });

export const getAccountInfo = (userId = '') =>
  defHttp.get({
    url: Api.AccountInfo + userId,
  });

/**
 * 改变用户状态
 * @param userId
 * @param status
 * @returns
 */
export const changeAccountStatus = (userId, status) => {
  const data = {
    userId,
    status,
  };
  return defHttp.put({
    url: Api.AccountStatus,
    data,
  });
};

/**
 * 重置密码
 * @returns
 */
export const resetUserPwd = (userId, password) => {
  const data = {
    userId,
    password,
  };
  return defHttp.put({
    url: Api.AcountPwdReset,
    data,
  });
};

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getDeptTreeList = (params?: DeptListItem) =>
  defHttp.get<any>({ url: Api.DeptTreeList, params }).then((res) => res.data || []);

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<any>({ url: Api.MenuList, params }).then((res) => res.data || []);

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
