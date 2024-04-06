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
import { FlatList, Switch, Text } from 'react-native';
import MissionProcessing from './mission/MissionProcessing';
import MissionCompleted from './mission/MissionCompleted';
import MissionPending from './mission/MissionPending';
import MissionComponent from './mission/MissionComponent';
import NoMissons from './NoMisson';
import { useMissionState } from '@src/store/module/missionStorage';
import BaseOverlay from '@src/components/overlay';
const MissionProgress = ({ onPress})=>{
    return(
        <Text onPress={onPress}>bsfkanfkanvknfknakfnakfnkanvknanfknaakgnaknvkngkangknakvnghaknvka</Text>
    )
}
export const TaskManagement = ({ mission, handleTask }) => {
    // console.log(JSON.parse(mission));

    const [isEnabledLoop, setIsEnabledLoop] = useState(false);
    // const [tasks, setTasks] = useState([]);
    // const [missions, setMissions] = useState([]);
    const [modalDeleteTaskVisible, setModalDeleteVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(true);

    const { selectedTask, clearTask } = useMissionState();

    const initMission = () => {
        return handleTask({
            "type": "run", "list": selectedTask.map(task => task.id)
        });

        // resp : : {"data": "{'type': 'info', 'task': 'START', 'message': ('1b6cfd92-5be5-45a5-9f9a-34b846028ff6', 'all_task', \"['57faa0bd-9046-4edd-828b-b1b06e54286c', '192ae2d0-1163-4aa1-8231-e14cf0927e47']\", '2024-04-03 15:31:42')}", "isTrusted": false}

        // {"data": "{'type': 'info', 'task': 'RUN', 'message': [{'type': 'navigation', 'operation': '', 'id': 'LM55', 'name': 'Bàn 3'}, {'type': 'navigation', 'operation': '', 'id': 'LM58', 'name': 'Bàn 4'}]}", "isTrusted": false}

        // {"data": "{'type': 'info', 'task': 'MOVE', 'message': {'type': 'navigation', 'operation': '', 'id': 'LM55', 'name': 'Bàn 3'}}", "isTrusted": false}

        // {"data": "{'type': 'info', 'task': 'DONE', 'message': {'type': 'navigation', 'operation': '', 'id': 'LM55', 'name': 'Bàn 3'}}", "isTrusted": false}

        //  {"data": "{'type': 'info', 'task': 'MOVE', 'message': {'type': 'navigation', 'operation': '', 'id': 'LM58', 'name': 'Bàn 4'}}", "isTrusted": false}

        //  {"data": "{'type': 'info', 'task': 'DONE', 'message': {'type': 'navigation', 'operation': '', 'id': 'LM58', 'name': 'Bàn 4'}}", "isTrusted": false}

        //  {"data": "{'type': 'info', 'task': 'END', 'message': [{'type': 'navigation', 'operation': '', 'id': 'LM55', 'name': 'Bàn 3'}, {'type': 'navigation', 'operation': '', 'id': 'LM58', 'name': 'Bàn 4'}]}", "isTrusted": false}
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
                    onPress={clearTask}
                />
                <BaseButton
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
                />
            </BaseView>
        );
    };
    const _buildListMission = () => {
        return (
            <BaseView classname='flex-1'>
                <BaseOverlay 
                    content={<MissionProgress onPress={()=>setOverlayVisible(false)}/>}
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
