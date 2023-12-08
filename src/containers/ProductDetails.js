import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import {
//   selectedProduct,
//   removeSelectedProduct,
//   Add_To_Cart,
//   Remove_To_Cart,
//   Sub_To_Cart
// } from "../redux/actions/productsActions";

import {cartmethod} from '../redux_toolkit/CartSlice'
import {productdetalmethod} from '../redux_toolkit/ProductDetailSlice'
import './ProductDetail.css'

const ProductDetails = () => {

  const { productId } = useParams();
  let product = useSelector((state) => state.product.product);
 // console.log(product)
  let cart = useSelector((state) => state.cartdata);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();


  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      if(response!=undefined) dispatch(productdetalmethod.SELECTED_PRODUCT(response.data));
  };

  
  useEffect(() => {
    dispatch(productdetalmethod.REMOVE_SELECTED_PRODUCT());
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(productdetalmethod.REMOVE_SELECTED_PRODUCT());
    };
  },[]);


  function Add()
  {
     dispatch(cartmethod.ADD_TO_CART(product))
  }

  function Sub()
  {
     dispatch(cartmethod.SUB_TO_CART(product))
  }


  return (
    <div className="productdetail">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : 
        (
          <div className="productdetail">
              <img style={{height:200}}  src={image}/>
              <div className="productdetailcollum">
                <h2>{title}</h2>
                <h2><a>${price}</a></h2>
                <h3 >{category}</h3>
                <p>{description}</p>
                <div className="button" >
                    <button  style={plusbutton} onClick={Add}><FaPlus /></button>
                    {cart.product!=null && cart.product.id!=productId?<div style={count}>0</div>:<div style={count}>{cart.product_count}</div>}
                    <button style={minusbutton}  onClick={Sub}><FaMinus /></button>
                </div>
              </div>
          </div>
        )}  
    </div>
  );
};

const plusbutton={
  color:"#5DADE2",
  border:"2px solid #85C1E9",
  borderRadius:"10px"
}
const minusbutton={
  color:"#5DADE2",
  border:"2px solid #85C1E9",
  borderRadius:"10px"
}

const count={
  margin:10,
}

export default ProductDetails;
