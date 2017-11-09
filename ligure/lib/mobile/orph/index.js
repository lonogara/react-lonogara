'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _promise = require('babel-runtime/core-js/promise')

var _promise2 = _interopRequireDefault(_promise)

var _orph = require('orph')

var _orph2 = _interopRequireDefault(_orph)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var orph = new _orph2.default()

orph.add('DidMount', function(e, _ref) {
  var props = _ref.props,
    render = _ref.render

  var _props = props(),
    views = _props.views,
    viewIndex = _props.viewIndex

  _promise2.default.all(views.map(function(view) {})).then(function(views) {
    return render({
      views: views,
      viewIndex: viewIndex
    })
  })
})

orph.add('ButtonChangeView', function(e, _ref2) {
  var render = _ref2.render

  render({
    viewIndex: +e.target.dataset.buttonindex
  })
})

exports.default = orph
