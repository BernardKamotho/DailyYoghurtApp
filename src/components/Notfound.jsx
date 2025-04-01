import { Link } from 'react-router-dom'
import './styling/Notfound.css'
import React from 'react'

const Notfound = () => {
  return (
    <div className="all">
      <div class="notfoundcontainer">
      <div class="glitch" data-text="404">404</div>
      <div class="message">Page Not Found.
      <Link to={'/'}>Go home?</Link></div>
    </div>
    </div>
  
  )
}

export default Notfound