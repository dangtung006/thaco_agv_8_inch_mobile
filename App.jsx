import './i18n.config';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@src/navigation/RootNavigation';
import { RootNavigator } from '@src/screens';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
