/**
 * 不显示在菜单栏里的路由配置
 */

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const routes: AppRouteModule = {
  path: '/bus-const',
  name: 'BusConstRoutes',
  component: LAYOUT,
  meta: {
    title: 'bus',
    hideMenu: true,
  },
  children: [
    {
      path: 'supplier/detail',
      name: 'SupplierDetail',
      component: () => import('/@/views/bus/info/supplier/detail.vue'),
      meta: {
        // affix: true,
        title: '供应商详情',
        ignoreKeepAlive: true,
      },
    },
    {
      path: 'supplier/createForm',
      name: 'SupplierCreateForm',
      component: () => import('/@/views/bus/info/supplier/createForm.vue'),
      meta: {
        title: '新增/修改供应商信息',
        ignoreKeepAlive: true,
      },
    },
    {
      path: 'recipeLib/detail',
      name: 'RecipeLibDetail',
      component: () => import('/@/views/bus/recipe/recipeLib/detail.vue'),
      meta: {
        title: '食谱详情',
        ignoreKeepAlive: true,
      },
    },
  ],
};

export default routes;
