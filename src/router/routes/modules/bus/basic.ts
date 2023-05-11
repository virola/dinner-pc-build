import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const basicInfo: AppRouteModule = {
  path: '/basic',
  name: 'BasicInfo',
  component: LAYOUT,
  redirect: '/basic/school',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.bus.basicInfo'),
    orderNo: 20,
  },
  children: [
    {
      path: 'school',
      name: 'SchoolInfo',
      meta: {
        title: t('routes.bus.schoolInfo'),
      },
      component: () => import('/@/views/bus/info/school.vue'),
    },
    {
      path: 'dinner',
      name: 'DinerInfo',
      meta: {
        title: t('routes.bus.dinerInfo'),
      },
      component: () => import('/@/views/bus/info/dinner.vue'),
    },
    {
      path: 'staffs',
      name: 'SchoolStaffList',
      meta: {
        title: t('routes.bus.staffs'),
      },
      component: () => import('/@/views/bus/info/staffs/index.vue'),
    },
    {
      path: 'supplier',
      name: 'SupplierList',
      meta: {
        title: t('routes.bus.supplier'),
      },
      component: () => import('/@/views/bus/info/supplier/index.vue'),
    },
    {
      path: 'recycler',
      name: 'RecyclerList',
      meta: {
        title: t('routes.bus.recycle'),
      },
      component: () => import('/@/views/bus/info/recycler/index.vue'),
    },
    {
      path: 'water',
      name: 'WaterManage',
      meta: {
        title: t('routes.bus.water'),
      },
      component: () => import('/@/views/bus/info/water/index.vue'),
    },
    {
      path: 'document',
      name: 'DocumentList',
      meta: {
        title: t('routes.bus.documentRecord'),
      },
      component: () => import('/@/views/bus/info/document/index.vue'),
    },
  ],
};

export default basicInfo;
