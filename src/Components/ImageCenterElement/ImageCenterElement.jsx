import React from 'react'
import './ImageCenterElement.css'

export const ImageCenterElement = (props) => {
  return (
    <div className="text-element">
      <div className="text-element-left-block">{props.textDetail}</div>
      <div className="text-element-central-block">
        <img
          style={{
            height: `${props.height}`,
          }}
          className={'image' + ' ' + props.borderRadius}
          src={props.image}
          alt=""
        />
      </div>
      <div className="text-element-right-block"></div>
    </div>
  )
}
