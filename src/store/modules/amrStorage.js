import { create } from 'zustand';

export const useAMRState = create((set) => ({
    amr: {
        battery: 0,
        v: 0,
        isCharging: false,
        connected: false,
        ip: "",
        errors: [],
        station: "",
        state: "",
        robotName: "",
        taskStatus: "",
        mode: "",
        mac: ""
    },

    loading: false,

    setRobotStatus: (data) => {
        const {
            current_station: station,
            battery_level: battery,
            vx,
            vy,
            charging,
            connected,
            current_ip,
            errors,
            warnings,
            vehicle_id: robotName,
            task_status: taskStatus,
            mode,
            MAC: mac
        } = data;

        set((state) => {
            return {
                amr: {
                    ...state.amr,
                    isCharging: charging,
                    connected,
                    ip: current_ip,
                    errors: errors,
                    warnings: warnings,
                    station: station,
                    battery: battery,
                    robotName: robotName,
                    taskStatus: taskStatus,
                    v: Math.sqrt(vx * vx + vy * vy),
                    mode: mode,
                    mac: mac
                }
            }
        });
    }
}))
