import { BaseScreen } from '@src/components';
import { TaskHistory } from './components/TaskHistory';
import { TaskManagement } from './components/TaskManagement';
import { useEffect, useRef, useState } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { BASE_WEBSOCKET_URL, MISSION_PROGRESS } from '@src/utils/constants';
import { useTaskState } from '@src/store/module/taskStorage';
import { delay } from '@src/utils/time';
export default function TaskManagerScreen(props) {
    const { initTasks, loading, resetTask, tasks } = useTaskState();

    const WS_URL = `${BASE_WEBSOCKET_URL}${MISSION_PROGRESS}`;
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
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
            } = message
            const mission = JSON.parse(data);
            setMissions(mission)
        }
    });

    const [mission, setMissions] = useState({})

    // useEffect(() => {
    //     // if (readyState === ReadyState.OPEN) {
    //     //     // sendJsonMessage({"type":"run","list":["1e46c2dd-c1f9-4405-8cc3-86c03c5c1997"]});
    //     // }
    // }, [sendJsonMessage, readyState]);
    async function loadData(){
        tasks.length == 0 && initTasks();
    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <BaseScreen classname='p-10 pb-[62px]'>
            <TaskHistory
                handleTask={sendJsonMessage}
            />

            <TaskManagement
                mission={mission}
                resetMission={() => setMissions({})}
                handleTask={sendJsonMessage}
            />

        </BaseScreen>
    );
}
