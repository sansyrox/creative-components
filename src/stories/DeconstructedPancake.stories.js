import React from 'react'
import { DeconstructedPancake } from '../index'

export default {
  title: 'DeconstructedPancake', //
  component: DeconstructedPancake
}

const Template = (args) => (
  <DeconstructedPancake {...args}>
    <div>I am 1</div>
    <div>I am 2</div>
    <div>I am 3</div>
  </DeconstructedPancake>
)

export const Default = Template.bind({})
Default.args = {}
