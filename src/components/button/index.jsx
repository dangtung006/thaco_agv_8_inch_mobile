import BaseText from '../text';
import { classnames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import BaseView from '../view';
import BaseImage from '../image';
import BaseTouchable from '../touchable';

export default BaseButton = ({
  classname = '',
  locale = true,
  large = true,
  small,
  title = '',
  titleColor = 'darkText',
  titleSize = 16,
  icon,
  iconColor,
  iconStyle,
  width,
  background,
  borderColor,
  onPress,
  rightWidget,
  disabled,
  shadow = false,
  isInsideModal = false,
}) => {
  return (
    <BaseTouchable
      onPress={onPress}
      classname={classnames(
        'rounded-lg flex flex-row items-center',
        rightWidget
          ? 'justify-between'
          : icon
          ? 'justify-start'
          : 'justify-center',
        large && !small ? 'px-5 h-[90px]' : 'px-4 h-[60px]',
        shadow ? 'shadow-lg' : '',
        typeof width === 'number' ? `w-[${width}px]` : width,
        background ? `bg-${background}` : '',
        borderColor ? `border border-${borderColor}` : '',
        classname
      )}
      isInsideModal={isInsideModal}
    >
      <BaseView classname='flex flex-row items-center'>
        {icon && (
          <BaseImage
            source={icon}
            tintColor={iconColor}
            classname={classnames('w-6 h-6 mr-2', iconStyle)}
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
      </BaseView>
      {rightWidget}
    </BaseTouchable>
  );
};
