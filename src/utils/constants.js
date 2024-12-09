export const ERROR_STATUS = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
};

export const ERROR_LEVEL = {
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
};

export const TIME_TO_SLEEP = 3000000;


const MISSION_STATUS = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    COMPLETED: 'COMPLETED',
};

// ----------------------URL_CONF-------------------------
const BACKEND_PORT = 3000;
const ROOT_ADDR = "192.168.68.134";
const BASE_URL = `http://${ROOT_ADDR}:${BACKEND_PORT}`
const BASE_WEBSOCKET_URL = `ws://${ROOT_ADDR}:${BACKEND_PORT}`

const STATIONS = '/locals'
const TASKS = '/scripts'
const AGV_INFO = '/status'
const MISSION_PROGRESS = '/mission/progress';
const ROBOT_STATUS = '/robot/status';

const ROBOT_CONTROL_NAV_TO = ''
const ROBOT_CONTROL_CANCEL = ''
const ROBOT_CONTROL_EMERGENCY_SOFT = ''
const ROBOT_CONTROL_PAUSE = '/robot/status/';
const ROBOT_CONTROL_RESUME = '/robot/status/';
const ROBOT_CONTROL_UPFOODS = '/robot/status/';
const ROBOT_CONTROL_DOWNFOODS = '/robot/status/';

const GET_ROBOT_STATIONS = '/robot/status/';



export {
    MISSION_STATUS,
    BASE_URL,
    STATIONS,
    TASKS,
    AGV_INFO,
    BASE_WEBSOCKET_URL,
    MISSION_PROGRESS,
    ROBOT_STATUS,

    ROBOT_CONTROL_NAV_TO,
    ROBOT_CONTROL_CANCEL,
    ROBOT_CONTROL_EMERGENCY_SOFT,
    ROBOT_CONTROL_PAUSE,
    ROBOT_CONTROL_RESUME,
    ROBOT_CONTROL_UPFOODS,
    ROBOT_CONTROL_DOWNFOODS,

    GET_ROBOT_STATIONS
}



