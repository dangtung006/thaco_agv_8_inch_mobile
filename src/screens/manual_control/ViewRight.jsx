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
  const [ip, setIp] = useState('192.168.2.109');
  const [location, setLocation] = useState('Vị trí bếp');
  const [isProcessing, setProcessing] = useState(false);

  const _buildInfo = useMemo(
    () => (
      <BaseView classname='flex flex-row gap-3'>
        <BaseView classname='flex gap-2 flex-row flex-1 h-65px rounded-3xl bg-blue300 items-center justify-start px-20px'>
          <BaseImage source={Images.ip} classname='w-44px h-44px mt-1' />
          <BaseText semiBold size={24}>
            {ip}
          </BaseText>
        </BaseView>
        <BaseView classname='flex gap-2 flex-row flex-1 h-65px rounded-3xl bg-blue300 items-center justify-start px-20px'>
          <BaseImage source={Images.location} classname='w-35px h-35px' />
          <BaseText semiBold size={24}>
            {location}
          </BaseText>
        </BaseView>
      </BaseView>
    ),
    [ip, location]
  );

  const _buildSelectPosition = useMemo(
    () => (
      <BaseView classname=''>
        <BaseText locale size={24} semiBold classname='mt-30px'>
          Điều khiển tự động theo vị trí
        </BaseText>
        <BaseSelect
          classname='mt-3'
          onChange={(data) => {
            console.log('data', data);
          }}
          value={{ title: 'Vị trí nhà bếp', id: '1' }}
          data={[
            { title: 'Vị trí nhà bếp', id: '1' },
            { title: 'Vị trí sạc pin', id: '2' },
          ]}
        />
      </BaseView>
    ),
    []
  );

  const _buildAction = useMemo(
    () => (
      <BaseView classname='flex-1'>
        <BaseButton
          onPress={() => setProcessing(true)}
          title='Bắt đầu điều hướng'
          background='blue500'
          classname='h-70px mt-10'
          titleColor='white'
          titleSize={28}
        />
        {/* ////////////////////////////////////////////// */}
        <BaseView classname='flex flex-1 flex-row justify-center mt-10 gap-50px'>
          {isProcessing && (
            <>
              <BaseView classname='flex flex-col items-center'>
                <BaseTouchable onPress={() => setProcessing(!isProcessing)}>
                  <BaseImage
                    source={!isProcessing ? Images.play : Images.pause}
                    classname='w-120px h-120px'
                  />
                </BaseTouchable>
                <BaseText locale size={18} classname='mt-2'>
                  {isProcessing ? 'Tạm dừng' : 'Chạy'}
                </BaseText>
              </BaseView>
              <BaseView classname='flex flex-col items-center'>
                <BaseTouchable onPress={() => setProcessing(!isProcessing)}>
                  <BaseImage
                    source={isProcessing ? Images.stop : Images.pauseInactive}
                    classname='w-120px h-120px'
                  />
                </BaseTouchable>
                <BaseText locale size={18} classname='mt-2'>
                  Kết thúc
                </BaseText>
              </BaseView>
            </>
          )}
        </BaseView>
        {/* ////////////////////////////////////////////// */}
        <BaseButton
          title='Dừng khẩn cấp'
          background='red'
          classname='h-100px mt-10'
          titleColor='white'
          titleSize={28}
          onPress={() => setProcessing(false)}
        />
      </BaseView>
    ),
    [isProcessing]
  );
  return (
    <BaseView classname='flex-1 bg-bg h-full flex flex-col px-36px py-20px'>
      {_buildInfo}
      {_buildSelectPosition}
      {_buildAction}
    </BaseView>
  );
};
