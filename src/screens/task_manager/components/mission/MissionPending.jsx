import { BaseText } from '@src/components';
import { TouchableOpacity, View } from 'react-native';

export default TaskPending = ({ onPress }) => {
  return (
    <View className='flex flex-row p-4 w-full'>
      <View className='flex flex-row p-1 rounded-lg items-center w-full'>
        <View className='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
          <BaseText size={16} bold>
            1
          </BaseText>
        </View>
        <View className='flex-1 flex flex-row ml-2 bg-white border border-black rounded-lg items-center p-2'>
          <BaseText classname='flex-1' semiBold size={14}>
            Name 1234
          </BaseText>
          <TouchableOpacity
            className=' bg-blue500 py-2 px-4 rounded-lg'
            onPress={onPress}
          >
            <BaseText locale classname='text-white' semiBold size={14}>
              Xác nhận
            </BaseText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
