import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import BaseText from '../text';
import Images from '@src/assets/gen';

export default TaskItem = () => {
  return (
    <View className='flex flex-row w-full mb-4 py-2 px-3 items-center'>
      <View className='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
        <BaseText size={16} bold>
          1
        </BaseText>
      </View>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <View className='flex flex-col flex-1 mx-2 '>
        <View className='bg-blue rounded-t-lg py-1 px-2'>
          <BaseText classname='text-white' size={12}>
            TASK1234
          </BaseText>
        </View>
        <View className='bg-white px-4 py-2 flex flex-wrap flex-row rounded-b-lg'>
          {[1, 2, 3, 1, 1, 1, 1, 1, 11].map((item, index) => {
            return (
              <View
                key={index}
                className='w-8 h-8 mb-2 mr-2 rounded-lg bg-blue flex justify-center items-center'
              >
                <BaseText classname='text-white' bold size={16}>
                  {index + 1}
                </BaseText>
              </View>
            );
          })}
        </View>
      </View>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <TouchableOpacity>
        <Image source={Images.edit} className='w-12 h-12 mr-2' />
      </TouchableOpacity>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <TouchableOpacity>
        <Image source={Images.delete} className='w-12 h-12' />
      </TouchableOpacity>
    </View>
  );
};
