import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div className='header'>
            <h1 className='headerText'>Main Metrics</h1>
        </div>
            <div className='TimeFilter'>
                <p>Last Hour</p>
                <p>Today</p>
                <p className='blueText'>Yesterday</p>
                <p>Last 3 days</p>
            </div>
    </div>
  )
}

export default Header