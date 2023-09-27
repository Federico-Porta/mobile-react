import { createSlice } from "@reduxjs/toolkit";
import dataCategories from '../../data/dataCategories'
import dataProducts from '../../data/products'

const initialState={
    categories: dataCategories,
    products: dataProducts,
    productsfiltred:[],
    categoryselected: null,
    productselected: null
}

export const productSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{setcategoryselected:() =>{},
    setproductsid: ()=>{}
    }
})

export const { setcategoryselected, setproductsid } = productSlice.actions
export default productSlice.reducer