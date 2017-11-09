import React from 'react'
import Atra from 'atra'

const blockMargin = 20

export default ({ block, blocksIndex, done, listener }) => {
  let { widthRatio, aspectRatio, style } = block,
    margin =
      typeof style === 'object' &&
      (typeof style.margin === 'number' || typeof style.margin === 'string')
        ? style.margin
        : blockMargin,
    { width, height } = blockWidthHeight(widthRatio, aspectRatio, margin),
    { layers } = block

  if (block.more && done) return false

  return (
    <span
      {...{
        style: Object.assign(
          {
            width,
            height,
            margin,
            display: 'inline-block',
            position: 'relative'
            // overflow: "hidden"
          },
          style
        )
      }}
    >
      {Array.isArray(layers) &&
        layers.map((layer, index) => <Layer {...{ key: index, layer }} />)}

      {block.more && (
        <span
          {...{
            id: 'forMorePosts',
            onTouchEnd: listener,
            style: absoluteStyle
          }}
        />
      )}

      {block.depth && (
        <span
          {...{
            className: 'for_depth',
            onClick: listener,
            'data-index': blocksIndex,
            style: absoluteStyle
          }}
        />
      )}
    </span>
  )
}

const blockWidthHeight = (widthRatio, aspectRatio, margin) => {
  let sideMargin =
      typeof margin === 'number' || !margin.includes('px')
        ? margin
        : margin.split(' ')[1].split('px')[0],
    width = innerWidth * widthRatio - sideMargin * 2,
    height

  if (aspectRatio && aspectRatio.includes(':')) {
    let aspectRatioArr = aspectRatio.split(':').map(el => Number(el))
    if (aspectRatioArr.every(el => typeof el === 'number')) {
      let [denom, numer] = aspectRatioArr
      height = width * (numer / denom)
    }
  }

  height = height || width

  return { width, height }
}

const Layer = ({ layer }) => {
  let { src, inner, style } = layer
  style = style ? layerStyln(style) : absoluteStyle

  return src ? (
    <img {...{ src, style }} />
  ) : (
    <span {...{ children: inner, style }} />
  )
}

const absoluteStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%'
}

const layerStyln = layerStyle => {
  let layerStyleAbsoluty = Boolean(
    Object.keys(layerStyle).filter(
      key =>
        key === 'position' ||
        key === 'top' ||
        key === 'bottom' ||
        key === 'left' ||
        key === 'right'
    ).length
  )

  if (layerStyleAbsoluty) {
    return layerStyle
  } else {
    return Object.assign({}, absoluteStyle, layerStyle)
  }
}

// (Array.isArray(aspectRatio) && aspectRatio.length === 2)
// import Circuit from "../../../common/willpublish/circuit";
