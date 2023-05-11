import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// 首页区域
const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/workbench',
  meta: {
    title: 'routes.dashboard.dashboard',
    icon: 'bx:bx-home',
  },
  children: [
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        title: 'routes.dashboard.analysis',
      },
    },
  ],
};

// 基本信息
const basicInfoRoute = {
  path: '/basic',
  name: 'BasicInfo',
  component: 'LAYOUT',
  meta: {
    title: 'routes.bus.basicInfo',
    icon: 'ion:grid-outline',
  },
  children: [
    {
      path: 'school',
      name: 'SchoolInfo',
      component: '/bus/info/school',
      meta: {
        title: 'routes.bus.schoolInfo',
      },
    },
    {
      path: 'dinner',
      name: 'DinerInfo',
      component: '/bus/info/dinner',
      meta: {
        title: 'routes.bus.dinerInfo',
      },
    },
    {
      path: 'staffs',
      name: 'SchoolStaffList',
      component: '/bus/info/staffs/index',
      meta: {
        title: 'routes.bus.staffs',
      },
    },
    {
      path: 'supplier',
      name: 'SupplierList',
      component: '/bus/info/supplier/index',
      meta: {
        title: 'routes.bus.supplier',
      },
    },
  ],
};

const recipeRoute = {
  path: '/recipe',
  name: 'Recipe',
  component: 'LAYOUT',
  meta: {
    title: 'routes.bus.recipe',
    icon: 'ant-design:form-outlined',
  },
  children: [
    {
      path: 'config',
      name: 'RecipeConfig',
      component: '/bus/info/school',
      meta: {
        title: 'routes.bus.recipeConfig',
      },
    },
  ],
};

// 综合所有业务路由
const busAllRoutes = [basicInfoRoute, recipeRoute];

const backRoute = {
  path: 'back',
  name: 'PermissionBackDemo',
  meta: {
    title: 'routes.demo.permission.back',
  },

  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: 'routes.demo.permission.backPage',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: 'routes.demo.permission.backBtn',
      },
    },
  ],
};

const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [backRoute],
};

const levelRoute = {
  path: '/level',
  name: 'Level',
  component: 'LAYOUT',
  redirect: '/level/menu1/menu1-1',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      meta: {
        title: 'Menu1',
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          meta: {
            title: 'Menu1-1',
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
      },
    },
  ],
};

const sysRoute = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: 'routes.system.moduleName',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: 'routes.system.account',
        ignoreKeepAlive: true,
      },
      component: '/system/account/index',
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: 'routes.system.account_detail',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: '/system/account/AccountDetail',
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: 'routes.system.role',
        ignoreKeepAlive: true,
      },
      component: '/system/role/index',
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: 'routes.system.menu',
        ignoreKeepAlive: true,
      },
      component: '/system/menu/index',
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: 'routes.system.dept',
        ignoreKeepAlive: true,
      },
      component: '/system/dept/index',
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: 'routes.system.password',
        ignoreKeepAlive: true,
      },
      component: '/system/password/index',
    },
  ],
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      let menu: Object[];
      switch (id) {
        case '1':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[0].path;
          menu = [dashboardRoute, ...busAllRoutes, sysRoute];
          break;
        case '2':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[1].path;
          menu = [dashboardRoute, authRoute, levelRoute];
          break;
        default:
          menu = [];
      }

      return resultSuccess(menu);
    },
  },
] as MockMethod[];
