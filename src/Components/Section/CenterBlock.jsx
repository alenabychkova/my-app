import React, { useRef, useEffect, useState, useContext } from 'react'
import './TextBlock.css'
import { IphoneGraphicBlock } from './IphoneGraphicBlock.jsx'
import { WebGraphicBlock } from './WebGraphicBlock.jsx'
import { PictureGraphicBlock } from './PictureGraphicBlock.jsx'
import { SectionContext } from './SectionContext.jsx'

export const CenterBlock = (props) => {
  //
  const ContentOfLeftBlock =
    props.leftGraphicBlock == 'iphone' ? (
      <IphoneGraphicBlock image={props.leftIcon} />
    ) : props.leftGraphicBlock == 'web' ? (
      <WebGraphicBlock image={props.leftIcon} />
    ) : props.leftGraphicBlock == 'picture' ? (
      <PictureGraphicBlock image={props.leftIcon} />
    ) : null

  const ContentOfRightBlock =
    props.rightGraphicBlock == 'iphone' ? (
      <IphoneGraphicBlock image={props.leftIcon} />
    ) : props.rightGraphicBlock == 'web' ? (
      <WebGraphicBlock image={props.leftIcon} />
    ) : props.rightGraphicBlock == 'picture' ? (
      <PictureGraphicBlock image={props.leftIcon} />
    ) : null

  //setLeftBlock(ContentOfLeftBlock)

  //
  const divRef = useRef(null)
  const lineY = 100

  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const checkIntersection = () => {
      if (divRef.current) {
        const divRect = divRef.current.getBoundingClientRect()
        const divTop = divRect.top
        const divBottom = divRect.bottom

        if (divTop < lineY && divBottom > lineY) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      }
    }

    window.addEventListener('scroll', checkIntersection)

    // Вызываем функцию проверки в начале, чтобы установить начальное состояние
    checkIntersection()

    return () => {
      window.removeEventListener('scroll', checkIntersection)
    }
  }, [])
  //

  //   const setLeftBlock = useContext(SectionContext)

  //   const showHideleftBlockContent = () =>
  //     isIntersecting === true ? setLeftBlock(ContentOfLeftBlock) : null

  //   showHideleftBlockContent()

  //-------
  const sectionContext = useContext(SectionContext)
  const setLeftBlock = sectionContext[0]

  const showHideleftBlockContent = () =>
    isIntersecting === true ? setLeftBlock(ContentOfLeftBlock) : null

  showHideleftBlockContent()

  const setRightBlock = sectionContext[1]

  const showHideRightBlockContent = () =>
    isIntersecting === true ? setRightBlock(ContentOfRightBlock) : null

  showHideRightBlockContent()
  console.log('render count')
  return <div ref={divRef}>{props.children}</div>
}

// import React, { useRef, useEffect, useState, useContext } from 'react'
// import './TextBlock.css'
// import { IphoneGraphicBlock } from './IphoneGraphicBlock.jsx'
// import { WebGraphicBlock } from './WebGraphicBlock.jsx'
// import { PictureGraphicBlock } from './PictureGraphicBlock.jsx'
// import { SectionContext } from './SectionContext.jsx'

// export const CenterBlock = (props) => {
//   //
//   const ContentOfLeftBlock =
//     props.leftGraphicBlock == 'iphone' ? (
//       <IphoneGraphicBlock image={props.leftIcon} />
//     ) : props.leftGraphicBlock == 'web' ? (
//       <WebGraphicBlock image={props.leftIcon} />
//     ) : props.leftGraphicBlock == 'picture' ? (
//       <PictureGraphicBlock image={props.leftIcon} />
//     ) : null

//   const ContentOfRightBlock =
//     props.rightGraphicBlock == 'iphone' ? (
//       <IphoneGraphicBlock image={props.leftIcon} />
//     ) : props.rightGraphicBlock == 'web' ? (
//       <WebGraphicBlock image={props.leftIcon} />
//     ) : props.rightGraphicBlock == 'picture' ? (
//       <PictureGraphicBlock image={props.leftIcon} />
//     ) : null

//   //setLeftBlock(ContentOfLeftBlock)

//   //
//   const divRef = useRef(null)
//   const lineY = 100

//   const [isIntersecting, setIsIntersecting] = useState(false)

//   useEffect(() => {
//     const checkIntersection = () => {
//       if (divRef.current) {
//         const divRect = divRef.current.getBoundingClientRect()
//         const divTop = divRect.top
//         const divBottom = divRect.bottom

//         if (divTop < lineY && divBottom > lineY) {
//           setIsIntersecting(true)
//         } else {
//           setIsIntersecting(false)
//         }
//       }
//     }

//     window.addEventListener('scroll', checkIntersection)

//     // Вызываем функцию проверки в начале, чтобы установить начальное состояние
//     checkIntersection()

//     return () => {
//       window.removeEventListener('scroll', checkIntersection)
//     }
//   }, [])
//   //

//   //-------
//   const sectionContext = useContext(SectionContext)
//   const setLeftBlock = sectionContext[0]
//   const setRightBlock = sectionContext[1]

//   // useEffect(() => {
//   //   const showHideleftBlockContent = () =>
//   //     isIntersecting === true ? setLeftBlock(ContentOfLeftBlock) : null

//   //   const showHideRightBlockContent = () =>
//   //     isIntersecting === true ? setRightBlock(ContentOfRightBlock) : null

//   //   window.addEventListener('scroll', showHideleftBlockContent())
//   //   showHideleftBlockContent()
//   //   window.addEventListener('scroll', showHideRightBlockContent())
//   //   showHideRightBlockContent()
//   //   return () => {
//   //     window.removeEventListener('scroll', showHideleftBlockContent())
//   //     window.removeEventListener('scroll', showHideRightBlockContent())
//   //   }
//   // }, [])

//   //

//    варик с
//   const showHideleftBlockContent = () =>
//     isIntersecting === true ? setLeftBlock(ContentOfLeftBlock) : null
//   showHideleftBlockContent()

//   const showHideRightBlockContent = () =>
//     isIntersecting === true ? setRightBlock(ContentOfRightBlock) : null
//   showHideRightBlockContent()
//   // console.log('render count')
//   return <div ref={divRef}>{props.children}</div>
// }
