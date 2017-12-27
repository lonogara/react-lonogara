// @flow
import React from 'react'
import Atra from 'atra'
import { Listen, Background, ArrowLeft, ArrowWideUp } from '../Ends.jsx'

export { Listen, Background, ArrowLeft, ArrowWideUp }

export const Popdown = ((a) =>

  ({ src }) =>
    <div {...a('ROOT')}>
      <img {...a('IMG', { src })} />
    </div>

)(Atra({
  ROOT: {
    style: {
      position: 'relative',
      maxWidth: 1000,
      height: '87%',
      top: '3%',
      margin: 'auto',
      padding: '0px 15px'
    }
  },
  IMG: {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center'
    }
  }
}))

export const ArrowUp = ((a) =>

  ({ fn, stroke }) =>
    <svg {...a("SVG")}>
      <path {...a("PATH", { style: { stroke } })} />
    </svg>

)(Atra({
  SVG:{
    viewBox:"0 0 300 300"
  },
  PATH: {
    d: "M 257.79498,189.74596 150.00001,41.320493 42.205023,189.74596 m 107.794987,-25.8155 v 95.59992",
    style: {
      fill: "none",
      strokeWidth: 42,
      strokeLinejoin: "round",
      strokeLinecap:"round"
    }
  }
}))

export const Strap = ((a) =>

  ({ stroke }) =>
    <svg {...a('SVG')}>
      <path {...a('PATH_0', { style: { stroke } })} />
      <path {...a('PATH_1')} />
    </svg>

)(Atra({
  SVG: {
    viewBox: '0 0 300 300',
    style: {
      height: '100%'
    }
  },
  PATH_0: {
    d: 'M 149.99811,0 150,188.403',
    style: {
      strokeWidth: 8,
      strokeLinecap: 'round'
    }
  },
  PATH_1: {
    d: 'm 172.32747,229.01407 c 0,12.33112 -9.99635,22.32747 -22.32747,22.32747 -12.33112,0 -22.32747,-9.99635 -22.32747,-22.32747 0,-12.33112 9.99635,-22.32747 22.32747,-22.32747 12.33112,0 22.32747,9.99635 22.32747,22.32747 z',
    style: {
      fill: '#c30000',
      stroke: '#780d00',
      strokeWidth: 12
    }
  }
}))