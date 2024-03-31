import Images from '@src/assets/gen';
import {
  BaseImageBackground,
  BaseScrollView,
  BaseText,
  BaseView,
} from '@src/components';
import { useLocalStorage } from '@src/store/localStorage';
import { classnames } from '@src/utils/common';
import { useState } from 'react';

export default function PositionControl() {
  const [positions, setPositions] = useState([
    1, 2, 3, 4, 5, 6, 78, 9, 9, 1, 2, 3, 4, 5, 6, 78, 9, 9, 1, 2, 3, 4, 5, 6,
    78, 9, 9, 1, 2, 3, 4, 5, 6, 78, 9, 9, 1, 2, 3, 4, 5, 6, 78, 9, 9, 1, 2, 3,
    4, 5, 6, 78, 9, 9, 1, 2, 3, 4, 5, 6, 78, 9, 9,
  ]);
  const { locale } = useLocalStorage((state) => state);

  return (
    <BaseImageBackground
      source={locale === 'vi' ? Images.bgTaskVi : Images.bgTaskEn}
      classname='w-full aspect-100/64 flex flex-row'
    >
      <BaseView classname='w-15/100'></BaseView>
      <BaseView classname='w-85/100'>
        <BaseView classname='aspect-100/12'></BaseView>
        <BaseScrollView classname='pr-9'>
          <BaseView classname='flex flex-wrap flex-row  gap-x-10 gap-y-5 justify-between'>
            {positions.map((item, index) => {
              return (
                <BaseView
                  key={index}
                  classname={classnames(
                    'w-56px h-56px rounded-lg flex justify-center items-center',
                    index > 10 ? 'bg-greyBt' : 'bg-blue'
                  )}
                >
                  <BaseText bold size={24} classname='text-white'>
                    {index + 1}
                  </BaseText>
                </BaseView>
              );
            })}
          </BaseView>
        </BaseScrollView>
        <BaseView classname='h-6'></BaseView>
      </BaseView>
    </BaseImageBackground>
  );
}
