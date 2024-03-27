import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseScreen,
  BaseText,
  BaseTextInput,
} from '@src/components';
import { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
export default function SettingScreen(props) {
  const [isSettingLocale, setSettingLocale] = useState(false);
  const viewLeft = () => {
    return (
      <View className='w-4/12 pl-10 pt-6 bg-greyBg h-full flex justify-start'>
        <BaseButton
          onPress={() => setSettingLocale(false)}
          title='Thiết lập phân phối'
          background={!isSettingLocale ? 'orange' : 'greyBg'}
          titleColor={!isSettingLocale ? 'black' : 'greyText'}
          iconColor={!isSettingLocale ? 'black' : '#8D8D8D'}
          titleSize={20}
          width={'w-full'}
          icon={Images.clock}
        />
        <View className='h-6'></View>
        <BaseButton
          onPress={() => setSettingLocale(true)}
          title='Ngôn ngữ'
          background={isSettingLocale ? 'orange' : 'greyBg'}
          titleColor={isSettingLocale ? 'black' : 'greyText'}
          iconColor={isSettingLocale ? 'black' : '#8D8D8D'}
          titleSize={20}
          width={'w-full'}
          icon={Images.languague}
        />
      </View>
    );
  };

  const viewRight = () => {
    return (
      <View className='w-8/12 p-10 h-full flex flex-col'>
        {isSettingLocale ? <SettingLocale /> : <SettingDistribution />}
      </View>
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
  return (
    <View className=' flex-row flex border-b-2 border-greyBt pb-5 justify-between'>
      <View className='flex flex-row'>
        <View>
          <BaseText locale size={16}>
            Thời gian nhận hàng tự động
          </BaseText>
          <BaseText size={16}>
            (1 - 600
            <BaseText locale>giây</BaseText>)
          </BaseText>
        </View>
        <BaseTextInput defaultValue='5' classname='ml-10' />
      </View>
      <Switch/>
    </View>
  );
};

const SettingLocale = () => {
  return <></>;
};
