// react default imports
import React from 'react'

// style.scss
import './style.scss'

// util functions
import { nullFiltering } from '../../utils'
// row size: optional: grid-auto-rows: minmax(100px, auto)
// columnSize: optional: grid-auto-column

// Usage : <SimpleGrid rows={number?} columns={number?} columnGap={number?} rowGap={number?}>Child Component</SimpleGrid>

const SimpleGrid = ({
  children,
  rows,
  columns,
  columnGap,
  rowGap,
  rowSize
}) => {
  let styles = {
    gridAutoColumns: columns ? `repeat(${columns}, 1fr)` : null,
    gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : null,
    gridAutoRows: `${rowSize}px`,
    columnGap: columnGap ? `${columnGap}px` : null,
    rowGap: rowGap ? `${rowGap}px` : null
  }

  styles = nullFiltering(styles)
  return (
    <div className='wrapper' style={styles}>
      {children}
    </div>
  )
}

export default SimpleGrid
