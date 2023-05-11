<template>
  <div>
    <Space>
      <RadioGroup v-model:value="currentIndex" button-style="solid" @change="changeOption">
        <RadioButton v-for="(item, index) in ranges" :key="index" :value="index">{{
          item.label
        }}</RadioButton>
      </RadioGroup>
      <RangePicker v-model:value="activeDates" :format="dateFormat" :allowClear="false" />
    </Space>
  </div>
</template>

<script lang="ts">
  import { defineComponent, watch, ref } from 'vue';
  import { Space, Radio, RangePicker } from 'ant-design-vue';
  import dayjs from 'dayjs';
  import { isString } from '/@/utils/is';

  import { shortRangePickerProps } from './props';
  import type { Dayjs } from 'dayjs';

  export default defineComponent({
    components: {
      Space,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button,
      RangePicker,
    },
    props: shortRangePickerProps,
    emits: ['change', 'update:value'],
    setup(props, { emit }) {
      const activeDates = ref<Dayjs[]>([dayjs(), dayjs()]);
      const currentIndex = ref(-1);

      watch(
        () => props.value,
        () => {
          setDates();
        },
        { immediate: true },
      );

      const dateFormat = 'YYYY-MM-DD';
      const ranges = [
        {
          label: '今天',
          value: [dayjs(), dayjs()],
        },
        {
          label: '昨天',
          value: [dayjs().add(-1, 'days'), dayjs().add(-1, 'days')],
        },
        {
          label: '最近7天',
          value: [dayjs().add(-7, 'days'), dayjs().add(-1, 'days')],
        },
      ];

      function setDates() {
        const { value } = props;
        if (value && value.length > 1) {
          let tmp: any = [];
          if (isString(value[0]) && isString(value[1])) {
            tmp[0] = dayjs(value[0]);
            tmp[1] = dayjs(value[1]);
          } else {
            tmp[0] = value[0];
            tmp[1] = value[1];
          }
          activeDates.value = tmp;
        }
      }

      function changeOption() {
        console.log(currentIndex.value);
        if (currentIndex.value > -1 && ranges[currentIndex.value].value) {
          activeDates.value = ranges[currentIndex.value].value;
          handleChange();
        }
      }

      function changeDate(vals) {
        console.log(vals);

        handleChange();
      }

      function handleChange() {
        let values: any = [];
        if (activeDates.value) {
          values = [
            activeDates.value[0].format(dateFormat),
            activeDates.value[1].format(dateFormat),
          ];
        }
        emit('update:value', values);
        emit('change', values);
      }

      return {
        dateFormat,
        currentIndex,
        activeDates,
        ranges,
        changeOption,
        changeDate,
      };
    },
  });
</script>

<style scoped></style>
