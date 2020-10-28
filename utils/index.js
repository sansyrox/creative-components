// required for styleInjector functions
import React from 'react'

// adding lerping to anywhere required
export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

// filtering null values in objects
export const nullFiltering = (object) => {
  const finalObject = {}
  Object.keys(object).forEach((key) => {
    if (object[key] !== null) finalObject[key] = object[key]
  })

  return finalObject
}

// Injecting style in a react component
export const styleInjector = (child, className) => {
  return React.cloneElement(child, {
    className: `${child.props.className} ${className}`
  })
}
