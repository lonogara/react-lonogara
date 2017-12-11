import React from 'react'
import Atra from 'atra'
import { ShutFromLeft as Shut } from "react-shut"
import { QuitDetail as Quit } from "./components"

const WITH_IMG_COLOR ='rgba(255, 255, 255, 0.83)'
const NO_IMG_COLOR = 'rgb(245, 245, 245)'

type Props = {
  rootStyle: { height: number, [key: string]: string },
  withBgImg: boolean,
  exhibit: React$Node,
  detail: React$Node,
  mountWithShut: boolean,
  onQuit: () => any
}

export default ({
  rootStyle,
  withBgImg,
  exhibit,
  detail,
  mountWithShut,
  notScroll,
  onQuitEnd
}: Props ) =>
  <main {...{ style: rootStyle }}>
    <div {...a('WRAP', { style: { backgroundColor: withBgImg ? WITH_IMG_COLOR : NO_IMG_COLOR } })}>
      <div {...a("WRAP_EXHIBIT", { style: { overflowY: !detail ? "scroll" : "hidden" } })}>
        {exhibit}
      </div>
      {detail && <Shut {...{ mountWithShut, notScroll, onQuitEnd, Quit }}>
        <div {...a('WRAP_DETAIL')}>
          {detail}
        </div>
      </Shut>}
    </div>
  </main>

const a = Atra({

  WRAP: {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
    }
  },

  WRAP_EXHIBIT: {
    id:"exhibitScrollElement",
    style: {
      position:"relative",
      height: "100%",
      overflowScrolling:"touch",
      WebkitOverflowScrolling:"touch",
      overflowX: "hidden"
    }
  },

  WRAP_DETAIL: {
    style: {
      overflowX: "hidden"
    }
  }
})