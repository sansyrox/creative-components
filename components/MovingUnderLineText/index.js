import React, { useState } from 'react'

// custom scss imports
import './style.scss'

// Usage : <MovingUnderlineText fontFamily="string?">Text here</MovingUnderlineText>
function MovingUnderlineText({ children, fontFamily }) {
  return (
    <div 
    className='moving-underline__parent'
    style={{ fontFamily: fontFamily ?? 'Helvetica' }}
    >
      {/* Style added to the top so that the offset can be used using `em` as it renders from parent */}
      <div className='moving-underline__wrapper'>
        {children}
      </div>
    </div>
 
  )
}

export default MovingUnderlineText
