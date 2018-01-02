// @flow
import React from 'react'
import Atra from 'atra'

export const Preload = ((a) =>

  ({
    onTransitionEnd,
    backgroundColor,
    opacity,
    children
  }) =>
    <div {...a('ROOT', { onTransitionEnd, style: { backgroundColor, opacity } })}>
      <div {...a('RELATIVE')}>
        {children}
      </div>
    </div>

)(Atra({
  ROOT: {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transitionDuration: '0.7s',
      transitionProperty: 'opacity'
    }
  },
  RELATIVE: {
    style: {
      position: 'relative',
      height: '100%',
      textAlign: 'center'
    }
  }
}))