import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseTouchable, BaseView } from '@src/components';

export const ViewLeft = ({ nextStep }) => {
  return (
    <BaseView classname='w-7/13 bg-bg h-full flex  px-25px pt-16px justify-center items-center'>
      <BaseView classname='flex flex-row gap-3'>
        <BaseText locale size={28}>
          Kịch bản:
        </BaseText>
        <BaseText locale semiBold size={28} classname='text-blue500'>
          Tên kịch bản
        </BaseText>
      </BaseView>
      <BaseView classname='flex flex-row mt-4 gap-3'>
        <BaseText locale size={28}>
          Vị trí hiện tại:
        </BaseText>
        <BaseText locale semiBold size={28} classname='text-blue500'>
          Vị trí của AMR
        </BaseText>
      </BaseView>
      <BaseTouchable
        onPress={nextStep}
        classname='flex mt-100px flex-row items-center h-160px w-450px bg-blue500 rounded-30px justify-center gap-4'
      >
        <BaseText locale semiBold size={32} classname='text-white'>
          Hoàn thành bước
        </BaseText>
        <BaseImage source={Images.arrowRight} classname='w-60px h-60px' />
      </BaseTouchable>
    </BaseView>
  );
};
