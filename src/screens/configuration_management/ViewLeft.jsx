import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseView } from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import { useWindowDimensions } from 'react-native';

export const ViewLeft = () => {
  const { networkConnected, batteryLevel } = useCommonState((state) => state);
  const Items = [
    {
      icon: Images.wifiBlue,
      title: 'Trạng thái kết nối',
      status: !networkConnected ? 'Đã kết nối' : 'Chưa kết nối',
    },
    {
      icon: Images.pin,
      title: 'Trạng thái pin',
      status: batteryLevel && `${batteryLevel}%`,
    },
    {
      icon: Images.mission,
      title: 'Trạng thái nhiệm vụ',
      status: 'Đang thực hiện',
    },
    {
      icon: Images.control2,
      title: 'Trạng thái điều khiển',
      status: 'Tự động',
    },
  ];
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const itemSize = ((windowWidth / 11) * 5 - 50 - 50) / 2;
  const _buildItem = (item, index) => {
    return (
      <BaseView
        key={index}
        classname={`shadow-sm
    bg-white rounded-lg w-[${itemSize}px] h-[${itemSize}px] flex flex-col items-center justify-center gap-4`}
      >
        <BaseImage source={item.icon} classname='w-64px h-64px' />
        <BaseText locale>{item.title}</BaseText>
        <BaseText locale size={24} classname='text-blue500'>
          {item.status}
        </BaseText>
      </BaseView>
    );
  };

  return (
    <BaseView classname='w-5/11 bg-bg h-full flex px-25px py-50px flex-row flex-wrap gap-48px'>
      {Items.map((item, index) => _buildItem(item, index))}
    </BaseView>
  );
};
