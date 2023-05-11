import type { PropType } from 'vue';
import type { Dayjs } from 'dayjs';

export const shortRangePickerProps = {
  value: {
    type: Array as PropType<string[] | Dayjs[]>,
    default: () => [],
  },
};
