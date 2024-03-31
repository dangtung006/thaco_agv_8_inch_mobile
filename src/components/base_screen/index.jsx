import { classnames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BaseScreen( { children, classname ='' }) {
  return (
    <SafeAreaView
      style={tw`${classnames(
        'bg-white flex-1 flex flex-row h-full',
        classname,
      )}`}
    >
      {children}
    </SafeAreaView>
  );
}
