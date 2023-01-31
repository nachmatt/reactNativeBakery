import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font'
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    VarelaRound: require('./src/assets/fonts/VarelaRound-Regular.ttf')
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <ShopNavigator />
  );
}
