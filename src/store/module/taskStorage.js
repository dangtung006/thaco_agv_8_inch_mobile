import { create } from 'zustand';
import MyRequest from '@src/utils/request';
import { BASE_URL, TASKS } from '@src/utils/constants';
import uuid from 'react-native-uuid';
export const TASK_PROGRESS_STATUS = {
    INIT: 'INIT',
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR',
};
import { delay } from '@src/utils/time';
import { locals } from '../data_storage';

const request = new MyRequest({ baseUrl: BASE_URL });

export const useTaskState = create((set) => ({
    tasks: [],
    loading: false,
    taskProgress: TASK_PROGRESS_STATUS.INIT,

    initTasks: async () => {
        try {
            set({ loading: true })
            const {
                result,
                data
            } = await request.getRequest(TASKS);

            result && set({ tasks: data })
        } catch (e) {
            console.log(e);
        } finally {
            set({ loading: false })
        }
    },

    handleTask: async ({ type, data: task }) => {
        set({ taskProgress: TASK_PROGRESS_STATUS.PENDING })
        try {
            const {
                name,
                tasks
            } = task

            let id = uuid.v4()
            let pos = tasks.map(taskId => {
                let task = locals.find(local => local.id == taskId)
                return {
                    'id': task.id,
                    'name': task.name,
                    'station': task.localMark
                }
            })

            let newTask = {
                id,
                name,
                list_station: pos,
                "dateTime": new Date()
            }

            await delay(3);
            set({ taskProgress: TASK_PROGRESS_STATUS.COMPLETED });
            await delay(0.1);

            set((state) => ({tasks : [...state.tasks, newTask]}));

        } catch (e) {
            console.log(e);
            set({ taskProgress: TASK_PROGRESS_STATUS.ERROR })
        }
    },

    setTaskProgress: (process) => {
        set({ taskProgress: process })
    },
    resetTask: async () => {
        set({ tasks: [] })
    }
}))
