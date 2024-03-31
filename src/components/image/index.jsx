import tw from '@src/utils/tailwindLoader';
import { Image } from 'react-native';

export default function BaseImage({
  resizeMode = 'contain',
  source,
  classname = '',
  style,
  tintColor,
}) {
  return (
    <Image
      resizeMode={resizeMode}
      source={source}
      tintColor={tintColor}
      style={[tw`${classname}`, style]}
    />
  );
}
