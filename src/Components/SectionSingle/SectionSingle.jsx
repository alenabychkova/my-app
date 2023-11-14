import React from 'react'
import './SectionSingle.css'

export const SectionSingle = (props) => {
  return (
    <section
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: `${props.minHeight}`,
      }}
      className="section-single"
    >
      <div className="section-single-container-a">{props.children}</div>
    </section>
  )
}
