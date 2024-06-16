import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseTouchable, BaseView } from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import { useMemo, useState } from 'react';
import { Image } from 'react-native';

export const ViewRight = () => {
  return (
    <BaseView classname='flex-1 bg-white h-full flex flex-col px-36px pt-25px '>
      <BaseText locale semiBold size={20}>
        Nâng hạ kệ
      </BaseText>
      <BaseView classname='flex flex-row flex-1'>
        <BaseImage source={Images.shelves} classname='w-1/2 h-auto' />
        <BaseView classname='flex flex-col items-center justify-center flex-1 gap-6'>
          <BaseTouchable
            classname='items-center gap-2'
            onPressAndHold={() => {
              console.log('nâng kệ');
            }}
            onPress={() => {
              console.log('nâng kệ');
            }}
          >
            <BaseImage source={Images.up} classname='w-120px h-120px' />
            <BaseText locale>Nâng lên</BaseText>
          </BaseTouchable>
          <BaseTouchable
            classname='items-center gap-2'
            onPressAndHold={() => {
              console.log('hạ kệ');
            }}
            onPress={() => {
              console.log('hạ kệ');
            }}
          >
            <BaseImage source={Images.down} classname='w-120px h-120px' />
            <BaseText locale>Hạ xuống</BaseText>
          </BaseTouchable>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};
