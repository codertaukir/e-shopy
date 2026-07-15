import React, { useState } from 'react'
import './Navbar.css'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = ({ loading, setLoading, setSearchBtn }) => {

   const selector = useSelector(state=>state)
    

  return (
    <div id='navbar'>

      <div className="logo">
         <Link to="/" > <FaShopify /></Link>
          <Link to="/" ><h2>E-Shopy</h2> </Link>
      </div>


      <div className="searchbar ham">

        <input type="search" name="search" placeholder='Search...' id="" />
        <button className='search-btn'><FaSearch /></button>
        <button className='search-btn2' onClick={()=>{ setSearchBtn((prev)=>!prev) }}><FaSearch /></button>
      </div>

      <div className='list-items'>
        <ul>
          <li> <Link to="/" > Home </Link></li>
          <li> <Link to="/shop"> Shop </Link></li>
          <li> <Link to="/cart">Cart </Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>

        <div className='addtocart-div ham'>
         <Link to='/cart'>
          <a className='addtocart' href="#"><IoCartOutline /></a></Link>
          <h4>{selector.cart.length}</h4>
        </div>


      </div>
      <div className="hambarger" onClick={() => {
        setLoading((prev) => !prev);
      }}>
        {
          loading ? <MdClose /> : <GiHamburgerMenu />

        }

      </div>



    </div>
  )
}

export default Navbar