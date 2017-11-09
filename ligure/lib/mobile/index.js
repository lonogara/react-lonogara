'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of')

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn')

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require('babel-runtime/helpers/inherits')

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _orph = require('./orph')

var _orph2 = _interopRequireDefault(_orph)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var App = (function(_Component) {
  ;(0, _inherits3.default)(App, _Component)

  function App(props) {
    ;(0, _classCallCheck3.default)(this, App)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props)
    )

    _this.state = {
      num: 0
    }
    return _this
  }

  ;(0, _createClass3.default)(App, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        _orph2.default.attach(this)
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', null, this.state.num)
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        _orph2.default.dispatch('DidMount')
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
    }
  ])
  return App
})(_react.Component)

exports.default = App
