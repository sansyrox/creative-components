import React, { useState } from 'react'

// custom scss imports
import './style.scss'

// Usage : <MovingUnderlineText fontFamily="string?">Text here</MovingUnderlineText>
function MovingUnderlineText({ children, fontFamily }) {
  return (
    <div
      className='moving-underline-text'
      style={{ fontFamily: fontFamily ?? 'Helvetica' }}
    >
      {children}
    </div>
  )
}

export default MovingUnderlineText
