import { create } from 'zustand';

export const useMissionState = create((set) => ({
    mission: {
        title: "",
        process: "",
        tasks: [],
        desc: ""
    },

    setMissionStatus: (data) => {
        set((state) => {
            return {
                mission: {
                    ...state.mission,
                    title: data.title,
                    process: data.process,
                    tasks: data.tasks,
                    desc: data.desc
                }
            }
        });
    }
}))
