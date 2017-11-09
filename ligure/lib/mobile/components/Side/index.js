'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _defineProperty2 = require('babel-runtime/helpers/defineProperty')

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(_ref) {
  var side = _ref.side,
    sides = _ref.sides
  return _react2.default.createElement(
    'aside',
    a('root', { side: side }),
    sides.map(function(_ref2, sideIndex) {
      var src = _ref2.src,
        href = _ref2.href,
        text = _ref2.text,
        style = _ref2.style
      return !text
        ? _react2.default.createElement(ButtonNoText, {
            key: sideIndex,
            src: src,
            href: href
          })
        : _react2.default.createElement(ButtonWithText, {
            key: sideIndex,
            src: src,
            href: href,
            text: text,
            style: style
          })
    })
  )
}

var ButtonNoText = function ButtonNoText(_ref3) {
  var src = _ref3.src,
    href = _ref3.href
  return _react2.default.createElement(
    'div',
    a('child'),
    _react2.default.createElement('span', a('button', { src: src, href: href }))
  )
}

var ButtonWithText = function ButtonWithText(_ref4) {
  var src = _ref4.src,
    href = _ref4.href,
    text = _ref4.text,
    style = _ref4.style
  var top = style.top,
    coverColor = style.coverColor,
    textStyle = style.textStyle

  return _react2.default.createElement(
    'div',
    a('child'),
    _react2.default.createElement(
      'span',
      a('button', { src: src, href: href }),
      _react2.default.createElement(
        'span',
        a('color_cover', { style: coverColor })
      ),
      _react2.default.createElement(
        'span',
        a('description', { top: top, text: text, textStyle: textStyle })
      )
    )
  )
}

var a = (0, _atra2.default)({
  root: function root(_ref5) {
    var side = _ref5.side
    return {
      id: 'side_root',
      style: {
        position: 'fixed',
        top: 0,
        bottom: 160,
        left: innerWidth,
        fontSize: 34,
        color: '#fff',
        // background: "rgba(255, 255, 255, 0.42)",
        width: 370,
        WebkitOverflowScrolling: 'touch',
        overflowScrolling: 'touch',
        overflowY: 'scroll',
        transform: 'translateX(' + (!side || side == 'wait' ? 0 : -370) + 'px)',
        transition: !side || side == 'wait' ? '0.6s' : '0.72s'
      }
    }
  },
  child: {
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 100
    // marginLeft:50
  },
  button: function button(_ref6) {
    var _style

    var src = _ref6.src,
      href = _ref6.href
    return {
      onTouchStart: touchstart,
      onTouchEnd: ho_touchend(href),
      style: ((_style = {
        background: 'url(' + src + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 176,
        height: 176,
        display: 'inline-block',
        borderRadius: 130,
        verticalAlign: 'middle',
        border: 'solid'
      }),
      (0, _defineProperty3.default)(
        _style,
        'border',
        '8px outset rgb(255, 255, 255)'
      ),
      (0, _defineProperty3.default)(_style, 'position', 'relative'),
      _style)
    }
  },
  color_cover: function color_cover(coverColor) {
    return {
      display: 'inline-block',
      width: '100%',
      height: '100%',
      borderRadius: 130,
      background: coverColor || 'rgba(0, 29, 36, 0.48)'
    }
  },
  description: function description(_ref7) {
    var top = _ref7.top,
      text = _ref7.text,
      textStyle = _ref7.textStyle
    return {
      children: text,
      style: (0, _assign2.default)(
        {
          position: 'relative',
          top: top,
          // fontSize:"0.9em"
          fontSize: '0.87em'
        },
        textStyle
      )
    }
  }
})

var touchstart = function touchstart(e) {
  e.currentTarget.style.borderStyle = 'inset'
}

var ho_touchend = function ho_touchend(href) {
  return function(e) {
    e.currentTarget.style.borderStyle = 'outset'
    return setTimeout(function() {
      return clickA(href)
    }, 0)
  }
}

var clickA = function clickA(href) {
  if (!href) return false
  var a = document.createElement('a')
  a.href = href
  a.target = href.includes('tel') ? '' : '_blank'
  a.click()
}
