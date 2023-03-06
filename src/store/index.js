import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import ProductReducer from "./reducers/products.reducer";
import OrderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
}) 

export default createStore(RootReducer, applyMiddleware(thunk));