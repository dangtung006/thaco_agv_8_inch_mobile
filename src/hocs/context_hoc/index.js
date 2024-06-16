import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useCommonState } from '@src/store/commonStorage';
import {
  DisconnectNetworkScreen,
  PositioningErrorScreen,
  SleepScreen,
} from '@src/screens';
import { NativeModules, NativeEventEmitter, Text } from 'react-native';

const withContext = (WrappedComponent) => {
  return (props) => {
    const {
      networkConnected,
      setNetWorkConnected,
      setBatteryLevel,
    } = useCommonState((state) => state);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setNetWorkConnected(state.isConnected);
      });

      return () => {
        unsubscribe();
      };
    }, []);

    useEffect(() => {
      const deviceInfoEmitter = new NativeEventEmitter(
        NativeModules.RNDeviceInfo
      );
      const subscription = deviceInfoEmitter.addListener(
        'RNDeviceInfo_batteryLevelDidChange',
        (level) => {
          setBatteryLevel(Math.round(level * 100));
        }
      );
      return () => subscription.remove();
    }, []);

    return (
      <>
        <WrappedComponent {...props} />
        {!networkConnected && <DisconnectNetworkScreen />}
        <PositioningErrorScreen />
        <SleepScreen />
      </>
    );
  };
};

export default withContext;
