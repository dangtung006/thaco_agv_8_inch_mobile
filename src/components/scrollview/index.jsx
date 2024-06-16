import tw from '@src/utils/tailwindLoader';
import { ScrollView } from 'react-native';

export default function BaseScrollView({ classname = '', children, ...props }) {
  return (
    <ScrollView style={tw`${classname}`} {...props}>
      {children}
    </ScrollView>
  );
}
