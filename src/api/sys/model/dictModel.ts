export interface DictResult {
  msg: string;
  code: number;
  data?: DictItemResult[];
}

/**
 * 字典数据
 */
export interface DictItemResult {
  dictLabel: string;
  dictValue: string | number;
  listClass: string;
  dictId: number;
}
