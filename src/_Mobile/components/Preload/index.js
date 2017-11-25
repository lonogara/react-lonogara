import React from 'react'
import Atra from 'atra'

export default ({ vanish, onTransitionEnd, children }) => (
  <div {...a('ROOT', { style: { opacity: vanish ? 0 : 1 }, onTransitionEnd })}>
    <span {...a('WRAP')}>{children}</span>
  </div>
)

const a = Atra({
  ROOT: {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: '#eeeeee',
      transition: '0.4s'
    }
  },
  WRAP: {
    style: {
      position: 'absolute',
      top: (window.innerHeight - 140) / 2 - 100,
      left: (window.innerWidth - 140) / 2,
      display: 'inline-block',
      height: 140
    }
  }
})
