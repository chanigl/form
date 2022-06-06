import React from 'react'

const Print = ({first, last, age}) => {
 
  
  return (
      <>
    <div className='print-div'>
        <h2>entered information</h2>
            <div>
                <span>your name:{first}{last}</span>
            </div>
            <div>
                <span>your age:{age}</span>
            </div>
    </div>
    </>
  )
}

export default Print