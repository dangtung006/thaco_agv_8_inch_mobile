import { BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList } from 'react-native';

export default function ListTasks() {
  return (
    <BaseView classname='flex-1  w-full'>
      <BaseCard title='Danh sách Task'>
        <BaseView classname='p-4'>
          <FlatList
            data={[1, 2, 4, 5, 6, 7, 7]}
            renderItem={({ item, index }) => <TaskItem isShowIndex={false} key={index} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </BaseView>
      </BaseCard>
    </BaseView>
  );
}
