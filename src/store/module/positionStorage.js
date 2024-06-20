import { create } from 'zustand';
import MyRequest from '@src/utils/request';
import { BASE_URL, STATIONS } from '@src/utils/constants';
import { locals } from '../data_storage';
const request = new MyRequest({
    baseUrl: BASE_URL
});

export const usePositionState = create((set)=>({
    positions : [],
    loading : false,
    initData : async ()=>{
        try{
            set({ loading : true })
            const {
                result,
                data
            } = await request.getRequest(STATIONS);
            result && set({ positions : data})
        }catch(e){
            console.log(e);
        }finally{
            set({ loading : false })
        }
    }
}))
