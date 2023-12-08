import { ActionTypes } from "../constants/action-types";


export const add_catagory_product=(products)=>{
  return{
    type:ActionTypes.ADD_ALL_CATAGORY_PRODUCT,
    payload:products,
  }
}

export const romove_catagory_product=(products)=>{
  return{
    type:ActionTypes.REMOVE_ALL_CATAGORY_PRODUCT,
    payload:products,
  }
}

export const Add_Catagory=(Catagory)=>{
  return{
    type:ActionTypes.ADD_PRODUCT_CATAGORY,
    payload:Catagory,
  }
}

export const Set_search=(search)=>{
  return{
    type:ActionTypes.SET_SEARCH,
    payload:search,
  }
}

export const Sub_To_Cart = (product) => {
  return {
    type: ActionTypes.SUB_TO_CART,
    payload: product,
  };
};

export const Add_To_Cart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const Remove_To_Cart = (product) => {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: product,
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeProducts = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: "",
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
