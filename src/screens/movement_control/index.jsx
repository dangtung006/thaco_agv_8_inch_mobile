import {
    BaseButton,
    BaseModal,
    BaseScreen,
    BaseView,
    CreateTask,
} from '@src/components';
import { useEffect, useState } from 'react';
import PositionControl from './components/PositionControl';
import ListTasks from './components/ListTasks';
import MyRequest from '@src/utils/request';
import { usePositionState } from '@src/store/module/positionStorage';
import { useTaskState } from '@src/store/module/taskStorage';
import { ROUTES, navigate } from '@src/navigation';


export default function MovementControlScreen(props) {
   
    const { initData, positions } = usePositionState()
    const { initTasks, tasks } = useTaskState();

    const [selectedPos, setSelectedPos] = useState([]);
    const [modalCreateTaskVisible, setModalCreateVisible] = useState(false);

    useEffect(() => {
        initData();
        initTasks();
    }, []);

    function handleSelectPosition(position) {
        let pos = [...selectedPos];
        if (!pos.includes(position)) {
            pos.push(position)
        } else {
            pos = pos.filter(item => item != position)
        }
        setSelectedPos([...pos])
    }


    function handleCreateTask(){
        if(positions && positions.length > 0){
            return setModalCreateVisible(true)
        }
    }

    const viewLeft = () => {
        return (
            <BaseView classname='w-6/10 px-9 py-6 pt-12 h-full flex justify-end items-center'>
                <PositionControl
                    selectedPos={selectedPos}
                    handleSelectPosition={handleSelectPosition}
                />

                <BaseView classname='w-full flex-1 flex items-end justify-center flex-row '>
                    <BaseButton
                        onPress={handleCreateTask}
                        title='Tạo công việc'
                        width={300}
                        background={ positions && positions.length > 0 ? 'orange' : 'greyBt'}
                        titleColor={ positions && positions.length > 0 ? 'black' : 'white'}
                    />
                </BaseView>
            </BaseView>
        );
    };

    const viewRight = () => {
        return (
            <BaseView classname='w-4/10 py-6 pl-4 pr-10 h-full flex justify-end items-end'>
                <ListTasks />
                <BaseView classname='w-full h-80px flex items-end justify-center flex-row'>
                    <BaseButton 
                        title='Tạo nhiệm vụ' 
                        background={ tasks && tasks.length > 0 ? 'blue500' : 'greyBt'}
                        onPress={()=>{
                            if(tasks && tasks.length > 0) return navigate(ROUTES.TASK_MANAGER)
                        }}/>
                </BaseView>
            </BaseView>
        );
    };

    const viewModalCreateTask = () => {
        return (
            <BaseModal
                visible={modalCreateTaskVisible}
                onBackdropPress={() => {
                    setModalCreateVisible(!modalCreateTaskVisible);
                }}
                onRequestClose={() => {
                    setModalCreateVisible(!modalCreateTaskVisible);
                }}
            >
                <CreateTask 
                    selectedPos={selectedPos} 
                    handleSelectedPos={setSelectedPos}
                    modalStatus={modalCreateTaskVisible}
                    handleModal={setModalCreateVisible}
                />
            </BaseModal>
        );
    };


    return (
        <BaseScreen classname='pb-4'>
            {viewLeft()}
            {viewRight()}
            {viewModalCreateTask()}
        </BaseScreen>
    );
}
