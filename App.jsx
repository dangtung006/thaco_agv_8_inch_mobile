import './i18n.config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '@src/navigation/RootNavigation';
import { AppStackNavigator } from '@src/navigation';

const RootStack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="APP_STACK" component={AppStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
