import Images from '@src/assets/gen';
import {
  Image,
  TouchableOpacity,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import BaseText from '../text';
import { APP_STACK, ROUTES, goBack } from '@src/navigation';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { navigationRef } from '@src/navigation/RootNavigation';

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
      <View className='flex flex-row items-center h-full'>
        <TouchableOpacity
          onPress={() => {
            !isHome && goBack();
          }}
        >
          <Image
            source={isHome ? Images.home : Images.back}
            className='w-8 h-8 mr-[18px]'
          />
        </TouchableOpacity>

        <BaseText locale bold classname='text-white' size={24}>
          {title}
        </BaseText>
      </View>
    );
  }, [isHome, title]);

  const viewRight = useMemo(
    () => (
      <View className='pb-[2px] h-full flex flex-row'>
        <View className='px-10 bg-white h-full flex flex-row items-center '>
          <Image source={Images.battery} className='w-8 h-8 mr-2' />
          <View className='flex flex-col'>
            <BaseText size={12} classname='text-greyText mb-1'>
              Pin:
            </BaseText>
            <BaseText medium size={12}>
              {batteryLevel && `${batteryLevel}%`}
            </BaseText>
          </View>
        </View>
        <View className='w-[2px]'></View>
        <View className='px-10 bg-white h-full flex flex-row items-center'>
          <Image source={Images.status} className='w-8 h-8 mr-2' />
          <View className='flex flex-col'>
            <BaseText locale size={12} classname='text-greyText mb-1'>
              Trạng thái:
            </BaseText>
            <BaseText locale medium size={12}>
              Đang giao đồ ăn
            </BaseText>
          </View>
        </View>
      </View>
    ),
    [batteryLevel]
  );

  return (
    <View className='h-[56px] bg-blue500 pl-10 flex flex-row items-start justify-between'>
      {viewLeft}
      {viewRight}
    </View>
  );
};
