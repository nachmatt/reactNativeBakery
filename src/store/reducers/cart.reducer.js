import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from "../actions/cart.actions";

const INITIAL_STATE = {
    items: [],
    total: 0
}

const sumTotal = (list) => {
    return list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0)
}
    

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            const cleanCart = [...state.items].filter(
                (item) => item.id === action.itemId
            )
                return {...state, items: cleanCart, total: sumTotal(cleanCart)}
        case ADD_ITEM: 
        // encuentro el índice del producto a agregar
            const indexItem = state.items.findIndex(
                (item) => item.id === action.item.id
            )
        // si no se encuentra en el carrito, actualizo el item, lo ingreso en la lista y devuelvo el estado con la lista actualizada
            if (indexItem === -1) {
                const item = {...action.item, quantity: 1}
                const updateCart = [...state.items, item]
                return {...state, items: updateCart, total: sumTotal(updateCart)}
            }
        // si ya se encuentra en el carrito mapeo la lista y cuando encuentre el producto con el mismo id que el que agregué le va a sumar una unidad
            const items = [...state.items].map(item => {
                if(item.id === action.item.id) {
                    item.quantity++
                    return item
                }
            })
            return {...state, items: items, total: sumTotal(items)}

        case CONFIRM_CART:
            return state

        default:
            return state
    }
}

export default CartReducer;