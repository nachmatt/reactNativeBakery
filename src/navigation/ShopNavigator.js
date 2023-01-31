import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'>
                <Stack.Screen name='Categories' component={CategoriesScreen}/>
                <Stack.Screen name='Products' component={ProductsScreen}/>
                <Stack.Screen name='Details' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
