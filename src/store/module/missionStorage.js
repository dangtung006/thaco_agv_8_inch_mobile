import { create } from 'zustand';
import MyRequest from '@src/utils/request';


// const request = new MyRequest({ baseUrl: 'http://192.168.68.111:5000' });

export const useMissionState = create((set)=>({
    selectedTask : [],

    setSelectedTask : (task)=>{
        set({ selectedTask : task })
    },

    clearTask : ()=>{
        set({selectedTask : []})
    }
}))
