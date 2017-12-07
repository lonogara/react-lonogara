import React from 'react'
import Atra from 'atra'

export default ({
  width,
  inform,
  buttonIndex,
  onTouchStart,
  children
}) =>
  <div {...a('ROOT', { style: { width } })}>
    <span {...a('WRAP')}>
      {children}
      {inform > 0 && <div {...a('INFORM')}>{inform}</div>}
    </span>
    <div {...a('CLICK_COVER', { onTouchStart, 'data-index': buttonIndex })} />
  </div>

const a = Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      height: '100%',
      position: 'relative'
    }
  },
  WRAP: {
    className: "ligure_button", // for svg { height: 100%; }
    style: {
      display: 'inline-block',
      position: 'relative',
      top: '18%',
      height: '66%'
    }
  },
  INFORM: {
    style: {
      position: 'absolute',
      fontSize: 27,
      display: 'inline-block',
      width: 34,
      height: 34,
      borderRadius: 50,
      background: '#ff4444',
      top: "-20%",
      right: "-18%",
      color: '#fff',
      lineHeight: 1.29
    }
  },
  CLICK_COVER: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
})
