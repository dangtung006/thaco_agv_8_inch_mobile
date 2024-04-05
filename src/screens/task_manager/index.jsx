import { BaseScreen } from '@src/components';
import { TaskHistory } from './components/TaskHistory';
import { TaskManagement } from './components/TaskManagement';
import { useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function TaskManagerScreen(props) {
    const WS_URL = 'ws://192.168.68.111:8765/esatech/run';
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true,
        onMessage : (message)=>{
            console.log("aaaa" , message);
        }
    });

    // useEffect(() => {
    //     // if (readyState === ReadyState.OPEN) {
    //     //     // sendJsonMessage({"type":"run","list":["1e46c2dd-c1f9-4405-8cc3-86c03c5c1997"]});
    //     // }
    // }, [sendJsonMessage, readyState]);

    return (
        <BaseScreen classname='p-10 pb-[62px]'>
            <TaskHistory handleTask={sendJsonMessage}/>
            <TaskManagement />
        </BaseScreen>
    );
}
