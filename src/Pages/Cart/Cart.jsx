import React from 'react'
import './Cart.css'
import CartCard from '../../Components/CartCard/CartCard'
import { useSelector } from 'react-redux'


const Cart = () => {

  const selector = useSelector(state => state.cart);
  console.log(selector)


  return (
    <div className='cart'>
      {selector.length <= 0 ? "Empty hai" :

        selector.map((item, idx) => (
          <CartCard key={idx} name={item.name} image={item.image} id={idx} price={item.price} />


        ))

      }

      <div className='buttom-bar'>
        <span className="item-count">Total Item : {selector.length}</span>
        <span className="item-price">Total Price : {selector.reduce((total, item) => total + Number(item.price), 0)}</span>
      </div>

    </div>
  )
}

export default Cart