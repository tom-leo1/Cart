import { createSlice } from "@reduxjs/toolkit";


const CartSlice= createSlice({
    initialState:{
        items:[],
        whisList:[],
        cartPrice:0
    },
    name:'Cart',
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
            state.whisList.push(action.payload)
            state.cartPrice+=action.payload.width
        },
        removefromWhislist:(state,action)=>{
            state.whisList=state.whisList.filter(item=>item.id !==action.payload.id)
        },
        removeFromCart:(state,action)=>{
            state.items= state.items.filter(item=>item.id !== action.payload.id)
            const findById= state.items.findIndex(item=>item.id === action.payload.id)
            if(findById){
                state.cartPrice-=action.payload.width
            }
        }
    }
})



export const {addItems,removefromWhislist,removeFromCart} = CartSlice.actions
export default CartSlice.reducer