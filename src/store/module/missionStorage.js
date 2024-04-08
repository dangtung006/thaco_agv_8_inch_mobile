import { create } from 'zustand';


export const useMissionState = create((set)=>({
    selectedTask : [],

    missionProgress : {

    },

    setSelectedTask : (task)=>{
        set({ selectedTask : task })
    },

    clearTask : ()=>{
        set({selectedTask : []})
    }
}))
