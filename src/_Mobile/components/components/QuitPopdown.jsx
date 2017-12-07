import React from "react";
import Atra from "atra";

export default ({ fn }) =>
  <span {...a("ROOT")}>
    <svg {...a("SVG")}>
      <path {...a("PATH")} />
    </svg>
    <span {...a("COVER", { onTouchEnd: (e) => { e.stopPropagation(); fn(); } })} />
  </span>

const a = Atra({

  ROOT: {
    style: {
      zIndex: 1000,
      width: 120,
      height: 110,
      position: "absolute",
      right: 20,
      bottom : 10
    }
  },

  SVG:{
    viewBox:"0 0 300 300",
  },

  PATH: {
    d: "M 257.79497,203.6703 149.99999,96.462235 42.205019,203.6703",
    style: {
      fill: "none",
      stroke: "rgb(38, 38, 38)",
      strokeWidth: 42,
      strokeLinejoin: "round",
      strokeLinecap:"round",
    }
  },

  COVER: {
    style: {
      position: "absolute",
      top: -10,
      bottom: -10,
      left: -10,
      right: -10
    }
  }
})