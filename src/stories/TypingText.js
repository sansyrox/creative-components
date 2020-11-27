import React from 'react'
import { TypingText } from '../index'

export default {
  title: 'TypingText',
  component: TypingText
}

const Template = (args) => <TypingText {...args}>Hello World</TypingText>

export const Primary = Template.bind({})
Primary.args = {
  text: 'Hello World'
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Hello World',
  speed: 10,
  textColor: 'red',
  pointerColor: 'blue',
  fontFamily: 'Arial'
}
