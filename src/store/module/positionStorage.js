import { create } from 'zustand';
import MyRequest from '@src/utils/request';

const request = new MyRequest({
    baseUrl: 'http://192.168.68.111:5000'
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
            } = await request.getRequest("/locals");
            result && set({ positions : data})
        }catch(e){
            console.log(e);
        }finally{
            set({ loading : false })
        }
    }
}))
