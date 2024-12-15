import MyRequest from "./request";
import {
    BASE_URL,
    ROBOT_CONTROL_NAV_TO,
    ROBOT_CONTROL_EMERGENCY_SOFT,
    ROBOT_CONTROL_CANCEL,
    ROBOT_CONTROL_PAUSE,
    ROBOT_CONTROL_RESUME,
    ROBOT_CONTROL_CHANGE_MODE,
    ROBOT_CONTROL_UPFOODS,
    ROBOT_CONTROL_DOWNFOODS,
    GET_ROBOT_STATIONS,
    ROBOT_CONTROL_TRANSLATE,
    ROBOT_CONTROL_ROTATE
} from "./constants"

class RobotApi extends MyRequest {
    constructor(baseUrl = BASE_URL) {
        super({
            baseUrl
        });

    }

    async navTo(target) {
        try {
            result = await this.postRequest(ROBOT_CONTROL_NAV_TO, target)
            return result
        } catch (E) {
            console.log("Err when navigate to", target, E)
            return false
        }
    }

    async pause() {
        try {
            result = await this.postRequest(ROBOT_CONTROL_PAUSE)
            return result
        } catch (E) {
            console.log("Err when pause task", E)
            return false
        }
    }

    async resume() {
        try {
            result = await this.postRequest(ROBOT_CONTROL_RESUME)
            return result
        } catch (E) {
            console.log("Err when resume task", E)
            return false
        }
    }

    async cancel() {
        try {
            result = await this.postRequest(ROBOT_CONTROL_CANCEL)
            return result
        } catch (E) {
            console.log("Err when cancel task", E)
            return false
        }
    }
    async translate_nav(direction) {
        try {
            result = await this.postRequest(`${ROBOT_CONTROL_TRANSLATE}/${direction}`)
            return result
        } catch (E) {
            console.log("Err when cancel task", E)
            return false
        }
    }
    async rotate_nav(direction) {
        try {
            result = await this.postRequest(`${ROBOT_CONTROL_ROTATE}/${direction}`)
            return result
        } catch (E) {
            console.log("Err when cancel task", E)
            return false
        }
    }
    async upFoods() {
        try {
            // result = await this.postRequest(ROBOT_CONTROL_UPFOODS)
            // return result
            console.log("/////DOWN FOODSggggggggggg/////")
        } catch (E) {
            console.log("Err when up food task", E)
            return false
        }
    }

    async downFoods() {
        try {
            console.log("DOWN FOODSggggggggggg")
            // result = await this.postRequest(ROBOT_CONTROL_DOWNFOODS)
            // return result
        } catch (E) {
            console.log("Err when down food task", E)
            return false
        }
    }

    async getStations() {
        try {
            const { msg, data } = await this.getRequest(GET_ROBOT_STATIONS)
            if (msg == "OK") return data
            return false
        } catch (E) {
            console.log("Err when cancel task", E)
            return false
        }
    }

    async sofEmc() {
        try {
            result = await this.postRequest(ROBOT_CONTROL_EMERGENCY_SOFT)
            return result
        } catch (E) {
            console.log("Err when cancel task", E)
            return false
        }
    }

    async changeMode(mode) {
        try {
            const { data, msg } = await this.postRequest(`${ROBOT_CONTROL_CHANGE_MODE}/${mode}`)
            if (msg == "OK") return data
            return false
        } catch (E) {
            console.log("Err when Change Robot Mode", E)
            return false
        }
    }
}

export default RobotApi