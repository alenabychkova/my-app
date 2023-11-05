import React from 'react'
import './IphoneGraphicBlock.css'

export const IphoneGraphicBlock = (props) => {
  const height = 600
  const marginiphone = (window.innerHeight - height) / 2
  const iphoneGraphicBlockStyle = {
    height: height,
  }

  return (
    <div style={iphoneGraphicBlockStyle} className="iphone-graphic-block">
      {props.image}
    </div>
  )
}
