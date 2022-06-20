import React from 'react'
import './TrainingPageStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const TrainingPage = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Training is your only way to get good and o be able to fly with us in safe and comfortable way.</p>
            <Link to='/contact'><button className="btn">Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img1' alt="" />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img1' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingPage