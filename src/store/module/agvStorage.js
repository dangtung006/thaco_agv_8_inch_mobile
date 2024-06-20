import { create } from 'zustand';
import MyRequest from '@src/utils/request';
import { delay } from '@src/utils/time';
import { BASE_URL, AGV_INFO } from '@src/utils/constants';
const request = new MyRequest({ baseUrl: BASE_URL});

export const useAgvState = create((set) => ({
    agv: {
        battery: 0,
        v: 0,
        isCharging: false,
        connected: true,
        ip: "",
        errors: [],
        station: "",
        state : ""
    },

    loading: false,

    initAgv: async () => {
        try {
            set({ loading: true })
            const {
                result,
                data
            } = await request.getRequest(AGV_INFO);

            if (result) {
                const {
                    current_station: station,
                    battery_level: battery,
                    vx,
                    vy,
                    charging,
                    connected,
                    current_ip,
                    errors,
                    warnings
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
                            battery: battery ? Math.floor(battery) : 0,
                            v: Math.sqrt(vx * vx + vy * vy)
                        }
                    }
                });
                return true
            }

        } catch (e) {
            const networkErr = {
                type: 'Netword',
                message: e.message,
                desc: "kết nối tới máy chủ bị lỗi"
            }

            set((state) => {
                return {
                    agv: {
                        ...state.agv,
                        errors : [...state.agv.errors, networkErr]
                    }
                }
            });
            return false;
        }
        finally {
            set({ loading: false })
        }
    },

    setRobotStatus : (data)=>{
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
            state : agvState
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
                    'state' : agvState,
                    v: Math.sqrt(vx * vx + vy * vy)
                }
            }
        });
    }
}))
