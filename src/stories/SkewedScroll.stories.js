import React from 'react'
import { SkewScroll, SkewedComponent } from '../index'

export default {
  title: 'SkewScroll', //
  component: SkewScroll
}

const Template = (args) => (
  <SkewScroll {...args}>
    <SkewedComponent>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjXuGMsgZyU0ZP2JeyGCNMG5FkKQPjz5m0tvRm-hbWuiXyBflyGs_O7l4fvywP62kqcSen3x1gd23JZy_Y3fiobc82ctCs40&usqp=CAU&ec=45732301' />
      <div>Hello World</div>
    </SkewedComponent>
    <SkewedComponent>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjXuGMsgZyU0ZP2JeyGCNMG5FkKQPjz5m0tvRm-hbWuiXyBflyGs_O7l4fvywP62kqcSen3x1gd23JZy_Y3fiobc82ctCs40&usqp=CAU&ec=45732301' />
      <div>Hello World</div>
    </SkewedComponent>
    <SkewedComponent>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjXuGMsgZyU0ZP2JeyGCNMG5FkKQPjz5m0tvRm-hbWuiXyBflyGs_O7l4fvywP62kqcSen3x1gd23JZy_Y3fiobc82ctCs40&usqp=CAU&ec=45732301' />
      <div>Hello World</div>
    </SkewedComponent>
    <SkewedComponent>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjXuGMsgZyU0ZP2JeyGCNMG5FkKQPjz5m0tvRm-hbWuiXyBflyGs_O7l4fvywP62kqcSen3x1gd23JZy_Y3fiobc82ctCs40&usqp=CAU&ec=45732301' />
      <div>Hello World</div>
    </SkewedComponent>
  </SkewScroll>
)

export const Default = Template.bind({})
Default.args = {
  skewSpeed: 0.25
}
