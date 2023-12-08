import { ActionTypes } from "../constants/action-types";

const cartstore={
    product:null,
    product_count:0,
}

export const Cart_Reducer =(state=cartstore,action)=>{
    switch(action.type)
    {
        case ActionTypes.ADD_TO_CART:
            return solve_Add_To_Cart_Product(state,action.payload);
        case ActionTypes.SUB_TO_CART:
            return solve_Sub_To_Cart_Product(state,action.payload);    
        case ActionTypes.REMOVE_TO_CART:
            let cartstore={
                product:null,
                product_count:0
            }
            return cartstore;    
        default: return state;    
    }

}

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












