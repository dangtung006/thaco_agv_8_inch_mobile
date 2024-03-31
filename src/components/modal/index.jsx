import { useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';

export default function BaseModal({
  visible,
  onBackdropPress,
  onRequestClose,
  children,
  backdropColor,
  backdropOpacity,
  transparent = true,
}) {
  return (
    <ReactNativeModal
      transparent={transparent}
      animationType='slide'
      isVisible={visible}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor}
      onBackdropPress={onBackdropPress}
      onRequestClose={onRequestClose}
    >
      {children}
    </ReactNativeModal>
  );
}
