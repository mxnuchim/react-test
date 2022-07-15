import React from 'react'
import './ColoredLine.css'

const ColoredLine = () => {
  return (
    <div>
        <div className='bigDiv'>
            <div className='yellow'></div>
            <div className='purple'></div>
            <div className='blue'></div>
            <div className='grey'></div>
        </div>

        <div className='errorContainer'>
            <div className='yellowContainer'>
                <div className='yellowSquare'></div>
                <h8>Error 500: 1:256</h8>
            </div>

            <div>
                <div className='purpleSquare'></div>
                <h8>Error 501: 1:800</h8>
            </div>

            <div>
                <div className='blueSquare'></div>
                <h8>Error 502: 650</h8>
            </div>

            <div>
                <div className='greySquare'></div>
                <h8>Other: 330</h8>
            </div>
        </div>
    </div>
  )
}

export default ColoredLine