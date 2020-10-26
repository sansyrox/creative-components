import React, { useState, useRef, useEffect } from 'react'

// Importing util functions
import { lerp } from '../../utils'

// Importing Custom StyleSheet
import './style.scss'

// Util Functions
import { nullFiltering } from '../../utils'

// Usage : <Following_Cursor cursorWidth={number} cursorHeight={number} borderColor={string} />

const Following_Cursor = ({ cursorWidth, cursorHeight, borderColor }) => {
  const circleRef = useRef(null)
  const [mousePos, setMousePos] = useState({
    tx: 0,
    ty: 0
  })

  useEffect(() => {
    const circle = {
      x: window.innerHeight / 2,
      y: window.innerWidth / 2,
      w: cursorWidth ? cursorWidth : 80,
      h: cursorHeight ? cursorHeight : 80,
      update: function () {
        let tx = this.x - this.w / 2
        let ty = this.y - this.h / 2
        setMousePos({ tx, ty }) // this makes the cursor rerender
        requestAnimationFrame(move) // this triggers the first animation frame
        // this is same as setTimeOut called 1000/60 times but saves a lot of component rerender
        // and saves a lot of setTimeouts in the pending queue
      }
    }
    let mouseX = window.innerWidth / 2 // These values denote just the initial mouse position
    let mouseY = window.innerHeight / 2 // These values denote just the initial mouse position

    const move = () => {
      circle.x = lerp(circle.x, mouseX, 0.1)
      circle.y = lerp(circle.y, mouseY, 0.1)
      circle.update()
    }

    window.addEventListener('mousemove', (e) => {
      mouseY = e.clientY
      mouseX = e.clientX
    })

    console.log('Bruh')
    requestAnimationFrame(move)
  }, [])

  let styles = {
    width: cursorWidth ? `${cursorWidth}px` : '80px',
    height: cursorHeight ? `${cursorHeight}px` : '80px',
    borderColor: borderColor ? `${borderColor}` : 'black'
  }

  styles = nullFiltering(styles)

  return (
    <div
      id='circle'
      ref={circleRef}
      style={{
        ...styles,
        transform: `translate3d(${mousePos.tx}px, ${mousePos.ty}px, 0)`
      }}
    ></div>
  )
}

export default Following_Cursor
