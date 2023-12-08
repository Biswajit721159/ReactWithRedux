import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Add_Catagory } from "../redux/actions/productsActions";
import { Link } from "react-router-dom";
import {catagorymethod} from "../redux_toolkit/CatagorySlice"
import './Catagory.css'
const Catagory = () => {

    const catagory=useSelector(state=>state.Catagory_store.Catagory)
    const dispatch=useDispatch()


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json)=>{
                if(json!=undefined) dispatch(catagorymethod.ADD_PRODUCT_CATAGORY(json))
            })
    },[])


   return(
        <div className="maindiv">
            {
                catagory!=undefined && catagory[0]!=undefined?
                    catagory[0].map((data,ind)=>(
                        <div key={ind} className="catagory"  style={{margin:20}}>
                            <h3><Link className="buttondata" to={`/catagory/${data}`}>{data}</Link></h3>
                        </div>   
                    ))
                :"...Loading"
            }
        </div>
    )
};

export default Catagory;
