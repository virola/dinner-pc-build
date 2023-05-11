<template>
  <div class="lg:flex">
    <Avatar :src="userinfo.avatar || headerImg" :size="72" class="!block">
      <template #icon><UserOutlined /></template>
    </Avatar>
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">你好, {{ userinfo.nickName }}, 欢迎登录平台！</h1>
      <ShortRangePicker @change="handleDateChange" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { UserOutlined } from '@ant-design/icons-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/avatar.png';
  import { ShortRangePicker } from '/@/components/ShortRangePicker';

  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);

  function handleDateChange(dates) {
    console.log('handleDateChange', dates);
  }
</script>
