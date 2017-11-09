'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

var _Block = require('./Block.js')

var _Block2 = _interopRequireDefault(_Block)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// import More

exports.default = function(_ref) {
  var depth = _ref.depth,
    centerMagnet = _ref.centerMagnet,
    blocks = _ref.blocks,
    textAlign = _ref.textAlign,
    done = _ref.done,
    listener = _ref.listener
  return _react2.default.createElement(
    'section',
    a('shallow', { depth: depth, textAlign: textAlign }),
    _react2.default.createElement(
      'div',
      a('absolutyWrap', { centerMagnet: centerMagnet }),
      blocks.map(function(block, blocksIndex) {
        return _react2.default.createElement(_Block2.default, {
          block: block,
          blocksIndex: blocksIndex,
          done: done,
          listener: listener,
          key: blocksIndex
        })
      })
    )
  )
}

var a = (0, _atra2.default)({
  shallow: function shallow(_ref2) {
    var depth = _ref2.depth,
      textAlign = _ref2.textAlign
    return {
      id: 'shallowTouched',
      // ref:(div)=>{
      //     console.log([div]);
      //     if(!div || depth) return false;
      //     div.scrollTop = scrollTop;
      // },
      style: {
        position: 'relative',
        height: '100%',
        textAlign: textAlign || 'center',
        // paddingTop:160,
        // height:innerHeight-160-160,
        WebkitOverflowScrolling: 'touch',
        overflowScrolling: 'touch',
        overflowY: !depth ? 'scroll' : 'hidden'
      }
    }
  },

  absolutyWrap: function absolutyWrap(_ref3) {
    var centerMagnet = _ref3.centerMagnet
    return typeof centerMagnet === 'number'
      ? {
          id: 'absoluty_wrap',
          'data-top': centerMagnet,
          style: {
            position: 'absolute',
            width: '100%'
          }
        }
      : {
          style: {
            position: 'absolute',
            width: '100%',
            top: 0
          }
        }
  }
})
