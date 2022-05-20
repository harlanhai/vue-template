import { RouteRecordRaw } from 'vue-router';

const userManageRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
  },
];

export default userManageRouter;
