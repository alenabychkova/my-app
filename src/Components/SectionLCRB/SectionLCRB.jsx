import React from 'react'
import './SectionLCRB.css'

export const SectionLCRB = (props) => {
  return (
    <section className="section-grid">
      <div className="left-extra-block">{props.leftExtraBlock}</div>
      <div className="left-block">{props.leftBlock}</div>
      <div className="central-block">{props.centerBlock}</div>
      <div className="right-block">{props.rightBlock}</div>
      <div className="right-extra-block">{props.rightExtraBlock}</div>
      <div className="bottom-block">{props.bottomBlock}</div>
    </section>
  )
}
