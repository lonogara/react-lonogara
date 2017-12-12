import React from 'react'
import Atra from 'atra'

export default () =>
  <svg {...a('SVG')}>
    <g {...a('G')}>
      <path {...a('PATH_0')} />
      <path {...a('PATH_1')} />
      <path {...a('PATH_2')} />
    </g>
  </svg>

const a = Atra({
  SVG: {
    viewBox: '0 0 300 300',
    style: {
      height: '100%'
    }
  },
  G: {
    style: {
      stroke: 'var(--sub-color)',
      strokeWidth: 26
    }
  },
  PATH_0: {
    d: 'm 40,224.5 220,0'
  },
  PATH_1: {
    d: 'm 40,149.49959 220,0'
  },
  PATH_2: {
    d: 'm 40,74.499594 220,0'
  }
})
