import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const desktops: AppRouteModule = {
  path: '/desktop',
  name: 'DesktopInfo',
  component: LAYOUT,
  redirect: '/desktop/desktopConfig',
  meta: {
    icon: 'ion:storefront-outline',
    title: t('routes.bus.desktop'),
    orderNo: 40,
  },
  children: [
    {
      path: 'config',
      name: 'DesktopConfig',
      meta: {
        title: t('routes.bus.desktopConfig'),
      },
      component: () => import('/@/views/bus/desktop/config/index.vue'),
    },
    {
      path: 'records',
      name: 'DesktopList',
      meta: {
        title: t('routes.bus.desktopRecords'),
      },
      component: () => import('/@/views/bus/desktop/records/index.vue'),
    },
    {
      path: 'desktopSafeCheck',
      name: 'DesktopSafeCheck',
      meta: {
        title: t('routes.bus.desktopSafeCheck'),
      },
      component: () => import('/@/views/bus/desktop/safeCheck/index.vue'),
    },
  ],
};

export default desktops;
