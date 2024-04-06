import Images from '@src/assets/gen';
import { NativeModules, NativeEventEmitter, Text } from 'react-native';
import BaseText from '../text';
import { APP_STACK, ROUTES, goBack } from '@src/navigation';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { navigationRef } from '@src/navigation/RootNavigation';
import BaseView from '../view';
import BaseTouchable from '../touchable';
import BaseImage from '../image';
import { BaseButton } from '..';
import { useAgvState } from '@src/store/module/agvStorage';

const viewRight = () => {
    const { agv } = useAgvState()
    return (
        <BaseView classname='pb-[2px] h-full flex flex-row'>
            <BaseView classname='px-10 bg-white h-full flex flex-row items-center '>
                <BaseImage source={Images.battery} classname='w-8 h-8 mr-2' />
                <BaseView classname='flex flex-col'>
                    <BaseText size={12} classname='text-greyText mb-1'>
                        Pin:
                    </BaseText>
                    <BaseText medium size={12}>
                        {agv.battery && `${agv.battery * 100}%`}
                    </BaseText>
                </BaseView>
            </BaseView>
            <BaseView classname='w-[2px]'></BaseView>
            <BaseView classname='px-10 bg-white h-full flex flex-row items-center'>
                <BaseImage source={Images.status} classname='w-8 h-8 mr-2' />
                <BaseView classname='flex flex-col'>
                    <BaseText locale size={12} classname='text-greyText mb-1'>
                        Trạng thái:
                    </BaseText>
                    <BaseText locale medium size={12}>
                        Đang giao đồ ăn
                    </BaseText>
                </BaseView>
            </BaseView>
        </BaseView>

    )
}
export default AppBar = () => {
    const navigation = useNavigation();
    const [currentRouter, setCurrentRouter] = useState(ROUTES.HOME);
    const [isHome, setHome] = useState(true);
    const [title, setTitle] = useState('');
    const [batteryLevel, setBatteryLevel] = useState(null);
    // const [showBatteryWarning, setShowBatteryWarning] = useState(true);
    const { initAgv, agv } = useAgvState()
    const [showWarning, setShowWarning] = useState(false);
    const [countWarning, setCountWarning] = useState(0);

    useEffect(() => {
        if (currentRouter === ROUTES.HOME) {
            setHome(true);
        } else {
            setHome(false);
        }
        const foundRoute = APP_STACK.find((route) => route.name === currentRouter);
        if (foundRoute) setTitle(foundRoute.title);
    }, [currentRouter]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            const route = navigationRef?.current?.getCurrentRoute()?.name;
            if (route) setCurrentRouter(route);
        });
        return () => unsubscribe();
    }, [navigation]);

    useEffect(() => {
        let Interval = setInterval(async () => {
            await initAgv();
        }, 5000);

        return () => {
            clearInterval(Interval)
        };
    }, []);

    useEffect(() => {
        const {
            errors
        } = agv;
        if(errors && errors.length > 0){
            if(countWarning == 0) {
                setShowWarning(true);
            }
            countWarning == 0 && setCountWarning(1);
        }
    }, [agv])

    // useEffect(() => {
    //     const deviceInfoEmitter = new NativeEventEmitter(
    //         NativeModules.RNDeviceInfo
    //     );
    //     const subscription = deviceInfoEmitter.addListener(
    //         'RNDeviceInfo_batteryLevelDidChange',
    //         (level) => {
    //             console.log('batteryLevel change', level);
    //             setBatteryLevel(Math.round(level * 100));
    //         }
    //     );
    //     return () => subscription.remove();
    // }, []);

    const viewLeft = useMemo(() => {
        return (
            <BaseView classname='flex flex-row items-center h-full'>
                <BaseTouchable
                    onPress={() => {
                        !isHome && goBack();
                    }}
                >
                    <BaseImage
                        source={isHome ? Images.home : Images.back}
                        classname='w-8 h-8 mr-[18px]'
                    />
                </BaseTouchable>

                <BaseText locale bold classname='text-white' size={24}>
                    {title}
                </BaseText>
            </BaseView>
        );
    }, [isHome, title]);

    // const viewRight = useMemo(
    //     () => (
    //         <BaseView classname='pb-[2px] h-full flex flex-row'>
    //             <BaseView classname='px-10 bg-white h-full flex flex-row items-center '>
    //                 <BaseImage source={Images.battery} classname='w-8 h-8 mr-2' />
    //                 <BaseView classname='flex flex-col'>
    //                     <BaseText size={12} classname='text-greyText mb-1'>
    //                         Pin: 0
    //                     </BaseText>
    //                     <BaseText medium size={12}>
    //                         {batteryLevel && `${batteryLevel}%`}
    //                     </BaseText>
    //                 </BaseView>
    //             </BaseView>
    //             <BaseView classname='w-[2px]'></BaseView>
    //             <BaseView classname='px-10 bg-white h-full flex flex-row items-center'>
    //                 <BaseImage source={Images.status} classname='w-8 h-8 mr-2' />
    //                 <BaseView classname='flex flex-col'>
    //                     <BaseText locale size={12} classname='text-greyText mb-1'>
    //                         Trạng thái:
    //                     </BaseText>
    //                     <BaseText locale medium size={12}>
    //                         Đang giao đồ ăn
    //                     </BaseText>
    //                 </BaseView>
    //             </BaseView>
    //         </BaseView>
    //     ),
    //     []
    // );

    return (
        <BaseView>
            <BaseView classname='h-[56px] bg-blue500 pl-10 flex flex-row items-start justify-between'>
                {viewLeft}
                {viewRight()}
            </BaseView>

            {showWarning && (
                <BaseView classname='h-[56px] bg-red pl-10 flex flex-row items-center justify-center gap-4'>
                    <BaseText locale size={16} bold classname='text-white'>
                        Cảnh báo: {agv && agv.errors ? agv.errors[0].desc : 'co lo xay ra'}
                    </BaseText>
                    <BaseButton
                        onPress={() => setShowWarning(false)}
                        title='Đóng'
                        background='black'
                        small
                    />
                </BaseView>
            )}
        </BaseView>
    );
};
