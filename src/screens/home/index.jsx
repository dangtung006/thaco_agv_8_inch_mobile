import { BaseScreen, BaseText } from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import { TouchableOpacity } from 'react-native';
export default function HomeScreen(props) {
  return (
    <BaseScreen {...props} isHome title='Điều khiển di chuyển'>
      <TouchableOpacity onPress={() => navigate(ROUTES.SETTING)}>
        <BaseText
          locale
          bold
          size={30}
          classname='underline underline-offset-4 text-blue'
        >
          Cài đặt
        </BaseText>
      </TouchableOpacity>
    </BaseScreen>
  );
}
