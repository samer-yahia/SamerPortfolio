import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

  }

  return (
    <>
      <h2 className="head-text">Get in touch with me! Coffee, custom programs, great discussion, and employment opportunities are all welcome!</h2>
      <h3 className="head-text">Fix this to do typing effect</h3>

      {/* Email */}
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={ images.email } alt="email" />
          <a href="mailto:syahia@uci.edu" className='p-text'>syahia@uci.edu</a>
        </div>

        {/* Phone Number */}
        <div className="app__footer-card">
          <img src={ images.mobile } alt="mobile" />
          <a href="tel: +1 (951) 663-8680" className='p-text'>(951) 663-8680</a>
        </div>
      </div>

      {!isFormSubmitted ? (

        <div className="app__footer-form app__flex">
          {/* Contact Name */}
          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Your Name..." name="name" value={name} onChange={handleChangeInput}/>
          </div>
  
          {/* Contact Email */}
          <div className="app__flex">
            <input type="email" className="p-text" placeholder="Your Email..." name="email" value={email} onChange={handleChangeInput}/>
          </div>
  
          {/* Contact Message */}
          <div className="app__flex">
            <textarea className="p-text" placeholder="Your Message..." value={message} name={message} onChange={handleChangeInput} id="" cols="30" rows="10"></textarea>
          </div>
          
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
  
        </div> 
      ) : (
        <div>
          <h3>Thanks for getting in touch!</h3>
        </div>
    )}

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact'
  )






