import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CategoriesItem from '../components/CategoriesItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectedCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {
    //va al store (primero pasando por index.js) y accede al estado y su prop categories, y luego a las categories de esa propiedad.
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        //dispara la accion de selectedCategory, que toma el id del item (la categoría) como parámetro.
        dispatch(selectedCategory(item.id))
        // como segundo parámetro usa el titulo del item como params del router.
        navigation.navigate('Products', {
            // categoryId: item.id,
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
                data={categories} 
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