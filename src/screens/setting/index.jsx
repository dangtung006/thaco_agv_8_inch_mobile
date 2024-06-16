import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScreen,
  BaseText,
  BaseTextInput,
  BaseToggle,
  BaseView,
} from '@src/components';
import { useLocalStorage } from '@src/store/localStorage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Text, TextInput } from 'react-native';
export default function SettingScreen(props) {
  const [isSettingLocale, setSettingLocale] = useState(false);
  const viewLeft = () => {
    return (
      <BaseView classname='w-4/12 pl-10 pt-6 bg-greyBg h-full flex justify-start'>
        <BaseButton
          onPress={() => setSettingLocale(false)}
          title='Thiết lập phân phối'
          background={!isSettingLocale ? 'orange500' : 'greyBg'}
          titleColor={!isSettingLocale ? 'white' : 'greyText'}
          iconColor={!isSettingLocale ? 'white' : '#8D8D8D'}
          titleSize={20}
          iconStyle='w-34px h-34px'
          classname='h-50px w-full '
          icon={Images.clock}
          shadow={false}
        />
        <BaseView classname='h-4'></BaseView>
        <BaseButton
          onPress={() => setSettingLocale(true)}
          title='Ngôn ngữ'
          background={isSettingLocale ? 'orange500' : 'greyBg'}
          titleColor={isSettingLocale ? 'white' : 'greyText'}
          iconColor={isSettingLocale ? 'white' : '#8D8D8D'}
          titleSize={20}
          iconStyle='w-34px h-34px'
          classname='h-50px w-full'
          icon={Images.languague}
          shadow={false}
        />
      </BaseView>
    );
  };

  const viewRight = () => {
    return (
      <BaseView classname='w-8/12 p-10 h-full flex flex-col'>
        {isSettingLocale ? <SettingLocale /> : <SettingDistribution />}
      </BaseView>
    );
  };

  return (
    <BaseScreen>
      {viewLeft()}
      {viewRight()}
    </BaseScreen>
  );
}

const SettingDistribution = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <BaseView classname='flex-row flex border-b-2 border-greyBt pb-5 justify-between gap-4'>
      <BaseView classname='flex flex-row flex-1 items-center'>
        <BaseView>
          <BaseText locale size={16}>
            Thời gian nhận hàng tự động
          </BaseText>
          <BaseText size={16}>
            (1 - 600
            <BaseText locale>giây</BaseText>)
          </BaseText>
        </BaseView>
        <BaseTextInput
          defaultValue={'5'}
          keyboardType='numeric'
          classname='ml-10 h-55px text-base flex-1'
        />
      </BaseView>
      <BaseToggle value={isEnabled} onChange={(value) => setIsEnabled(value)} />
    </BaseView>
  );
};

const SettingLocale = () => {
  const { locale, setLocale } = useLocalStorage((state) => state);

  return (
    <BaseView classname='flex-row flex  justify-between '>
      <BaseView classname='flex-1'>
        <BaseButton
          locale={false}
          onPress={() => setLocale('en')}
          title='English'
          classname='w-full h-70px rounded-32px'
          background='greyBg'
          borderColor={locale === 'en' ? 'blue500' : 'greyText'}
          titleColor={locale === 'en' ? 'blue500' : 'darkText'}
          iconStyle='w-12 h-10'
          titleSize={24}
          icon={Images.en}
          rightWidget={
            <BaseImage
              source={
                locale === 'en' ? Images.radioActive : Images.radioInactive
              }
              classname='w-8 h-8'
            />
          }
        />
      </BaseView>
      <BaseView classname='w-4'></BaseView>
      <BaseView classname='flex-1'>
        <BaseButton
          locale={false}
          onPress={() => setLocale('vi')}
          classname='w-full h-70px rounded-32px'
          title='Tiếng Việt'
          background='greyBg'
          titleColor={locale === 'vi' ? 'blue500' : 'darkText'}
          borderColor={locale === 'vi' ? 'blue500' : 'greyText'}
          iconStyle='w-12 h-10'
          titleSize={24}
          icon={Images.vi}
          rightWidget={
            <BaseImage
              source={
                locale === 'vi' ? Images.radioActive : Images.radioInactive
              }
              classname='w-8 h-8'
            />
          }
        />
      </BaseView>
    </BaseView>
  );
};
