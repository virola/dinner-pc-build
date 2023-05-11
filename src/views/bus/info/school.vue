<template>
  <PageWrapper title="学校信息" contentBackground>
    <Desc :schema="schemas" :data="renderData" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import Desc from '/@/views/bus/components/Desc.vue';
  import { DEFAULT_IMAGE } from '/@/settings/siteSetting';

  const basicFields = [
    {
      field: 'name',
      label: '学校名称',
    },
    {
      field: 'code',
      label: '单位代码',
    },
    {
      field: 'a3',
      label: '所属集团（中心学校）',
    },
    {
      field: 'type',
      label: '学校类型',
    },
    {
      field: 'type2',
      label: '办学性质',
    },
    {
      field: 'type2',
      label: '所在地',
    },
    {
      field: 'type2',
      label: '是否寄宿制',
    },
    {
      field: 'dinner',
      label: '供应餐别',
      render: 'tags',
    },
    {
      field: 'type2',
      label: '营养改善计划学校',
    },
    {
      field: 'address',
      label: '学校地址',
    },
    {
      field: 'detail',
      label: '详细地址',
    },
    {
      field: 'logo',
      label: '学校LOGO',
      render: 'image',
    },
  ];

  const schemas = [
    {
      title: '基础信息',
      dataKey: 'basicInfo',
      column: 3,
      fields: basicFields,
    },
    {
      title: '人员信息',
      dataKey: 'staffInfo',
      column: 3,
      fields: [
        {
          field: 'staff',
          label: '教职工人数',
        },
        {
          field: 'student',
          label: '学生人数',
        },
        {
          field: 'inStudent',
          label: '寄宿学生人数',
        },
        {
          field: 'dinner',
          label: '就餐学生人数',
        },
      ],
    },
    {
      title: '负责人信息',
      dataKey: 'chargeInfo',
      column: 3,
      fields: [
        {
          field: 'staff',
          label: '校（园）长',
        },
        {
          field: 'student',
          label: '联系电话',
        },
        {
          field: 'inStudent',
          label: '安全管理证数等级',
        },
        {
          field: 'dinner',
          label: '总务主任',
        },
        {
          field: 'dinner',
          label: '联系电话',
        },
        {
          field: '_empty',
          label: '',
        },
        {
          field: 'dinner',
          label: '安全管理员',
        },
        {
          field: 'dinner',
          label: '联系电话',
        },
        {
          field: '_empty',
          label: '',
        },
        {
          field: 'dinner',
          label: '营养师',
        },
      ],
    },
    {
      title: '食堂安全信息',
      dataKey: 'safeInfo',
      column: 2,
      fields: [
        {
          field: 'hasExtra',
          label: '是否完成明厨亮灶工作',
        },
        {
          field: 'havnt',
          label: '是否采用透明玻璃窗开放式厨房',
        },
        {
          field: 'has',
          label: '是否接入市场监督局监控平台',
        },
        {
          field: 'has',
          label: '是否成立了学校食品安全领导小组',
        },
        {
          field: 'has',
          label: '是否签署了学校食品安全管理责任',
        },
        {
          field: 'has',
          label: '是否制定了食品中毒事故应急预案',
        },
        {
          field: 'havnt',
          label: '是否实施了5常6T',
        },
        {
          field: 'havnt',
          label: '是否建立了HACCP或者ISO22000',
        },
        {
          field: 'havnt',
          label: '是否通过了HACCP或者ISO22000',
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
      logo: DEFAULT_IMAGE,
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
