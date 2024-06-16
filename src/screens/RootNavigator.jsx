import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_STACK } from '../navigation';
import { AppBar, BaseTouchable } from '@src/components';
import { useLocalStorage } from '@src/store/localStorage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import withContext from '@src/hocs/context_hoc';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { i18n } = useTranslation();
  const { locale } = useLocalStorage((state) => state);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <BaseTouchable withoutFeedback classname='w-full h-full'>
      <>
        <Stack.Navigator screenOptions={{ header: () => <AppBar /> }}>
          <Stack.Screen name='APP_STACK' component={AppStack} />
        </Stack.Navigator>
      </>
    </BaseTouchable>
  );
};

const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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

export default withContext(RootNavigator);
