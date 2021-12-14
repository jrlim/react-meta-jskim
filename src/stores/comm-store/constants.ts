const mock = [
  {
    id: 'DSH100',
    parentId: null,
    title: '대시보드',
    icon: '',
    name: 'dashboardOperation',
    path: '/main/dashboard-operation',
    sortSeq: 1
  },
  {
    id: 'OPR100',
    parentId: null,
    title: '경영정보',
    icon: '',
    name: 'operation',
    path: '/main/operation',
    sortSeq: 2
  }
];

export const InitialLoadingState = false;
export const InitialRouterState = { menus: mock };
