import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseCard,
    BaseModal,
    BaseText,
    BaseView,
    BaseTouchable,
    BaseImage
} from '@src/components';
import { MISSION_STATUS } from '@src/utils/constants';
import { useEffect, useState } from 'react';
import { FlatList, Switch, Text, ActivityIndicator } from 'react-native';
import MissionProcessing from './mission/MissionProcessing';
import MissionCompleted from './mission/MissionCompleted';
import MissionPending from './mission/MissionPending';
import MissionComponent from './mission/MissionComponent';
import NoMissons from './NoMisson';
import { useMissionState } from '@src/store/module/missionStorage';
import BaseOverlay from '@src/components/overlay';

const MissionProgress = ({ onPress, missionStatus, onEndTask }) => {
    const {
        task,
        nextTask,
        status,
        result
    } = missionStatus;

    const confirmTask = () => {
        if (nextTask) {
            console.log(nextTask);
        }
        if (status == 'DONE') {
            return onEndTask(false);
        }
    }
    const PendingBtn = () => {
        return (
            <BaseTouchable
                classname=' bg-blue mt-4 py-4 px-4 rounded-lg'
                onPress={() => { }}
                disabled={true}
            >
                <BaseText locale classname='text-white' semiBold size={16}>
                    {task && task.name ? `Đang đi đến ${task.name}` : 'Đang chờ xử lý'}
                </BaseText>
            </BaseTouchable>
        )
    }


    const CompletedBtn = () => {
        return (
            <BaseTouchable
                classname=' bg-green mt-4 py-4 px-4 rounded-lg'
                onPress={confirmTask}
                disabled={false}
            >
                <BaseText locale classname='text-white' semiBold size={16}>
                    Xác nhận
                </BaseText>
            </BaseTouchable>
        )
    }
    return (
        <BaseView classname='w-5/12  h-full flex justify-center items-center'>
            <BaseView classname='w-12/12 bg-white h-24 p-4 rounded-lg flex justify-center items-center'>
                {
                    task && task.navigation ? (
                        <BaseView>
                            <BaseText 
                                locale size={24} 
                                semiBold 
                                color="#ccc">
                                Vị Trí : {task.name}
                            </BaseText>
                            {/* <BaseText>
                                Trang Thai : {task.navigation}
                            </BaseText> */}
                        </BaseView>
                    ) : <ActivityIndicator size="large" color="#0000ff" />
                }
            </BaseView>

            {
                (task && task.navigation !== 'END') || (!task) ?
                    PendingBtn() : CompletedBtn()
            }

        </BaseView>

    )
}
export const TaskManagement = ({ mission, handleTask, resetMission }) => {
    const [isEnabledLoop, setIsEnabledLoop] = useState(false);
    // const [tasks, setTasks] = useState([]);
    // const [missions, setMissions] = useState([]);
    const [modalDeleteTaskVisible, setModalDeleteVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const { selectedTask, clearTask } = useMissionState();

    const initMission = () => {
        if(!selectedTask[0]) {
            return false
        }
        resetMission();
        setOverlayVisible(true);
        return handleTask({
            "type": "run", "list": selectedTask.map(task => task)
        });
    }

    const cancleMission = () => {
        setModalDeleteVisible(false);
        clearTask();
        return handleTask({
            type : "cancle",
            mission : mission
        });
    }

    const pauseMission = ()=>{
        return handleTask({
            type : "pause",
            mission : mission
        });
    }

    useEffect(() => {
        // setTimeout(() => {
        //     setTasks([1]);
        //     setMissions([1, 2, 3]);
        // }, 2000);
    }, []);

    const viewModalDeleteTask = () => {
        return (
            <BaseModal
                visible={modalDeleteTaskVisible}
                onBackdropPress={() => {
                    setModalDeleteVisible(!modalDeleteTaskVisible);
                }}
                onRequestClose={() => {
                    setModalDeleteVisible(!modalDeleteTaskVisible);
                }}
            >
                <BaseView classname='flex justify-center items-center'>
                    <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                        <BaseView classname='w-6/10'>
                            <BaseView classname='bg-blue200 py-30px rounded-lg flex justify-between items-center'>
                                <BaseText locale size={16} semiBold>
                                    Bạn có chắc chắn là muốn xóa không ?
                                </BaseText>
                            </BaseView>
                            <BaseImage
                                source={Images.arrow}
                                classname='ml-15 w-8 h-8'
                                tintColor='#E8F7FF'
                            />
                        </BaseView>
                        <BaseImage source={Images.robot5} classname='w-200px h-200px' />
                    </BaseView>
                    <BaseView classname='mt-6 flex flex-row w-7/10 gap-x-10'>
                        <BaseButton title='Có' classname='flex-1' onPress={cancleMission} />
                        <BaseButton background='red' title='Không' classname='flex-1' onPress={() => setModalDeleteVisible(false)} />
                    </BaseView>
                </BaseView>
            </BaseModal>
        );
    };

    const _buildAction = () => {
        return (
            <BaseView classname='mt-4 w-full flex flex-row justify-center'>
                <BaseButton
                    small
                    classname='mr-4 flex-1'
                    background={selectedTask[0] ? 'blue500' : 'greyBt'}
                    icon={Images.play}
                    title='Chạy'
                    onPress={initMission}
                />
                <BaseButton
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
                />
                {/* <BaseButton
                    onPress={() => setModalDeleteVisible(true)}
                    classname='mr-4 flex-1'
                    small
                    background={selectedTask[0] ? 'red' : 'greyBt'}
                    iconColor={selectedTask[0] ? 'white' : 'white'}
                    titleColor={selectedTask[0] ? 'white' : 'white'}
                    icon={Images.remove}
                    title='Xóa'
                />
                <BaseButton
                    small
                    onPress={() => setIsEnabledLoop((previousState) => !previousState)}
                    classname='pr-2 w-[210px]'
                    background={selectedTask[0] ? 'white' : 'greyBt'}
                    iconColor={selectedTask[0] ? 'black' : 'white'}
                    titleColor={selectedTask[0] ? 'black' : 'white'}
                    icon={Images.loop}
                    title='Lặp lại'
                    rightWidget={
                        <Switch
                            onValueChange={() =>
                                setIsEnabledLoop((previousState) => !previousState)
                            }
                            thumbColor={isEnabledLoop ? '#377DE5' : '#f4f3f4'}
                            value={isEnabledLoop}
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                        />
                    }
                /> */}
            </BaseView>
        );
    };
    const _buildListMission = () => {
        return (
            <BaseView classname='flex-1'>
                <BaseOverlay
                    content={<MissionProgress
                        missionStatus={mission}
                        onEndTask={setOverlayVisible}
                    />}
                    overlayVisible={overlayVisible}
                >
                    {selectedTask[0] ? (
                        <BaseView>
                            <FlatList
                                numColumns={2}
                                data={selectedTask}
                                renderItem={({ item, index }) => <MissionComponent key={index} task={item} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </BaseView>
                    ) : (
                        <NoMissons />
                    )}
                </BaseOverlay>
            </BaseView>
        );
    };

    return (
        <BaseView classname='w-7/12 ml-4 h-full flex justify-center items-start'>
            <BaseCard title='Nhiệm vụ' children={_buildListMission()} />
            {_buildAction()}
            {viewModalDeleteTask()}
        </BaseView>
    );
};
