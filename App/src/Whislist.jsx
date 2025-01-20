import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removefromWhislist } from './CartReducer'

const Whislist = () => {
    const data= useSelector(state=>state?.Cart)
    const [emptyWhislist, setEmptyWhislist] = useState(false)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const handleHome=()=>{
      navigate('/')
    }
    useEffect(()=>{
      if(data?.whisList.length === 0){
        setEmptyWhislist(true)
      }
    },[data?.whisList])
  return (
    <div className="cart">
        <h1 style={{textAlign:'center',color:'green'}}>Whislist</h1>
        <button onClick={handleHome} className='home-btn'>Home</button><br></br><br></br>
      {emptyWhislist && <div>Your whislist is empty....Click Home to add items</div>}
       { !emptyWhislist &&  data?.whisList?.map((item)=>
                  <div className='cart-container'>
                    <img className='cart-img' src={item?.url}/>
                    <p className='price'>Price: {item?.width}</p>
                    <button onClick={()=>{
                        dispatch(removefromWhislist(item))
                    }} className='btn-add'>Remove from Whislist</button>
              
                  </div>
                )
              }
    </div>
  )
}

export default Whislist
