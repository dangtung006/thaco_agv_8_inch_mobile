import {
  HomeScreen,
  SettingScreen,
  RoboInfoScreen,
  MovementControlScreen,
  TaskManagerScreen,
} from '@src/screens';

export const ROUTES = {
  HOME: 'HOME',
  SETTING: 'SETTING',
  ROBOT_INFO: 'ROBOT_INFO',
  MOVEMENT_CONTROL: 'MOVEMENT_CONTROL',
  TASK_MANAGER: 'TASK_MANAGER',
};

export const APP_STACK = [
  {
    name: ROUTES.HOME,
    title: 'Màn hình chính',
    component: HomeScreen,
  },
  {
    name: ROUTES.SETTING,
    title: 'Cài đặt',
    component: SettingScreen,
  },
  {
    name: ROUTES.ROBOT_INFO,
    title: 'Quản lý thông tin Robot',
    component: RoboInfoScreen,
  },
  {
    name: ROUTES.MOVEMENT_CONTROL,
    title: 'Điều khiển di chuyển',
    component: MovementControlScreen,
  },
  {
    name: ROUTES.TASK_MANAGER,
    title: 'Quản lý nhiệm vụ',
    component: TaskManagerScreen,
  },
];
