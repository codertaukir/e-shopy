import React, { useState } from 'react'
import './Home.css'
import gifImg from '../../assets/bg0.gif';


import { category } from '../../category'
import { dummydata } from '../../dummydata';
import Product from '../../Components/Products/Product';



const Home = () => {

    const [cate, SetCate] = useState(dummydata)

    function filterProduct(categoryName){
      const updateData = dummydata.filter((item)=>(item.category === categoryName))
         SetCate(updateData)
     }
  
  return (
    <div className='home'>
      <div className="hero-logo">
        <img src={gifImg} />
      </div>

      <div className="category-section">

        {

          category.slice(0, 5).map((item , keys) =>
          (
            <div key={keys} className="category-card" onClick={()=>{filterProduct(item.name)}}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>

              <span>{item.name}</span>
            </div>


          )
          )

         
        }
        
      </div>  

      <h1 className='tranding-heading'>Tranding Products</h1>  

      <div className='product'>
        {
            cate.slice(0,7).map((item ,key)=>(
              <Product key={key} image={item.image} name={item.name} price={item.price} id={item.id}/>
            ))
        }

      </div>
      
    </div>
  )
}

export default Home