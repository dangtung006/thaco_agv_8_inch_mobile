import Images from '@src/assets/gen';
import { BaseImage, BaseScreen, BaseText, BaseView } from '@src/components';
import tw from '@src/utils/tailwindLoader';
import { TouchableOpacity } from 'react-native';

export const SosModal = ({ onClose }) => {
  return (
    <BaseView classname='flex flex-col justify-center items-center bg-white py-140px rounded-lg'>
      <BaseText locale size={32} classname='text-center max-w-2/3'>
        Bạn có chắc muốn gửi thông báo này về hệ thống trung tâm không?
      </BaseText>
      <BaseView classname='flex flex-row mt-100px gap-50px'>
        <BaseButton
          onPress={() => onClose()}
          title='Đóng'
          borderColor='greyBorder'
          titleSize={30}
          locale
          background='white'
          classname='w-300px h-70px'
          isInsideModal
        ></BaseButton>
        <BaseButton
          onPress={() => onClose()}
          title='Xác nhận'
          titleColor='white'
          titleSize={30}
          locale
          background='blue500 h-70px'
          classname='w-300px'
          isInsideModal
        ></BaseButton>
      </BaseView>
      <TouchableOpacity
        style={tw`absolute top-30px right-26px`}
        onPress={() => onClose()}
      >
        <BaseImage source={Images.close} classname='w-10 h-10' />
      </TouchableOpacity>
    </BaseView>
  );
};
