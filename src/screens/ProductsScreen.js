import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ProductsScreen</Text>
            <Pressable onPress={() => navigation.navigate('Details')}>
                <Text>Go to Details</Text>
            </Pressable>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </Pressable>
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})