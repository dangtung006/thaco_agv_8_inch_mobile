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

const menuConfig = {
    1: "distribution",
    2: "locale",
    3: "controlMode"
}
export default function SettingScreen(props) {
    const [itemSetting, setItemSetting] = useState("distribution")
    const choseSetting = (op) => {
        setItemSetting(menuConfig[op])
    }
    const viewLeft = () => {
        return (
            <BaseView classname='w-4/12 pl-10 pt-6 bg-greyBg h-full flex justify-start'>
                <BaseButton
                    onPress={() => choseSetting(1)}
                    title='Thiết lập phân phối'
                    background={itemSetting == "distribution" ? 'orange500' : 'greyBg'}
                    titleColor={itemSetting == "distribution" ? 'white' : 'greyText'}
                    iconColor={itemSetting == "distribution" ? 'white' : '#8D8D8D'}
                    titleSize={20}
                    iconStyle='w-34px h-34px'
                    classname='h-50px w-full mb-1'
                    icon={Images.clock}
                    shadow={false}
                />
                <BaseView classname='h-4'></BaseView>
                <BaseButton
                    onPress={() => choseSetting(2)}
                    title='Ngôn ngữ'
                    background={itemSetting == "locale" ? 'orange500' : 'greyBg'}
                    titleColor={itemSetting == "locale" ? 'white' : 'greyText'}
                    iconColor={itemSetting == "locale" ? 'white' : '#8D8D8D'}
                    titleSize={20}
                    iconStyle='w-34px h-34px'
                    classname='h-50px w-full mb-2'
                    icon={Images.languague}
                    shadow={false}
                />
                <BaseButton
                    onPress={() => choseSetting(3)}
                    title='Chế Độ Điều Khiển'
                    background={itemSetting == "controlMode" ? 'orange500' : 'greyBg'}
                    titleColor={itemSetting == "controlMode" ? 'white' : 'greyText'}
                    iconColor={itemSetting == "controlMode" ? 'white' : '#8D8D8D'}
                    titleSize={20}
                    iconStyle='w-34px h-34px'
                    classname='h-50px w-full mb-1'
                    icon={Images.control2}
                    shadow={false}
                />
            </BaseView>
        );
    };

    const viewRight = () => {
        return (
            <BaseView classname='w-8/12 p-10 h-full flex flex-col'>
                {itemSetting == "distribution" && <SettingDistribution />}
                {itemSetting == "locale" && <SettingLocale />}
                {itemSetting == "controlMode" && <ControlMode />}
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

const ControlMode = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <BaseView classname='flex-row flex justify-between'>
            <BaseView classname='flex-1'>
                <BaseText
                    locale size={16}
                    classname='ml-10'
                >
                    {isEnabled ? "Auto" : "Manual"}
                </BaseText>
            </BaseView>

            <BaseView classname=''>
                <BaseToggle value={isEnabled} onChange={(value) => setIsEnabled(value)} />
            </BaseView>
        </BaseView>
    );
};
