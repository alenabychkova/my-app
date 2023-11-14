import React from 'react'
import './iPhoneBlock.css'

export const IphoneBlock = (props) => {
  const height = 600
  const marginiphone = (window.innerHeight - height) / 2
  const iphoneGraphicBlockStyle = {
    height: height,
  }

  return (
    <div className="iphone-block">
      <img className="iphone-image" src={props.image} alt="image" />
    </div>
  )
}
