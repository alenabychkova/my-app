import React, { useRef, useEffect, useState, useContext } from 'react'
import './CentralBlockSimple.css'
import { IphoneGraphicBlock } from '../IphoneGraphicBlock/IphoneGraphicBlock.jsx'
import { WebGraphicBlock } from '../../Components/WebGraphicBlock/WebGraphicBlock.jsx'
import { PictureGraphicBlock } from '../PictureGraphicBlock/PictureGraphicBlock.jsx'

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

  return <div ref={divRef}>{props.children}</div>
}
