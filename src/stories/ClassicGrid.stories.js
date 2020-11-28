import React from 'react'
import { ClassicGrid } from '../index'

export default {
  title: 'ClassicGrid', //
  component: ClassicGrid
}

const Template = (args) => (
  <ClassicGrid {...args}>
    <div>I am header</div>
    <div>I am left Side bar</div>
    <div>I am main content</div>
    <div>I am right sidebar</div>
    <div>I am footer</div>
  </ClassicGrid>
)

export const Default = Template.bind({})
Default.args = {}
