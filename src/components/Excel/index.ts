import { withInstall } from '/@/utils';
import impExcel from './src/ImportExcel.vue';
import expExcelModal from './src/ExportExcelModal.vue';
import impExcelModal from './src/ImportExcelModal.vue';

export const ImpExcel = withInstall(impExcel);
export const ExpExcelModal = withInstall(expExcelModal);
export const ImpExcelModal = withInstall(impExcelModal);

export * from './src/typing';
export { jsonToSheetXlsx, aoaToSheetXlsx } from './src/Export2Excel';
