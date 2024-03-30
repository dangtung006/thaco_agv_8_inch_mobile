import Images from '@src/assets/gen';
import {
  NativeModules,
  NativeEventEmitter,
  Text,
} from 'react-native';
import BaseText from '../text';
import { APP_STACK, ROUTES, goBack } from '@src/navigation';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { navigationRef } from '@src/navigation/RootNavigation';
import BaseView from '../view';
import BaseTouchable from '../touchable';
import BaseImage from '../image';

export default AppBar = () => {
  const navigation = useNavigation();
  const [currentRouter, setCurrentRouter] = useState(ROUTES.HOME);
  const [isHome, setHome] = useState(true);
  const [title, setTitle] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(null);

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
    const deviceInfoEmitter = new NativeEventEmitter(
      NativeModules.RNDeviceInfo
    );
    const subscription = deviceInfoEmitter.addListener(
      'RNDeviceInfo_batteryLevelDidChange',
      (level) => {
        console.log('batteryLevel change', level);
        setBatteryLevel(Math.round(level * 100));
      }
    );
    return () => subscription.remove();
  }, []);

  const viewLeft = useMemo(() => {
    return (
      <BaseView classname='flex flex-row items-center h-full'>
        <BaseTouchable
          onPress={() => {
            console.log('back');
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

  const viewRight = useMemo(
    () => (
      <BaseView classname='pb-[2px] h-full flex flex-row'>
        <BaseView classname='px-10 bg-white h-full flex flex-row items-center '>
          <BaseImage source={Images.battery} classname='w-8 h-8 mr-2' />
          <BaseView classname='flex flex-col'>
            <BaseText size={12} classname='text-greyText mb-1'>
              Pin:
            </BaseText>
            <BaseText medium size={12}>
              {batteryLevel && `${batteryLevel}%`}
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
    ),
    [batteryLevel]
  );

  return (
    <BaseView classname='h-[56px] bg-blue500 pl-10 flex flex-row items-start justify-between'>
      {viewLeft}
      {viewRight}
    </BaseView>
  );
};
