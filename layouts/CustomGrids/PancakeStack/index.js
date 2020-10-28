import React, { useState } from 'react'

// importing custom SCSS
import './style.scss'

// Custom Style injector
import { styleInjector } from '../../../utils'

// Usage:
// <PancakeStack>child components</PancakeStack>
// There will be three child components
// they will be ordered in the same way

function PancakeStack({ children }) {
  if (children.length !== 3) {
    throw 'There should be 3 child components.'
  }

  const children_ordering = [
    'pancake-stack__header',
    'pancake-stack__main',
    'pancake-stack__footer'
  ]

  const newChildren = children.map((child, idx) => {
    return styleInjector(child, children_ordering[idx])
  })

  return <div className='pancake-stack__parent'>{newChildren}</div>
}

export default PancakeStack
