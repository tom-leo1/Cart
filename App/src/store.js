import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartReducer'


const rootReducer = combineReducers({
    Cart: CartReducer
})
export const store=configureStore({
    reducer:rootReducer
})