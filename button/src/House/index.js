import React from 'react'
import Atra from 'atra'

export default ({ choised }) => (
  <svg {...a('svg')}>
    <path
      {...a('path', {
        style: {
          fill: choised ? 'var(--main-color)' : 'none'
        }
      })}
    />
  </svg>
)

const a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path: {
    d:
      'M 150.0005,11.642 11.643,121.37381 l 0,166.98319 100.18991,0 0,-71.56422 76.33518,0 0,71.56422 100.18991,0 0,-166.98319 z',
    style: {
      stroke: 'var(--main-color)',
      strokeWidth: '12'
    }
  }
})
