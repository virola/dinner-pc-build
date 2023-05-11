import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const purchases: AppRouteModule = {
  path: '/purchase',
  name: 'PurchaseInfo',
  component: LAYOUT,
  redirect: '/purchase/purchaseConfig',
  meta: {
    icon: 'ion:storefront-outline',
    title: t('routes.bus.purchase'),
    orderNo: 50,
  },
  children: [
    {
      path: 'config',
      name: 'PurchaseConfig',
      meta: {
        title: t('routes.bus.purchaseConfig'),
      },
      component: () => import('/@/views/bus/purchase/config/index.vue'),
    },
    {
      path: 'list',
      name: 'PurchaseList',
      meta: {
        title: t('routes.bus.purchaseList'),
      },
      component: () => import('/@/views/bus/purchase/list/index.vue'),
    },
    {
      path: 'purchaseOffline',
      name: 'PurchaseOffline',
      meta: {
        title: t('routes.bus.purchaseOffline'),
      },
      component: () => import('/@/views/bus/purchase/offline/index.vue'),
    },
    {
      path: 'purchaseOnline',
      name: 'PurchaseOnline',
      meta: {
        title: t('routes.bus.purchaseOnline'),
      },
      component: () => import('/@/views/bus/purchase/online/index.vue'),
    },
    {
      path: 'purchaseOutStorage',
      name: 'PurchaseOutStorage',
      meta: {
        title: t('routes.bus.purchaseOutStorage'),
      },
      component: () => import('/@/views/bus/purchase/outStorage/index.vue'),
    },
    {
      path: 'purchaseStorage',
      name: 'PurchaseStorage',
      meta: {
        title: t('routes.bus.purchaseStorage'),
      },
      component: () => import('/@/views/bus/purchase/storage/index.vue'),
    },
    {
      path: 'purchaseBudget',
      name: 'PurchaseBudget',
      meta: {
        title: t('routes.bus.purchaseBudget'),
      },
      component: () => import('/@/views/bus/purchase/budget/index.vue'),
    },
    {
      path: 'purchaseGoods',
      name: 'PurchaseGoods',
      meta: {
        title: t('routes.bus.purchaseGoods'),
      },
      component: () => import('/@/views/bus/purchase/goods/index.vue'),
    },
  ],
};

export default purchases;
