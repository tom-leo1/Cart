import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "./CartReducer";

const Cart = () => {
    const data= useSelector(state=>state?.Cart)
    const dispatch = useDispatch()
    const [emptyData, setEmptyData] = useState(false)
    const navigate= useNavigate()
    
    const handleHome=()=>{
      navigate('/')
    }
    useEffect(()=>{
      if(data?.items.length === 0){
        setEmptyData(true)
      }
    },[data?.items])
  return (
    <div className="cart">
        <h1 >Cart</h1>
        <p className="total-price">Total Cart Price: { data?.cartPrice}</p>
        <button onClick={handleHome}  className="home-btn">Go Back to Home</button>
        <br></br><br></br>
      {emptyData && <div>Your Cart is empty....Click Home to add items</div>}
       { !emptyData &&  data?.items?.map((item)=>
                  <div className='cart-container'>
                    <img className='cart-img' src={item?.url}/>
                    <p className="price">Price: {item?.width}</p>
                    <button className='btn-add' onClick={()=>{
                      dispatch(removeFromCart(item))
                    }}>Remove from Cart</button>
              
              
                  </div>
                )
              }<br></br><br></br>
              
              
    </div>
  
  );
};

export default Cart;
