import Images from '@src/assets/gen';
import BaseText from '../text';
import { APP_STACK, ROUTES, goBack } from '@src/navigation';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { navigationRef } from '@src/navigation/RootNavigation';
import BaseView from '../view';
import BaseTouchable from '../touchable';
import BaseImage from '../image';
import { BaseButton } from '..';
import { classnames } from '@src/utils/common';
import { useCommonState } from '@src/store/commonStorage';

export default AppBar = () => {
  const navigation = useNavigation();
  const [currentRouter, setCurrentRouter] = useState(ROUTES.HOME);
  const [isHome, setHome] = useState(true);
  const [title, setTitle] = useState('');
  // const [showBatteryWarning, setShowBatteryWarning] = useState(true);
  const { networkConnected, batteryLevel } = useCommonState((state) => state);

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

  const viewLeft = useMemo(() => {
    return (
      <BaseView classname='flex flex-row items-center h-full'>
        <BaseTouchable
          onPress={() => {
            goBack();
          }}
        >
          <BaseImage source={Images.back} classname='w-8 h-8 mr-[18px]' />
        </BaseTouchable>

        <BaseText locale classname='text-white' size={20}>
          {title}
        </BaseText>
      </BaseView>
    );
  }, [isHome, title]);

  const viewRight = useMemo(
    () => (
      <BaseView classname='pr-[20px] h-full flex flex-row items-center'>
        {networkConnected && (
          <BaseImage
            source={isHome ? Images.wifiBlack : Images.wifi}
            classname='w-4 h-3 mr-[6px]'
          />
        )}
        <BaseImage
          source={isHome ? Images.batteryBlack : Images.battery}
          classname='w-6 h-3 mr-[6px]'
        />
        <BaseText
          medium
          size={14}
          classname={classnames(isHome ? 'text-black' : 'text-white')}
        >
          {batteryLevel && `${batteryLevel}%`}
        </BaseText>
      </BaseView>
    ),
    [batteryLevel, networkConnected, isHome]
  );

  return (
    <BaseView>
      <BaseView
        classname={classnames(
          'h-[50px]  pl-[22px] flex flex-row items-start justify-between',
          isHome ? 'bg-bg' : 'bg-blue500'
        )}
      >
        {!isHome ? viewLeft : <BaseView />}
        {viewRight}
      </BaseView>
      {/* {showBatteryWarning && (
        <BaseView classname='h-[56px] bg-red pl-10 flex flex-row items-center justify-center gap-4'>
          <BaseText locale size={16} bold classname='text-white'>
            Cảnh báo: Robot đang yếu pin
          </BaseText>
          <BaseButton
            onPress={() => setShowBatteryWarning(false)}
            title='Đóng'
            background='black'
            small
          />
        </BaseView>
      )} */}
    </BaseView>
  );
};
