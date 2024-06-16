import {
  HomeScreen,
  SettingScreen,
  PerformMissionScreen,
  ManualControlScreen,
  SosScreen,
  ConfigurationManagementScreen,
  ErrorHistoryScreen,
  PerformMissionScreen2,
} from '@src/screens';

export const ROUTES = {
  HOME: 'HOME',
  SETTING: 'SETTING',
  PERFORM_MISSION: 'PERFORM_MISSION',
  PERFORM_MISSION2: 'PERFORM_MISSION2',
  MANUAL_CONTROL: 'MANUAL_CONTROL',
  CONFIGURATION_MANAGEMENT: 'CONFIGURATION_MANAGEMENT',
  SOS: 'SOS',
  ERORR_HISTORY: 'ERORR_HISTORY',
};

export const APP_STACK = [
  {
    name: ROUTES.HOME,
    title: '',
    component: HomeScreen,
  },
  {
    name: ROUTES.SETTING,
    title: 'Cài đặt',
    component: SettingScreen,
  },
  {
    name: ROUTES.PERFORM_MISSION,
    title: 'Thực hiện nhiệm vụ',
    component: PerformMissionScreen,
  },
  {
    name: ROUTES.PERFORM_MISSION2,
    title: 'Thực hiện nhiệm vụ',
    component: PerformMissionScreen2,
  },
  {
    name: ROUTES.MANUAL_CONTROL,
    title: 'Điều khiển thủ công',
    component: ManualControlScreen,
  },
  {
    name: ROUTES.CONFIGURATION_MANAGEMENT,
    title: 'Quản lý cấu hình',
    component: ConfigurationManagementScreen,
  },
  {
    name: ROUTES.SOS,
    title: 'SOS',
    component: SosScreen,
  },
  {
    name: ROUTES.ERORR_HISTORY,
    title: 'Lịch sử lỗi',
    component: ErrorHistoryScreen,
  },
];
