import React from 'react'
import './SectionSimple.css'

export const Section = (props) => {
  const windowWidth = window.innerWidth
  const textWidth = 754

  //

  const textBlockStyle = {
    width: props.textWidth,
  }

  const leftRightBlockWidth = (windowWidth - textWidth) / 2
  const leftBlockStyle = {
    width: leftRightBlockWidth,
  }

  const rightBlockStyle = {
    width: leftRightBlockWidth,
    // marginLeft: leftRightBlockWidth + textWidth,
  }

  return (
    <section>
      <div style={leftBlockStyle} className="left-graphic-block">
        {props.leftBlock}
      </div>
      <div style={textBlockStyle} className="central-block">
        {props.centerBlock}
      </div>
      <div style={rightBlockStyle} className="right-graphic-block">
        {props.rightBlock}
      </div>
      <div className="divider"> </div>
    </section>
  )
}
