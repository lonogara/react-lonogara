import React from 'react'
import Atra from 'atra'

export default ({ detail, children }) =>
  <div {...a("ROOT", { style: { overflowY: !detail ? "scroll" : "hidden" } })}>
    {children}
  </div>

const a = Atra({
  ROOT: {
    id:"exhibitScrollElement",
    style: {
      position:"relative",
      height: "100%",
      overflowScrolling:"touch",
      WebkitOverflowScrolling:"touch"
    }
  }
})

// textAlign: textAlign || "center",
// paddingTop:160,
// height:innerHeight-160-160,
// overflowY: (!depth) ? "scroll" : "hidden"