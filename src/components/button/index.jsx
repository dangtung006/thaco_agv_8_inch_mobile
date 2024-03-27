import { Button, Image, TouchableOpacity, View } from 'react-native';
import BaseText from '../text';
import { classNames } from '@src/utils/common';

export default BaseButton = ({
  locale,
  title = '',
  titleColor = 'white',
  titleSize = 16,
  icon,
  iconColor,
  width,
  background = '#21AFFF',
  borderColor,
  onPress,
  rightWidget,
  disabled,
  shadow,
}) => {
  return (
    <View className='flex flex-row'>
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
          background && { backgroundColor: background },
          borderColor && { borderColor, borderWidth: 1 },
        ]}
        className={classNames(
          'rounded-lg px-5 py-4 shadow flex flex-row ',
          rightWidget
            ? 'justify-between'
            : icon
            ? 'justify-start'
            : 'justify-center',
          typeof width === 'number' ? `w-[${width}px]` : width
        )}
      >
        <View className='flex flex-row items-center'>
          {icon && (
            <Image
              source={icon}
              tintColor={iconColor}
              className='w-6 h-6 mr-2'
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
    </View>
  );
};
