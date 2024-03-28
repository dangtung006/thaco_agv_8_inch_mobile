import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingScreen, RoboInfoScreen } from '@src/screens';
import { APP_STACK, ROUTES } from '../navigation';
import { AppBar } from '@src/components';
import { useLocalStorage } from '@src/store/localStorage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  const { i18n } = useTranslation();
  const { locale } = useLocalStorage((state) => state);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppBar />,
      }}
    >
      <Stack.Screen name='APP_STACK' component={AppStack} />
    </Stack.Navigator>
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
