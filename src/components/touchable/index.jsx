import tw from '@src/utils/tailwindLoader';
import { TouchableOpacity } from 'react-native';

export default function BaseTouchable({ classname='', children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={tw`${classname}`}>
      {children}
    </TouchableOpacity>
  );
}
