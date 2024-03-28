import { Button, Image, TouchableOpacity, View } from 'react-native';
import BaseText from '../text';
import { classNames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';

export default BaseButton = ({
  classname,
  locale = true,
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
  shadow,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        shadow && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        },
        tw`${classNames(
          'rounded-lg px-5 py-4 shadow flex flex-row ',
          rightWidget
            ? 'justify-between'
            : icon
            ? 'justify-start'
            : 'justify-center',
          classname,
          typeof width === 'number' ? `w-[${width}px]` : width,
          background ? `bg-${background}` : '',
          borderColor ? `border border-${borderColor}` : ''
        )}`,
      ]}
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
