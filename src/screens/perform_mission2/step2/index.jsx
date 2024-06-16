import { BaseText, BaseTouchable, BaseView } from '@src/components';

export default function Step2() {
  return (
    <BaseView classname='bg-bg flex-1 justify-center items-center'>
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
      <BaseText locale size={30} classname='italic mt-50px'>
        "Robot AMR đã hoàn thành công đoạn.
      </BaseText>
      <BaseText locale size={30} classname='italic'>
        Xin vui lòng đợi các robot AMR khác."
      </BaseText>

      <BaseTouchable classname='mt-140px py-10px'>
        <BaseText semiBold locale size={30} classname='text-red underline'>
          Hủy hoàn thành
        </BaseText>
      </BaseTouchable>
    </BaseView>
  );
}
