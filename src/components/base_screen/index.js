import Images from '@src/assets/gen';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BaseText from '../text';
import { goBack } from '@src/navigation';
import { AppBar } from '..';

export default function BaseScreen(props) {
  const { children } = props;
  return (
    <SafeAreaView className='bg-white flex-1'>
      {/* <AppBar {...props} /> */}
      {children}
    </SafeAreaView>
  );
}
