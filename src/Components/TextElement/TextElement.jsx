import React from 'react'
import './TextElement.css'

export const TextElement = (props) => {
  const text =
    props.textElementType == 'h1' ? (
      <h1>{props.text}</h1>
    ) : props.textElementType == 'h2' ? (
      <h2>{props.text}</h2>
    ) : props.textElementType == 'h3' ? (
      <h3>{props.text}</h3>
    ) : props.textElementType == 'h4' ? (
      <h4>{props.text}</h4>
    ) : props.textElementType == 'h5' ? (
      <h5>{props.text}</h5>
    ) : props.textElementType == 'h6' ? (
      <h6>{props.text}</h6>
    ) : props.textElementType == 'p' ? (
      <p>{props.text}</p>
    ) : props.textElementType == 'c' ? (
      <p className="caption">{props.text}</p>
    ) : props.textElementType == 'e' ? (
      <p className="eyebrow">{props.text}</p>
    ) : null

  const textAlign = props.textAlign === 'center' ? 'center' : ''

  //  style={{textAlign: `${textAlign}` }}
  // style={{
  //   text-align: center;
  // }}
  return (
    <div className="text-element">
      <div className="text-element-left-block">{props.textDetail}</div>
      <div
        style={{ textAlign: `${textAlign}` }}
        className="text-element-central-block"
      >
        {text}
      </div>
      <div className="text-element-right-block"></div>
    </div>
  )
}
