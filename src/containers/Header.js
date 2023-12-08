import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Set_search } from "../redux/actions/productsActions";
import { Link, useNavigate } from "react-router-dom";
import {searchmethod} from '../redux_toolkit/SearchSlice'
import './Header.css'


const Header = () => {
  const dispatch=useDispatch()
  let cart = useSelector((state) => state.cartdata);
  // console.log(cart)
  const history=useNavigate()

  function setinput(e)
  {
    history('/')
    dispatch(searchmethod.SET_SEARCH(e.target.value))
  }

  function onFocus()
  {
    history('/')
  }

  return (
      <div className="row1">
          <Link to='/' className="Fakeshop"><h3>FakeShop</h3></Link>
          <div className="lastitem">
            {cart.product!=null ?
              <div>
                  <span className="text"> {cart.product_count} </span>
                  <Link to={`/product/${cart.product.id}`}>
                      <i className="fa" style={{fontSize:"24px"}}>&#xf07a;</i>
                  </Link>
              </div>
              :
              <div>
                    <span className="text"> 0 </span>
                    <Link to={`/`}>
                        <i className="fa" style={{fontSize:"24px"}}>&#xf07a;</i>
                    </Link>
              </div>
            }
            <input className="input" onChange={(e)=>{setinput(e)}} onFocus={onFocus} placeholder="Enter the Id" />
          </div>
      </div>
  );
};

// const cartcount={
//   color:"red",
//   border:"2px solid red",
//   borderRadius:"8px",
//   textAlign:"center"
// }
export default Header;
