import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cartSlice'

const appstore = configureStore({
    reducer:{
        cart: CartReducer,
    }
});
export default appstore;
