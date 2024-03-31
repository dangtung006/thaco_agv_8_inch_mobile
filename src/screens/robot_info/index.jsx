import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScreen,
  BaseText,
  BaseView,
} from '@src/components';
export default function RoboInfoScreen(props) {
  const viewLeft = () => {
    return (
      <BaseView classname='w-6/12 h-full flex justify-center items-center'>
          <BaseImage
            source={Images.robot1}
            classname='w-8/10'
          />
      </BaseView>
    );
  };

  const infoItem = (title, icon, rightWidget) => {
    return (
      <BaseView classname='flex flex-row mb-11'>
        <BaseImage source={icon} classname='h-[60px] w-[60px] mr-4' />
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
      </BaseView>
    );
  };

  const viewRight = () => {
    return (
      <BaseView classname='w-6/12  h-full flex justify-center items-start'>
        {infoItem('Pin', Images.batteryBg, '100%')}
        {infoItem('Tốc độ', Images.speedBg, '5 Km/h')}
        {infoItem('Trạng thái', Images.statusBg, 'Đang giao đồ ăn')}
        {infoItem(
          'Vị trí hiện tại',
          Images.locationBg,
          <BaseView classname='w-10 h-10 bg-blue rounded-lg flex items-center justify-center'>
            <BaseText bold classname='text-white' size={24}>
              6
            </BaseText>
          </BaseView>
        )}
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
