import React from 'react'
import './Percentage.css'

const Percentage = () => {
  return (
    <div className='percentageDiv'>
        <div className='div01'>
            <div className='ovalDot'></div>
            <h8 className=''>Errors: 0.12%</h8>
            <h8 className='smallText'>Average: 0.11%</h8>
        </div>
        <div className='div02'>
            <div className='ovalDot'></div>
            <h8 className=''>Zeroes: 5.12%</h8>
            <h8 className='smallText'>Average: 0.11%</h8>
        </div>
        <div className='div03'>
            <div className='ovalDot'></div>
            <h8 className=''>Timeouts: 0.12%</h8>
            <h8 className='smallText'>Average: 0.11%</h8>
        </div>
    </div>
  )
}

export default Percentage