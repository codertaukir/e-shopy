import React from 'react'

import './Product.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice';

const Product = ({image, name, price , id}) => {

  const dispatch = useDispatch();

  return (
    <div className='Products'>
      {
        
          <div className="category-card">
            <div className="image">
              <img src={image} alt="" />
            </div>

            <div className='product-tol'>
              <span className='item-name'>{name}</span>
              <span className='price'>Rs {price}/-</span>
              <button onClick={()=>{
                dispatch(addCart({image, name, price, id}))
              }} >Add +</button>
            </div>
          </div>
        
      }
    </div>
  )
}

export default Product