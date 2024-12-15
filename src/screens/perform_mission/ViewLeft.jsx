import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseImage,
    BaseScrollView,
    BaseText,
    BaseView,
} from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import { useMissionState } from '@src/store/modules/missionStorage';
import { useEffect } from 'react';
import { Image } from 'react-native';
import OrderApi from '@src/utils/orderApi';


export const ViewLeft = () => {
    const { mission } = useMissionState()
    const orderApi = new OrderApi()
    const tasks = mission.tasks.map(tk => ({
        task_name: tk.task_name,
        is_done: tk.is_done,
        task_idx: tk.task_idx,
        confirmed: tk.confirmed
    }))
    // console.log("tasks::", tasks)
    const getColor = (task) => {
        let color = {
            bg: 'greyBt50',
            border: 'greyBt',
            text: 'darkText',
        };

        if (task && task.is_done == false) {
            return color
        } else if (task && task.is_done == true) {
            color = {
                bg: 'orange100',
                border: 'orange',
                text: 'orange',
            };
        }

        if (task && task.confirmed) {
            color = {
                bg: 'green50',
                border: 'green',
                text: 'green',
            }
        }
        return color
    };

    const handleConfirmTask = async (task) => {
        if (task.confirmed == true) {
            return
        }
        resp = await orderApi.confirm_task(task)
    }

    const _buildItem = (task, index) => {
        return (
            <BaseView key={index} classname='flex flex-col items-center'>
                <BaseButton
                    onPress={() => handleConfirmTask(task)}
                    classname={`w-300px rounded-full bg-${getColor(task).bg}`}
                    small
                    titleSize={24}
                    titleColor={getColor(task).text}
                    title={task.task_name}
                    borderColor={getColor(task).border}
                />
                {index < tasks.length - 1 ? (
                    <BaseImage source={Images.arrowDown} classname='h-50px' />
                ) : (
                    <BaseView classname='h-50px'></BaseView>
                )}
            </BaseView>
        );
    };
    return (
        <BaseView classname='w-5/11 h-full flex  px-25px pt-16px'>
            <BaseText locale size={24} semiBold>
                Quy trình nhiệm vụ
            </BaseText>
            {tasks && tasks.length > 0 ? (
                <BaseScrollView classname='mt-42px'>
                    {tasks.map((task, index) => _buildItem(task, index))}
                </BaseScrollView>
            ) : (
                <BaseView classname='flex-1 justify-center items-center'>
                    <BaseText locale size={18}>
                        Không có nhiệm vụ
                    </BaseText>
                </BaseView>
            )}
        </BaseView>
    );
};
