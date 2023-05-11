import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const trades: AppRouteModule = {
  path: '/trade',
  name: 'TradeInfo',
  component: LAYOUT,
  redirect: '/trade/tradeInStats',
  meta: {
    icon: 'ion:storefront-outline',
    title: t('routes.bus.trade'),
    orderNo: 60,
  },
  children: [
    {
      path: 'tradeInStats',
      name: 'TradeInStats',
      meta: {
        title: t('routes.bus.tradeInStats'),
      },
      component: () => import('/@/views/bus/tradeRecord/imStats/index.vue'),
    },
    {
      path: 'tradeOut',
      name: 'TradeOut',
      meta: {
        title: t('routes.bus.tradeOut'),
      },
      component: () => import('/@/views/bus/tradeRecord/tradeOut/index.vue'),
    },
    {
      path: 'tradeStorage',
      name: 'TradeStorage',
      meta: {
        title: t('routes.bus.tradeStorage'),
      },
      component: () => import('/@/views/bus/tradeRecord/storage/index.vue'),
    },
  ],
};

export default trades;
