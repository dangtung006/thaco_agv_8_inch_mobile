import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScreen,
  BaseText,
  BaseTextInput,
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
          background={!isSettingLocale ? 'orange' : 'greyBg'}
          titleColor={!isSettingLocale ? 'black' : 'greyText'}
          iconColor={!isSettingLocale ? 'black' : '#8D8D8D'}
          titleSize={20}
          width={'w-full'}
          icon={Images.clock}
          shadow={false}
        />
        <BaseView classname='h-6'></BaseView>
        <BaseButton
          onPress={() => setSettingLocale(true)}
          title='Ngôn ngữ'
          background={isSettingLocale ? 'orange' : 'greyBg'}
          titleColor={isSettingLocale ? 'black' : 'greyText'}
          iconColor={isSettingLocale ? 'black' : '#8D8D8D'}
          titleSize={20}
          width={'w-full'}
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
    <BaseView classname=' flex-row flex border-b-2 border-greyBt pb-5 justify-between'>
      <BaseView classname='flex flex-row'>
        <BaseView>
          <BaseText locale size={16}>
            Thời gian nhận hàng tự động
          </BaseText>
          <BaseText size={16}>
            (1 - 600
            <BaseText locale>giây</BaseText>)
          </BaseText>
        </BaseView>
        <BaseTextInput defaultValue='5' classname='ml-10' />
      </BaseView>
      <Switch
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        thumbColor={isEnabled ? '#377DE5' : '#f4f3f4'}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      />
    </BaseView>
  );
};

const SettingLocale = () => {
  const { locale, setLocale } = useLocalStorage((state) => state);

  return (
    <BaseView classname=' flex-row flex justify-between'>
      <BaseButton
        onPress={() => setLocale('en')}
        classname='flex-1'
        title='English'
        background='greyBg'
        titleColor='black'
        borderColor={locale === 'en' ? 'blue500' : 'greyText'}
        iconStyle='w-12 h-10'
        titleSize={16}
        icon={Images.en}
        rightWidget={
          <BaseImage
            source={locale === 'en' ? Images.radioActive : Images.radioInactive}
            classname='w-8 h-8'
          />
        }
      />
      <BaseView classname='w-4'></BaseView>
      <BaseButton
        onPress={() => setLocale('vi')}
        classname='flex-1'
        title='Tiếng Việt'
        background='greyBg'
        titleColor='black'
        borderColor={locale === 'vi' ? 'blue500' : 'greyText'}
        iconStyle='w-12 h-10'
        titleSize={16}
        icon={Images.vi}
        rightWidget={
          <BaseImage
            source={locale === 'vi' ? Images.radioActive : Images.radioInactive}
            classname='w-8 h-8'
          />
        }
      />
    </BaseView>
  );
};
