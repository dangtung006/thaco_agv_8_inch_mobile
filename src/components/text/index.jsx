import { classnames } from '@src/utils/common';
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
      return { fontFamily: 'Nunito-Bold' };
    }
    if (semiBold) {
      return { fontFamily: 'Nunito-SemiBold' };
    }
    if (medium) {
      return { fontFamily: 'Nunito-Medium' };
    }

    return { fontFamily: 'Nunito-Regular' };
  }, [bold, semiBold, medium]);

  return (
    <Text
      allowFontScaling={false}
      style={[
        font,
        {
          fontSize: size || 18,
          includeFontPadding: false,
          letterSpacing: 0,
        },
        tw`${classnames('text-darkText', classname || '')}`,
      ]}
    >
      {locale ? t(children) : children}
    </Text>
  );
}
