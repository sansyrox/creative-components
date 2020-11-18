import React from 'react'

import {
  FollowingCursor,
  SimpleGrid,
  TypingText,
  ClassicGrid,
  DeconstructedPancake,
  PancakeStack,
  SidebarGrid,
  TranslatingImage,
  SkewScroll,
  SkewedComponent
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
      <TranslatingImage
        mainImageUrl='https://avatars1.githubusercontent.com/u/29942790?s=460&u=f6dc49f79d7d53a31cd9b093ef1438d590d1b886&v=4'
        //        frameSize={{ height: 320, width: 320 }}
      />

      <SkewScroll>
        <SkewedComponent>
          <img
            src='https://avatars1.githubusercontent.com/u/29942790?s=460&u=f6dc49f79d7d53a31cd9b093ef1438d590d1b886&v=4'
            alt='bruh'
          />
        </SkewedComponent>
        <SkewedComponent>
          <img
            src='https://avatars1.githubusercontent.com/u/29942790?s=460&u=f6dc49f79d7d53a31cd9b093ef1438d590d1b886&v=4'
            alt='bruh'
          />
        </SkewedComponent>
        <SkewedComponent>
          <img
            src='https://avatars1.githubusercontent.com/u/29942790?s=460&u=f6dc49f79d7d53a31cd9b093ef1438d590d1b886&v=4'
            alt='bruh'
          />
        </SkewedComponent>
      </SkewScroll>
    </>
  )
}

export default App
