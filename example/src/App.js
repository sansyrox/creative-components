import React from 'react'

import {
  FollowingCursor,
  SimpleGrid,
  TypingText,
  ClassicGrid,
  DeconstructedPancake,
  PancakeStack,
  SidebarGrid
} from 'creative-components'
import 'creative-components/dist/index.css'

const App = () => {
  return (
    <>
      <FollowingCursor />
      <SimpleGrid>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
        <TypingText text='Hello' speed={100} />
      </SimpleGrid>
      <ClassicGrid>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </ClassicGrid>
      <DeconstructedPancake>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </DeconstructedPancake>
      <PancakeStack>
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
      </PancakeStack>

      <SidebarGrid>
        <div>Hello World</div>
        <div>Hello World</div>
      </SidebarGrid>
    </>
  )
}

export default App
