import { BaseText } from '@src/components';
import { TouchableOpacity, View } from 'react-native';

export default TaskProcessing = () => {
  return (
    <View className='flex flex-row p-4 w-full'>
      <View className='flex flex-row p-1 bg-blue400 rounded-lg items-center w-full'>
        <View className='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
          <BaseText size={16} bold>
            1
          </BaseText>
        </View>
        <View className='flex flex-1 flex-row ml-2 bg-blue500 rounded-lg items-center p-2'>
          <BaseText classname='text-white flex-1' semiBold size={14}>
            Name 1234
          </BaseText>
          <TouchableOpacity
            className=' bg-blue py-2 px-4 rounded-lg'
            onPress={() => {}}
          >
            <BaseText locale classname='text-white' semiBold size={14}>
              Đang chờ xử lý
            </BaseText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
