import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import './i18n.config';
import i18n from './i18n.config';
import HomeScreen from '@src/screens/home';

function App() {
  i18n.changeLanguage('en');
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
