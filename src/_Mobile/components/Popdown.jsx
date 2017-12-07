import React from 'react'
import Atra from 'atra'
import { ShutFromTop as Shut } from "react-shut"
import { QuitPopdown as Quit } from "./components"

const mountWithShut = true
const background = 'rgba(17, 17, 17, 0.98)'

export default ({
  src,
  vertically,
  onQuit
}) =>
  <Shut {...{ onQuit, mountWithShut, background, Quit }}>
    <div {...a("ROOT", { style: { top: vertically && "3%" } })}>
      <img {...a("IMG", { src })} />
    </div>
  </Shut>

const a = Atra({
  ROOT: {
    style: {
      position: "relative",
      width: "96%",
      height: "89%",
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
})