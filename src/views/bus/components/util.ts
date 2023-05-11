import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

import type { ColEx, ComponentType } from '/@/components/Form/src/types/index';

/**
 * 定义一个详情字段
 */
export interface Field {
  field: string;
  label: string;
  render?: string;
  required?: boolean;
  options?: SelectOption[];
  component?: ComponentType;
  colProps?: Partial<ColEx>;
  suffix?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

/**
 * 默认图片上传参数
 */
const uploadOptions = {
  maxNumber: 5,
  maxSize: 10,
  accept: ['.png', '.jpg'],
  api: uploadApi,
};

const defaultColProps: Partial<ColEx> = {
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

export function getFormSchema(list: Field[] = [], colProps = defaultColProps) {
  const schemaList: FormSchema[] = [];

  list.forEach((field: Field) => {
    const tmp: FormSchema = {
      field: field.field,
      label: field.label,
      component: field.component || 'Input',
      colProps: field.colProps || colProps,
      suffix: field.suffix,
    };
    if (field.required) {
      tmp.rules = [
        {
          required: true,
          message: `请输入${field.label}`,
        },
      ];
    }
    if (field.options) {
      (tmp.component = 'Select'),
        (tmp.componentProps = {
          options: field.options,
        });
    }
    if (field.render && field.render == 'image') {
      tmp.component = 'Upload';
      tmp.componentProps = uploadOptions;
    }
    if (field.render && field.render == 'file') {
      tmp.component = 'Upload';
      tmp.componentProps = {
        maxNumber: 5,
        maxSize: 10,
        // accept: ['.png', '.jpg'],
        api: uploadApi,
      };
    }
    if (field.field !== '_empty') {
      schemaList.push(tmp);
    }
  });

  return schemaList;
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id = 'menuId', parentId = 'parentId', children = 'children') {
  const config = {
    id,
    parentId,
    childrenList: children || 'children',
  };

  const childrenListMap = {};
  const nodeIds = {};
  const tree: any[] = [];

  for (const d of data) {
    const parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (const d of data) {
    const parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}
