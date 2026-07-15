import React, { useState } from 'react'
import './Contact.css'

import { IoMdSend } from "react-icons/io";

const Contact = () => {

   
  return (
    <div className='contact'>
        <h2>Contact Us</h2>

        <form method='POST' action="https://formspree.io/f/xykrzvly" className='form'>
            
                <input type="text" name='name' placeholder='Enter in your name' required/>
                
            
                <input type="email" name='email'  placeholder='Enter gmail address' required/>
                
            
            
                <textarea name="message"  placeholder='Enter in your name' required/>
                
                <button className='btn'>Send <IoMdSend/></button>
        </form>
    </div>
  )
}

export default Contact