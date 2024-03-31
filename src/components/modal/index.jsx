import { useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';

export default function BaseModal({
  visible,
  onBackdropPress,
  onRequestClose,
  children,
}) {
  return (
    <ReactNativeModal
      transparent={true}
      animationType='slide'
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      onRequestClose={onRequestClose}
    >
      {children}
    </ReactNativeModal>
  );
}
