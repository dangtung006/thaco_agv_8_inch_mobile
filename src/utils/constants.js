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
const TIME_TO_SLEEP = 30000;


// ----------------------URL_CONF-------------------------
const BACKEND_PORT = 3000;
const ROOT_ADDR = "192.168.68.130";
const BASE_URL = `http://${ROOT_ADDR}:${BACKEND_PORT}`
const BASE_WEBSOCKET_URL = `ws://${BASE_URL}`

const STATIONS = '/locals'
const TASKS = '/scripts'
const AGV_INFO = '/status'
const MISSION_PROGRESS = '/mission/progress';
const ROBOT_STATUS = '/robot/status/';

export {
  MISSION_STATUS,
  TIME_TO_SLEEP,
  BASE_URL,
  STATIONS,
  TASKS,
  AGV_INFO,
  BASE_WEBSOCKET_URL,
  MISSION_PROGRESS,
  ROBOT_STATUS
}



