import Images from '@src/assets/gen';
import { BaseButton, BaseScreen, BaseText } from '@src/components';
import { ROUTES, navigate } from '@src/navigation';
import { Image, View } from 'react-native';
export default function HomeScreen(props) {
  const viewLeft = () => {
    return (
      <View className='w-7/12  h-full flex justify-center items-center'>
        <View className='bg-blue200 px-8 py-[50px] rounded-lg'>
          <BaseText locale size={30} semiBold>
            Xin chào! Tôi có thể giúp gì cho bạn?
          </BaseText>
        </View>
        <View>
          <Image source={Images.arrow} className='w-[56px] h-[75px]' />
          <Image
            source={Images.robot}
            style={{ objectFit: 'contain' }}
            className='w-[calc(100vw*0.31)] h-[calc(100vw*0.26)]'
          />
        </View>
      </View>
    );
  };

  const viewRight = () => {
    return (
      <View className='w-5/12 px-10 h-full flex flex-col justify-center items-center '>
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
        <View className='h-[calc(100vh*0.163)]'></View>
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
        <View className='h-6'></View>
        <BaseButton
          onPress={() => navigate(ROUTES.ROBOT_INFO)}
          title='Quản lý thông tin Robot'
          titleSize={20}
          width={'w-full'}
          icon={Images.robotSetting}
          shadow
        />
        <View className='h-6'></View>
        <BaseButton
          onPress={() => navigate(ROUTES.MOVEMENT_CONTROL)}
          title='Điều khiển di chuyển'
          titleSize={20}
          width={'w-full'}
          icon={Images.control}
          shadow
        />
        <View className='h-6'></View>
        <BaseButton
          onPress={() => navigate(ROUTES.TASK_MANAGER)}
          title='Quản lý nhiệm vụ'
          titleSize={20}
          width={'w-full'}
          icon={Images.task}
          shadow
        />
      </View>
    );
  };

  return (
    <BaseScreen>
      {viewLeft()}
      {viewRight()}
    </BaseScreen>
  );
}
