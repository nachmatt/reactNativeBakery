import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/categories'
import CategoriesItem from '../components/CategoriesItem'

const CategoriesScreen = ({ navigation }) => {
    const handleSelectedCategory = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            title: item.title,
        })
    }
    const renderCategoriesItem = ({ item }) => (
        <View style={styles.categoriesContainer}>
            <CategoriesItem 
                item={item} 
                onSelected={handleSelectedCategory}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES} 
                renderItem={renderCategoriesItem} 
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    categoriesContainer: {
        padding: 15,
        height: 150,
    },
})