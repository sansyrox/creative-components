import React, { useEffect } from 'react'

import './style.scss'

// Usage: This will contain skewed components which will either
// have the skew-scroll-component class or will be imported from the
// side

// @params: children, skewSpeed : deviatiion between 0 and 1

// Usage Example:
//   <SkewScroll skewSpeed={0.25}>
//    <SkewedComponent><img src=""></SkewedComponent>
//    <SkewedComponent><img src=""></SkewedComponent>
//    <SkewedComponent><img src=""></SkewedComponent>
//  </SkewScroll>

function SkewScroll({ children, skewSpeed = 0.25 }) {
  // useEffect is used everywhere as 'window' is not accessible in SSR and static frameworks
  useEffect(() => {
    const skewedChildren = document.querySelectorAll('.skew-scroll-component')

    let currentPixel = window.pageYOffset

    const loop = () => {
      const newPixel = window.pageYOffset
      const diff = newPixel - currentPixel
      const speed = diff * skewSpeed
      skewedChildren.forEach((child) => {
        child.style.transform = `skewY(${speed}deg)`
      })
      currentPixel = newPixel
      requestAnimationFrame(loop)
    }
    loop()
  }, [])

  return <div>{children}</div>
}

export default SkewScroll
