import React from 'react'
import { PancakeStack } from '../index'

export default {
  title: 'PancakeStack', //
  component: PancakeStack
}

const Template = (args) => (
  <PancakeStack {...args}>
    <div>I am header</div>
    <div>I am main content</div>
    <div>I am footer</div>
  </PancakeStack>
)

export const Default = Template.bind({})
Default.args = {}
