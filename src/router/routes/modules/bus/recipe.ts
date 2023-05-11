import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const recipes: AppRouteModule = {
  path: '/recipe',
  name: 'RecipeInfo',
  component: LAYOUT,
  redirect: '/recipe/recipeConfig',
  meta: {
    icon: 'ion:receipt-outline',
    title: t('routes.bus.recipe'),
    orderNo: 30,
  },
  children: [
    {
      path: 'recipeConfig',
      name: 'RecipeConfig',
      meta: {
        title: t('routes.bus.recipeConfig'),
      },
      component: () => import('/@/views/bus/recipe/recipeConfig/index.vue'),
    },
    {
      path: 'recipeMake',
      name: 'RecipeMake',
      meta: {
        title: t('routes.bus.recipeMake'),
      },
      component: () => import('/@/views/bus/recipe/recipeMake/index.vue'),
    },
    {
      path: 'recipeRecommend',
      name: 'RecipeRecommend',
      meta: {
        title: t('routes.bus.recipeRecommend'),
      },
      component: () => import('/@/views/bus/recipe/recipeRecommend/index.vue'),
    },
    {
      path: 'recipeLib',
      name: 'RecipeLib',
      meta: {
        title: t('routes.bus.recipeLib'),
      },
      component: () => import('/@/views/bus/recipe/recipeLib/index.vue'),
    },
    {
      path: 'recipeDish',
      name: 'RecipeDish',
      meta: {
        title: t('routes.bus.recipeDish'),
      },
      component: () => import('/@/views/bus/recipe/recipeDish/index.vue'),
    },
  ],
};

export default recipes;
