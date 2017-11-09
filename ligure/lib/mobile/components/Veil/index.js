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
  var listener = _ref.listener,
    side = _ref.side
  return _react2.default.createElement(
    'div',
    a('veil', { listener: listener, side: side })
  )
}

var a = (0, _atra2.default)({
  veil: function veil(_ref2) {
    var listener = _ref2.listener,
      side = _ref2.side
    return {
      className: 'black_veil',
      onTouchEnd: listener,
      style: {
        position: 'absolute',
        width: '100%',
        transition: '0.6s',
        bottom: 0,
        top: !side ? undefined : 0,
        background:
          !side || side === 'wait' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.8)',
        borderRight: 'solid 0.2px #3a3a3a'
      }
    }
  }
})

// (({side})=>{
//     if(!side) return styles.veil;
//     if(side === true) return Object.assign({},styles.veil,styles._true);
//     if(side === "wait") return Object.assign({},styles.veil,styles.wait);
// })(style)
// style:(({side})=>{
//     if(!side) return styles.veil;
//     if(side === true) return Object.assign({},styles.veil,styles._true);
//     if(side === "wait") return Object.assign({},styles.veil,styles.wait);
// })(style)
// const styles = {
//     veil:{
//         position : "absolute",
//         width : "100%",
//         bottom : 0,
//         background : "rgba(0, 0, 0, 0)",
//         transition : "0.6s"
//     },
//     _true:{
//         top:0,
//         background:"rgba(0, 0, 0, 0.8)"
//     },
//     wait:{
//         top:0
//     }
// }
