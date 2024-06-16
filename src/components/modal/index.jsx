import tw from '@src/utils/tailwindLoader';
import ReactNativeModal from 'react-native-modal';

export default function BaseModal({
  visible,
  onBackdropPress,
  children,
  backdropColor,
  backdropOpacity,
  classname,
}) {
  return (
    <ReactNativeModal
      isVisible={visible}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor}
      onBackdropPress={onBackdropPress}
      statusBarTranslucent
      style={[{ margin: 0 }, tw`${classname}`]}
    >
      {children}
    </ReactNativeModal>
  );
}
