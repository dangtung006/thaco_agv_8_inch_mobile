import Images from '@src/assets/gen';
import {
  BaseImage,
  BaseModal,
  BaseText,
  BaseTouchable,
  BaseView,
} from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import tw from '@src/utils/tailwindLoader';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function DisconnectNetwork(props) {
  const { networkConnected } = useCommonState((state) => state);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    if (!networkConnected) setShow(true);
  }, [networkConnected]);

  return (
    <BaseModal
      visible={isShow}
      backdropColor='white'
      backdropOpacity={1}
    >
      <BaseView classname='relative flex-1 w-full justify-center items-center'>
        <BaseText locale size={40} semiBold classname='text-red'>
          Mất kết nối mạng !
        </BaseText>
        <BaseText locale size={35} classname='mt-10'>
          Robot đã mất kết nối mạng.
        </BaseText>
        <BaseText locale size={35}>
          Vui lòng kiếm tra wifi hoặc hệ thống mạng của bạn.
        </BaseText>
        <TouchableOpacity
          style={tw`absolute top-30px right-26px`}
          onPress={() => {
            setShow(false);
          }}
        >
          <BaseImage source={Images.close} classname='w-10 h-10' />
        </TouchableOpacity>
      </BaseView>
    </BaseModal>
  );
}
