import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseTouchable, BaseView } from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import { useCommonState } from '@src/store/commonStorage';
import { useMemo, useState } from 'react';
import { Image } from 'react-native';
import MyRequest from '@src/utils/request';

import {
    BASE_URL,
    AGV_INFO,
    ROBOT_CONTROL_PAUSE,
    ROBOT_CONTROL_RESUME,
    ROBOT_CONTROL_UPFOODS,
    ROBOT_CONTROL_DOWNFOODS
} from '@src/utils/constants';

const request = new MyRequest({ baseUrl: BASE_URL });

export const ViewRight = () => {
    const { missions, setMissions } = useCommonState((state) => state);
    const [isProcessing, setProcessing] = useState(false);
    const items = [
        {
            title: 'Tên robot',
            value: 'RobotX_2024',
        },
        {
            title: 'Địa chỉ MAC',
            value: '00:1A:2B:3C:4D:5E',
        },
        {
            title: 'Đoàn hoạt động',
            value: 'Đoàn 01',
        },
        {
            title: 'Vị trí hiện tại',
            value: 'Bàn 01',
        },
        {
            title: 'Tốc độ di chuyển',
            value: ' 0.5 m/s',
        },
    ];

    const downFoods = async () => {
        try {
            const {
                result,
                data
            } = await request.postRequest(ROBOT_CONTROL_DOWNFOODS);
        } catch (err) {
            console.log("Error When Upfoods", err)
        }
    }

    const upFoods = async () => {
        try {
            const {
                result,
                data
            } = await request.postRequest(ROBOT_CONTROL_UPFOODS);
        } catch (err) {
            console.log("Error When Down Foods", err)
        }
    }

    const cancel = async () => {
        try {
            const {
                result,
                data
            } = await request.postRequest(ROBOT_CONTROL_RESUME);
        } catch (err) {
            console.log("Error When Down Foods", err)
        }
    }

    const pause = async () => {
        try {
            const {
                result,
                data
            } = await request.postRequest(ROBOT_CONTROL_PAUSE);
        } catch (err) {
            console.log("Error When Down Foods", err)
        }
    }

    const resume = async () => {
        try {
            const {
                result,
                data
            } = await request.postRequest(ROBOT_CONTROL_RESUME);
        } catch (err) {
            console.log("Error When Down Foods", err)
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

    const _buildInfo = useMemo(() => {
        return <>{items.map((item, index) => _buildItem(item, index))}</>;
    }, []);

    const _buildUpDownShelves = () => {
        return (
            <BaseView>
                <BaseText locale semiBold size={24}>
                    Nâng hạ kệ
                </BaseText>
                <BaseView classname='flex flex-row justify-between mt-4 px-20'>
                    <BaseTouchable
                        classname='items-center gap-2'
                        onPressAndHold={upFoods}
                        onPress={upFoods}
                    >
                        <BaseImage source={Images.up} classname='w-120px h-120px' />
                        <BaseText locale>Nâng lên</BaseText>
                    </BaseTouchable>
                    <BaseTouchable
                        classname='items-center gap-2'
                        onPressAndHold={downFoods}
                        onPress={downFoods}
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
                        <BaseTouchable onPress={() => setProcessing(!isProcessing)}>
                            <BaseImage
                                source={
                                    missions.length > 0
                                        ? isProcessing
                                            ? Images.play
                                            : Images.pause
                                        : Images.playInactive
                                }
                                classname='w-120px h-120px'
                            />
                        </BaseTouchable>
                        <BaseText locale size={18} classname='mt-2'>
                            {missions.length > 0
                                ? !isProcessing
                                    ? 'Tạm dừng'
                                    : 'Chạy'
                                : 'Chạy'}
                        </BaseText>
                    </BaseView>
                    <BaseView classname='flex flex-col items-center'>
                        <BaseTouchable
                            onPress={() => {
                                setMissions([]);
                                navigate(ROUTES.PERFORM_MISSION2);
                            }}
                        >
                            <BaseImage
                                source={
                                    missions.length > 0 ? Images.stop : Images.pauseInactive
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
            {_buildInfo}
            <BaseView classname='mx-20px my-4 w-auto h-1px bg-greyBt50'></BaseView>
            {_buildUpDownShelves()}
            {_buildControlAction()}
        </BaseView>
    );
};
