import React, { useState, useRef, useEffect } from 'react'

// Importing util functions
import { lerp } from '../../utils'

// Importing Custom StyleSheet
import './style.module.scss'

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
      w: cursorWidth,
      h: cursorHeight,
      update: function () {
        let tx = this.x - this.w / 2
        let ty = this.y - this.h / 2
        setMousePos({ tx, ty }) // this makes the cursor rerender
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

    setInterval(move, 1000 / 60)
  }, [])

  return (
    <div
      id='circle'
      ref={circleRef}
      style={{
        width: cursorWidth,
        height: cursorHeight,
        borderColor: borderColor,
        transform: `translate3d(${mousePos.l}px, ${mousePos.t}px, 0)`
      }}
    ></div>
  )
}

export default Following_Cursor
