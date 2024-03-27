import { SafeAreaView } from 'react-native-safe-area-context';

export default function BaseScreen(props) {
  const { children } = props;
  return (
    <SafeAreaView className='bg-white flex-1 flex flex-row h-full'>
      {children}
    </SafeAreaView>
  );
}
