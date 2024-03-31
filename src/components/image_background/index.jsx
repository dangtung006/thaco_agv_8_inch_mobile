import tw from '@src/utils/tailwindLoader';
import { ImageBackground } from 'react-native';

export default function BaseImageBackground({ source, classname='', children }) {
  return (
    <ImageBackground source={source} resizeMode='stretch' style={tw`${classname}`}>
      {children}
    </ImageBackground>
  );
}
