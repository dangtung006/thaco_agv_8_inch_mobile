import { classNames } from '@src/utils/common';
import tw from '@src/utils/tailwindLoader';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

export default function BaseText({
  bold,
  semiBold,
  medium,
  locale,
  size,
  classname = '',
  children,
}) {
  const { t } = useTranslation();

  const font = useMemo(() => {
    if (bold) {
      return { fontFamily: 'Inter-Bold' };
    }
    if (semiBold) {
      return { fontFamily: 'Inter-SemiBold' };
    }
    if (medium) {
      return { fontFamily: 'Inter-Medium' };
    }

    return { fontFamily: 'Inter-Regular' };
  }, [bold, semiBold, medium]);

  return (
    <Text
      allowFontScaling={false}
      style={[
        font,
        {
          fontSize: size,
          includeFontPadding: false,
          letterSpacing: 0,
        },
        tw`${classNames('text-black', classname || '')}`,
      ]}
    >
      {locale ? t(children) : children}
    </Text>
  );
}
