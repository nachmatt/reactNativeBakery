import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem'
import { ORDERS } from '../data/orders'

const OrdersScreen = () => {
    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={() => console.log('On Delete')}/>
    )

    return (
        <FlatList 
            data={ORDERS} 
            keyExtractor={item => item.id} 
            renderItem={renderOrderItem}/>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({})