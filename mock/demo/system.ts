import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultPageSuccess, resultSuccess } from '../_util';
// import { treeToList } from '/@/utils/helper/treeHelper';

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      userId: `${index}`,
      userName: '@first',
      email: '@email',
      nickName: '@cname()',
      role: '@first',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

const roleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      id: index + 1,
      orderNo: `${index + 1}`,
      roleName: ['超级管理员', '管理员', '文章管理员', '普通用户'][index],
      roleValue: '@first',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      menu: [['0', '1', '2'], ['0', '1'], ['0', '2'], ['2']][index],
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

const deptList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      deptId: `${index}`,
      deptName: ['华东分部', '华南分部', '西北分部'][index],
      orderNo: index + 1,
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
    });
    for (let j = 0; j < 4; j++) {
      result.push({
        deptId: `${index}-${j}`,
        deptName: ['研发部', '市场部', '商务部', '财务部'][j],
        orderNo: j + 1,
        createTime: '@datetime',
        remark: '@cword(10,20)',
        'status|1': ['0', '1'],
        parentId: `${index}`,
        children: undefined,
      });
    }
  }
  return result;
})();

const deptTreeList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      label: ['华东分部', '华南分部', '西北分部'][index],
      orderNo: index + 1,
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            label: ['研发部', '市场部', '商务部', '财务部'][j],
            orderNo: j + 1,
            createTime: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
            parentId: `${index}`,
            children: undefined,
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

const menuList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      menuId: `${index}`,
      icon: ['ion:layers-outline', 'ion:git-compare-outline', 'ion:tv-outline'][index],
      component: 'LAYOUT',
      menuType: 'C',
      menuName: ['Dashboard', '权限管理', '功能'][index],
      permis: '',
      orderNo: index + 1,
      createTime: '@datetime',
      'status|1': ['0', '0', '1'],
      children: null,
    });
    for (let j = 0; j < 4; j++) {
      result.push({
        menuId: `${index}-${j}`,
        menuType: 'M',
        menuName: ['菜单1', '菜单2', '菜单3', '菜单4'][j],
        icon: 'ion:document',
        permis: ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index],
        component: [
          '/dashboard/welcome/index',
          '/dashboard/analysis/index',
          '/dashboard/workbench/index',
          '/dashboard/test/index',
        ][j],
        orderNo: j + 1,
        createTime: '@datetime',
        'status|1': ['0', '1'],
        parentId: `${index}`,
        children: null,
      });
      for (let k = 0; k < 4; k++) {
        result.push({
          menuId: `${index}-${j}-${k}`,
          menuType: 'F',
          menuName: '按钮' + (j + 1) + '-' + (k + 1),
          icon: '',
          permis:
            ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index] + ':btn' + (k + 1),
          component: [
            '/dashboard/welcome/index',
            '/dashboard/analysis/index',
            '/dashboard/workbench/index',
            '/dashboard/test/index',
          ][j],
          orderNo: j + 1,
          createTime: '@datetime',
          'status|1': ['0', '1'],
          parentId: `${index}-${j}`,
          children: undefined,
        });
      }
    }
  }
  return result;
})();

// const menuTreeList = (() => {
//   const result: any[] = [];
//   for (let index = 0; index < 3; index++) {
//     result.push({
//       menuId: `${index}`,
//       icon: ['ion:layers-outline', 'ion:git-compare-outline', 'ion:tv-outline'][index],
//       component: 'LAYOUT',
//       menuType: 'C',
//       menuName: ['Dashboard', '权限管理', '功能'][index],
//       permis: '',
//       orderNo: index + 1,
//       createTime: '@datetime',
//       'status|1': ['0', '0', '1'],
//       children: (() => {
//         const children: any[] = [];
//         for (let j = 0; j < 4; j++) {
//           children.push({
//             menuId: `${index}-${j}`,
//             menuType: 'M',
//             menuName: ['菜单1', '菜单2', '菜单3', '菜单4'][j],
//             icon: 'ion:document',
//             permis: ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index],
//             component: [
//               '/dashboard/welcome/index',
//               '/dashboard/analysis/index',
//               '/dashboard/workbench/index',
//               '/dashboard/test/index',
//             ][j],
//             orderNo: j + 1,
//             createTime: '@datetime',
//             'status|1': ['0', '1'],
//             parentId: `${index}`,
//             children: (() => {
//               const children: any[] = [];
//               for (let k = 0; k < 4; k++) {
//                 children.push({
//                   menuId: `${index}-${j}-${k}`,
//                   menuType: 'F',
//                   menuName: '按钮' + (j + 1) + '-' + (k + 1),
//                   icon: '',
//                   permis:
//                     ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index] +
//                     ':btn' +
//                     (k + 1),
//                   component: [
//                     '/dashboard/welcome/index',
//                     '/dashboard/analysis/index',
//                     '/dashboard/workbench/index',
//                     '/dashboard/test/index',
//                   ][j],
//                   orderNo: j + 1,
//                   createTime: '@datetime',
//                   'status|1': ['0', '1'],
//                   parentId: `${index}-${j}`,
//                   children: undefined,
//                 });
//               }
//               return children;
//             })(),
//           });
//         }
//         return children;
//       })(),
//     });
//   }
//   return result;
// })();

const dictList = (() => {
  const dList = [
    {
      searchValue: null,
      createBy: 'admin',
      createTime: '2022-08-17 11:55:43',
      updateBy: null,
      updateTime: null,
      remark: '正常状态',
      params: {
        '@type': 'java.util.HashMap',
      },
      dictCode: 6,
      dictSort: 1,
      dictLabel: '正常',
      dictValue: '0',
      dictType: 'sys_normal_disable',
      cssClass: '',
      listClass: 'primary',
      isDefault: 'Y',
      status: '0',
      default: true,
    },
    {
      searchValue: null,
      createBy: 'admin',
      createTime: '2022-08-17 11:55:43',
      updateBy: null,
      updateTime: null,
      remark: '停用状态',
      params: {
        '@type': 'java.util.HashMap',
      },
      dictCode: 7,
      dictSort: 2,
      dictLabel: '停用',
      dictValue: '1',
      dictType: 'sys_normal_disable',
      cssClass: '',
      listClass: 'danger',
      isDefault: 'N',
      status: '0',
      default: false,
    },
  ];
  return dList;
})();

export default [
  {
    url: '/basic-api/system/user/list',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, accountList);
    },
  },
  {
    url: '/basic-api/system/role/list',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, roleList);
    },
  },
  {
    url: '/basic-api/system/setRoleStatus',
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: '/basic-api/system/getAllRoleList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(roleList);
    },
  },
  {
    url: '/basic-api/system/dept/list',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(deptList);
    },
  },
  {
    url: '/basic-api/system/dept/treeselect',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(deptTreeList);
    },
  },
  {
    url: '/basic-api/system/menu/list',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(menuList);
    },
  },
  {
    url: '/basic-api/system/accountExist',
    timeout: 500,
    method: 'post',
    response: ({ body }) => {
      const { account } = body || {};
      if (account && account.indexOf('admin') !== -1) {
        return resultError('该字段不能包含admin');
      } else {
        return resultSuccess(`${account} can use`);
      }
    },
  },
  {
    url: '/basic-api/system/dict/data/type/:id',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id);
      return resultSuccess(dictList);
    },
  },
] as MockMethod[];
