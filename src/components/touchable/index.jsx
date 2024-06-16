import { useCommonState } from '@src/store/commonStorage';
import tw from '@src/utils/tailwindLoader';
import { useRef } from 'react';
import { TouchableOpacity as TouchableOpacityRN } from 'react-native';
import {
  TouchableOpacity as TouchableOpacityGH,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

export default function BaseTouchable({
  classname = '',
  children,
  onPress,
  activeOpacity,
  withoutFeedback,
  onPressAndHold,
  isInsideModal = false,
}) {
  const { setSleep } = useCommonState((state) => state);
  const intervalRef = useRef(null);

  const startAction = () => {
    if (onPressAndHold) {
      intervalRef.current = setInterval(() => {
        onPressAndHold();
      }, 100); // Thực hiện hành động mỗi 100ms
    }
  };

  const stopAction = () => {
    if (intervalRef.current && onPressAndHold) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      {withoutFeedback ? (
        <TouchableWithoutFeedback
          onPressIn={() => {
            setSleep(undefined);
            setTimeout(() => {
              setSleep(false);
            }, 50);
          }}
          onPress={onPress}
          style={tw`${classname}`}
        >
          {children}
        </TouchableWithoutFeedback>
      ) : !!isInsideModal ? (
        <TouchableOpacityRN
          activeOpacity={activeOpacity}
          onPress={onPress}
          onPressIn={startAction}
          onPressOut={stopAction}
          style={tw`${classname}`}
        >
          {children}
        </TouchableOpacityRN>
      ) : (
        <TouchableOpacityGH
          activeOpacity={activeOpacity}
          onPress={onPress}
          onPressIn={startAction}
          onPressOut={stopAction}
          style={tw`${classname}`}
        >
          {children}
        </TouchableOpacityGH>
      )}
    </>
  );
}
