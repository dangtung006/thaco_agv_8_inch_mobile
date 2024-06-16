import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScrollView,
  BaseSelect,
  BaseText,
  BaseTouchable,
  BaseView,
} from '@src/components';
import { useMemo, useState } from 'react';

export const ViewRight = () => {
  const items = [
    {
      title: 'Mã robot',
      value: 'RB001',
    },
    {
      title: 'Tên robot',
      value: 'RobotX_2024',
    },
    {
      title: 'Địa chỉ IP',
      value: '192.168.2.109',
    },
    {
      title: 'Đoàn hoạt động',
      value: 'Đoàn 01',
    },
    {
      title: 'Vị trí hiện tại',
      value: 'Bàn 01',
    },
    {
      title: 'Tốc độ di chuyển',
      value: '0.5 m/s',
    },
  ];

  const _buildItem = (item, index) => {
    return (
      <BaseView
        key={index}
        classname='flex flex-row items-center justify-between mt-10px'
      >
        <BaseText size={20} semiBold locale>
          {item.title}
        </BaseText>
        <BaseText size={20} semiBold classname='text-blue500'>
          {item.value}
        </BaseText>
      </BaseView>
    );
  };

  const _buildInfo = useMemo(() => {
    return (
      <BaseView classname='p-36px justify-between flex-1'>
        {items.map((item, index) => _buildItem(item, index))}
      </BaseView>
    );
  }, []);
  return (
    <BaseView classname='flex-1 bg-bg h-full flex flex-col pr-44px pl-25px py-50px'>
      <BaseView classname='bg-white w-full h-full rounded-lg shadow-sm'>
        <BaseView classname='p-6 border-b border-greyBt50 flex flex-row items-end gap-3'>
          <BaseImage source={Images.robot} classname='w-8 h-8' />
          <BaseText semiBold size={20} locale>
            Thông tin robot
          </BaseText>
        </BaseView>
        {/* ///////////////////////////////////// */}
        {_buildInfo}
      </BaseView>
    </BaseView>
  );
};
