import { BaseButton, BaseCard, BaseView } from '@src/components';
import { FlatList, ActivityIndicator } from 'react-native';
import { useTaskState } from '@src/store/module/taskStorage';
import { TouchableHighlight, View } from 'react-native';
import { createRef, useEffect, useState } from 'react';
import { useMissionState } from '@src/store/module/missionStorage';
import Images from '@src/assets/gen';
import Checkbox from 'expo-checkbox';
import {
    // BaseView,
    BaseTouchable,
    BaseText,
    BaseImage,
    BaseModal,
    UpdateTask,
    DeleteTask,
} from '@src/components';

const TaskItem = ({
    num,
    item,
    selectedTasks,
    handleSelectTask
}) => {

    const [isEnabledLoop, setIsEnabledLoop] = useState(false);
    const handleCheckboxChange = (value) => {
        return handleSelectTask(item)
    }
    return (
        <BaseView classname='flex flex-row w-full mb-4 py-2 px-3 items-center'>

            {/* <BaseView classname='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
                <BaseText size={16} bold>
                    { num }
                </BaseText>
            </BaseView> */}

            <BaseView classname='flex flex-col flex-1 mx-2 '>
                <BaseView classname='bg-blue rounded-t-lg py-1 px-2'>
                    <BaseText classname='text-white' size={14}>
                        {item.name}
                    </BaseText>
                </BaseView>
                <BaseView classname='bg-white px-4 py-2 flex flex-wrap flex-row rounded-b-lg'>
                    {
                        item && item.list_station ? (<>
                            {item.list_station.map((item, index) => {
                                return (
                                    <BaseView
                                        key={index}
                                        classname='w-14 h-14 mb-2 mr-2 rounded-lg bg-blue flex justify-center items-center'
                                    >
                                        <BaseText classname='text-white' bold size={16}>
                                            {item.name}
                                        </BaseText>
                                    </BaseView>
                                );
                            })}
                        </>) : null
                    }
                </BaseView>
            </BaseView>

            <BaseButton
                small
                onPress={handleCheckboxChange}
                classname='pr-2 w-[80px]'
                background={isEnabledLoop == false ? 'white' : 'white'}
                iconColor={isEnabledLoop == false ? 'black' : 'white'}
                titleColor={isEnabledLoop == false ? 'black' : 'white'}
                rightWidget={
                    <Checkbox
                        style={[{
                            width: 30,
                            height: 30,
                            color: 'green',
                            marginRight: 10
                        }]}
                        value={selectedTasks.includes(item.id)}
                        onValueChange={(val) => handleCheckboxChange(val, item)}
                    />

                }
            />
        </BaseView>
    );
};

export const TaskHistory = ({
    selectedTasks,
    setSelectedTask,
    handleSelectTask,
    handleTask,
    taskObj
}) => {

    const { loading, tasks } = useTaskState();
    const {
        missionProgress,
        setPendingSelectedTask,
        setVisibleOverlayProgress,
    } = useMissionState();

    useEffect(() => {
        const {
            task
        } = missionProgress;

        task && task == 'END' && (
            setVisibleOverlayProgress(false)
        )
    }, [missionProgress]);

    const createMission = () => {
        if (validateCreateMission() == false) return false;

        const requestTask = {
            "type" : "run",
            "list" : selectedTasks
            // "list" : select.map(task => task.id)
        }

        setPendingSelectedTask(taskObj);
        setSelectedTask([]);
        setVisibleOverlayProgress(true);
        handleTask(requestTask);
    }

    function validateCreateMission() {
        const {
            task : taskType,
            message
        } = missionProgress;

        if (tasks.length <= 0) return false;
        if(selectedTasks.length <= 0) return false;
        if (taskType && taskType != 'END') return false;
       
        return true;
    }

    const _listTask = () => {
        return (
            <BaseView>
                {
                    loading ? <ActivityIndicator size="large" color="#0000ff" /> : (

                        <FlatList
                            style={{ paddingVertical: 16 }}
                            data={tasks}
                            renderItem={({ item, index }) => <TaskItem
                                num={index + 1}
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
                title='Giao nhiệm vụ'
                onPress={createMission}
                disabled={validateCreateMission() == false}
                background={validateCreateMission() == true ? 'blue500' : 'greyBt'}
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
