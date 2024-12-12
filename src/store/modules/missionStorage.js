import { create } from 'zustand';

export const useMissionState = create((set) => ({
    mission: {
        amr: "",
        process: "",
        tasks: [],
        startTime: "",
        endTime: ""
    },

    setMissionStatus: (data) => {
        set((state) => {
            return {
                mission: {
                    ...state.mission,
                    process: data.process,
                    tasks: data.tasks,
                    startTime: data.start_time,
                    endTime: data.end_time
                }
            }
        });
    }
}))
