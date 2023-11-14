import React, { useRef, useEffect, useState, useContext } from 'react'
import './ImageBOElement.css'

export const ImageBOElement = (props) => {
  //   const textBlock =
  //     props.textElementType == 'h1' ? (
  //       <h1>{props.text}</h1>
  //     ) : props.textElementType == 'h2' ? (
  //       <h2>{props.text}</h2>
  //     ) : props.textElementType == 'h3' ? (
  //       <h3>{props.text}</h3>
  //     ) : props.textElementType == 'h4' ? (
  //       <h4>{props.text}</h4>
  //     ) : props.textElementType == 'h5' ? (
  //       <h5>{props.text}</h5>
  //     ) : props.textElementType == 'h6' ? (
  //       <h6>{props.text}</h6>
  //     ) : props.textElementType == 'p' ? (
  //       <p>{props.text}</p>
  //     ) : props.textElementType == 'c' ? (
  //       <p className="caption">{props.text}</p>
  //     ) : props.textElementType == 't' ? (
  //       <p className="t">{props.text}</p>
  //     ) : null
  //   const textBlockStyle = {
  //     width: props.textWidth,
  //   }
  const propsBackgroundImage = props.backgroundImage
  const pictureElementStyle = {
    backgroundImage: { propsBackgroundImage },
  }
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
      }}
      className={
        'image-bo-element' + ' ' + props.width + ' ' + props.borderRadius
      }
    >
      <img
        className={'image' + ' ' + props.borderRadius}
        src={props.image}
        alt=""
      />
      <img className="overflow-image" src={props.overflowImage} alt="" />
    </div>
  )
}
