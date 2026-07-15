import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Hamburger from './Components/Navbar/Hamburger'
import SearchBar from './Components/Navbar/SearchBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'

const App = () => {
  const [loading , setLoading] = useState(false);
  const [searchBtn, setSearchBtn]= useState(false)
  return (
   <>

    <div>

      <Navbar loading={loading} setSearchBtn={setSearchBtn} setLoading={setLoading}/>
      <Hamburger loading={loading} />
      <SearchBar searchBtn={searchBtn} /> 


      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/shop' element={<Shop/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/contact' element={<Contact/>} />
      </Routes>

        
      

      <Footer/>
    </div>
   </>
  )
}

export default App