import { Button, Image, TouchableOpacity, View } from 'react-native';
import BaseText from '../text';
import { classNames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';

export default BaseButton = ({
  classname,
  locale = true,
  large = true,
  small,
  title = '',
  titleColor = 'white',
  titleSize = 16,
  icon,
  iconColor,
  iconStyle,
  width,
  background = 'blue500',
  borderColor,
  onPress,
  rightWidget,
  disabled,
  shadow = true,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={tw`${classNames(
        'rounded-lg flex flex-row items-center',
        rightWidget
          ? 'justify-between'
          : icon
          ? 'justify-start'
          : 'justify-center',
        classname,
        large && !small ? 'px-5 h-[60px]' : 'px-4 h-[46px]',
        shadow ? 'shadow-lg' : '',
        typeof width === 'number' ? `w-[${width}px]` : width,
        background ? `bg-${background}` : '',
        borderColor ? `border border-${borderColor}` : ''
      )}`}
    >
      <View className='flex flex-row items-center'>
        {icon && (
          <Image
            source={icon}
            tintColor={iconColor}
            style={tw`${classNames('w-6 h-6 mr-2', iconStyle)}`}
          />
        )}
        <BaseText
          locale={locale}
          semiBold
          size={titleSize}
          classname={`text-${titleColor}`}
        >
          {title}
        </BaseText>
      </View>
      {rightWidget}
    </TouchableOpacity>
  );
};
