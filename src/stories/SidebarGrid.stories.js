import React from 'react'
import { SidebarGrid } from '../index'

export default {
  title: 'SidebarGrid', //
  component: SidebarGrid
}

const Template = (args) => (
  <SidebarGrid {...args}>
    <div>I am 1</div>
    <div>I am 2</div>
  </SidebarGrid>
)

export const Default = Template.bind({})
Default.args = {}
