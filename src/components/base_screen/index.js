import Images from '@src/assets/gen';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BaseText from '../text';

export default function BaseScreen(props) {
  const { children } = props;
  return (
    <SafeAreaView className='bg-white flex-1'>
      <AppBar {...props} />
      {children}
    </SafeAreaView>
  );
}

const AppBar = (props) => {
  const { isHome, title } = props;
  return (
    <View className='h-[56px] bg-blue500 px-10 py-3 flex flex-row items-center'>
      <TouchableOpacity
        onPress={() => {
          !isHome && props.navigation.pop();
        }}
      >
        <Image
          source={isHome ? Images.home : Images.back}
          className='w-8 h-8 mr-[18px]'
        />
      </TouchableOpacity>

      <BaseText locale bold classname='text-white' size={24}>
        {isHome ? 'Màn hình chính' : title}
      </BaseText>
    </View>
  );
};
