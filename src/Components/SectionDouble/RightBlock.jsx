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
          {/* <img className="right-block-button" src={props.button} alt="" /> */}
          <div
            style={{
              height: '42px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              color: 'black',
              borderRadius: '12px',
              padding: '0 16px 0 18px',
              gap: '8px',
            }}
          >
            Read case study{' '}
            <svg
              className="arrow-icon"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5625 12.6543C18.5625 12.874 18.4746 13.0762 18.2988 13.2432L12.4541 19.0703C12.2783 19.2373 12.0938 19.3164 11.8828 19.3164C11.4521 19.3164 11.1182 19 11.1182 18.5605C11.1182 18.3496 11.1885 18.1387 11.3291 18.0068L13.2979 16.0029L16.2598 13.3047L14.1328 13.4365H3.01465C2.55762 13.4365 2.24121 13.1113 2.24121 12.6543C2.24121 12.1973 2.55762 11.8721 3.01465 11.8721H14.1328L16.251 12.0039L13.2979 9.30566L11.3291 7.30176C11.1885 7.16113 11.1182 6.95898 11.1182 6.74805C11.1182 6.30859 11.4521 5.99219 11.8828 5.99219C12.0938 5.99219 12.2783 6.0625 12.4717 6.25586L18.2988 12.0654C18.4746 12.2324 18.5625 12.4346 18.5625 12.6543Z"
                fill="black"
              />
            </svg>
          </div>
        </CustomLink>
      </div>
      <img className="right-block-image" src={props.image} alt="" />
    </div>
  )
}
