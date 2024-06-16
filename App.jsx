import './i18n.config';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@src/navigation/RootNavigation';
import { RootNavigator } from '@src/screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
