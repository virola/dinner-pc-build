import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/auth/login',
  Logout = '/auth/logout',
  GetUserInfo = '/system/user/getInfo',
  // get / put
  UserProfile = '/system/user/profile',
  // 更新密码
  UpdatePwd = '/system/user/profile/updatePwd',

  // 用户头像上传
  UpdateAvatar = '/system/user/profile/avatar',

  GetPermCode = '',
  GetLoginCode = '/code',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp
    .post<LoginResultModel>(
      {
        url: Api.Login,
        params,
      },
      {
        errorMessageMode: mode,
      },
    )
    .then((res) => res.data);
}

/**
 * 登录验证码
 * @returns
 */
export function getLoginCode() {
  return defHttp.get({ url: Api.GetLoginCode });
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp
    .get<GetUserInfoModel>(
      { url: Api.GetUserInfo },
      { errorMessageMode: 'none', isTransformResponse: false },
    )
    .then((res: any) => {
      // console.log(res);
      if (res && res.code == 200) {
        return res;
      } else {
        return {};
      }
    });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.delete({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
