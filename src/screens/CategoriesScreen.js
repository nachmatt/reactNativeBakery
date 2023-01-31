import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CategoriesScreen</Text>
            <Pressable onPress={() => navigation.navigate('Products')}>
                <Text>Go to Products</Text>
            </Pressable>
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})