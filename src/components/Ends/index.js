// @flow
import React from 'react'
import Atra from 'atra'
import { isNum } from '../../util.js'

export const Listen = (a => {

  const specifies = ['type', 'listener', 'positionValue']
  const reposition = (value) => ({
    top: value,
    bottom: value,
    left: value,
    right: value
  })

  return (props) => {
    const { type, listener, positionValue } = props

    const reprops = {}
    reprops[type] = listener
    reprops.style = isNum(positionValue) ? reposition(positionValue) : {}
    Object.keys(props)
    .filter((key) => !specifies.includes(key))
    .forEach((key) => { reprops[key] = props[key] })

    return <span {...a('EL', reprops)} />
  }

})(Atra({
  EL: {
    style: {
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}))

export const Background = (a =>

  (props) => <div {...a('EL', Object.assign({}, props))} />

)(Atra({
  EL: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
}))

export const ArrowLeft = ((a) =>

  ({ stroke }) =>
    <svg {...a("SVG")}>
      <path {...a("PATH", { style: { stroke } })} />
    </svg>

)(Atra({
  SVG:{
    viewBox:"0 0 300 300"
  },
  PATH: {
    d: "M 189.50288,42.205033 41.07742,150.00001 189.50288,257.79499 m -25.8155,-107.79498 95.59992,0",
    style: {
      fill: "none",
      strokeWidth: 42,
      strokeLinejoin: "round",
      strokeLinecap:"round"
    }
  }
}))

export const ArrowWideUp = ((a) =>

  () =>
    <svg {...a("SVG")}>
      <path {...a("PATH")} />
    </svg>

)(Atra({
  SVG:{
    viewBox:"0 0 1200 260"
  },
  PATH: {
    d: "M 33.028507,241.96285 600.001,18.109642 1166.9735,241.96285",
    style: {
      fill: "none",
      stroke: "rgb(46, 46, 46)",
      strokeWidth: 42,
      strokeLinejoin: "round",
      strokeLinecap:"round",
    }
  }
}))