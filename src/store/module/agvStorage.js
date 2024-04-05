import { create } from 'zustand';
import MyRequest from '@src/utils/request';

import { delay } from '@src/utils/time';
const request = new MyRequest({ baseUrl: 'http://192.168.68.111:5000' });

export const useAgvState = create((set) => ({
    agv: {
        battery: 0,
        v: 0,
        isCharging: false,
        connected: false,
        ip: "",
        errors: [],
        station: ""
    },

    loading: false,

    initAgv: async () => {
        try {
            set({ loading: true })
            const {
                result,
                data
            } = await request.getRequest("/status");

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
                    console.log("state", state);
                    return {
                        agv: {
                            ...state.agv,
                            battery: battery,
                            isCharging : charging,
                            connected,
                            ip : current_ip,
                            errors : errors,
                            warnings : warnings,
                            station : station,
                            battery : battery,
                            v : Math.sqrt(vx * vx + vy * vy)
                        }
                    }
                });
            }

        } catch (e) {
            console.log(e);
        }
        finally {
            set({ loading: false })
        }
    }
}))
