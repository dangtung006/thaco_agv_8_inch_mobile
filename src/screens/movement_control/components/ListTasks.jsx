import { BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList } from 'react-native';

export default function ListTasks({
    taskList,
    handleRemoveTask,
    handleUpdateTask
}) {
    return (
        <BaseView classname='flex-1  w-full'>
            <BaseCard title='Danh sách Task'>
                <BaseView classname='p-4'>
                    {
                        !taskList ? null : (
                            <FlatList
                                data={taskList}
                                renderItem={({ item, index }) => <TaskItem
                                    isShowIndex={false}
                                    key={item.id}
                                    task={item}
                                    handleUpdateTask={handleUpdateTask}
                                    handleRemoveTask={handleRemoveTask} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        ) 
                    }
                </BaseView>
            </BaseCard>
        </BaseView>
    );
}
