import { create } from 'zustand';

export const useAgvState = create((set) => ({
    agv: {
        battery: 0,
        v: 0,
        isCharging: false,
        connected: false,
        ip: "",
        errors: [],
        station: "",
        state: ""
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
        } = data;

        set((state) => {
            return {
                agv: {
                    ...state.agv,
                    isCharging: charging,
                    connected,
                    ip: current_ip,
                    errors: errors,
                    warnings: warnings,
                    station: station,
                    battery: battery,
                    v: Math.sqrt(vx * vx + vy * vy)
                }
            }
        });
    }
}))
