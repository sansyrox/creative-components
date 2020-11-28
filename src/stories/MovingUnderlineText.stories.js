import React from 'react'
import { MovingUnderlineText } from '../index'

export default {
  title: 'MovingUnderlineText',
  component: MovingUnderlineText
}

const Template = (args) => (
  <MovingUnderlineText {...args}>Hello World</MovingUnderlineText>
)

export const Primary = Template.bind({})
Primary.args = {
  fontFamily: 'Helvetica'
}
