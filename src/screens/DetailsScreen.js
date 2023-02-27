import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.actions'

const DetailsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const bread = useSelector(state => state.products.selected);
    
    const handleAddItem = () => {
        dispatch(addItem(bread))
    }

    return (
        <View style={styles.container}>
            <Text>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>{bread.price}</Text>
            <Pressable onPress={handleAddItem}>
                <Text>Add to Cart</Text>
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