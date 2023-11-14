import React from 'react'
import './SectionDouble.css'
import { SectionLCRB } from '../SectionLCRB/SectionLCRB'

export const SectionDouble = (props) => {
  return (
    <section className="section-double-grid">
      <div className="left-block-lr">
        <h1>Alena Bychkova</h1>
        <p>
          {/* I deliver sustainable and meaningful design solutions for 5+ years. */}
          Crafting UX/UI <span style={{ color: '#f8b250' }}> • </span> 6+ years
          in the field <span style={{ color: '#da6cd5' }}> • </span> Based in
          Tbilisi <span style={{ color: '#1f84ff' }}> • </span> 8 iOS apps{'  '}
          <span style={{ color: '#d172bf' }}> • </span> 7 Android apps{'  '}
          <span style={{ color: '#8d2aff' }}> • </span> 3 Web apps{'  '}
          <span style={{ color: '#2ac97c' }}> • </span> 2 Websites{'  '}
          <span style={{ color: '#8fb1ed' }}> • </span> 4 B2B projects{'  '}
          <span style={{ color: '#00efe1' }}> • </span> 6 B2C projects{'  '}
        </p>
        <div className="links">
          <a
            // style={{
            //   color: '#be8fed',
            //   fontFamily: 'Georgia',
            //   fontSize: '23px',
            //   fontStyle: 'normal',
            //   fontWeight: '400',
            //   marginTop: '-3px',
            //   marginBottom: '-3px',
            //   lineHeight: '32px',
            // }}
            href="https://www.linkedin.com/in/alena-bychkova/"
          >
            LinkedIn
          </a>
          <a
            // style={{
            //   color: '#be8fed',
            //   fontFamily: 'Georgia',
            //   fontSize: '23px',
            //   fontStyle: 'normal',
            //   fontWeight: '400',
            //   marginTop: '-3px',
            //   marginBottom: '-3px',
            //   lineHeight: '32px',
            // }}
            href="mailto:alena.bychkova.design@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: `${props.minHeight}`,
        }}
        className="right-block-lr"
      >
        {props.rightBlock}
      </div>
    </section>
  )
}
