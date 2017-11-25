import React from 'react'
import Atra from 'atra'

export default ({ onTouchEnd, drifting }) => (
  <div
    {...a('veil', {
      onTouchEnd,
      style: {
        top: drifting ? 0 : undefined,
        background: drifting ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)'
        // backgroundはdrifting === "wait"の段階がある
      }
    })}
  />
)

const a = Atra({
  veil: {
    className: '',
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      transition: '0.6s',
      borderRight: 'solid 0.2px #3a3a3a'
    }
  }
})
