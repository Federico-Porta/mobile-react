import {configureStore} from '@reduxjs/toolkit'
import  {productSlice} from '../features/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopAPI'

 const store = configureStore({
    reducer:{
        shop: productSlice,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store