import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseCard,
    BaseModal,
    BaseText,
    BaseView,
} from '@src/components';
import { MISSION_STATUS } from '@src/utils/constants';
import { useEffect, useState } from 'react';
import { FlatList, Switch } from 'react-native';
import MissionProcessing from './mission/MissionProcessing';
import MissionCompleted from './mission/MissionCompleted';
import MissionPending from './mission/MissionPending';
import MissionComponent from './mission/MissionComponent';
import NoMissons from './NoMisson';

export const TaskManagement = ({ mission  }) => {
    console.log("misssion:::" , mission);
    const [isEnabledLoop, setIsEnabledLoop] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [missions, setMissions] = useState([]);
    const [modalDeleteTaskVisible, setModalDeleteVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTasks([1]);
            setMissions([1, 2, 3]);
        }, 2000);
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
                <DeleteTask on />
            </BaseModal>
        );
    };

    const _buildAction = () => {
        return (
            <BaseView classname='mt-4 w-full flex flex-row justify-center'>
                <BaseButton
                    small
                    classname='mr-4 flex-1'
                    background={tasks[0] ? 'blue500' : 'greyBt'}
                    icon={Images.play}
                    title='Chạy'
                />
                <BaseButton
                    classname='mr-4 flex-1'
                    small
                    background={tasks[0] ? 'white' : 'greyBt'}
                    iconColor={tasks[0] ? 'red' : 'white'}
                    titleColor={tasks[0] ? 'red' : 'white'}
                    icon={Images.cancel}
                    title='Hủy'
                />
                <BaseButton
                    onPress={() => setModalDeleteVisible(true)}
                    classname='mr-4 flex-1'
                    small
                    background={tasks[0] ? 'red' : 'greyBt'}
                    iconColor={tasks[0] ? 'white' : 'white'}
                    titleColor={tasks[0] ? 'white' : 'white'}
                    icon={Images.remove}
                    title='Xóa'
                />
                <BaseButton
                    small
                    onPress={() => setIsEnabledLoop((previousState) => !previousState)}
                    classname='pr-2 w-[210px]'
                    background={tasks[0] ? 'white' : 'greyBt'}
                    iconColor={tasks[0] ? 'black' : 'white'}
                    titleColor={tasks[0] ? 'black' : 'white'}
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
                />
            </BaseView>
        );
    };
    const _buildListMission = () => {
        return (
            <BaseView classname='flex-1'>
                {missions[0] ? (
                    <BaseView>
                        <FlatList
                            numColumns={2}
                            data={missions}
                            renderItem={({ item, index }) => <MissionComponent key={index} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </BaseView>
                ) : (
                    <NoMissons />
                )}
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
