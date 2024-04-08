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
        <BaseTouchable
            disabled={disabled}
            onPress={onPress}
            classname={classnames(
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
            )}
        >
            <>
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
            </>
        </BaseTouchable>
    );
};
