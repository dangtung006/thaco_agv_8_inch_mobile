import { BaseButton, BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList } from 'react-native';

export const TaskHistory = () => {
  const _listTask = () => {
    return (
      <BaseView>
        <FlatList
          style={{paddingVertical: 16}}
          data={[1, 2]}
          renderItem={({ item, index }) => <TaskItem key={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </BaseView>
    );
  };
  return (
    <BaseView classname='w-5/12  h-full flex justify-center items-center'>
      <BaseCard title='Lịch sử Task' children={_listTask()} />
      <BaseButton classname='mt-4 px-10' small title='Tạo nhiệm vụ' />
    </BaseView>
  );
};
