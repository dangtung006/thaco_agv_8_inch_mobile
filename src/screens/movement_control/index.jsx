import Images from '@src/assets/gen';
import { BaseButton, BaseScreen, BaseText } from '@src/components';
import { Image, View } from 'react-native';
export default function MovementControlScreen(props) {
  const viewLeft = () => {
    return (
      <View className='w-6/12 h-full flex justify-center items-center'>
        <Image
          source={Images.robot1}
          style={{ objectFit: 'contain' }}
          className='w-[calc(100vw*0.45)] h-[calc(100vw*0.35)]'
        />
      </View>
    );
  };

  const infoItem = (title, icon, rightWidget) => {
    return (
      <View className='flex flex-row mb-11'>
        <Image source={icon} className='h-[60px] w-[60px] mr-4' />
        <BaseButton
          classname='w-9/12'
          title={title}
          background='blue200'
          borderColor='blue'
          titleColor='black'
          rightWidget={
            typeof rightWidget === 'string' ? (
              <BaseText locale bold size={20} classname='text-blue500'>
                {rightWidget}
              </BaseText>
            ) : (
              rightWidget
            )
          }
        />
      </View>
    );
  };

  const viewRight = () => {
    return (
      <View className='w-6/12  h-full flex justify-center items-start'>
        {infoItem('Pin', Images.batteryBg, '100%')}
        {infoItem('Tốc độ', Images.speedBg, '5 Km/h')}
        {infoItem('Trạng thái', Images.statusBg, 'Đang giao đồ ăn')}
        {infoItem(
          'Vị trí hiện tại',
          Images.locationBg,
          <View className='w-10 h-10 bg-blue rounded-lg flex items-center justify-center'>
            <BaseText bold classname='text-white' size={24}>
              6
            </BaseText>
          </View>
        )}
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
