import { BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { useTaskState } from '@src/store/module/taskStorage';
export default function ListTasks({
}) {
    const { loading, tasks } = useTaskState();

    return (
        <BaseView classname='flex-1  w-full'>
            <BaseCard title='Danh sách công việc'>
                <BaseView classname='p-4'>
                    {
                        loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                            
                            <FlatList
                                data={tasks}
                                removeClippedSubviews={false}
                                renderItem={({ item, index }) => <TaskItem
                                    isShowIndex={false}
                                    key={item.id}
                                    task={item}
                                    />
                                }
                                keyExtractor={(item, index) => index.toString()}
                            />
                        )

                    }
                </BaseView>
            </BaseCard>
        </BaseView>
    );
}
