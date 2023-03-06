import {useFonts} from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import MainNavigation from './src/navigation' //importa el index cómo MainNavigation
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    VarelaRound: require('./src/assets/fonts/VarelaRound-Regular.ttf')
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
