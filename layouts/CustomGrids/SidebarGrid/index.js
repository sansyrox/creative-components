import React from 'react'

// importing custom SCSS
import './style.scss'

// Custom Style injector
import { styleInjector } from '../../../utils'

// Usage:
// <SidebarGrid>child components</SidebarGrid>
// There will be three child components
// they will be ordered in the same way as the array below

function SidebarGrid({ children }) {
  if (children.length !== 2) {
    throw 'There should be 2 child components.'
  }

  const children_ordering = ['sidebar-grid__sidebar', 'sidebar-grid__main']

  const newChildren = children.map((child, idx) => {
    return styleInjector(child, children_ordering[idx])
  })

  return <div className='sidebar-grid__parent'>{newChildren}</div>
}

export default SidebarGrid
