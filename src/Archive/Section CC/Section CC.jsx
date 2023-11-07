import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
  useLayoutEffect,
} from 'react'
import './Section LCR.css'

export const SectionLCR = (props) => {
  return (
    <section className="section-grid">
      <div className="left-block">{props.leftBlock}</div>
      <div className="central-block">{props.centerBlock}</div>
      <div className="right-block">{props.rightBlock}</div>
    </section>
  )
}
