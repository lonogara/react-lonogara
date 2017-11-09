import React from 'react'
import Atra from 'atra'

export default ({ color }) => (
  <svg {...a('svg', true)}>
    <g {...a('burger_g', { style: color })}>
      <path {...a('burger_0', true)} />
      <path {...a('burger_2', true)} />
      <path {...a('burger_1', true)} />
    </g>
  </svg>
)

const a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  burger_g: stroke => ({
    // stroke:"#616161",
    // stroke:"#ffffff",
    stroke,
    strokeWidth: 26
    // strokeWidth:21,
    // strokeLinecap:"round"
  }),
  burger_0: {
    d: 'm 40,224.5 220,0'
  },
  burger_1: {
    d: 'm 40,149.49959 220,0'
  },
  burger_2: {
    d: 'm 40,74.499594 220,0'
  }
})
