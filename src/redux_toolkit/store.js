
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../redux_toolkit/SearchSlice";
import productReducer from "../redux_toolkit/productSlice";
import catagoryReducer from "../redux_toolkit/CatagorySlice";
import cartReducer from '../redux_toolkit/CartSlice'
import ProductDetailReducer from '../redux_toolkit/ProductDetailSlice'

export default configureStore({


  reducer: {
    Search_Name: searchReducer,
    allProducts:productReducer,
    Catagory_store:catagoryReducer,
    cartdata:cartReducer,
    product:ProductDetailReducer,
  },

  
});
