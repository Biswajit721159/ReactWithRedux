import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import {setProducts,removeProducts} from '../redux/actions/productsActions'
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

import {productmethod} from '../redux_toolkit/productSlice'

const ProductCatagory=()=>{

    const catagory_id=useParams().catagory_id
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(productmethod.REMOVE_PRODUCT())
        fetch(`https://fakestoreapi.com/products/category/${catagory_id}`)
            .then(res=>res.json())
            .then((json)=>{
                if(json!=undefined)dispatch(productmethod.SET_PRODUCTS(json))
            })
    },[])

    
    return(
        <>
            <ProductComponent/>
        </>
    )
}
export default ProductCatagory