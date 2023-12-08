import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setProducts,removeProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import {productmethod} from '../redux_toolkit/productSlice'
import Catagory from './Catagory'


const ProductListing = () => {

  const products = useSelector((state) => state.allProducts.products);
  const search_name=useSelector((state)=>state.Search_Name.search_Name);
  // console.log(search_name,products)
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error Message : ", err);
      });
      if(response!=undefined)
      {
         dispatch(productmethod.SET_PRODUCTS(response.data));
      }
  };

  async function  findproduct()
  {
    if(search_name.length==0) fetchProducts();
    else
    {
          const response = await axios
          .get(`https://fakestoreapi.com/products/${search_name}`)
          .catch((err) => {
            console.log("Error Message : ", err);
          });
          if(response!=undefined)
          {
            let arr=[]
            if(response.data.length==0)
            {
              dispatch(productmethod.SET_PRODUCTS(arr));
            }
            else
            {
              arr.push(response.data);
              dispatch(productmethod.SET_PRODUCTS(arr));
            }
          }
    }
  }
  
  useEffect(()=>{
    findproduct();
  },[search_name])


  useEffect(() => {
      dispatch(productmethod.REMOVE_PRODUCT())
      fetchProducts();
  }, []);


  return (
    <>
      <Catagory/>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
