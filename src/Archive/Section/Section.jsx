// import React, { useRef, useEffect, useState } from 'react'
// import './Section.css'
// import { IphoneGraphicBlock } from '../IphoneGraphicBlock/IphoneGraphicBlock.jsx'
// import { WebGraphicBlock } from '../WebGraphicBlock/WebGraphicBlock.jsx'
// import { PictureGraphicBlock } from '../PictureGraphicBlock/PictureGraphicBlock.jsx'
// import { SectionContext } from './SectionContext.jsx'

// export const Section = (props) => {
//   const windowWidth = window.innerWidth
//   const textWidth = 754
//

//

// const iPhoneGraphicBlockLeftMargin =
//   (windowWidth - textWidth - 288 - 288) / 2 - 30
// console.log(iPhoneGraphicBlockLeftMargin)

// const iPhoneGraphicBlockRightMargin =
//   windowWidth - ((windowWidth - textWidth) / 2 - 30)
// console.log(iPhoneGraphicBlockLeftMargin)

//   const textBlockStyle = {
//     width: props.textWidth,
//   }

//   const leftRightBlockWidth = (windowWidth - textWidth) / 2
//   const leftBlockStyle = {
//     width: leftRightBlockWidth,
//   }

//   const rightBlockStyle = {
//     width: leftRightBlockWidth,
//     marginLeft: leftRightBlockWidth + textWidth,
//   }

//   const [leftBlock, setLeftBlock] = useState(null)
//   const [rightBlock, setRightBlock] = useState(null)

//   return (
//     <section>
//       <div style={leftBlockStyle} className="left-graphic-block">
//         {leftBlock}
//       </div>
//       <SectionContext.Provider value={[setLeftBlock, setRightBlock]}>
//         <div style={textBlockStyle} className="central-block">
//           {props.children}
//         </div>
//       </SectionContext.Provider>
//       <div style={rightBlockStyle} className="right-graphic-block">
//         {rightBlock}
//       </div>
//       <div className="divider"> </div>
//     </section>
//   )
// }

// import React, { useRef, useEffect, useState } from 'react'
// import './Section.css'
// import { IphoneGraphicBlock } from './IphoneGraphicBlock.jsx'
// import { WebGraphicBlock } from './WebGraphicBlock.jsx'
// import { PictureGraphicBlock } from './PictureGraphicBlock.jsx'
// import { SectionContext } from './SectionContext.jsx'

// export const Section = (props) => {
//   const windowWidth = window.innerWidth
//   const textWidth = 754

//   const textBlockStyle = {
//     width: props.textWidth,
//   }

//   const leftRightBlockWidth = (windowWidth - textWidth) / 2
//   const leftBlockStyle = {
//     width: leftRightBlockWidth,
//   }

//   const rightBlockStyle = {
//     width: leftRightBlockWidth,
//     marginLeft: leftRightBlockWidth + textWidth,
//   }

//   // const [leftBlock, setLeftBlock] = useState(null)
//   // const [rightBlock, setRightBlock] = useState(null)

//   const leftBlock = useRef(null)
//   const setLeftBlock = (e) => {
//     leftBlock.current = e
//   }

//   const rightBlock = useRef(null)
//   const setRightBlock = (e) => {
//     rightBlock.current = e
//   }

//   return (
//     <section>
//       <div style={leftBlockStyle} className="left-graphic-block">
//         {/* {leftBlock.current} */}
//         {leftBlock}
//       </div>
//       <SectionContext.Provider value={[setLeftBlock, setRightBlock]}>
//         <div style={textBlockStyle} className="central-block">
//           {props.children}
//         </div>
//       </SectionContext.Provider>
//       <div style={rightBlockStyle} className="right-graphic-block">
//         {/* {rightBlock.current} */}
//         {rightBlock}
//       </div>
//       <div className="divider"> </div>
//     </section>
//   )
// }
