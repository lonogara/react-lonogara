'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _keys = require('babel-runtime/core-js/object/keys')

var _keys2 = _interopRequireDefault(_keys)

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray')

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _typeof2 = require('babel-runtime/helpers/typeof')

var _typeof3 = _interopRequireDefault(_typeof2)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var blockMargin = 20

exports.default = function(_ref) {
  var block = _ref.block,
    blocksIndex = _ref.blocksIndex,
    done = _ref.done,
    listener = _ref.listener

  var widthRatio = block.widthRatio,
    aspectRatio = block.aspectRatio,
    style = block.style,
    margin =
      (typeof style === 'undefined'
        ? 'undefined'
        : (0, _typeof3.default)(style)) === 'object' &&
      (typeof style.margin === 'number' || typeof style.margin === 'string')
        ? style.margin
        : blockMargin,
    _blockWidthHeight = blockWidthHeight(widthRatio, aspectRatio, margin),
    width = _blockWidthHeight.width,
    height = _blockWidthHeight.height,
    layers = block.layers

  if (block.more && done) return false

  return _react2.default.createElement(
    'span',
    {
      style: (0, _assign2.default)(
        {
          width: width,
          height: height,
          margin: margin,
          display: 'inline-block',
          position: 'relative'
          // overflow: "hidden"
        },
        style
      )
    },
    Array.isArray(layers) &&
      layers.map(function(layer, index) {
        return _react2.default.createElement(Layer, {
          key: index,
          layer: layer
        })
      }),
    block.more &&
      _react2.default.createElement('span', {
        id: 'forMorePosts',
        onTouchEnd: listener,
        style: absoluteStyle
      }),
    block.depth &&
      _react2.default.createElement('span', {
        className: 'for_depth',
        onClick: listener,
        'data-index': blocksIndex,
        style: absoluteStyle
      })
  )
}

var blockWidthHeight = function blockWidthHeight(
  widthRatio,
  aspectRatio,
  margin
) {
  var sideMargin =
      typeof margin === 'number' || !margin.includes('px')
        ? margin
        : margin.split(' ')[1].split('px')[0],
    width = innerWidth * widthRatio - sideMargin * 2,
    height = void 0

  if (aspectRatio && aspectRatio.includes(':')) {
    var aspectRatioArr = aspectRatio.split(':').map(function(el) {
      return Number(el)
    })
    if (
      aspectRatioArr.every(function(el) {
        return typeof el === 'number'
      })
    ) {
      var _aspectRatioArr = (0, _slicedToArray3.default)(aspectRatioArr, 2),
        denom = _aspectRatioArr[0],
        numer = _aspectRatioArr[1]

      height = width * (numer / denom)
    }
  }

  height = height || width

  return { width: width, height: height }
}

var Layer = function Layer(_ref2) {
  var layer = _ref2.layer
  var src = layer.src,
    inner = layer.inner,
    style = layer.style

  style = style ? layerStyln(style) : absoluteStyle

  return src
    ? _react2.default.createElement('img', { src: src, style: style })
    : _react2.default.createElement('span', { children: inner, style: style })
}

var absoluteStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%'
}

var layerStyln = function layerStyln(layerStyle) {
  var layerStyleAbsoluty = Boolean(
    (0, _keys2.default)(layerStyle).filter(function(key) {
      return (
        key === 'position' ||
        key === 'top' ||
        key === 'bottom' ||
        key === 'left' ||
        key === 'right'
      )
    }).length
  )

  if (layerStyleAbsoluty) {
    return layerStyle
  } else {
    return (0, _assign2.default)({}, absoluteStyle, layerStyle)
  }
}

// (Array.isArray(aspectRatio) && aspectRatio.length === 2)
// import Circuit from "../../../common/willpublish/circuit";
