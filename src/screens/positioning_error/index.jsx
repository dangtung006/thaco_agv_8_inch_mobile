import Images from '@src/assets/gen';
import {
  BaseImage,
  BaseModal,
  BaseText,
  BaseTouchable,
  BaseView,
  BaseButton,
} from '@src/components';
import tw from '@src/utils/tailwindLoader';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function PositioningError(props) {
  const [isShow, setShow] = useState(true);

  return (
    <BaseModal visible={isShow} backdropColor='white' backdropOpacity={1}>
      <BaseView classname='relative flex-1 w-full justify-center items-center'>
        <BaseText locale size={40} semiBold classname='text-red'>
          Lỗi định vị !
        </BaseText>
        <BaseText locale size={35} classname='mt-10'>
          Robot không thể xác định vị trí hiện tại
        </BaseText>

        <BaseView classname='flex flex-row mt-100px gap-50px'>
          <BaseButton
            onPress={() => {
              setShow(false);
            }}
            title='Đóng'
            borderColor='greyBorder'
            titleSize={30}
            locale
            background='white'
            classname='w-300px'
            isInsideModal
          ></BaseButton>
          <BaseButton
            onPress={() => {}}
            title='Xem danh sách lỗi'
            titleColor='white'
            titleSize={30}
            locale
            background='blue'
            classname='w-300px'
            isInsideModal
          ></BaseButton>
        </BaseView>
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
