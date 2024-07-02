import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='form-container'>
      <div className="headings">
        <h1>Contuct Us</h1>
        <p>We're here for you : Connect with us for any question or concerns</p>
      </div>
      <div className="contact-form-content">

        <form action="/">
          <div className="name-container">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='sample@gmail.com' />
          <textarea name="" placeholder='Message' id="" cols="30" rows="6"></textarea>
          <button>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
