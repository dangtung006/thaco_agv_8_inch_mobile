import { BaseText, BaseTouchable, BaseView } from '@src/components';

export default TaskCompleted = () => {
  return (
    <BaseView classname='flex flex-row p-4 w-full'>
      <BaseView classname='flex flex-row p-1  rounded-lg items-center w-full'>
        <BaseView classname='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
          <BaseText size={16} bold>
            1
          </BaseText>
        </BaseView>
        <BaseView classname='flex-1 flex flex-row ml-2 border border-green rounded-lg items-center p-2'>
          <BaseText classname='text-green flex-1' semiBold size={14}>
            Name 1234
          </BaseText>
          <BaseTouchable
            classname=' bg-green py-2 px-4 rounded-lg'
            onPress={() => {}}
          >
            <BaseText locale classname='text-white' semiBold size={14}>
              Đã xong
            </BaseText>
          </BaseTouchable>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};
