import React, { useState } from 'react'
import './Shop.css'
import { category } from '../../category'
import { dummydata } from '../../dummydata'
import Product from '../../Components/Products/Product'

const Shop = () => {

  

  const [cate, SetCate] = useState(dummydata)

  function filterProduct(categoryName) {

    if(categoryName === "All"){
      SetCate(dummydata)
    }
    else{
    const updateData = dummydata.filter((item) => (item.category === categoryName))
    SetCate(updateData)
    }
  }

  return (
    <div className='shop'>

      <div className="category-section">

        {

          category.map((item, keys) =>
          (
            <div key={keys} className="category-card" onClick={()=> filterProduct(item.name)}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>

              <span>{item.name}</span>
            </div>


          )
          )
        }

      </div>


      <div className='product'>
        {
          cate.slice(0, 7).map((item, key) => (
            <Product key={key} image={item.image} name={item.name} price={item.price} id={item.id} />
          ))
        }

      </div>

    </div>
  )
}

export default Shop