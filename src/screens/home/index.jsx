import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScreen,
  BaseText,
  BaseTouchable,
  BaseView,
} from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import { useWindowDimensions } from 'react-native';
export default function HomeScreen(props) {
  const HomeItems = [
    {
      icon: Images.performMission,
      title: 'Thực hiện nhiệm vụ',
      route: ROUTES.PERFORM_MISSION,
    },
    {
      icon: Images.manualControl,
      title: 'Điều khiển thủ công',
      route: ROUTES.MANUAL_CONTROL,
    },
    {
      icon: Images.setting,
      title: 'Cài đặt',
      route: ROUTES.SETTING,
    },
    {
      icon: Images.configurationManagement,
      title: 'Quản lý cấu hình',
      route: ROUTES.CONFIGURATION_MANAGEMENT,
    },
    {
      icon: Images.sos,
      title: 'SOS',
      route: ROUTES.SOS,
    },
    {
      icon: Images.error,
      title: 'Lịch sử lỗi',
      route: ROUTES.ERORR_HISTORY,
    },
  ];
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const _handleNavigation = (route) => {
    navigate(route);
  };

  const _buildItem = (item) => {
    return (
      <BaseTouchable
        onPress={() => _handleNavigation(item.route)}
        key={item.title}
        classname={`shadow-sm
         bg-white  rounded-lg w-[${(windowWidth - 66 * 2 - 40 * 2) / 3}px] h-[${
          (windowHeight - 50 - 66 * 2 - 40) / 2
        }px] flex flex-col items-center justify-center gap-6`}
      >
        <BaseImage source={item.icon} classname='w-70px h-84px' />
        <BaseText locale classname='text-blue500' medium size={30}>
          {item.title}
        </BaseText>
      </BaseTouchable>
    );
  };
  return (
    <BaseScreen>
      <BaseView classname='flex-1 bg-bg gap-10 p-[66px] flex flex-row flex-wrap'>
        {HomeItems.map((item) => _buildItem(item))}
      </BaseView>
    </BaseScreen>
  );
}
