<template>
  <PageWrapper contentFullHeight>
    <Tabs type="card">
      <TabPane key="school" tab="学校食谱">
        <TableRecipe />
      </TabPane>
      <TabPane key="favor" tab="收藏食谱">
        <FavorRecipe />
      </TabPane>
    </Tabs>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tabs } from 'ant-design-vue';

  import { PageWrapper } from '/@/components/Page';

  import TableRecipe from './TableRecipe.vue';
  import FavorRecipe from './FavorRecipe.vue';

  export default defineComponent({
    name: 'RecipeLib',
    components: {
      PageWrapper,
      Tabs,
      TabPane: Tabs.TabPane,
      TableRecipe,
      FavorRecipe,
    },
    setup() {
      return {};
    },
  });
</script>
