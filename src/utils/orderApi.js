import MyRequest from "./request";
import {
    BASE_URL,
    CONFIRM_ROBOT_TASK,
    CANCEL_ROBOT_TASK
} from "./constants"

class OrderApi extends MyRequest {
    constructor(baseUrl = BASE_URL) {
        super({
            baseUrl
        });

    }

    async confirm_task(task) {
        console.log("task", task)
        try {
            result = await this.postRequest(`${CONFIRM_ROBOT_TASK}/${task.task_idx}`)
            return result
        } catch (E) {
            console.log("Err when confirm task", E.toString())
            return false
        }
    }

    async cancel_mission() {
        try {
            result = await this.postRequest(CANCEL_ROBOT_TASK)
            return result
        } catch (E) {
            console.log("Err when cancel task", E.toString())
            return false
        }
    }
}

export default OrderApi