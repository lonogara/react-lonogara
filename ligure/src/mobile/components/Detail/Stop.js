import React from 'react'
import Atra from 'atra'

export default ({ f }) => (
  <span {...a('span')}>
    <svg {...a('svg', true)}>
      <path {...a('path', true)} />
    </svg>
    <span {...a('cover', f)} />
  </span>
)

const a = Atra({
  span: {
    zIndex: 1000,
    height: 91,
    position: 'absolute',
    // left: 16,
    right: 24,
    top: 20
  },
  svg: {
    viewBox: '0 0 300 300'
    // viewBox:"0 -20 300 340"
  },
  path: {
    // d: "M 241.83659,7.6084992 58.731126,148.71429 241.83659,289.82008",
    // d: "M 58.370181,291.10579 241.47564,150 58.370181,8.8942098",
    d:
      'M 110.54023,257.79498 258.96569,150 110.54023,42.205019 M 136.35573,150 H 40.755811',
    style: {
      fill: 'none',
      // stroke:"rgb(97, 97, 97)",
      // stroke: "rgb(36, 38, 56)",
      // stroke: "#fff",
      stroke: 'rgb(30, 34, 67)',
      // strokeWidth: 30,
      strokeWidth: 42,
      strokeLinejoin: 'round',
      strokeLinecap: 'round'
    }
  },
  cover: f => ({
    onTouchEnd: f,
    style: {
      position: 'absolute',
      // background: "rgba(0,0,0,0.3)",
      top: -10,
      bottom: -10,
      left: -10,
      right: -10
    }
  })
})
