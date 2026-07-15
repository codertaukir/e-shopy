import React from 'react'
import './CartCard.css'

import { RiDeleteBinLine } from "react-icons/ri";
import { removeCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

// import image1 from "../../assets/image1.jpg"

const CartCard = ({image, name, price, id}) => {

    const dispatch = useDispatch()
    return (
        <div className='cartt'>
            <div className="left">
                {
                    <div className="content">
                    <img src={image} alt="" />

                    <div className='title'>
                        <span>{name} </span>
                        <span> Rs {price}/-</span>
                    </div>
                </div>
                }




            </div>
            <div className="right">

                <button onClick={()=>console.log(dispatch(removeCart(id)))}>Remove  <RiDeleteBinLine /></button>
            </div>
        </div>
    )
}

export default CartCard