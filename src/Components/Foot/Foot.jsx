import React from 'react';
import './Foot.css'

const Foot = () => {
  return (
    <div className='foot'>
      <div className='Copy'> 
        <span>© Bala Bharath</span>
        <span> & Annam Vineeth</span></div>
        <div className='icons'>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-linkedin'></i>
            <i className='fa-brands fa-instagram'></i>
        </div>
        <div className='TC'>
            <p>Terms of us</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Foot
