// @flow
import React from 'react'
import * as format from './format'

export default Component => props => {
  const firstIndex = format.firstIndex(props)
  const { baseColor, subColor, sideColor } = format.colors(props)
  const { exhibitBgURL, exhibitBgStyle } = format.exhibitBg(props)
  const Preloader = format.preloader(props)
  const sides = format.sides(props)
  const views = format.views(props)

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
