import { HomeScreen, SettingScreen, RoboInfoScreen } from '@src/screens';

export const ROUTES = {
  HOME: 'HOME',
  SETTING: 'SETTING',
  ROBOT_INFO: 'ROBOT_INFO',
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
];
