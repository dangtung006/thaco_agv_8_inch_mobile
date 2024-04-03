import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    HomeScreen,
    SettingScreen,
    RoboInfoScreen,
    SleepScreen,
} from '@src/screens';
import { APP_STACK, ROUTES } from '../navigation';
import { AppBar, BaseModal, BaseTouchable } from '@src/components';
import { useLocalStorage } from '@src/store/localStorage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCommonState } from '@src/store/commonStorage';
import { TIME_TO_SLEEP } from '@src/utils/constants';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
    const { i18n } = useTranslation();
    const { locale } = useLocalStorage((state) => state);
    const { sleep, setSleep } = useCommonState((state) => state);
    let timer;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    useEffect(() => {
        if (typeof sleep === 'boolean' && !sleep) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setSleep(true);
                console.log('sleep');
            }, TIME_TO_SLEEP);
            return () => clearTimeout(timer);
        }
    }, [sleep]);

    const viewSleep = () => {
        return (
            <BaseModal
                visible={sleep}
                backdropColor='black'
                backdropOpacity={1}
                transparent={false}
                onBackdropPress={() => {
                    setSleep(false);
                }}
                onRequestClose={() => {
                    setSleep(false);
                }}
            >
                <SleepScreen />
            </BaseModal>
        );
    };

    return (
        <BaseTouchable withoutFeedback classname='w-full h-full'>
            <>
                <Stack.Navigator
                    screenOptions={{
                        header: () => <AppBar />,
                    }}
                >
                    <Stack.Screen name='APP_STACK' component={AppStack} />
                </Stack.Navigator>
                {viewSleep()}
            </>
        </BaseTouchable>
    );
};

const AppStack = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {APP_STACK.map((item) => (
                    <Stack.Screen
                        key={item.name}
                        name={item.name}
                        component={item.component}
                    />
                ))}
            </Stack.Navigator>
        </>
    );
};
