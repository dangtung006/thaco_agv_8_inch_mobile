import { BaseButton, BaseCard, TaskItem } from '@src/components';
import { FlatList, View } from 'react-native';

export const TaskHistory = () => {
  const _listTask = () => {
    return (
      <View>
        <FlatList
          className='p-4'
          data={[1, 2]}
          renderItem={({ item, index }) => <TaskItem key={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  return (
    <View className='w-5/12  h-full flex justify-center items-center'>
      <BaseCard title='Lịch sử Task' children={_listTask()} />
      <BaseButton classname='mt-4 px-10' small title='Tạo nhiệm vụ' />
    </View>
  );
};
