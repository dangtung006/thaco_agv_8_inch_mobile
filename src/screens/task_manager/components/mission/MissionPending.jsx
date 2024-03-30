import { BaseText, BaseTouchable, BaseView } from '@src/components';

export default TaskPending = ({ onPress }) => {
  return (
    <BaseView classname='flex flex-row p-4 w-full'>
      <BaseView classname='flex flex-row p-1 rounded-lg items-center w-full'>
        <BaseView classname='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
          <BaseText size={16} bold>
            1
          </BaseText>
        </BaseView>
        <BaseView classname='flex-1 flex flex-row ml-2 bg-white border border-black rounded-lg items-center p-2'>
          <BaseText classname='flex-1' semiBold size={14}>
            Name 1234
          </BaseText>
          <BaseTouchable
            classname=' bg-blue500 py-2 px-4 rounded-lg'
            onPress={onPress}
          >
            <BaseText locale classname='text-white' semiBold size={14}>
              Xác nhận
            </BaseText>
          </BaseTouchable>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};
