import React from 'react';
import BaseView from '../view';
import BaseTouchable from '../touchable';
import { classnames } from '@src/utils/common';

const CustomToggleSwitch = ({ value, onChange }) => {
  return (
    <BaseView classname='justify-center items-center bg-white'>
      <BaseTouchable
        classname={classnames(
          'w-46px h-24px rounded-full px-1 justify-center',
          value ? `bg-blue` : `bg-greyBt`
        )}
        onPress={() => onChange(!value)}
        activeOpacity={0.6}
      >
        <BaseView
          classname={classnames(
            `w-18px h-18px rounded-full bg-white`,
            value ? `ml-auto` : `mr-auto`
          )}
        />
      </BaseTouchable>
    </BaseView>
  );
};

export default CustomToggleSwitch;
