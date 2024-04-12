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
import { FlatList, Switch, Text, ActivityIndicator, View } from 'react-native';
import MissionProcessing from './mission/MissionProcessing';
import MissionCompleted from './mission/MissionCompleted';
import MissionPending from './mission/MissionPending';
import MissionComponent from './mission/MissionComponent';
import NoMissons from './NoMisson';
import { useMissionState } from '@src/store/module/missionStorage';
import BaseOverlay from '@src/components/overlay';

const MissionProgress = ({
    confirmMission
}) => {

    const {
        missionProgress
    } = useMissionState();

    const {
        type,
        task,
        message
    } = missionProgress;

    const confirmTask = () => {
        if (task && task == 'DONE') {
            return confirmMission();
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
                    {message && message.name ? `Đang đi đến ${message.name}` : 'Đang chờ xử lý'}
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
                    message && message.type && message.type == 'navigation' && message.name ? (
                        <BaseView>
                            <BaseText
                                locale size={24}
                                semiBold
                                color="#ccc">
                                Vị Trí : {message.name}
                            </BaseText>
                            {/* <BaseText>
                                Trang Thai : {task.navigation}
                            </BaseText> */}
                        </BaseView>
                    ) : <ActivityIndicator size="large" color="#0000ff" />
                }
            </BaseView>

            {
                task && task == 'DONE' ? CompletedBtn() : PendingBtn()
            }

        </BaseView>

    )
}
export const TaskManagement = ({
    selectedTasks,
    handleTask
}) => {
    const {
        pendingSelectedTask,
        clearTask,
        missionProgress,
        isVisibleOverlayProgress,
        setVisibleOverlayProgress,
        setPendingSelectedTask,
        setMissionProgress,
        clearPendingTask
    } = useMissionState();

    const {
        task
    } = missionProgress;

    const [modalDeleteTaskVisible, setModalDeleteVisible] = useState(false);
    const [isPause, setPause] = useState(true);

    const confirmMission = () => {
        return handleTask({ type: "confirm", "list": pendingSelectedTask.map(task => task.id) });
    }


    const pauseMission = () => {
        return handleTask({ type: "pause" });
    }

    const resumeMission = () => {
        return handleTask({ type: "resume" })
    }

    const validateCancle = ()=>{
        if (!pendingSelectedTask || pendingSelectedTask.length <= 0) return false;
        return true;
    }

    const cancleMission = () => {
        if(validateCancle() == true) {
            setMissionProgress({});
            setModalDeleteVisible(false);
            setVisibleOverlayProgress(false);
            return handleTask({ type: "cancel" });
        }
    }

    const validateLoopMission = ()=>{
        if (!pendingSelectedTask || pendingSelectedTask.length <= 0) return false;
        if(task && task != 'END') return false;
        if(isVisibleOverlayProgress == true) return false;
        
        return true;
    }

    const loopMision = () => {
        if(validateLoopMission() == true){
            setVisibleOverlayProgress(true);
            return handleTask({ type: "run", "list": pendingSelectedTask.map(task => task.id) });
        }
    }

    const validateRemove = ()=>{
        console.log()
        const {
            task,
            message
        } = missionProgress;

        if (pendingSelectedTask.length == 0) return false;
        if(isVisibleOverlayProgress == true) return false;
        if (task && task != 'END') return false;
        
        return true
    }

    const removeMission = () => {
        if (validateRemove() == true) {
            setVisibleOverlayProgress(false),
            setMissionProgress({});
            clearPendingTask();
        }
    }

    function loadTaskPending(){
        if(selectedTasks && selectedTasks.length> 0) return selectedTasks;
        return pendingSelectedTask;
    }

    useEffect(() => {
        const {
            message
        } = missionProgress;
        if (message && message == 'pause') {
            setPause(false);
        } else {
            setPause(true);
        }
    }, [missionProgress]);

    // useEffect(() => {
    //     // setTimeout(() => {
    //     //     setTasks([1]);
    //     //     setMissions([1, 2, 3]);
    //     // }, 2000);
    // }, []);

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
                {
                    isPause ? (<BaseButton
                        small
                        classname='mr-4 flex-1'
                        background={pendingSelectedTask[0] ? 'orange' : 'greyBt'}
                        icon={Images.pause}
                        title={'Dừng Lại'}
                        onPress={pauseMission}
                    />) : (<BaseButton
                        small
                        classname='mr-4 flex-1'
                        background={pendingSelectedTask[0] ? 'blue500' : 'greyBt'}
                        icon={Images.play}
                        title={'Hồi Phục'}
                        onPress={resumeMission}
                    />)
                }

                <BaseButton
                    classname='mr-4 flex-1'
                    small
                    disabled={validateCancle() == false} 
                    background={validateCancle() == true ? 'white' : 'greyBt'}
                    iconColor={validateCancle() == true ? 'red' : 'white'}
                    titleColor={validateCancle() == true ? 'red' : 'white'}
                    icon={Images.cancel}
                    title='Hủy'
                    onPress={() => {
                        if (!pendingSelectedTask[0]) {
                            return false
                        }
                        return setModalDeleteVisible(true)
                    }}
                />
                <BaseButton
                    onPress={removeMission}
                    classname='mr-4 flex-1'
                    small
                    disabled={validateRemove() == false}
                    background={validateRemove() == true ? 'red' : 'greyBt'}
                    iconColor={validateRemove() == true ? 'white' : 'white'}
                    titleColor={validateRemove() == true ? 'white' : 'white'}
                    icon={Images.remove}
                    title='Xóa'
                />
                <BaseButton
                    small
                    disabled={validateLoopMission() == false}
                    // onPress={() => setIsEnabledLoop((previousState) => !previousState)}
                    onPress={loopMision}
                    classname='pr-2 w-[210px]'
                    background={validateLoopMission() == true ? 'white' : 'greyBt'}
                    iconColor={validateLoopMission() == true ? 'black' : 'white'}
                    titleColor={validateLoopMission() == true ?  'black' : 'white'}
                    icon={Images.loop}
                    title='Lặp lại'
                // rightWidget={
                //     <Switch
                //         onValueChange={() =>
                //             setIsEnabledLoop((previousState) => !previousState)
                //         }
                //         thumbColor={isEnabledLoop ? '#377DE5' : '#f4f3f4'}
                //         value={isEnabledLoop}
                //         style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                //     />
                // }
                />
            </BaseView>
        );
    };

    const _buildListMission = () => {
        return (
            <BaseView classname='flex-1'>
                <BaseOverlay
                    content={<MissionProgress
                        confirmMission={confirmMission}
                    />}
                    overlayVisible={isVisibleOverlayProgress}
                >
                    {pendingSelectedTask ? (
                        <BaseView>
                            <FlatList
                                numColumns={2}
                                data={pendingSelectedTask}
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

    const _listPendingTask = () => {
        return (
            <BaseView>
                <View style={[
                    {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        position: 'relative',
                        height: '100%',
                        overflow: 'hidden'
                    }
                ]}>
                    <View style={[{ position: 'absolute' }]}>
                        <BaseView>
                            <FlatList
                                style={{ paddingVertical: 16 }}
                                data={loadTaskPending()}
                                renderItem={({ item, index }) => <MissionComponent
                                    task={item}
                                    key={item.id}
                                    num={index + 1}
                                />
                                }
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </BaseView>
                    </View>

                    {
                        isVisibleOverlayProgress && (
                            <View style={[{
                                overflow: 'hidden',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }]}>
                                <MissionProgress
                                    confirmMission={confirmMission}
                                />
                            </View>

                        )
                    }
                </View>
            </BaseView>
        )
    }

    return (
        <BaseView classname='w-7/12 ml-4 h-full flex justify-center items-start'>
            {/* <BaseCard title='Nhiệm vụ' children={_buildListMission()} /> */}
            <BaseCard title='Nhiệm vụ' children={_listPendingTask()} />
            {_buildAction()}
            {viewModalDeleteTask()}
        </BaseView>
    );
};
