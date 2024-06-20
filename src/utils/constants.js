const BACKEND_PORT = 5000;
const SOCKET_PORT = 8765;
const ROOT_ADDR = "10.14.34.55";

const MISSION_STATUS = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
};

const TIME_TO_SLEEP = 30000;
const BASE_URL = `http://${ROOT_ADDR}:${BACKEND_PORT}`
const STATIONS = '/locals'
const TASKS = '/scripts'
const AGV_INFO = '/status'
const BASE_WEBSOCKET_URL = `ws://${ROOT_ADDR}:${SOCKET_PORT}`
const MISSION_PROGRESS = '/esatech/run';
const ROBOT_STATUS = '/esatech/status/Robot';

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



