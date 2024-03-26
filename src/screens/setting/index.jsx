import { BaseScreen, BaseText } from '@src/components';
import { navigate, ROUTES } from '@src/navigation';
import { TouchableOpacity } from 'react-native';
export default function SettingScreen(props) {
  return (
    <BaseScreen {...props} title='Cài đặt'>
      <TouchableOpacity onPress={() => navigate(ROUTES.ROBOT_INFO)}>
        <BaseText
          locale
          bold
          size={30}
          classname='underline underline-offset-4 text-blue'
        >
          robot
        </BaseText>
      </TouchableOpacity>
    </BaseScreen>
  );
}
