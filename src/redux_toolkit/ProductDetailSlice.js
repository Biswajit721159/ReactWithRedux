import { createSlice } from "@reduxjs/toolkit";


const ProductDetailSlice =createSlice({
    name:"product",
    initialState:{
        product:{}
    },
    reducers:{
        SELECTED_PRODUCT:(state,action)=>{
            state.product=action.payload
        },
        REMOVE_SELECTED_PRODUCT:(state)=>{
            state={product:{}}
        }
    }
})


export const productdetalmethod=ProductDetailSlice.actions
const ProductDetailReducer=ProductDetailSlice.reducer
export default ProductDetailReducer