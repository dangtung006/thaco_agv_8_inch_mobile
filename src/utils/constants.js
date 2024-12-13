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
const ROOT_ADDR = "192.168.1.101";
const BASE_URL = `http://${ROOT_ADDR}:${BACKEND_PORT}`
const BASE_WEBSOCKET_URL = `ws://${ROOT_ADDR}:${BACKEND_PORT}`

const STATIONS = '/locals'
const TASKS = '/scripts'
const AGV_INFO = '/status'
const MISSION_PROGRESS = '/mission/progress';
const ROBOT_STATUS = '/robot/status';

const ROBOT_CONTROL_NAV_TO = '/robot/nav/go_to'
const ROBOT_CONTROL_CANCEL = '/robot/nav/cancle'
const ROBOT_CONTROL_PAUSE = '/robot/nav/pause';
const ROBOT_CONTROL_RESUME = '/robot/nav/resume';
const ROBOT_CONTROL_CHANGE_MODE = '/robot/ctrl/change_mode';
const ROBOT_CONTROL_EMERGENCY_SOFT = '/robot/other/emc_stop'

const ROBOT_CONTROL_UPFOODS = '/robot/status/';
const ROBOT_CONTROL_DOWNFOODS = '/robot/status/';
const GET_ROBOT_STATIONS = '/robot/station/list';

const CONFIRM_ROBOT_TASK = "/missions/confirm_task"
const CANCEL_ROBOT_TASK = "/missions/cancle_task"



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
    ROBOT_CONTROL_CHANGE_MODE,
    ROBOT_CONTROL_UPFOODS,
    ROBOT_CONTROL_DOWNFOODS,

    GET_ROBOT_STATIONS,
    CONFIRM_ROBOT_TASK,
    CANCEL_ROBOT_TASK
}



