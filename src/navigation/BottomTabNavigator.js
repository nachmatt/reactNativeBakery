import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import Ionicons from '@expo/vector-icons/Ionicons'
import OrdersNavigator from "./OrdersNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return ( 
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <BottomTabs.Screen 
                name="ShopTab" 
                component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="home" size={20} color='#525252'/>
                        </View>
                    )
                }}/>
            <BottomTabs.Screen 
                name="CartTab" 
                component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="cart" size={20} color='#525252'/>
                        </View>
                    )
                }}/>
            <BottomTabs.Screen 
                name="OrdersTab" 
                component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="list" size={20} color='#525252'/>
                        </View>
                    )
                }}/>
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    }
})