import React from 'react'
import './BottomComponent.css'

const BottomComponent = (props) => {
  return (
    <div className='outerRowDiv'>
        <div className='innerDiv1'>
            <div className='innerDivColumn'>
                <div className='imageThing'></div>
                <h8 className='name1'>{props.name1}</h8>
                <h8 className='name4'>{props.name4}</h8>
                <h8 className='name6'>{props.name5}</h8>
            </div>
        </div>

        <div className='innerDiv2'>
            <h8 className='name2'>{props.name2}</h8>
            <h8 className='name3'>{props.name3}</h8>
            <h8 className='name5'>{props.name6}</h8>
            <h8 className='name4'>Help: Searches, Pessimisation</h8>
        </div>
    </div>
  )
}

export default BottomComponent