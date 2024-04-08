import { BaseButton, BaseCard, BaseView, TaskItem } from '@src/components';
import { FlatList, ActivityIndicator } from 'react-native';
import { useTaskState } from '@src/store/module/taskStorage';
import { TouchableHighlight, View } from 'react-native';
import { createRef, useEffect, useState } from 'react';
import { useMissionState } from '@src/store/module/missionStorage';

const TouchableItem = ({ item, handleSelectTask, selectedTasks }) => {
    const [backgroundColor, setBackgroundColor] = useState('#E8F7FF');
    const [isTogle, setIsTogle] = useState(false);

    useEffect(() => {
        let selectGg = selectedTasks.includes(item.id) ? "#83D2FF" : "#E8F7FF";
        setBackgroundColor(selectGg)
    }, [isTogle]);

    useEffect(()=>{
        if(selectedTasks && selectedTasks.length == 0)
        setBackgroundColor("#E8F7FF")
    }, [selectedTasks])

    return (
        <View key={item.id}>
            <TouchableHighlight
                style={[{ backgroundColor: backgroundColor, marginBottom : 10 }]}
                underlayColor={'#E8F7FF'}
                onPress={() => {
                    setIsTogle(!isTogle)
                    handleSelectTask(item)
                }}
            >

                <TaskItem
                    isShowIndex={false}
                    task={item}
                />
            </TouchableHighlight>
        </View>
    )
}
export const TaskHistory = ({ handleTask }) => {

    const { loading, tasks } = useTaskState();
    const [selectedTasks, setSelectedTask] = useState([]);

    const { setSelectedTask : InitpendingTask } = useMissionState()
   
    const handleSelectTask = (task) => {

        const { id } = task;
        if (!id) return;

        let selectedTask = [...selectedTasks];

        if (!selectedTask.includes(id)) {
            selectedTask.push(id)
        } else {
            selectedTask = selectedTask.filter(item => item != id)
        }

        setSelectedTask([
            ...selectedTask
        ]);
    }

    const createMission = ()=>{
        if(!tasks && tasks.length < 0) return;
        let select = tasks.filter(task => selectedTasks.includes(task.id))
        InitpendingTask(select)
        setSelectedTask([]);
    }

    const _listTask = () => {
        return (
            <BaseView>
                {
                    loading ? <ActivityIndicator size="large" color="#0000ff" /> : (

                        <FlatList
                            style={{ paddingVertical: 16 }}
                            data={tasks}
                            renderItem={({ item, index }) => <TouchableItem
                                item={item}
                                selectedTasks={selectedTasks}
                                handleSelectTask={handleSelectTask} />
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
            <BaseButton 
                classname='mt-4 px-10' 
                small 
                title='Tạo nhiệm vụ' 
                onPress={createMission}
                background={ tasks && tasks.length > 0 ? 'blue500' : 'greyBt'}
            />
            {/* <BaseButton
                    classname='mr-4 flex-1'
                    small
                    background={selectedTask[0] ? 'white' : 'greyBt'}
                    iconColor={selectedTask[0] ? 'red' : 'white'}
                    titleColor={selectedTask[0] ? 'red' : 'white'}
                    icon={Images.cancel}
                    title='Hủy'
                    onPress={()=>{
                        if(!selectedTask[0]) {
                            return false
                        }
                        return setModalDeleteVisible(true)
                    }}
                /> */}
        </BaseView>
    );
};
