import { FlatList, StyleSheet, } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../components/OrderItem'

import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.list)

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    const handleDeleteItem = (id) => {
        dispatch(deleteOrder(id))
    }

    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={() => handleDeleteItem(item.id)}/>
    )

    return (
        <FlatList 
            data={orders} 
            keyExtractor={item => item.id} 
            renderItem={renderOrderItem}
        />
    )
}

export default OrdersScreen

const styles = StyleSheet.create({})