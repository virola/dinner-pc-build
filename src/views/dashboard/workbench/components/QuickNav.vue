<template>
  <Card title="快捷入口" v-bind="$attrs">
    <CardGrid
      v-for="(item, index) in navItems"
      :key="index"
      :style="gridStyle"
      @click="handleClick(item)"
    >
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="20" />
        <span class="text-md mt-2">{{ item.title }}</span>
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { navItems } from './data';
  import { Icon } from '/@/components/Icon';
  import { useGo } from '/@/hooks/web/usePage';

  const CardGrid = Card.Grid;
  const go = useGo();

  const gridStyle = {
    width: '120px',
  };

  function handleClick(item) {
    if (item.url) {
      go(item.url);
    }
  }
</script>
