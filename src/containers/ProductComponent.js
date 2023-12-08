import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductComponent.css'

const ProductComponent = () => {

  let products=useSelector((state) => state.allProducts.products);
  const [id,setid]=useState(-1);
  const [title,settitle]=useState("");
  
  function Read_More(s,id)
  {
    setid(id)
    settitle(s)
  }

  function Less_More()
  {
    setid(-1)
    settitle("")
  }

  function Read_Tital(s,ind,id)
  {
      let str=s.substr(0,ind);
      return str;
  }

  return <div className="row">
            {products!=undefined && products.length!=0? 
                products.map((product,ind) => (
                  <div className="card" style={{height:250,width:250 ,margin:20}} key={ind}>
                      <Link to={`/product/${product.id}`}>
                          <div className="image">
                              <img src={product.image} style={{height:200,width:200}}  alt='Loading' />
                          </div>
                      </Link>
                      <div className="content" style={{textAlign:"center"}}>
                            {
                              product.id==id?<div className="header" style={{cursor:"pointer"}} onClick={()=>Less_More()}>{title}</div>:
                              product.title.length<=20?<div className="header">{product.title}</div>
                              :<div className="header">{Read_Tital(product.title,20,product.id)} <p style={{ fontSize:10,color:"#687FF3",cursor:"pointer"}} onClick={()=>Read_More(product.title,product.id)}>...Read more</p></div>
                            }
                            <div className="meta price" style={{color:"green"}}>$ {product.price}</div>
                      </div>
                  </div>
            ))
        :<h4 >...Loading</h4>}</div>
};



export default ProductComponent;
