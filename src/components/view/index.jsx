import tw from '@src/utils/tailwindLoader';
import { View } from 'react-native';

export default function BaseView({ classname = '', children, style }) {
  return (
    <View style={[tw`${classname}`, style]}>{children}</View>
  );
}
