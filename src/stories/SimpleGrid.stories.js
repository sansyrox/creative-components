import React from 'react'
import { SimpleGrid } from '../index'

export default {
  title: 'SimpleGrid', //
  component: SimpleGrid
}

const children = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => <div>Hello World</div>)

const Template = ({ children, ...args }) => (
  <SimpleGrid {...args}>{children}</SimpleGrid>
)

export const Optional = Template.bind({})
Optional.args = {
  rows: 3,
  columns: 3,
  columnGap: 3,
  rowGap: 3,
  children: children
}
