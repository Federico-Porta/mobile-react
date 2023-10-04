import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlices'
import  productSlice from '../features/shop/shopSlice'

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        shop: productSlice
    },
})