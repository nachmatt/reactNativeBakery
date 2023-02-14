import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
    return (
            <Stack.Navigator initialRouteName='Categories' screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <Stack.Screen 
                    name='Categories' 
                    component={CategoriesScreen} 
                    options= {{title: 'Mi Panadería'}}/>
                <Stack.Screen 
                    name='Products' 
                    component={ProductsScreen} 
                    options={({ route }) => ({ title: route.params?.title || "Products" })}
                />
                <Stack.Screen 
                    name='Details' 
                    component={DetailsScreen}
                    options={({ route }) => ({ title: route.params?.name || "Products" })}/>
            </Stack.Navigator>
    )
}
