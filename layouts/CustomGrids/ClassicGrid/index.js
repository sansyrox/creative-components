import React, { useState } from 'react'

// importing custom SCSS
import './style.scss'

// Custom Style injector
import { styleInjector } from '../../../utils'

// Usage:
// <ClassicGrid>child components</ClassicGrid>
// There will be three child components
// they will be ordered in the same way as the array below

function ClassicGrid({ children }) {
  if (children.length !== 5) {
    console.log(children)
    throw 'There should be 5 child components.'
  }

  const children_ordering = [
    'classic-grid-parent__header',
    'classic-grid-parent__left-sidebar',
    'classic-grid-parent__main-content',
    'classic-grid-parent__right-sidebar',
    'classic-grid-parent__footer'
  ]

  const newChildren = children.map((child, idx) => {
    return styleInjector(child, children_ordering[idx])
  })

  console.log(children, newChildren)

  return <div className='classic-grid-parent'>{newChildren}</div>
}

export default ClassicGrid
