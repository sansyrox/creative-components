import React from 'react'
import { TypingText } from '../index'

export default {
  title: 'TypingText',
  component: TypingText
}

const Template = (args) => <TypingText {...args}>Hello World</TypingText>

export const Required = Template.bind({})
Required.args = {
  text: 'Hello World'
}

export const Optional = Template.bind({})
Optional.args = {
  text: 'Hello World',
  speed: 10,
  textColor: 'red',
  pointerColor: 'blue',
  fontFamily: 'Arial'
}
