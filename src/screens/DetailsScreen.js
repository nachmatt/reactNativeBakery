import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailsScreen = ({ navigation }) => {
    const bread = useSelector(state => state.products.selected);
    

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