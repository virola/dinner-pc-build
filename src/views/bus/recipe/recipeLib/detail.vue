<template>
  <PageWrapper contentFullHeight>
    <template #headerContent>
      <div class="flex justify-between items-center">
        <a-button>查看食谱综合评价</a-button>
        <div class="flex">
          <div class="mr-10">制作人：李某</div>
          <div class="mr-10">制表时间：2022-09-09</div>
          <div class="mr-10">用餐人群：初中</div>
        </div>
        <a-button>导出食谱</a-button>
      </div>
    </template>
    <div class="p-4 bg-white">
      <table class="common-table">
        <thead class="ant-table-thead">
          <tr>
            <th>
              <div>
                <div>日期/餐别</div>
                <div>（食材单位：克）</div>
              </div>
            </th>
            <th v-for="(head, hIndex) in tableHeader" :key="hIndex">
              <div>{{ head }}</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <template v-for="record in tableData" :key="record.key">
            <tr>
              <td>
                <div>{{ record.name }}</div>
              </td>
              <template v-for="(_, hIndex) in tableHeader" :key="hIndex">
                <td>
                  <div
                    v-for="(dishOption, dIndex) in getRecord(hIndex, record)"
                    :key="dIndex"
                    class="flex items-center items-stretch"
                    :class="{ 'border-b': dIndex < getRecord(hIndex, record).length - 1 }"
                  >
                    <div class="border-r p-2 flex-1 flex items-center">{{
                      dishOption.dishName
                    }}</div>
                    <div class="flex-1">
                      <div
                        class="p-1"
                        :class="{ 'border-b': tIndex < dishOption.recipes.length - 1 }"
                        v-for="(dish, tIndex) in dishOption.recipes"
                        :key="tIndex"
                        >{{ dish }}</div
                      >
                    </div>
                  </div>
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: {
      PageWrapper,
    },
    setup() {
      const tableHeader = ['星期一', '星期二', '星期三', '星期四', '星期五'];

      const tableData: Recordable[] = [];

      function getDishData(i = 2) {
        let list: any[] = [];
        for (let index = 0; index < i; index++) {
          list.push({
            dishName: '8元套餐',
            recipes: ['小炒肉', '红烧鸡块', '炒青菜', '土豆丝'],
          });
        }
        return list;
      }

      // function getWeekData(i = 5) {
      //   const list: any[] = [];
      //   for (let index = 0; index < i; index++) {
      //     list.push({
      //       dishes: getDishData(),
      //     });
      //   }
      //   return list;
      // }

      const totalData = [
        {
          key: 1,
          name: '午餐',
          week1: getDishData(),
          week2: getDishData(),
          week3: getDishData(),
          week4: getDishData(),
          week5: getDishData(),
        },
        {
          key: 2,
          name: '晚餐',
          week1: getDishData(),
          week2: getDishData(),
          week3: getDishData(),
          week4: getDishData(),
          week5: getDishData(),
        },
      ];

      function getRecord(hIndex, record) {
        return record[`week${hIndex + 1}`];
      }

      console.log('tableData', tableData);
      return {
        tableHeader,
        tableData: totalData,
        getRecord,
      };
    },
  });
</script>
