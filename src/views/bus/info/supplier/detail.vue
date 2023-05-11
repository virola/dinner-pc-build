<template>
  <PageWrapper contentBackground>
    <Desc :schema="schemas" :data="renderData" :deepData="false" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';

  import Desc from '/@/views/bus/components/Desc.vue';

  import { basicFields } from './supplier.data';

  const list: any = [];
  let tmp: any = [];
  basicFields.forEach((item, index) => {
    if (item.component == 'Divider') {
      if (tmp.length) {
        list.push([...tmp]);
      }
      // nothing
      tmp = [];
    } else {
      tmp.push(item);
    }
    if (index == basicFields.length - 1 && tmp.length) {
      list.push(tmp);
    }
  });

  const schemas = [
    {
      title: '基础信息',
      dataKey: 'basicInfo',
      column: 3,
      fields: list[0],
    },
    {
      title: '经营状况',
      dataKey: 'staffInfo',
      column: 3,
      fields: list[1],
    },
    {
      title: '附件',
      dataKey: 'safeInfo',
      column: 4,
      fields: list[2],
    },
  ];

  const renderData = {
    name: '开福区第一中学',
    code: '202209897',
    address: '湖南省长沙市开福区',
    detail: '开福区第二大道123号',
    dinner: ['早餐', '午餐', '晚餐'],
    staff: 342,
    student: 3000,
    inStudent: 1000,
    dinner: 3422,
    hasExtra: '是（互联网式展示）',
    has: '是',
    havnt: '否',
  };
</script>
