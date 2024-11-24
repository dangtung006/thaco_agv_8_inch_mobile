import { BaseScreen } from '@src/components';
import { ViewLeft } from './ViewLeft';
import { ViewRight } from './ViewRight';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { BASE_WEBSOCKET_URL, ROBOT_STATUS } from '@src/utils/constants';
import { setMissionStatus } from '@src/store/modules/missionStorage';
export default function PerformMissionScreen(props) {

    const WS_URL = `${BASE_WEBSOCKET_URL}${ROBOT_STATUS}`;
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("Connect to get robot status.");
        },
        onMessage: (message) => {
            const {
                data
            } = message;

            const robot = JSON.parse(data);
            robot.Robot && setMissionStatus(robot.Robot);
        }
    });

    return (
        <BaseScreen>
            <ViewLeft />
            <ViewRight />
        </BaseScreen>
    );
}
