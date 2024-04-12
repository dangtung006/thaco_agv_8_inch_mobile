import { create } from 'zustand';


export const useMissionState = create((set)=>({
    pendingSelectedTask : [],
    missionProgress : {},
    isVisibleOverlayProgress : false,


    setVisibleOverlayProgress : async (val) => set({ isVisibleOverlayProgress : val}),

    setMissionProgress : (progress)=> set({ missionProgress : progress}),
    
    setPendingSelectedTask : async (tasks)=> {
        set({pendingSelectedTask : tasks})
    },

    clearPendingTask :  async() => set({pendingSelectedTask : []})
}))
