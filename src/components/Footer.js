import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return ( 
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation className='icon' />
            <div>
              <p>123 Acme St.</p>
              <h4>HousTon, Tx</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone className='icon' /> 1-800-123-1234</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk className='icon' /> trips@galaxy.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
          <div className='social'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaLinkedin className='icon' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer