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

export default function MovementControlScreen(props) {
    const request = new MyRequest({
        baseUrl: 'http://192.168.68.103:5000'
    });

    const [positions, setPositions] = useState([]);
    const [selectedPos, setSelectedPos] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    const [loading, setLoading] = useState(false);
    const [modalCreateTaskVisible, setModalCreateVisible] = useState(false);

    useEffect(() => {
        initData()
    }, []);

    async function initData() {
        setLoading(true)
        try {
            const positionConf = await request.getRequest('/locals');
            const scripts = await request.getRequest('/scripts');
            const { data: positions } = positionConf;
            const { data : taskList } = scripts;

            positions && setPositions(positions);
            taskList && setTaskList(taskList);
            setLoading(false);
        }catch(e) {
            console.log(e);
            setLoading(false)
        }
    }

    function handleSelectPosition(position) {
        let pos = [...selectedPos];
        if (!pos.includes(position)) {
            pos.push(position)
        } else {
            pos = pos.filter(item => item != position)
        }
        setSelectedPos([...pos])
    }


    async function handleCreateTask(){
        setLoading(true)
        const task = {
            type : 'insert',
            data : {
                "name": taskName,
                "tasks": selectedPos
            }
        }
        console.log("task : " , task);
        try{
            const _r = await request.postRequest('/scripts', task);
            const {
                result,
                data
            } = _r;

            if(result) {
                setTaskList(data);
                setModalCreateVisible(false);
                setSelectedPos([]);
                setLoading(false)
            }

        }catch(err){
            setLoading(false)
            console.log("err::" , err);
        }
        
    }

    async function updateTask(task){
        // setLoading(true)
        try{
            const _r = await request.postRequest('/scripts', task);
            const {
                result,
                data
            } = _r;
            console.log("_r ::  ," , _r);
            // let newTasks = [...taskList];
            // newTasks = newTasks.filter(item => item.id != task.id);
            if(result) {
                // setTaskList(data)
                // setLoading(false)
            } 
        }catch(err){
            setLoading(false);
            console.log("err::" , err);
        }
    }

    async function removeTask(task){
        setLoading(true)
        try{
            const _r = await request.postRequest('/scripts', task);
            const {
                result,
                data
            } = _r;
            console.log("_r ::  ," , _r);
            // let newTasks = [...taskList];
            // newTasks = newTasks.filter(item => item.id != task.id);
            if(result) {
                setTaskList(data)
                setLoading(false)
            } 
        }catch(err){
            setLoading(false);
            console.log("err::" , err);
        }
       
    }

    const viewLeft = () => {
        return (
            <BaseView classname='w-6/10 px-9 py-6 pt-12 h-full flex justify-end items-center'>

                {loading ? (null) : (<PositionControl
                    positions={positions}
                    selectedPos={selectedPos}
                    handleSelectPosition={handleSelectPosition}
                />)}

                <BaseView classname='w-full flex-1 flex items-end justify-center flex-row '>
                    <BaseButton
                        onPress={() => setModalCreateVisible(true)}
                        title='Tạo Task'
                        width={300}
                        background='orange'
                        titleColor='black'
                    />
                </BaseView>
            </BaseView>
        );
    };

    const viewRight = () => {
        return (
            <BaseView classname='w-4/10 py-6 pl-4 pr-10 h-full flex justify-end items-end'>
                {
                    loading ? null :
                    (
                        <ListTasks taskList={taskList} handleUpdateTask={updateTask} handleRemoveTask={removeTask} />
                    )
                }
                <BaseView classname='w-full h-80px flex items-end justify-center flex-row'>
                    <BaseButton title='Tạo nhiệm vụ' />
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
                    taskName={taskName} 
                    handleTaskChange={setTaskName}
                    handleCreateTask={handleCreateTask}
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
