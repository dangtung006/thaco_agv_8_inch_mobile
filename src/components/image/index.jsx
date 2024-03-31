import tw from '@src/utils/tailwindLoader';
import { Image } from 'react-native';

export default function BaseImage({ source, classname='', style, tintColor }) {
  return (
    <Image
      source={source}
      tintColor={tintColor}
      style={[tw`${classname}`, style]}
    />
  );
}
