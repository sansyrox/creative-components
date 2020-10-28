import React from 'react'

// importing custom stylesheet
import './style.scss'
import { styleInjector } from '../../../utils'

// Usage:
// <DeconstructedPancake>child components</DeconstructedPancake>
// all the child components will be alloted the class below
function DeconstructedPancake({ children }) {
  const newChildren = children.map((child, index) => {
    return styleInjector(child, 'deconstructed-pancake__child')
  })

  return <div className='deconstructed-pancake__parent'>{newChildren}</div>
}

export default DeconstructedPancake
