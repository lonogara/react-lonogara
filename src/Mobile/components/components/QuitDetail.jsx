import React from "react";
import Atra from "atra";

export default ({ fn }) =>
  <span {...a("ROOT")}>
    <svg {...a("SVG")}>
      <path {...a("PATH")} />
    </svg>
    <span {...a("COVER", { onTouchEndCapture: (e) => {
      e.stopPropagation()
      e.preventDefault()
      fn()
    } })} />
  </span>

const a = Atra({

  ROOT: {
    style: {
      zIndex: 1000,
      width: 100,
      height: 100,
      position: "absolute",
      right: 24,
      top : 20
    }
  },

  SVG:{
    viewBox:"0 0 300 300",
  },

  PATH: {
    d: "M 189.50288,42.205033 41.07742,150.00001 189.50288,257.79499 m -25.8155,-107.79498 95.59992,0",
    style: {
      fill: "none",
      stroke: "var(--base-color)",
      strokeWidth: 42,
      strokeLinejoin: "round",
      strokeLinecap:"round",
    }
  },

  COVER: {
    style: {
      position: "absolute",
      top: -20,
      bottom: -20,
      left: -20,
      right: -20
    }
  }
})