import { create } from 'zustand';
import MyRequest from '@src/utils/request';
import { BASE_URL, AGV_INFO } from '@src/utils/constants';
const request = new MyRequest({ baseUrl: BASE_URL });

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
        robotName: ""
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
            vehicle_id: robotName
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
                    v: Math.sqrt(vx * vx + vy * vy)
                }
            }
        });
    }
}))
