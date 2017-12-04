import React from 'react'
import Atra from 'atra'

export default ({ inform, buttonIndex, onTouchStart, children }) => (
  <div {...a('ROOT')}>
    <span {...a('CHILDREN_WRAP')}>{children}</span>
    {inform > 0 && <div {...a('INFORM')}>{inform}</div>}
    <div {...a('CLICK_COVER', { 'data-index': buttonIndex, onTouchStart })} />
  </div>
)

const a = Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      position: 'relative'
    }
  },
  CHILDREN_WRAP: {
    style: {
      display: 'inline-block',
      color: 'white',
      objectFit: 'contain',
      position: 'relative',
      // height: '50%',
      // width: '42%',
      width: '40%',
      // top: '23%',
      // top: '18%'
      top: '17%'
      // strokeLinecap: 'round',
      // strokeLinejoin: 'round'
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
      top: 14,
      right: '20%',
      color: '#fff',
      lineHeight: 1.29
    }
  },
  CLICK_COVER: {
    className: 'for_view_change',
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
})
