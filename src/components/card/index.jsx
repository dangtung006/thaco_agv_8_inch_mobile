import { View } from 'react-native';
import BaseText from '../text';

export default function BaseCard({ title = '', children }) {
  return (
    <View className='flex-1 bg-orange w-full rounded-2xl border border-blue'>
      <View className='flex justify-center items-center rounded-t-2xl border-b border-blue  py-3'>
        <BaseText medium size={16} classname=''>
          {title}
        </BaseText>
      </View>
      <View className='flex-1 bg-blue200 rounded-b-2xl'>{children}</View>
    </View>
  );
}
