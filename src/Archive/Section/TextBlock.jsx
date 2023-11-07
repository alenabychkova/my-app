import React, { useRef, useEffect, useState, useContext } from 'react'
import './TextBlock.css'
import { IphoneGraphicBlock } from '../../Archive/IphoneGraphicBlock/IphoneGraphicBlock.jsx'
import { WebGraphicBlock } from '../WebGraphicBlock/WebGraphicBlock.jsx'
import { PictureGraphicBlock } from '../PictureGraphicBlock/PictureGraphicBlock.jsx'
import { SectionContext } from './SectionContext.jsx'

export const TextBlock = (props) => {
  const textBlock =
    props.textBlockType == 'h1' ? (
      <h1>{props.text}</h1>
    ) : props.textBlockType == 'h2' ? (
      <h2>{props.text}</h2>
    ) : props.textBlockType == 'h3' ? (
      <h3>{props.text}</h3>
    ) : props.textBlockType == 'h4' ? (
      <h4>{props.text}</h4>
    ) : props.textBlockType == 'h5' ? (
      <h5>{props.text}</h5>
    ) : props.textBlockType == 'h6' ? (
      <h6>{props.text}</h6>
    ) : props.textBlockType == 'p' ? (
      <p>{props.text}</p>
    ) : props.textBlockType == 'c' ? (
      <p className="caption">{props.text}</p>
    ) : props.textBlockType == 't' ? (
      <p className="t">{props.text}</p>
    ) : null
  const textBlockStyle = {
    width: props.textWidth,
  }

  return (
    <div className="text-block">
      {textBlock}
      {/* {isIntersecting ? 'Пересекает линию' : 'Не пересекает линию'} */}
    </div>
  )
}
