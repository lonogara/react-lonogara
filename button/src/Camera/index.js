import React from 'react'
import Atra from 'atra'

export default ({ choised }) => (
  <svg {...a('svg')}>
    <path
      {...a('path_0', {
        style: {
          fill: choised ? 'var(--main-color)' : 'none'
        }
      })}
    />
    <path
      {...a('path_1', {
        style: {
          stroke: choised ? '#ffffff' : 'var(--main-color)',
          strokeWidth: choised ? 9 : 12
        }
      })}
    />
    <path
      {...a('path_2', {
        style: {
          fill: choised ? '#ffffff' : 'var(--main-color)',
          stroke: choised ? 'none' : 'var(--main-color)',
          strokeWidth: choised ? 0 : 5
        }
      })}
    />
    <path {...a('path_3')} />
  </svg>
)

const a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path_0: {
    d:
      'm 55,41.671997 190,0 c 27.7,0 50,22.3 50,50 L 295,230 c 0,27.7 -22.3,50 -50,50 L 55,280 C 27.3,280 5,257.7 5,230 L 5,91.671997 c 0,-27.7 22.3,-50 50,-50 z',
    style: {
      stroke: 'var(--main-color)',
      strokeWidth: '12'
    }
  },
  path_1: {
    d:
      'M 268.12503,77.767872 A 14.642857,14.642857 0 0 1 253.48217,92.410729 14.642857,14.642857 0 0 1 238.83932,77.767872 14.642857,14.642857 0 0 1 253.48217,63.125015 14.642857,14.642857 0 0 1 268.12503,77.767872 Z'
  },
  path_2: {
    d:
      'm 225,163 a 75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75 z',
    style: {
      fill: 'none'
    }
  },
  path_3: {
    d: 'M 202.92173,10 210,30 90,30 96.74771,10 Z',
    style: {
      fill: 'var(--main-color)',
      stroke: 'var(--main-color)'
    }
  }
})
