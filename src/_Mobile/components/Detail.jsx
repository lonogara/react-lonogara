import React from 'react'
import Atra from 'atra'
import { ShutFromLeft } from "react-shut"
import { Quit } from "./components"

export default ({ mountWithShut, onQuit, children }) =>
  <ShutFromLeft {...{ mountWithShut, onQuit, Quit }}>
    <div>
      {children}
    </div>
  </ShutFromLeft>

const a = Atra({})