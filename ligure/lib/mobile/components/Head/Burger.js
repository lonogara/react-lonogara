'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(_ref) {
  var color = _ref.color
  return _react2.default.createElement(
    'svg',
    a('svg', true),
    _react2.default.createElement(
      'g',
      a('burger_g', { style: color }),
      _react2.default.createElement('path', a('burger_0', true)),
      _react2.default.createElement('path', a('burger_2', true)),
      _react2.default.createElement('path', a('burger_1', true))
    )
  )
}

var a = (0, _atra2.default)({
  svg: {
    viewBox: '0 0 300 300'
  },
  burger_g: function burger_g(stroke) {
    return {
      // stroke:"#616161",
      // stroke:"#ffffff",
      stroke: stroke,
      strokeWidth: 26
      // strokeWidth:21,
      // strokeLinecap:"round"
    }
  },
  burger_0: {
    d: 'm 40,224.5 220,0'
  },
  burger_1: {
    d: 'm 40,149.49959 220,0'
  },
  burger_2: {
    d: 'm 40,74.499594 220,0'
  }
})
