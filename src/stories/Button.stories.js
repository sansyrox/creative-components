import React from 'react';
import {MovingUnderlineText} from '../index'
// import 'creative-components/dist/index.css'

// // # Alert

// <Playground>
//   <MovingUnderlineText>Hello World</MovingUnderlineText>
// </Playground>
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: MovingUnderlineText,
};

const Template = (args) => <MovingUnderlineText {...args} >Hello World</MovingUnderlineText>;

export const Primary = Template.bind({});
Primary.args = {
  fontFamily: 'Helvetica',
};


