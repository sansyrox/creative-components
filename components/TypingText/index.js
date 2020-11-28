import React, { useState, useEffect } from 'react'

// importing custom StyleSheet
import './style.scss'

// util funcitons
import { nullFiltering } from '../../utils'

// custom animation function to handle custom speeds
// and default accuracy

const animate = (callback, idx, speed) => {
  if (speed !== undefined) {
    setTimeout(function () {
      callback(idx + 1)
    }, speed)
  } else {
    requestAnimationFrame(function () {
      callback(idx + 1)
    })
  }
}

// text: text, speed: milliseconds, text-color: string,
//pointer-color: string, font-family: string

// Usage: <TypingText text="String" speed={number?} text-color="String?", pointerColor="String?" font-family="String?" />
const TypingText = ({ text, speed, textColor, pointerColor, fontFamily }) => {
  const [innerText, setInnerText] = useState('')

  const typeWriter = (idx) => {
    if (idx < text.length) {
      setInnerText(text.substring(0, idx + 1))
    }

    animate(typeWriter, idx, speed)
  }

  useEffect(() => {
    typeWriter(0)
  }, [])

  let textStyles = {
    color: textColor ? `${textColor}` : null,
    fontFamily: fontFamily ? `${fontFamily}` : null
  }

  let pointerStyles = {
    color: pointerColor ? `${pointerColor}` : null
  }

  textStyles = nullFiltering(textStyles)
  pointerStyles = nullFiltering(pointerStyles)

  return (
    <div>
      <span className='typing-text' style={textStyles}>
        {innerText}
      </span>
      <span className='typing-pointer' style={pointerStyles} />
    </div>
  )
}

export default TypingText
