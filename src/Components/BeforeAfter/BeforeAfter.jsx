import React from 'react'
import './BeforeAfter.css'

export const BeforeAfter = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.Image}),url(${props.Background})`,
        backgroundPosition: 'center , bottom',
        backgroundSize: '70vw, cover',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundAttachment: 'fixed,fixed',
      }}
      className="before-after-container"
    >
      {/* <div
        style={{
          backgroundImage: `url(${props.beforeBackground}),url(${props.beforeImage})`,
          backgroundPosition: 'bottom , center',
          backgroundSize: 'cover, auto',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundAttachment: 'fixed,fixed',
        }}
        className="before-after-background"
      ></div> */}
    </div>
  )
}

{
  /* <div
        style={{
          backgroundImage: `url(${props.afterBackground}),url(${props.afterImage})`,
          backgroundPosition: 'bottom , center',
          backgroundSize: 'cover, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundAttachment: 'fixed,fixed',
        }}
        className="before-after-background"
      ></div> */
}
