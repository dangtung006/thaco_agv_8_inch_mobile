import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseTouchable, BaseView } from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import { useCommonState } from '@src/store/commonStorage';
import { useMemo, useState } from 'react';
import OrderApi from '@src/utils/orderApi';
import RobotApi from '@src/utils/robotApi';
import { useAMRState } from '@src/store/modules/amrStorage';
import { useMissionState } from '@src/store/modules/missionStorage';
export const ViewRight = () => {
    const { mission } = useMissionState()
    const { amr } = useAMRState()
    const { taskStatus, station, v, robotName, mac } = amr
    const orderApi = new OrderApi()
    const robotApi = new RobotApi()
    const items = [
        {
            title: 'Tên robot',
            value: robotName,
        },
        {
            title: 'Địa chỉ MAC',
            value: mac
        },
        // {
        //     title: 'Đoàn hoạt động',
        //     value: 'Đoàn 01',
        // },
        {
            title: 'Vị trí hiện tại',
            value: station,
        },
        {
            title: 'Tốc độ di chuyển',
            value: `${Math.ceil(v * 100) / 100} m/s`,
        },
    ];
    const validateRobotAction = () => {
        const { tasks } = mission
        if (!tasks || tasks.length <= 0) return false
        return true
    }
    const getActionProcessIcon = () => {
        if (!taskStatus || taskStatus == 4 || validateRobotAction() == false) return Images.playInactive
        if (taskStatus == 2) return Images.pause
        if (taskStatus == 3) return Images.play

    }

    const getActionProcessTitle = () => {
        if (!taskStatus || taskStatus == 4) ""
        if (taskStatus == 2) return "Dừng"
        if (taskStatus == 3) return "Chạy"
        return ""

    }

    const handleActionsProcess = async () => {
        if (validateRobotAction() == false) return false
        if (taskStatus == 2) {
            res = await robotApi.pause()
        } else if (taskStatus == 3) {
            await robotApi.resume()
        }
    }

    const _buildItem = (item, index) => {
        return (
            <BaseView
                key={index}
                classname='flex flex-row items-center justify-between mt-10px'
            >
                <BaseText size={20} locale>
                    {item.title}
                </BaseText>
                <BaseText size={20} semiBold classname='text-blue500'>
                    {item.value}
                </BaseText>
            </BaseView>
        );
    };



    const _buildUpDownShelves = () => {
        return (
            <BaseView>
                <BaseText locale semiBold size={24}>
                    Nâng hạ kệ
                </BaseText>
                <BaseView classname='flex flex-row justify-between mt-4 px-20'>
                    <BaseTouchable
                        classname='items-center gap-2'
                        // onPressAndHold={upFoods}
                        onPress={() => robotApi.upFoods()}
                    >
                        <BaseImage source={Images.up} classname='w-120px h-120px' />
                        <BaseText locale>Nâng lên</BaseText>
                    </BaseTouchable>
                    <BaseTouchable
                        classname='items-center gap-2'
                        // onPressAndHold={downFoods}
                        onPress={() => robotApi.downFoods()}
                    >
                        <BaseImage source={Images.down} classname='w-120px h-120px' />
                        <BaseText locale>Hạ xuống</BaseText>
                    </BaseTouchable>
                </BaseView>
            </BaseView>
        );
    };

    const _buildControlAction = () => {
        return (
            <BaseView classname='mt-8'>
                <BaseText locale semiBold size={24}>
                    Điều khiển hành động
                </BaseText>
                <BaseView classname='flex flex-row justify-between mt-4 px-20'>
                    <BaseView classname='flex flex-col items-center'>
                        <BaseTouchable
                            onPress={handleActionsProcess}
                        >
                            <BaseImage
                                source={getActionProcessIcon()}
                                classname='w-120px h-120px'
                            />
                        </BaseTouchable>
                        <BaseText locale size={18} classname='mt-2'>
                            {getActionProcessTitle()}
                        </BaseText>
                    </BaseView>
                    <BaseView classname='flex flex-col items-center'>
                        <BaseTouchable
                            onPress={() => orderApi.cancel_mission()}
                        >
                            <BaseImage
                                source={
                                    // mission.tasks && mission.tasks.length && mission.process && mission.process == "processing" > 0 ? Images.stop : Images.pauseInactive
                                    (taskStatus == 2 || taskStatus == 3) && validateRobotAction() == true ? Images.stop : Images.pauseInactive
                                }
                                classname='w-120px h-120px'
                            />
                        </BaseTouchable>
                        <BaseText locale size={18} classname='mt-2'>
                            Kết thúc
                        </BaseText>
                    </BaseView>
                </BaseView>
            </BaseView>
        );
    };

    return (
        <BaseView classname='flex-1 bg-bg h-full flex flex-col px-36px pt-8px'>
            {items.map((item, index) => _buildItem(item, index))}
            <BaseView classname='mx-20px my-4 w-auto h-1px bg-greyBt50'></BaseView>
            {_buildUpDownShelves()}
            {_buildControlAction()}
        </BaseView>
    );
};
