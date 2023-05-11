/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginTokenModel {
  access_token: string;
  expires_in?: number;
}

export interface LoginResultModel {
  data: LoginTokenModel;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  userName: string;
  // 昵称
  nickName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}
