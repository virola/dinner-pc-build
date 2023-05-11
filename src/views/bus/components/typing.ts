import type { VNode, CSSProperties } from 'vue';

export interface SchemaItem {
  title: string;
  dataKey: string;
  column?: number;
  fields?: DescItem[];
  showExtra?: boolean;
  bordered?: boolean;
}

export interface DescItem {
  labelMinWidth?: number;
  contentMinWidth?: number;
  labelStyle?: CSSProperties;
  field: string;
  label: string | VNode | JSX.Element;
  // Merge column
  span?: number;
  show?: (...arg: any) => boolean;
  // render
  render?: string;
}

/**
 * 导出表格的表头变量
 */
export interface TableCol {
  title: string;
  noExport?: Boolean;
  key?: string;
  exportRender?: Function;
  dataIndex: string;
}
