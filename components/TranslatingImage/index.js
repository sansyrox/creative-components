import React from 'react'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// Custom Dependency Component
import ProgressiveImage from 'react-progressive-image'

// Usage : <TranslatingImage mainImageUrl=str placeholderImageUrl=str? scaleMagnification=number? altText=string? frameSize=number? />

function TranslatingImage({
  mainImageUrl,
  placeholderImageUrl,
  scaleMagnification,
  altText,
  frameSize
}) {
  const styles = frameSize
    ? { height: `${frameSize.height}px`, width: `${frameSize.width}px` }
    : {}

  console.log(frameSize)

  return (
    <div className='translating-image__frame'>
        <AnimatePresence>
      <ProgressiveImage
        src={mainImageUrl}
        placeholder={placeholderImageUrl ?? mainImageUrl}
        style={...styles}
      >

        {(src) => (
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: scaleMagnification ?? 1.1 }}
            trasition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96] //'ease-in-out' // [0.43, 0.13, 0.23, 0.96] corresponds to this bezier curve
            }}
            src={`${src}`}
            alt={`${altText ?? 'Alt Text'}`}
          />
        )}

      </ProgressiveImage>
        </AnimatePresence>
    </div>
  )
}

export default TranslatingImage
