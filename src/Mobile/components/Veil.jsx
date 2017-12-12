import React from 'react'
import Atra from 'atra'

export default ({
  drifting,
  onTouchEnd,
  onTransitionEnd
}) =>
  <div {...a('VEIL', {
    onTouchEnd,
    onTransitionEnd,
    style: {
      top: !drifting ? undefined : 0,
      background: (!drifting || drifting === "lag")
        ? 'rgba(0, 0, 0, 0)'
        : 'rgba(0, 0, 0, 0.8)'
    }
  })} />

const a = Atra({
  VEIL: {
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      transitionDuration: '0.6s',
      transitionProperty: 'background-color',
      borderRight: 'solid 0.2px #3a3a3a'
    }
  }
})
