import { create } from 'zustand';
import MyRequest from '@src/utils/request';

export const TASK_PROGRESS_STATUS = {
    INIT: 'INIT',
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR',
};
import { delay } from '@src/utils/time';
const request = new MyRequest({baseUrl: 'http://192.168.68.111:5000' });

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
            } = await request.getRequest("/scripts");
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
