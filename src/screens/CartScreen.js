import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CART } from '../data/cart'
import CartItem from '../components/CartItem'

const CartScreen = () => {
    const total = 120;

    const handleConfirmCart = () => {
        console.log('Confirmar Carrito')
    }
    const handleDeleteITem = () => {
        console.log('Borrar Elemento')
    }

    const renderCartItem = ({item}) => (
        <CartItem item={item} onDelete={handleDeleteITem} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    data={CART} 
                    keyExtractor={(item) => item.id} 
                    renderItem={renderCartItem}/>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>{total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
    },
    list: {
        flex: 1
    },
    footer: {
        padding: 12,
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    confirm: {
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
    }
})