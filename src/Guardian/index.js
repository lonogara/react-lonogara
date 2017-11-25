// @flow
import React from 'react'
import * as guardian from './guardian.js'

export default Component => props => {
  const firstIndex = guardian.firstIndex(props)
  const { baseColor, subColor, sideColor } = guardian.colors(props)
  const { exhibitBgURL, exhibitBgStyle } = guardian.exhibitBg(props)
  const { detailRootClassName, detailCssString } = guardian.detailStyle(props)
  const Preloader = guardian.preloader(props)
  const views = guardian.views(props)
  const sides = guardian.sides(props)

  return (
    <div>
      {exhibitBgURL && <link rel="prefetch" href={exhibitBgURL} />}
      {detailCssString && <style type="text/css">{detailCssString}</style>}
      <style type="text/css">{`
        :root {
          --base-color: ${baseColor};
          --sub-color: ${subColor};
          --side-color: ${sideColor};
        }
        body {
          margin: 0px;
        }
      `}</style>
      <Component
        {...{
          firstIndex,
          exhibitBgStyle,
          detailRootClassName,
          Preloader,
          views,
          sides
        }}
      />
    </div>
  )
}
