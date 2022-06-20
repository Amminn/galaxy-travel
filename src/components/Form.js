import React from 'react'
import './FormStyles.css'

const Form = () => {

    function getback(e) {
        e.preventDefault()
        alert('we will get back to you soon')
    }
  return (
    <div className='form'>
        <form onSubmit={getback}>
            <label>Your Name</label>
            <input type="text"></input>
            
            <label>Email</label>
            <input type="email"></input>
            
            <label>Subjects</label>
            <input type="text"></input>
            
            <label>Details</label>
            <textarea rows="6" placeholder='place a short message here' />
            
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form