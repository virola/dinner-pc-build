<template>
  <PageWrapper title="食堂信息" contentBackground>
    <Desc :schema="schemas" :data="renderData" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';

  import Desc from '/@/views/bus/components/Desc.vue';

  const basicFields = [
    {
      field: 'name',
      label: '食堂名称',
    },
    {
      field: 'code',
      label: '食堂简称',
    },
    {
      field: 'a3',
      label: '管理负责人',
    },
    {
      field: 'type',
      label: '联系电话',
    },
    {
      field: 'type2',
      label: '从业人员数',
    },
    {
      field: 'type2',
      label: '经营点级别',
    },
    {
      field: 'type2',
      label: '其他荣誉',
    },
  ];

  const schemas = [
    {
      title: '基础信息',
      dataKey: 'basicInfo',
      column: 2,
      fields: basicFields,
    },
    {
      title: '托管/外包/集中供餐企业信息',
      dataKey: 'staffInfo',
      column: 2,
      fields: [
        {
          field: 'staff',
          label: '企业名称',
        },
        {
          field: '_empty',
          label: '',
        },
        {
          field: 'student',
          label: '法人',
        },
        {
          field: 'inStudent',
          label: '联系电话',
        },
        {
          field: 'dinner',
          label: '部门经理',
        },
        {
          field: 'dinner',
          label: '联系电话',
        },
        {
          field: 'dinner',
          label: '合同上传',
          render: 'upload',
        },
        {
          field: 'dinner',
          label: '合同有效期',
        },
      ],
    },
    {
      title: '食堂规模',
      dataKey: 'chargeInfo',
      column: 2,
      fields: [
        {
          field: 'staff',
          label: '建筑面积',
        },
        {
          field: '_empty',
          label: '',
        },
        {
          field: 'count',
          label: '餐位数',
        },
        {
          field: 'inStudent',
          label: '加工区面积',
        },
        {
          field: 'dinner',
          label: '部门经理',
        },
        {
          field: 'dinner',
          label: '最大供餐能力',
        },
      ],
    },
    {
      title: '附件（支持扩展名：.png  .jpg）',
      dataKey: 'safeInfo',
      column: 2,
      fields: [
        {
          field: 'hasExtra',
          label: '营业执照',
          render: 'image',
        },
        {
          field: 'havnt',
          label: '食品经营许可证',
          render: 'image',
        },
        {
          field: 'has',
          label: '统一社会信用代码',
        },
        {
          field: 'has',
          label: '许可证编号',
        },
        {
          field: 'has',
          label: '有效期至',
        },
        {
          field: 'has',
          label: '有效期至',
        },
      ],
    },
  ];

  const renderData = {
    basicInfo: {
      name: '开福区第一中学',
      code: '202209897',
      address: '湖南省长沙市开福区',
      detail: '开福区第二大道123号',
      dinner: ['早餐', '午餐', '晚餐'],
    },
    staffInfo: {
      staff: 342,
      student: 3000,
      inStudent: 1000,
      dinner: 3422,
    },
    chargeInfo: {},
    safeInfo: {
      hasExtra: '是（互联网式展示）',
      has: '是',
      havnt: '否',
    },
  };
</script>
