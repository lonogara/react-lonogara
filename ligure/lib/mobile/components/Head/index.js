'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

var _Burger = require('./Burger.js')

var _Burger2 = _interopRequireDefault(_Burger)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(_ref) {
  var height = _ref.height,
    headword = _ref.headword,
    colors = _ref.colors,
    listener = _ref.listener
  var base = colors.base,
    sub = colors.sub

  return _react2.default.createElement(
    'header',
    a('root', {
      style: {
        height: height,
        backgroundColor: base
      }
    }),
    _react2.default.createElement(
      'div',
      a('wrap'),
      _react2.default.createElement(
        'span',
        a('word', {
          color: sub,
          marginTop: height - 105,
          children: headword
        })
      ),
      _react2.default.createElement(
        'span',
        a('span', {
          onTouchEnd: listener,
          paddingFirst: (height - 100) / 2,
          children: _react2.default.createElement(_Burger2.default, {
            color: sub
          })
        })
      )
    )
  )
}
// import Veil from "../Veil.js";

var a = (0, _atra2.default)({
  root: function root(_ref2) {
    var height = _ref2.height,
      backgroundColor = _ref2.backgroundColor
    return {
      height: height,
      backgroundColor: backgroundColor,
      // background: "rgb(36, 38, 56)",
      // position:"absolute",
      // top:0,
      // right:9,
      // height: 140,
      position: 'relative'
    }
  },

  wrap: {
    // height:"100%"
    // height: 100,
    textAlign: 'center'
    // padding: "20px 15px"
  },

  word: function word(_ref3) {
    var children = _ref3.children,
      color = _ref3.color,
      marginTop = _ref3.marginTop
    return {
      children: children,
      style: {
        color: color,
        marginTop: marginTop,
        fontSize: '2.5em',
        fontWeight: 'bold',
        letterSpacing: 2,
        // color: "#ffffff",
        display: 'inline-block'
        // lineHeight: 3.8
        // marginTop: "9%"
        // marginTop: 72
        // marginTop: 80
      }
    }
  },

  // grand:{
  //     height: "100%",
  //     display: "inline-block",
  //     float: "right"
  // },

  span: function span(_ref4) {
    var onTouchEnd = _ref4.onTouchEnd,
      children = _ref4.children,
      paddingFirst = _ref4.paddingFirst
    return {
      id: 'forSlideAppear',
      onTouchEnd: onTouchEnd,
      children: children,
      style: {
        height: 100,
        padding: paddingFirst + 'px 25px',
        // "45px 25px"
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'inline-block',
        textAlign: 'center'
      }
    }
  }
})
