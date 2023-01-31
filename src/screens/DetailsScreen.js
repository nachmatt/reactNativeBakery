import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>DetailsScreen</Text>
            <Pressable onPress={() => navigation.popToTop()}>
                <Text>Go to Categories</Text>
            </Pressable>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})