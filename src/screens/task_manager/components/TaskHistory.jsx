import { BaseButton, BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList, ActivityIndicator } from 'react-native';
import { useTaskState } from '@src/store/module/taskStorage';

export const TaskHistory = () => {
    const { loading, tasks } = useTaskState();

    const _listTask = () => {
        return (
            <BaseView>
                {
                    loading ? <ActivityIndicator size="large" color="#0000ff" /> : (

                        <FlatList
                            style={{paddingVertical: 16}}
                            data={tasks}
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
        );
    };
    return (
        <BaseView classname='w-5/12  h-full flex justify-center items-center'>
            <BaseCard title='Lịch sử Task' children={_listTask()} />
            <BaseButton classname='mt-4 px-10' small title='Tạo nhiệm vụ' />
        </BaseView>
    );
};
