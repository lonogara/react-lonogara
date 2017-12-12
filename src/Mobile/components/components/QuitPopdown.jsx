import React from "react";
import Atra from "atra";

export default ({ fn }) =>
  <div{...a("ROOT")}>
    <span {...a("WRAP")}>
      <svg {...a("SVG")}>
        <path {...a("PATH")} />
      </svg>
      <span {...a("COVER", { onTouchEnd: (e) => { e.stopPropagation(); fn(); } })} />
    </span>
  </div>

const a = Atra({

  ROOT: {
    style: {
      zIndex: 1000,
      position: "absolute",
      bottom : 17,
      left: '0',
      width: '100%',
      textAlign: 'center'
    }
  },

  WRAP: {
    style: {
      position: 'relative',
      width: '32%',
      display: 'inline-block'
    }
  },

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
  },

  COVER: {
    onTouchStartCapture: (e) => e.stopPropagation(),
    style: {
      position: "absolute",
      top: -10,
      bottom: -10,
      left: -10,
      right: -10
    }
  }
})