// @flow
import React from 'react'
import * as guardian from './guardian'

export default Component => props => {
  const firstIndex = guardian.firstIndex(props)
  const { baseColor, subColor, sideColor } = guardian.colors(props)
  const { exhibitBgURL, exhibitBgStyle } = guardian.exhibitBg(props)
  const Preloader = guardian.preloader(props)
  const sides = guardian.sides(props)
  const views = guardian.views(props)

  return (
    <div>
      {exhibitBgURL && <link rel="prefetch" href={exhibitBgURL} />}
      <style type="text/css">{`
        :root {
          --base-color: ${baseColor};
          --sub-color: ${subColor};
          --side-color: ${sideColor};
        }
        body {
          margin: 0px;
          overflowY: hidden;
          font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;
        }
        .ligure_button svg {
          height: 100%;
        }
      `}</style>
      <Component
        {...{
          firstIndex,
          exhibitBgStyle,
          Preloader,
          sides,
          views
        }}
      />
    </div>
  )
}
