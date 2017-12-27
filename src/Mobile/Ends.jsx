// @flow
import React from 'react'
import Atra from 'atra'
import { Listen, Background, ArrowLeft, ArrowWideUp } from '../Ends.jsx'

export { Listen, Background, ArrowLeft, ArrowWideUp }

export const Popdown = ((a) =>

  ({ src, top }) =>
    <div {...a("ROOT", { style: { top } })}>
      <img {...a("IMG", { src })} />
    </div>

)(Atra({
  ROOT: {
    style: {
      position: "relative",
      width: "96%",
      height: "87%",
      margin: "auto"
    }
  },
  IMG: {
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center"
    }
  }
}))

export const Burger = ((a) =>

  ({ stroke }) =>
    <svg {...a('SVG')}>
      <g {...a('G', { stroke })}>
        <path {...a('PATH_0')} />
        <path {...a('PATH_1')} />
        <path {...a('PATH_2')} />
      </g>
    </svg>

)(Atra({
  SVG: {
    viewBox: '0 0 300 300',
    style: {
      height: '100%'
    }
  },
  G: {
    style: {
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
}))