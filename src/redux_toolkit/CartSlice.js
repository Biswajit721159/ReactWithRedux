import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartstore",
  initialState: {
    product: null,
    product_count: 0,
  },
  reducers:{
    ADD_TO_CART:(state,action)=>{
        return state=solve_Add_To_Cart_Product(state,action.payload)
    },
    SUB_TO_CART:(state,action)=>{
        return state=solve_Sub_To_Cart_Product(state,action.payload)
    },
    REMOVE_TO_CART:(state)=>{
        state={
            product: null,
            product_count: 0,
        }
    }
  }
});


function solve_Add_To_Cart_Product(cart,data){
    let store={
        product:null,
        product_count:0,
    }
    if(cart.product===null)
    {
        store.product=data;
        store.product_count=1;
    }
    else
    {
        let arr=cart.product;
        if(arr.id===data.id)
        {
            store.product=data;
            store.product_count=cart.product_count+1;
        }
        else
        {
            store.product=data;
            store.product_count=1;
        }
    }
    // console.log(cart)
    return store;
}

function solve_Sub_To_Cart_Product(cart,data)
{
    let store={
        product:null,
        product_count:0,
    }
    if(cart.product===null)
    {
        return store;
    }
    else
    {
        let arr=cart.product;
        if(cart.product_count<=0)
        {
            return store;
        }
        else if(arr.id===data.id)
        {
            store.product=data;
            store.product_count=cart.product_count-1;
        }
    }
    return store;
}


export const cartmethod = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
