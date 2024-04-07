import { create } from 'zustand';
import MyRequest from '@src/utils/request';
import { BASE_URL, TASKS } from '@src/utils/constants';

export const TASK_PROGRESS_STATUS = {
    INIT: 'INIT',
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR',
};
import { delay } from '@src/utils/time';

const request = new MyRequest({ baseUrl: BASE_URL });

export const useTaskState = create((set)=>({
    tasks : [],
    loading : false,
    taskProgress : TASK_PROGRESS_STATUS.INIT,

    initTasks : async ()=>{
        try{
            set({ loading : true })
            const {
                result,
                data
            } = await request.getRequest(TASKS);
            console.log("data" , data);
            result && set({ tasks : data})
        }catch(e){
            console.log(e);
        }finally{
            set({ loading : false })
        }
    },

    handleTask : async ({ type , data : task  })=>{
        set({ taskProgress : TASK_PROGRESS_STATUS.PENDING })
        try{

            const {
                result,
                data
            } = await request.postRequest("/scripts", { 'type' : type , 'data' : task });
            if(result) {
                set({ taskProgress : TASK_PROGRESS_STATUS.COMPLETED });
                await delay(3);
                set({ tasks : data })
            }
        }catch(e){
            console.log(e);
            set({ taskProgress : TASK_PROGRESS_STATUS.ERROR })
        }
    },

    setTaskProgress : (process)=>{
        set({ taskProgress : process })
    }
}))
