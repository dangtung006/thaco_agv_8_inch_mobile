import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingScreen, RoboInfoScreen } from '@src/screens';
import { APP_STACK, ROUTES } from '../navigation';
import { AppBar } from '@src/components';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
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
