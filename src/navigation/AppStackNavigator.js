import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingScreen, RoboInfoScreen } from '@src/screens';
import { ROUTES } from '.';

const Stack = createNativeStackNavigator();

export default AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.SETTING} component={SettingScreen} />
      <Stack.Screen name={ROUTES.ROBOT_INFO} component={RoboInfoScreen} />
    </Stack.Navigator>
  );
};
