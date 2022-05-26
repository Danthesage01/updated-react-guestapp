import React from 'react'
import {Link} from "react-router-dom"
import InputCard from '../components/shared/InputCard'
function AboutPage() {
  return (
    <InputCard>
    <div className='about'>
      <h1>About this event</h1>
      <p>This is a React App to collate the names of guests for an event</p>
      <p>Version: 1.0.0</p>
      
      <p>
        <Link to="/">Back to home</Link>
      </p>
      </div>
    </InputCard>
  )
}

export default AboutPage