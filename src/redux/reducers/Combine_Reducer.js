import { combineReducers } from "redux";
import { Products_Reducer, selectedProductsReducer } from "./Products_Reducer";
import { Cart_Reducer } from "./Cart_Reducer";
import { Search_Reducer } from "./Search_Reducer";
import Catagory_Reducer from "./Catagory_Reducer";
import Catagory_Products_Reducer from "./Catagory_Products_Reducer";

const Combine_Reducer = combineReducers({

    allProducts: Products_Reducer,
    product: selectedProductsReducer,
    cartdata:Cart_Reducer,
    Search_Name:Search_Reducer,
    Catagory_store:Catagory_Reducer,
    Catagory_Products_Reducer:Catagory_Products_Reducer,

});
export default Combine_Reducer;
