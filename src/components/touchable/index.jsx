import { useCommonState } from '@src/store/commonStorage';
import tw from '@src/utils/tailwindLoader';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import BaseView from '../view';

export default function BaseTouchable({
  classname = '',
  children,
  onPress,
  activeOpacity,
  withoutFeedback,
}) {
  const { setSleep } = useCommonState((state) => state);
  return (
    <>
      {withoutFeedback ? (
        <TouchableWithoutFeedback
          onPress={() => {
            onPress && onPress();
            setSleep(undefined);
            setTimeout(() => {
              setSleep(false);
            }, 50);
          }}
          style={tw`${classname}`}
        >
          {children}
        </TouchableWithoutFeedback>
      ) : (
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            onPress && onPress();
            setSleep(undefined);
            setTimeout(() => {
              setSleep(false);
            }, 50);
          }}
          style={tw`${classname}`}
        >
          {children}
        </TouchableOpacity>
      )}
    </>
  );
}
