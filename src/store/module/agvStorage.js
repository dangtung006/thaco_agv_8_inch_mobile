import { create } from 'zustand';
import MyRequest from '@src/utils/request';

import { delay } from '@src/utils/time';
import { BASE_URL, AGV_INFO } from '@src/utils/constants';
const request = new MyRequest({ baseUrl: BASE_URL});
const POS_CONF = {
    'LM1' : 'Dãy 1'
}
export const useAgvState = create((set) => ({
    agv: {
        battery: 0.85,
        v: 5,
        isCharging: false,
        connected: true,
        ip: "192.168.1.100",
        errors: [],
        station: POS_CONF['LM1'],
        state : "busy"
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
                        // battery: 0.7,
                        // v : 5,
                        // station : "Sạc",
                        // ip : '192.168.68.106',
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
