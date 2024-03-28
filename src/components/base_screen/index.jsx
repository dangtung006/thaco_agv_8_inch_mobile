import { classNames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BaseScreen(props) {
  const { children, classname } = props;
  return (
    <SafeAreaView
      style={tw`${classNames(
        'bg-white flex-1 flex flex-row h-full',
        classname,
      )}`}
    >
      {children}
    </SafeAreaView>
  );
}
