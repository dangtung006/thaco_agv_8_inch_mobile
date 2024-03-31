import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScreen,
  BaseText,
  BaseView,
} from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
export default function HomeScreen(props) {
  const viewLeft = () => {
    return (
      <BaseView classname='w-7/12 p-10 h-full flex justify-center items-center'>
        <BaseView classname='bg-blue200 w-full px-8 py-[50px] rounded-lg'>
          <BaseText locale size={30} semiBold>
            Xin chào! Tôi có thể giúp gì cho bạn?
          </BaseText>
        </BaseView>
        <BaseView classname='w-7/10 flex-1 flex'>
          <BaseImage
            source={Images.arrow}
            classname='w-[56px] h-[75px]'
          />
          <BaseImage
            source={Images.robot}
            classname='w-full flex-1'
          />
        </BaseView>
      </BaseView>
    );
  };

  const viewRight = () => {
    return (
      <BaseView classname='w-5/12 px-10 h-full flex flex-col justify-center items-center '>
        <BaseButton
          title='SOS'
          background='white'
          borderColor='red'
          titleColor='red'
          titleSize={20}
          width={'w-full'}
          icon={Images.phone}
          rightWidget={
            <BaseText classname='text-red' size={24} bold>
              0123456789
            </BaseText>
          }
        />
        <BaseView classname='h-[100px]'></BaseView>
        <BaseButton
          onPress={() => navigate(ROUTES.SETTING)}
          title='Cài đặt'
          background='white'
          borderColor='black'
          titleColor='black'
          titleSize={20}
          width={'w-full'}
          icon={Images.setting}
          shadow
        />
        <BaseView classname='h-6'></BaseView>
        <BaseButton
          onPress={() => navigate(ROUTES.ROBOT_INFO)}
          title='Quản lý thông tin Robot'
          titleSize={20}
          width={'w-full'}
          icon={Images.robotSetting}
          shadow
        />
        <BaseView classname='h-6'></BaseView>
        <BaseButton
          onPress={() => navigate(ROUTES.MOVEMENT_CONTROL)}
          title='Điều khiển di chuyển'
          titleSize={20}
          width={'w-full'}
          icon={Images.control}
          shadow
        />
        <BaseView classname='h-6'></BaseView>
        <BaseButton
          onPress={() => navigate(ROUTES.TASK_MANAGER)}
          title='Quản lý nhiệm vụ'
          titleSize={20}
          width={'w-full'}
          icon={Images.task}
          shadow
        />
      </BaseView>
    );
  };

  return (
    <BaseScreen>
      {viewLeft()}
      {viewRight()}
    </BaseScreen>
  );
}
