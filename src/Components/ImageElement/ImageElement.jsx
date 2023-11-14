import React, { useRef, useEffect, useState, useContext } from 'react'
import './ImageElement.css'
import '../../Project/Styles/Spacing.css'

export const ImageElement = (props) => {
  //   const maxWidth =
  //     props.maxWidth === 'full'
  //       ? '100vw'
  //       : props.maxWidth === 'lcr'
  //       ? 'calc(var(--S-LCR-2C) + var(--S-LCR-3C) + var(--S-LCR-4C))'
  //       : props.maxWidth === 'c'
  //       ? 'var(--S-LCR-3C)'
  //       : props.maxWidth === 'v1'
  //       ? 'var(--WCB-C)'
  //       : '100vw'

  //   const maxWidth =
  //     props.maxWidth === 'full'
  //       ? '100vw'
  //       : props.maxWidth === 'lcr'
  //       ? 'calc(var(--S-LCR-2C) + var(--S-LCR-3C) + var(--S-LCR-4C))'
  //       : props.maxWidth === 'c'
  //       ? 'var(--S-LCR-3C)'
  //       : props.maxWidth === 'd'
  //       ? 'var(--WCB-C)'
  //       : 'd'

  //   const imageStyle = {
  //     maxWidth: maxWidth,
  //   }

  return (
    <img
      //   style={imageStyle}
      className={
        'image-element' + ' ' + props.maxWidth + ' ' + props.borderRadius
      }
      src={props.image}
      alt="image"
    />
  )
}

// export const ImageElement = (props) => {
//     const maxWidth =
//       props.maxWidth == 'full'
//         ? '100vw'
//         : props.maxWidth == 'lcr'
//         ? 'calc(var(--S-LCR-2C) + var(--S-LCR-3C) + var(--S-LCR-4C))'
//         : props.maxWidth == 'c'
//         ? 'var(--S-LCR-3C)'
//         : props.maxWidth == 'v1'
//         ? 'var(--WCB-C)'
//         : '100vw'

//     //   const maxWidht = props.maxWidht

//     const imageStyle = {
//       maxWidth: { maxWidth },
//     }
//     return (
//       <img
//         style={imageStyle}
//         className="image-ie"
//         src={props.image}
//         alt="image"
//       />
//     )
//   }

//
// calc(var(--S-LCR-2C) + var(--S-LCR-3C) + var(--S-LCR-4C))

// var(--S-LCR-2C)
// var(--S-LCR-3C)
// var(--S-LCR-4C)
