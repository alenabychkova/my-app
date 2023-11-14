import React from 'react'
import './ImageTD.css'

export const ImageTD = (props) => {
  return (
    <img
      style={{
        width: `${props.size}`,
        height: `${props.size}`,
        margin: `${props.margin}`,
      }}
      className={'image-td'}
      src={props.image}
      alt=""
    />
  )
}
