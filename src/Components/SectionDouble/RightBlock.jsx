import React from 'react'
import './RightBlock.css'
import { SectionLCRB } from '../SectionLCRB/SectionLCRB'
import { CustomLink } from '../NavBar/NavBar.jsx'

export const RightBlock = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: `${props.minHeight}`,
      }}
      className="right-block-component"
    >
      <div className="right-block-container">
        <div>
          <img
            className="right-block-image-header"
            src={props.imageHeader}
            alt=""
          />
        </div>
        <p>{props.text}</p>
        <CustomLink to={props.to}>
          <img className="right-block-button" src={props.button} alt="" />
        </CustomLink>
      </div>
      <img className="right-block-image" src={props.image} alt="" />
    </div>
  )
}
