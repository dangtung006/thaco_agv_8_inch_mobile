import { Slider } from '@miblanchard/react-native-slider';
import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseTouchable, BaseView } from '@src/components';
import { useMemo, useState } from 'react';

export const ViewLeft = () => {
  const MAX = 10;
  const MIN = 0.5;
  const [speed, setSpeed] = useState(1.5);

  const handleChangeSpeed = (newSpeed) => {
    console.log('newSpeed', newSpeed, speed);
    if (newSpeed <= MAX && newSpeed >= MIN) {
      setSpeed(newSpeed);
    }
  };

  const _buildSpeed = useMemo(() => {
    return (
      <>
        <BaseText size={20} semiBold>
          <BaseText locale semiBold>
            Tốc độ
          </BaseText>{' '}
          (m/s):{' '}
          <BaseText size={24} semiBold classname='text-blue500'>
            {speed}
          </BaseText>
        </BaseText>
        <BaseView classname='flex flex-row items-center gap-3 mt-3'>
          <BaseTouchable
            onPress={() => {
              if (speed > MIN) handleChangeSpeed(speed - MIN);
            }}
          >
            <BaseImage source={Images.reduce} classname='w-50px h-50px' />
          </BaseTouchable>
          <BaseView classname='flex-1 '>
            <Slider
              value={speed}
              onValueChange={([value]) => handleChangeSpeed(value)}
              minimumValue={0}
              maximumValue={MAX}
              step={MIN}
              minimumTrackTintColor='#1378C0'
              maximumTrackTintColor='#DDF5FF'
              thumbTintColor='#FFFFFF'
              trackStyle={{ height: 16, borderRadius: 100 }}
              thumbStyle={{
                width: 32,
                height: 26,
                borderRadius: 100,
                elevation: 5,
              }}
            />
          </BaseView>
          <BaseTouchable
            onPress={() => {
              if (speed < MAX) handleChangeSpeed(speed + MIN);
            }}
          >
            <BaseImage source={Images.increase} classname='w-50px h-50px' />
          </BaseTouchable>
        </BaseView>
      </>
    );
  }, [speed]);

  const _buildControl = () => {
    return (
      <BaseView classname='mt-10 items-center flex-1 justify-center'>
        <BaseView classname='relative shadow-md w-280px h-280px bg-white rounded-full justify-center items-center flex'>
          <BaseImage
            classname='w-150px h-150px'
            source={Images.control}
          ></BaseImage>
          <BaseView classname='absolute left-0 '>
            <BaseTouchable classname='w-66px h-66px justify-center items-center'>
              <BaseImage
                classname='w-6 h-6 '
                source={Images.leftSmall}
              ></BaseImage>
            </BaseTouchable>
          </BaseView>
          <BaseView classname='absolute top-0 '>
            <BaseTouchable classname='w-66px h-66px justify-center items-center'>
              <BaseImage
                classname='w-6 h-6 '
                source={Images.upSmall}
              ></BaseImage>
            </BaseTouchable>
          </BaseView>
          <BaseView classname='absolute right-0 '>
            <BaseTouchable classname='w-66px h-66px justify-center items-center'>
              <BaseImage
                classname='w-6 h-6 '
                source={Images.rightSmall}
              ></BaseImage>
            </BaseTouchable>
          </BaseView>
          <BaseView classname='absolute bottom-0 '>
            <BaseTouchable classname='w-66px h-66px justify-center items-center'>
              <BaseImage
                classname='w-6 h-6 '
                source={Images.downSmall}
              ></BaseImage>
            </BaseTouchable>
          </BaseView>
        </BaseView>
      </BaseView>
    );
  };

  const _buildUpDownShelves = () => {
    return (
      <BaseView classname='mb-8'>
        <BaseText locale semiBold size={24}>
          Nâng hạ kệ
        </BaseText>
        <BaseView classname='flex flex-row justify-between mt-4 px-20'>
          <BaseView classname='flex justify-center items-center gap-2'>
            <BaseTouchable
              onPressAndHold={() => {
                console.log('nâng kệ');
              }}
              onPress={() => {
                console.log('nâng kệ');
              }}
            >
              <BaseImage source={Images.up} classname='w-120px h-120px' />
            </BaseTouchable>
            <BaseText locale>Nâng lên</BaseText>
          </BaseView>
          <BaseView classname='flex justify-center items-center gap-2'>
            <BaseTouchable
              onPressAndHold={() => {
                console.log('hạ kệ');
              }}
              onPress={() => {
                console.log('hạ kệ');
              }}
            >
              <BaseImage source={Images.down} classname='w-120px h-120px' />
            </BaseTouchable>
            <BaseText locale>Hạ xuống</BaseText>
          </BaseView>
        </BaseView>
      </BaseView>
    );
  };
  return (
    <BaseView classname='w-5/11 bg-bg h-full flex  px-25px pt-16px'>
      {_buildSpeed}
      {_buildControl()}
      {_buildUpDownShelves()}
    </BaseView>
  );
};
