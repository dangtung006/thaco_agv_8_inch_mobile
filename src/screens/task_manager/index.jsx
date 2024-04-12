import { BaseScreen } from '@src/components';
import { TaskHistory } from './components/TaskHistory';
import { TaskManagement } from './components/TaskManagement';
import { useEffect, useRef, useState } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { BASE_WEBSOCKET_URL, MISSION_PROGRESS } from '@src/utils/constants';

import { useTaskState } from '@src/store/module/taskStorage';
import { useMissionState } from '@src/store/module/missionStorage';
import { delay } from '@src/utils/time';

export default function TaskManagerScreen(props) {
    const WS_URL = `${BASE_WEBSOCKET_URL}${MISSION_PROGRESS}`;
    const { initTasks, tasks } = useTaskState();
    const { 
        setMissionProgress, 
        isVisibleOverlayProgress } = useMissionState();
    const [selectedTasks, setSelectedTask] = useState([]);
    const { sendJsonMessage } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true,
        onMessage: (message) => {
            const {
                data
            } = message;
            const mission = JSON.parse(data);
            console.log(mission);
            setMissionProgress(mission)
        }
    });

    const handleSelectTask = async (task) => {
        if(isVisibleOverlayProgress == true) return;
        let newTasks = [...selectedTasks];

        const { id } = task;
        if (!id) return;

        if (!newTasks.includes(id)) {
            newTasks.push(id)
        } else {
            newTasks = newTasks.filter(item => item != id)
        }
        setSelectedTask([...newTasks]);
    }

    function getTaskObj(){
        let select = selectedTasks.map(id=>{
            let task = tasks.find(item => item.id == id);
            return task
        });
        return select;
    }

    async function loadData() {
        tasks.length == 0 && initTasks();
    }
    
    useEffect(() => {
        loadData();
    }, [])

    return (
        <BaseScreen classname='p-10 pb-[62px]'>
            <TaskHistory
                selectedTasks={selectedTasks}
                taskObj = {getTaskObj()}
                setSelectedTask={setSelectedTask}
                handleSelectTask={handleSelectTask}
                handleTask={sendJsonMessage}
            />

            <TaskManagement
                selectedTasks={getTaskObj()}
                handleTask={sendJsonMessage}
            />

        </BaseScreen>
    );
}
