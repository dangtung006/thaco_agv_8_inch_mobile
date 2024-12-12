import { BaseScreen } from '@src/components';
import { ViewLeft } from './ViewLeft';
import { ViewRight } from './ViewRight';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { BASE_WEBSOCKET_URL, MISSION_PROGRESS } from '@src/utils/constants';
import { useMissionState } from '@src/store/modules/missionStorage';

export default function PerformMissionScreen(props) {
    const { setMissionStatus } = useMissionState()
    const WS_URL = `${BASE_WEBSOCKET_URL}${MISSION_PROGRESS}`;
    // console.log(WS_URL)
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("Connect to get robot status.");
        },
        onMessage: (message) => {
            const {
                data
            } = message;
            const mission = JSON.parse(data);
            mission && setMissionStatus(mission);
        }
    });

    return (
        <BaseScreen>
            <ViewLeft />
            <ViewRight />
        </BaseScreen>
    );
}
