import React from 'react'
import './Hamburger.css'
import { IoCartOutline } from 'react-icons/io5'

const Hamburger = ({ loading }) => {


    return (
        <div>
            {loading ?
                <div className='list-item'>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                        <li>Contact</li>
                    </ul>

                </div> : ""
            }
        </div>
    )
}

export default Hamburger