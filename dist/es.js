import React, { Component } from 'react'
import Atra from 'atra'
import Orph from 'orph'
import _regeneratorRuntime from 'babel-runtime/regenerator'
import { ShutFromLeft, ShutFromTop } from 'react-shut'

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }

var asyncToGenerator = function(fn) {
  return function() {
    var gen = fn.apply(this, arguments)
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg)
          var value = info.value
        } catch (error) {
          reject(error)
          return
        }

        if (info.done) {
          resolve(value)
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value)
            },
            function(err) {
              step('throw', err)
            }
          )
        }
      }

      return step('next')
    })
  }
}

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }

  return obj
}

var inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

var slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
  }
})()

//
var isArray = Array.isArray
var isObjectPure = function isObjectPure(target) {
  return (
    (typeof target === 'undefined' ? 'undefined' : _typeof(target)) ===
      'object' && !isArray(target)
  )
}
var isString = function isString(target) {
  return typeof target === 'string'
}
var isNumber = function isNumber(target) {
  return typeof target === 'number'
}
var isFunction = function isFunction(target) {
  return typeof target === 'function'
}
var error = function error(message) {
  throw new Error(message)
}
var typerror = function typerror(message) {
  throw new TypeError(message)
}

//
var values = Object.values

var BASE_COLOR = '#181823'
var SUB_COLOR = '#ffffff'
var SIDE_COLOR = '#dde3e6'

var _colors = function(_ref) {
  var colors = _ref.colors

  var result = {
    baseColor: BASE_COLOR,
    subColor: SUB_COLOR,
    sideColor: SIDE_COLOR
  }

  if (colors) {
    if (!isObjectPure(colors)) {
      typerror('props.colors must be "pure object"')
    }
    if (
      !values(colors).every(function(value) {
        return isString(value)
      })
    ) {
      typerror('props.colors contain invalied value')
    }

    result.baseColor = colors.base || BASE_COLOR
    result.subColor = colors.sub || SUB_COLOR
    result.sideColor = colors.side || SIDE_COLOR
  }

  return result
}

//
var _exhibitBg = function(_ref) {
  var exhibitBg = _ref.exhibitBg

  var result = {
    exhibitBgURL: undefined,
    exhibitBgStyle: {}
  }

  if (exhibitBg) {
    if (isString(exhibitBg)) {
      var url = exhibitBg

      result.exhibitBgURL = url
      result.exhibitBgStyle.backgroundImage = 'url(' + url + ')'
    } else if (isArray(exhibitBg)) {
      var _exhibitBg = slicedToArray(exhibitBg, 2),
        _url = _exhibitBg[0],
        style = _exhibitBg[1]

      if (!isString(_url)) {
        typerror('')
      }
      if (!isObjectPure(style)) {
        typerror('')
      }

      result.exhibitBgURL = _url
      Object.entries(style).forEach(function(_ref2) {
        var _ref3 = slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1]

        result.exhibitBgStyle[key] = value
      })
      result.exhibitBgStyle.backgroundImage = 'url(' + _url + ')'
    } else {
      typerror('')
    }
  }

  return result
}

//
var _firstIndex = function(_ref) {
  var firstIndex = _ref.firstIndex
  return isNumber(firstIndex) ? firstIndex : 0
}

//
var _preloader = function(_ref) {
  var Preloader = _ref.Preloader
  return isFunction(Preloader) && Preloader
}

//
var _sides = function(_ref) {
  var sides = _ref.sides

  var result = []

  if (sides) {
    if (!isArray(sides)) {
      typerror('')
    }

    sides.forEach(function(_ref2) {
      var href = _ref2.href,
        buttonImage = _ref2.buttonImage,
        coverColor = _ref2.coverColor,
        description = _ref2.description

      var side = {
        href: undefined,
        buttonImage: undefined,
        coverColor: undefined,
        descriptionText: undefined,
        descriptionStyle: {}
      }

      if (href) {
        if (!isString(href)) {
          typerror('')
        }
        side.href = href
      }

      if (buttonImage) {
        if (!isString(buttonImage)) {
          typerror('')
        }
        side.buttonImage = 'url(' + buttonImage + ')'
      }

      if (coverColor) {
        if (!isString(coverColor)) {
          typerror('')
        }
        side.coverColor = coverColor
      }

      if (description) {
        if (isString(description)) {
          side.descriptionText = description
        } else if (isArray(description)) {
          var _description = slicedToArray(description, 2),
            text = _description[0],
            style = _description[1]

          if (!isString(text)) {
            typerror('')
          }
          if (!isObjectPure(style)) {
            typerror('')
          }

          side.descriptionText = text
          side.descriptionStyle = style
        } else {
          typerror('')
        }
      }

      result.push(side)
    })
  }

  return result
}

//
var _views = function(_ref) {
  var views = _ref.views

  var result = []

  if (views) {
    if (!isArray(views)) {
      typerror('')
    }

    if (views.length > 7) {
      error('')
    }

    views.forEach(function(_ref2) {
      var head = _ref2.head,
        Button = _ref2.Button,
        create = _ref2.create

      if (!isString(head)) {
        typerror('')
      }
      if (!isFunction(Button)) {
        typerror('')
      }
      if (!create) {
        error('view.create is required')
      }
      if (!isFunction(create)) {
        typerror(
          'view.create must be "function" but ' +
            (typeof create === 'undefined' ? 'undefined' : _typeof(create))
        )
      }

      result.push({ head: head, Button: Button, create: create })
    })
  }

  return result
}

//
var Guardian = function(Component$$1) {
  return function(props) {
    var firstIndex = _firstIndex(props)

    var _guardian$colors = _colors(props),
      baseColor = _guardian$colors.baseColor,
      subColor = _guardian$colors.subColor,
      sideColor = _guardian$colors.sideColor

    var _guardian$exhibitBg = _exhibitBg(props),
      exhibitBgURL = _guardian$exhibitBg.exhibitBgURL,
      exhibitBgStyle = _guardian$exhibitBg.exhibitBgStyle

    var Preloader = _preloader(props)
    var sides = _sides(props)
    var views = _views(props)

    return React.createElement(
      'div',
      null,
      exhibitBgURL &&
        React.createElement('link', { rel: 'prefetch', href: exhibitBgURL }),
      React.createElement(
        'style',
        { type: 'text/css' },
        '\n        :root {\n          --base-color: ' +
          baseColor +
          ';\n          --sub-color: ' +
          subColor +
          ';\n          --side-color: ' +
          sideColor +
          ';\n        }\n        body {\n          margin: 0px;\n          overflowY: hidden;\n          font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;\n        }\n        .ligure_button svg {\n          height: 100%;\n        }\n      '
      ),
      React.createElement(Component$$1, {
        firstIndex: firstIndex,
        exhibitBgStyle: exhibitBgStyle,
        Preloader: Preloader,
        sides: sides,
        views: views
      })
    )
  }
}

var App = (function(_Component) {
  inherits(App, _Component)

  function App(props) {
    classCallCheck(this, App)
    return possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).call(this, props)
    )
  }

  createClass(App, [
    {
      key: 'render',
      value: function render() {
        return React.createElement('div', null, 'desktop')
      }
    }
  ])
  return App
})(Component)

//

var views = new Map()

var View = (function() {
  function View() {
    classCallCheck(this, View)

    this.components = {}
    this.data = {}
  }

  createClass(View, [
    {
      key: 'setComponent',
      value: function setComponent(_ref) {
        var componentName = _ref.componentName,
          Component$$1 = _ref.Component

        this.components[componentName] = Component$$1
      }
    },
    {
      key: 'setData',
      value: function setData(_ref2) {
        var dataName = _ref2.dataName,
          value = _ref2.value

        this.data[dataName] = value
      }
    },
    {
      key: 'getComponent',
      value: function getComponent(_ref3) {
        var componentName = _ref3.componentName,
          dataName = _ref3.dataName

        var Component$$1 = this.components[componentName]
        var data = this.data[dataName]
        return { Component: Component$$1, data: data }
      }
    }
  ])
  return View
})()

var INIT = function INIT(index) {
  return views.set(index, new View())
}

var SET_COMPONENT = function SET_COMPONENT(_ref4) {
  var index = _ref4.index,
    componentName = _ref4.componentName,
    Component$$1 = _ref4.Component
  return views
    .get(index)
    .setComponent({ componentName: componentName, Component: Component$$1 })
}

var SET_DATA = function SET_DATA(_ref5) {
  var index = _ref5.index,
    dataName = _ref5.dataName,
    value = _ref5.value
  return views.get(index).setData({ dataName: dataName, value: value })
}

var GET_COMPONENT = function GET_COMPONENT(_ref6) {
  var index = _ref6.index,
    componentName = _ref6.componentName,
    dataName = _ref6.dataName
  return views
    .get(index)
    .getComponent({ componentName: componentName, dataName: dataName })
}

var STORE = Object.freeze({
  INIT: INIT,
  SET_COMPONENT: SET_COMPONENT,
  SET_DATA: SET_DATA,
  GET_COMPONENT: GET_COMPONENT
})

//
var exhibitScrollDOM = function exhibitScrollDOM() {
  return document.getElementById('exhibitScrollElement')
}
var sideScrollDOM = function sideScrollDOM() {
  return document.getElementById('sideScrollElement')
}

//
var PRELOADING_OFF = [
  { states: ['preloading'] },
  function(n, _ref) {
    var render = _ref.render
    return render({ preloading: false })
  }
]

var DRIFTING_ON = [
  { states: ['drifting'] },
  function(n, _ref2) {
    var render = _ref2.render
    return render({ drifting: true })
  }
]

var DRIFTING_LAG = [
  { states: ['drifting'] },
  function(n, _ref3) {
    var render = _ref3.render
    return render({ drifting: 'lag' })
  }
]

var DRIFTING_OFF = [
  { states: ['drifting'] },
  function(n, _ref4) {
    var state = _ref4.state,
      render = _ref4.render
    return (
      state().drifting === 'lag' &&
      render({ drifting: false }, function() {
        sideScrollDOM().scrollTop = 0
      })
    )
  }
]

var POPDOWN_ON = [
  { states: ['popdown'] },
  function(_ref5, _ref6) {
    var src = _ref5.src,
      vertically = _ref5.vertically
    var render = _ref6.render
    return render({ popdown: { src: src, vertically: vertically } })
  }
]

var POPDOWN_OFF = [
  { states: ['popdown'] },
  function(n, _ref7) {
    var render = _ref7.render
    return render({ popdown: {} })
  }
]

var DETAIL_ON = [
  { states: ['detail'] },
  function(_ref8, _ref9) {
    var Component$$1 = _ref8.Component,
      data = _ref8.data
    var render = _ref9.render
    return render({
      detail: {
        Component: Component$$1,
        props: data,
        mountWithShut: true
      }
    })
  }
]

var DETAIL_OFF = [
  { states: ['detail'] },
  function(n, _ref10) {
    var render = _ref10.render
    return render({ detail: {} })
  }
]

var BY_REACT_DIDMOUNT = [
  { states: ['index', 'exhibit'] },
  function(_ref11, _ref12) {
    var index = _ref11.index,
      Component$$1 = _ref11.Component
    var render = _ref12.render
    return render({
      index: index,
      exhibit: {
        Component: Component$$1
      }
    })
  }
]

var BY_DOM_VIEW_SWITCH = [
  { states: ['index', 'exhibit', 'detail'] },
  function(_ref13, _ref14) {
    var index = _ref13.index,
      exhibits = _ref13.exhibits,
      details = _ref13.details
    var render = _ref14.render

    var exhibit = {
      Component: exhibits.Component
    }

    var detail = !details.data
      ? {}
      : {
          Component: details.Component,
          props: details.data,
          mountWithShut: false
        }

    render({ index: index, exhibit: exhibit, detail: detail }, function() {
      exhibitScrollDOM().scrollTop = exhibits.data
    })
  }
]

var INFORM_CHANGE = [
  { states: ['informs'] },
  function(_ref15, _ref16) {
    var index = _ref15.index,
      inform = _ref15.inform
    var state = _ref16.state,
      render = _ref16.render

    var _state = state(),
      informs = _state.informs

    informs[index] = inform
    render({ informs: informs })
  }
]

var RENDER = Object.freeze({
  PRELOADING_OFF: PRELOADING_OFF,
  DRIFTING_ON: DRIFTING_ON,
  DRIFTING_LAG: DRIFTING_LAG,
  DRIFTING_OFF: DRIFTING_OFF,
  POPDOWN_ON: POPDOWN_ON,
  POPDOWN_OFF: POPDOWN_OFF,
  DETAIL_ON: DETAIL_ON,
  DETAIL_OFF: DETAIL_OFF,
  BY_REACT_DIDMOUNT: BY_REACT_DIDMOUNT,
  BY_DOM_VIEW_SWITCH: BY_DOM_VIEW_SWITCH,
  INFORM_CHANGE: INFORM_CHANGE
})

var _this = undefined

//
var WINDOW = {
  RESIZE_FORCE_UPDATE: function RESIZE_FORCE_UPDATE(n, _ref) {
    var update = _ref.update
    return update()
  }
}

var REACT = {
  DID_MOUNT: [
    {
      dispatches: ['REACT:DID_MOUNT_FIRST', 'REACT:DID_MOUNT_SECOND']
    },
    function(n, _ref2) {
      var dispatch = _ref2.dispatch

      dispatch('REACT:DID_MOUNT_FIRST').then(function() {
        return dispatch('REACT:DID_MOUNT_SECOND')
      })
    }
  ],

  DID_MOUNT_FIRST: [
    {
      dispatches: [
        'STORE:INIT',
        'PASS:DETAIL_ON',
        'PASS:POPDOWN_ON',
        'PASS:INFORM_ON',
        'STORE:SET_COMPONENT',
        'STORE:SET_DATA'
      ]
    },
    function(n, _ref3) {
      var props = _ref3.props,
        dispatch = _ref3.dispatch
      return Promise.all(
        props().views.map(
          (function() {
            var _ref4 = asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime.mark(function _callee(
                _ref5,
                index
              ) {
                var create = _ref5.create
                var Components
                return _regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.next = 2
                          return dispatch('STORE:INIT', index)

                        case 2:
                          _context.next = 4
                          return create({
                            renderDetail: function renderDetail(data) {
                              return dispatch('PASS:DETAIL_ON', data)
                            },
                            setPopdown: function setPopdown(src) {
                              return dispatch('PASS:POPDOWN_ON', src)
                            },
                            setInform: function setInform(inform) {
                              return dispatch('PASS:INFORM_ON', {
                                index: index,
                                inform: inform
                              })
                            }
                          })

                        case 4:
                          Components = _context.sent
                          _context.next = 7
                          return dispatch('STORE:SET_COMPONENT', {
                            index: index,
                            componentName: 'Exhibit',
                            Component: Components['Exhibit']
                          }).then(function() {
                            return dispatch('STORE:SET_DATA', {
                              index: index,
                              dataName: 'exhibitScrollTop',
                              value: 0
                            })
                          })

                        case 7:
                          _context.next = 9
                          return dispatch('STORE:SET_COMPONENT', {
                            index: index,
                            componentName: 'Detail',
                            Component: Components['Detail']
                          }).then(function() {
                            return dispatch('STORE:SET_DATA', {
                              index: index,
                              dataName: 'detailProps',
                              value: false
                            })
                          })

                        case 9:
                          return _context.abrupt('return')

                        case 10:
                        case 'end':
                          return _context.stop()
                      }
                    }
                  },
                  _callee,
                  _this
                )
              })
            )

            return function(_x, _x2) {
              return _ref4.apply(this, arguments)
            }
          })()
        )
      )
    }
  ],

  DID_MOUNT_SECOND: [
    {
      dispatches: ['STORE:GET_COMPONENT', 'RENDER:BY_REACT_DIDMOUNT']
    },
    (function() {
      var _ref6 = asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime.mark(function _callee2(n, _ref7) {
          var props = _ref7.props,
            dispatch = _ref7.dispatch

          var index, componentName, _ref8, Component$$1

          return _regeneratorRuntime.wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    index = props().firstIndex
                    componentName = 'Exhibit'
                    _context2.next = 4
                    return dispatch('STORE:GET_COMPONENT', {
                      index: index,
                      componentName: componentName
                    })

                  case 4:
                    _ref8 = _context2.sent
                    Component$$1 = _ref8.Component

                    dispatch('RENDER:BY_REACT_DIDMOUNT', {
                      index: index,
                      Component: Component$$1
                    })

                  case 7:
                  case 'end':
                    return _context2.stop()
                }
              }
            },
            _callee2,
            _this
          )
        })
      )

      return function(_x3, _x4) {
        return _ref6.apply(this, arguments)
      }
    })()
  ]
}

var DOM = {
  VIEW_SWITCH: [
    {
      dispatches: [
        'STORE:SET_DATA',
        'STORE:GET_COMPONENT',
        'RENDER:BY_DOM_VIEW_SWITCH'
      ]
    },
    (function() {
      var _ref9 = asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime.mark(function _callee3(e, _ref10) {
          var state = _ref10.state,
            dispatch = _ref10.dispatch
          var nowIndex, nextIndex, exhibits, details
          return _regeneratorRuntime.wrap(
            function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    nowIndex = state().index
                    nextIndex = +e.target.dataset.index

                    if (!(nowIndex === nextIndex)) {
                      _context3.next = 4
                      break
                    }

                    return _context3.abrupt('return')

                  case 4:
                    _context3.next = 6
                    return dispatch('STORE:SET_DATA', {
                      index: nowIndex,
                      dataName: 'exhibitScrollTop',
                      value: exhibitScrollDOM().scrollTop
                    })

                  case 6:
                    _context3.next = 8
                    return dispatch('STORE:GET_COMPONENT', {
                      index: nextIndex,
                      componentName: 'Exhibit',
                      dataName: 'exhibitScrollTop'
                    })

                  case 8:
                    exhibits = _context3.sent
                    _context3.next = 11
                    return dispatch('STORE:GET_COMPONENT', {
                      index: nextIndex,
                      componentName: 'Detail',
                      dataName: 'detailProps'
                    })

                  case 11:
                    details = _context3.sent

                    // RENDER
                    dispatch('RENDER:BY_DOM_VIEW_SWITCH', {
                      index: nextIndex,
                      exhibits: exhibits,
                      details: details
                    })

                  case 13:
                  case 'end':
                    return _context3.stop()
                }
              }
            },
            _callee3,
            _this
          )
        })
      )

      return function(_x5, _x6) {
        return _ref9.apply(this, arguments)
      }
    })()
  ],

  DETAIL_OFF: [
    {
      dispatches: ['STORE:SET_DATA', 'RENDER:DETAIL_OFF']
    },
    function(n, _ref11) {
      var state = _ref11.state,
        dispatch = _ref11.dispatch

      dispatch('STORE:SET_DATA', {
        index: state().index,
        dataName: 'detailProps',
        value: false
      }).then(function() {
        return dispatch('RENDER:DETAIL_OFF')
      })
    }
  ]
}

var PASS = {
  DETAIL_ON: [
    {
      dispatches: ['STORE:SET_DATA', 'STORE:GET_COMPONENT', 'RENDER:DETAIL_ON']
    },
    function(data, _ref12) {
      var state = _ref12.state,
        dispatch = _ref12.dispatch

      var _state = state(),
        index = _state.index

      dispatch('STORE:SET_DATA', {
        index: index,
        dataName: 'detailProps',
        value: { data: data }
      })
        .then(function() {
          return dispatch('STORE:GET_COMPONENT', {
            index: index,
            componentName: 'Detail',
            dataName: 'detailProps'
          })
        })
        .then(function(details) {
          return dispatch('RENDER:DETAIL_ON', details)
        })
    }
  ],

  POPDOWN_ON: [
    {
      dispatches: ['RENDER:POPDOWN_ON']
    },
    function(arg, _ref13) {
      var dispatch = _ref13.dispatch

      if (
        (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) ===
          'object' &&
        arg.src
      ) {
        dispatch('RENDER:POPDOWN_ON', arg)
      }
    }
  ],

  INFORM_ON: [
    {
      dispatches: ['RENDER:INFORM_CHANGE']
    },
    function(arg, _ref14) {
      var dispatch = _ref14.dispatch

      var inform = +arg.inform
      if (inform || inform === 0) {
        var index = arg.index

        dispatch('RENDER:INFORM_CHANGE', { index: index, inform: inform })
      }
    }
  ]
}

var orph = new Orph()

add(STORE, 'STORE')
add(RENDER, 'RENDER')
add(WINDOW, 'WINDOW')
add(REACT, 'REACT')
add(DOM, 'DOM')
add(PASS, 'PASS')

function add(_import, prefix) {
  Object.entries(_import)
    .filter(function(_ref) {
      var _ref2 = slicedToArray(_ref, 1),
        name = _ref2[0]

      return name !== 'default'
    })
    .forEach(function(_ref3) {
      var _ref4 = slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1]

      var addedName = prefix + ':' + name

      var listener = void 0,
        states = void 0,
        dispatches = void 0

      if (Array.isArray(value)) {
        var _value = slicedToArray(value, 2),
          opts = _value[0],
          fn = _value[1]

        states = opts.states || []
        dispatches = opts.dispatches || []
        listener = fn
      } else {
        states = []
        dispatches = []
        listener = value
      }

      orph.add(addedName, listener, { states: states, dispatches: dispatches })
    })
}

//
var winnerWidth = function winnerWidth() {
  return window.innerWidth
}
var winnerHeight = function winnerHeight() {
  return window.innerHeight
}
var raf = function raf(callback) {
  return window.requestAnimationFrame(callback)
}
var windowOnListener = function windowOnListener(type, fn, opts) {
  return window.addEventListener(type, fn, opts)
}

var Button = function(_ref) {
  var width = _ref.width,
    inform = _ref.inform,
    buttonIndex = _ref.buttonIndex,
    onTouchStart = _ref.onTouchStart,
    children = _ref.children
  return React.createElement(
    'div',
    a$1('ROOT', { style: { width: width } }),
    React.createElement(
      'span',
      a$1('WRAP'),
      children,
      inform > 0 && React.createElement('div', a$1('INFORM'), inform)
    ),
    React.createElement(
      'div',
      a$1('CLICK_COVER', {
        onTouchStart: onTouchStart,
        'data-index': buttonIndex
      })
    )
  )
}

var a$1 = Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      height: '100%',
      position: 'relative'
    }
  },
  WRAP: {
    className: 'ligure_button', // for svg { height: 100%; }
    style: {
      display: 'inline-block',
      position: 'relative',
      top: '20%',
      height: '66%'
    }
  },
  INFORM: {
    style: {
      position: 'absolute',
      fontSize: 27,
      display: 'inline-block',
      width: 34,
      height: 34,
      borderRadius: 50,
      background: '#ff4444',
      top: '-20%',
      right: '-18%',
      color: '#fff',
      lineHeight: 1.29
    }
  },
  CLICK_COVER: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
})

var Burger = function() {
  return React.createElement(
    'svg',
    a$3('SVG'),
    React.createElement(
      'g',
      a$3('G'),
      React.createElement('path', a$3('PATH_0')),
      React.createElement('path', a$3('PATH_1')),
      React.createElement('path', a$3('PATH_2'))
    )
  )
}

var a$3 = Atra({
  SVG: {
    viewBox: '0 0 300 300',
    style: {
      height: '100%'
    }
  },
  G: {
    style: {
      stroke: 'var(--sub-color)',
      strokeWidth: 26
    }
  },
  PATH_0: {
    d: 'm 40,224.5 220,0'
  },
  PATH_1: {
    d: 'm 40,149.49959 220,0'
  },
  PATH_2: {
    d: 'm 40,74.499594 220,0'
  }
})

var Quit = function(_ref) {
  var fn = _ref.fn
  return React.createElement(
    'span',
    a$4('ROOT'),
    React.createElement(
      'svg',
      a$4('SVG'),
      React.createElement('path', a$4('PATH'))
    ),
    React.createElement(
      'span',
      a$4('COVER', {
        onTouchEndCapture: function onTouchEndCapture(e) {
          e.stopPropagation()
          e.preventDefault()
          fn()
        }
      })
    )
  )
}

var a$4 = Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      width: 100,
      height: 100,
      position: 'absolute',
      right: 24,
      top: 20
    }
  },

  SVG: {
    viewBox: '0 0 300 300'
  },

  PATH: {
    d:
      'M 189.50288,42.205033 41.07742,150.00001 189.50288,257.79499 m -25.8155,-107.79498 95.59992,0',
    style: {
      fill: 'none',
      stroke: 'var(--base-color)',
      strokeWidth: 42,
      strokeLinejoin: 'round',
      strokeLinecap: 'round'
    }
  },

  COVER: {
    style: {
      position: 'absolute',
      top: -20,
      bottom: -20,
      left: -20,
      right: -20
    }
  }
})

var Quit$1 = function(_ref) {
  var fn = _ref.fn
  return React.createElement(
    'div',
    a$5('ROOT'),
    React.createElement(
      'span',
      a$5('WRAP'),
      React.createElement(
        'svg',
        a$5('SVG'),
        React.createElement('path', a$5('PATH'))
      ),
      React.createElement(
        'span',
        a$5('COVER', {
          onTouchEnd: function onTouchEnd(e) {
            e.stopPropagation()
            fn()
          }
        })
      )
    )
  )
}

var a$5 = Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      position: 'absolute',
      bottom: 17,
      left: '0',
      width: '100%',
      textAlign: 'center'
    }
  },

  WRAP: {
    style: {
      position: 'relative',
      width: '32%',
      display: 'inline-block'
    }
  },

  SVG: {
    viewBox: '0 0 1200 260'
  },

  PATH: {
    d: 'M 33.028507,241.96285 600.001,18.109642 1166.9735,241.96285',
    style: {
      fill: 'none',
      stroke: 'rgb(46, 46, 46)',
      strokeWidth: 42,
      strokeLinejoin: 'round',
      strokeLinecap: 'round'
    }
  },

  COVER: {
    onTouchStartCapture: function onTouchStartCapture(e) {
      return e.stopPropagation()
    },
    style: {
      position: 'absolute',
      top: -10,
      bottom: -10,
      left: -10,
      right: -10
    }
  }
})

var burger = React.createElement(Burger, null)

var Head = function(_ref) {
  var height = _ref.height,
    word = _ref.word,
    onTouchEnd = _ref.onTouchEnd,
    children = _ref.children
  return React.createElement(
    'header',
    a$2('HEAD_ROOT', { style: { height: height } }),
    React.createElement(
      'span',
      a$2('HEAD_WORD', { style: { marginTop: height - 105 } }),
      word
    ),
    React.createElement(
      'span',
      a$2('HEAD_BUTTON', {
        onTouchEnd: onTouchEnd,
        style: { padding: (height - 100) / 2 + 'px 25px' }
      }),
      burger
    )
  )
}

var a$2 = Atra({
  HEAD_ROOT: {
    style: {
      backgroundColor: 'var(--base-color)',
      position: 'relative',
      textAlign: 'center'
    }
  },
  HEAD_WORD: {
    style: {
      color: 'var(--sub-color)',
      fontSize: '2.5em',
      fontWeight: 'bold',
      letterSpacing: 2,
      display: 'inline-block'
    }
  },
  HEAD_BUTTON: {
    style: {
      height: 100,
      position: 'absolute',
      right: 0,
      top: 0,
      display: 'inline-block',
      textAlign: 'center'
    }
  }
})

var WITH_IMG_COLOR = 'rgba(255, 255, 255, 0.83)'
var NO_IMG_COLOR = 'rgb(245, 245, 245)'

var Middle = function(_ref) {
  var rootStyle = _ref.rootStyle,
    withBgImg = _ref.withBgImg,
    exhibit = _ref.exhibit,
    detail = _ref.detail,
    mountWithShut = _ref.mountWithShut,
    notScroll = _ref.notScroll,
    onQuitEnd = _ref.onQuitEnd
  return React.createElement(
    'main',
    { style: rootStyle },
    React.createElement(
      'div',
      a$6('WRAP', {
        style: { backgroundColor: withBgImg ? WITH_IMG_COLOR : NO_IMG_COLOR }
      }),
      React.createElement(
        'div',
        a$6('WRAP_EXHIBIT', {
          style: { overflowY: !detail ? 'scroll' : 'hidden' }
        }),
        exhibit
      ),
      detail &&
        React.createElement(
          ShutFromLeft,
          {
            mountWithShut: mountWithShut,
            notScroll: notScroll,
            onQuitEnd: onQuitEnd,
            Quit: Quit
          },
          React.createElement('div', a$6('WRAP_DETAIL'), detail)
        )
    )
  )
}

var a$6 = Atra({
  WRAP: {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
    }
  },

  WRAP_EXHIBIT: {
    id: 'exhibitScrollElement',
    style: {
      position: 'relative',
      height: '100%',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowX: 'hidden'
    }
  },

  WRAP_DETAIL: {
    style: {
      overflowX: 'hidden'
    }
  }
})

var mountWithShut = true
var background = 'rgba(17, 17, 17, 0.98)'
var touchRatio = 0.08

var Popdown = function(_ref) {
  var src = _ref.src,
    vertically = _ref.vertically,
    onQuitEnd = _ref.onQuitEnd
  return React.createElement(
    ShutFromTop,
    {
      onQuitEnd: onQuitEnd,
      mountWithShut: mountWithShut,
      background: background,
      touchRatio: touchRatio,
      Quit: Quit$1
    },
    React.createElement(
      'div',
      a$7('ROOT', { style: { top: vertically && '4%' } }),
      React.createElement('img', a$7('IMG', { src: src }))
    )
  )
}

var a$7 = Atra({
  ROOT: {
    style: {
      position: 'relative',
      width: '96%',
      height: '87%',
      margin: 'auto'
    }
  },
  IMG: {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center'
    }
  }
})

var Preload = (function(_React$Component) {
  inherits(Preload, _React$Component)

  function Preload(props) {
    classCallCheck(this, Preload)

    var _this = possibleConstructorReturn(
      this,
      (Preload.__proto__ || Object.getPrototypeOf(Preload)).call(this, props)
    )

    _this.a = A({
      onTransitionEnd: props.onTransitionEnd,
      ref: wrapRef.bind(_this)
    })
    return _this
  }

  createClass(Preload, [
    {
      key: 'render',
      value: function render() {
        var a = this.a

        return React.createElement(
          'div',
          a('ROOT', { style: { opacity: this.props.vanish ? 0 : 1 } }),
          React.createElement(
            'span',
            a('WRAP', { style: this.wrapStyle() }),
            this.props.children
          )
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this

        this.nowWrapHeight = this.wrapHeight()
        raf(function() {
          return _this2.forceUpdate()
        })
      }
    },
    {
      key: 'wrapStyle',
      value: function wrapStyle() {
        var nowWrapHeight = this.nowWrapHeight

        return typeof nowWrapHeight === 'number'
          ? { top: (winnerHeight() - nowWrapHeight) / 2 - 100 }
          : { visibility: 'hidden' }
      }
    }
  ])
  return Preload
})(React.Component)

function wrapRef(target) {
  this.wrapHeight = !this.wrapHeight
    ? function() {
        return target.clientHeight
      }
    : null
}

var A = function A(_ref) {
  var onTransitionEnd = _ref.onTransitionEnd,
    ref = _ref.ref
  return Atra({
    ROOT: {
      onTransitionEnd: onTransitionEnd,
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        background: '#eeeeee',
        transition: '0.4s'
      }
    },
    WRAP: {
      ref: ref,
      style: {
        position: 'relative',
        display: 'inline-block'
      }
    }
  })
}

var _style

var Side = function(_ref) {
  var href = _ref.href,
    size = _ref.size,
    buttonImage = _ref.buttonImage,
    coverColor = _ref.coverColor,
    descriptionText = _ref.descriptionText,
    descriptionStyle = _ref.descriptionStyle
  return React.createElement(
    'div',
    a$8('ROOT'),
    React.createElement(
      'span',
      a$8('WRAP', {
        onTouchStart: onTouchStart,
        onTouchEnd: HoTouchEnd(href),
        style: {
          width: size,
          height: size,
          backgroundImage: buttonImage
        }
      }),
      coverColor &&
        React.createElement(
          'span',
          a$8('COVER', {
            style: { backgroundColor: coverColor }
          })
        ),
      descriptionText &&
        React.createElement(
          'span',
          a$8('DESCRIPTION', {
            style: descriptionStyle,
            children: descriptionText
          })
        )
    )
  )
}

var a$8 = Atra({
  ROOT: {
    style: {
      textAlign: 'center',
      marginTop: 75,
      marginBottom: 100
    }
  },
  WRAP: {
    style: ((_style = {
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      borderRadius: '100%',
      verticalAlign: 'middle',
      border: 'solid'
    }),
    defineProperty(_style, 'border', '8px outset rgb(255, 255, 255)'),
    defineProperty(_style, 'position', 'relative'),
    _style)
  },
  COVER: {
    style: {
      display: 'inline-block',
      width: '100%',
      height: '100%',
      borderRadius: '100%'
    }
  },
  DESCRIPTION: {
    style: {
      position: 'relative',
      fontSize: '0.87em'
    }
  }
})

var onTouchStart = function onTouchStart(e) {
  e.currentTarget.style.borderStyle = 'inset'
}

var HoTouchEnd = function HoTouchEnd(href) {
  return function(e) {
    e.currentTarget.style.borderStyle = 'outset'
    return (
      href &&
      setTimeout(function() {
        var a = document.createElement('a')
        a.href = href
        a.target = href.includes('tel') ? '' : '_blank'
        a.click()
      }, 0)
    )
  }
}

var Veil = function(_ref) {
  var drifting = _ref.drifting,
    onTouchEnd = _ref.onTouchEnd,
    onTransitionEnd = _ref.onTransitionEnd
  return React.createElement(
    'div',
    a$9('VEIL', {
      onTouchEnd: onTouchEnd,
      onTransitionEnd: onTransitionEnd,
      style: {
        top: !drifting ? undefined : 0,
        background:
          !drifting || drifting === 'lag'
            ? 'rgba(0, 0, 0, 0)'
            : 'rgba(0, 0, 0, 0.8)'
      }
    })
  )
}

var a$9 = Atra({
  VEIL: {
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      transitionDuration: '0.6s',
      transitionProperty: 'background-color',
      borderRight: 'solid 0.2px #3a3a3a'
    }
  }
})

//
var HEAD_HEIGHT = 190
var BUTTON_HEIGHT = 160
var SIDE_WIDTH = 370

var listeners = [
  'WINDOW:RESIZE_FORCE_UPDATE',
  'RENDER:PRELOADING_OFF',
  'DOM:VIEW_SWITCH',
  'DOM:DETAIL_OFF',
  'RENDER:DRIFTING_ON',
  'RENDER:DRIFTING_LAG',
  'RENDER:DRIFTING_OFF',
  'RENDER:POPDOWN_OFF'
]

var jsx$1 = function jsx$$1(Component$$1, props) {
  return (
    typeof Component$$1 === 'function' &&
    React.createElement(Component$$1, props)
  )
}

var LigureMobile = (function(_Component) {
  inherits(LigureMobile, _Component)

  function LigureMobile(props) {
    classCallCheck(this, LigureMobile)

    var _this = possibleConstructorReturn(
      this,
      (LigureMobile.__proto__ || Object.getPrototypeOf(LigureMobile)).call(
        this,
        props
      )
    )

    _this.state = {
      preloading: true,
      drifting: false,
      index: null,
      exhibit: {},
      detail: {},
      popdown: {},
      informs: [0, 0, 0, 0]
    }
    return _this
  }

  createClass(LigureMobile, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this

        orph.attach(this)
        this.listeners = {}
        listeners.forEach(function(NAME) {
          _this2.listeners[NAME] = orph.create(NAME)
        })
        this.sides = this.createSides()
      }
    },
    {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          typeof this.state.index === 'number' && this.tree(),
          this.state.popdown.src && this.createPopdown(),
          this.state.preloading && this.createPreload()
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        windowOnListener('resize', this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
        orph.dispatch('REACT:DID_MOUNT')
      }
    },
    {
      key: 'tree',
      value: function tree() {
        var drifting = this.state.drifting

        var transform =
          !drifting || drifting === 'lag'
            ? 'translateX(0px)'
            : 'translateX(' + -SIDE_WIDTH + 'px)'
        var transition = !drifting || drifting === 'lag' ? '0.6s' : '0.72s'
        var veil = this.createVeil()

        return React.createElement(
          'div',
          a('ROOT'),
          React.createElement(
            'div',
            a('HEAD_AND_MIDDLE', { style: { transform: transform } }),
            this.createHead(),
            this.createMiddle(),
            veil
          ),
          React.createElement('nav', a('BUTTONS'), this.createButtons(), veil),
          React.createElement(
            'aside',
            a('SIDES', {
              style: { transform: transform, transition: transition }
            }),
            this.sides
          )
        )
      }

      /*----------------------- create -----------------------*/
    },
    {
      key: 'createSides',
      value: function createSides() {
        return this.props.sides.map(function(_ref, index) {
          var href = _ref.href,
            buttonImage = _ref.buttonImage,
            coverColor = _ref.coverColor,
            descriptionText = _ref.descriptionText,
            descriptionStyle = _ref.descriptionStyle
          return React.createElement(Side, {
            key: index,
            size: SIDE_WIDTH / 1.7,
            href: href,
            buttonImage: buttonImage,
            coverColor: coverColor,
            descriptionText: descriptionText,
            descriptionStyle: descriptionStyle
          })
        })
      }
    },
    {
      key: 'createPopdown',
      value: function createPopdown() {
        return React.createElement(Popdown, {
          src: this.state.popdown.src,
          vertically: this.state.popdown.vertically,
          onQuitEnd: this.listeners['RENDER:POPDOWN_OFF']
        })
      }
    },
    {
      key: 'createPreload',
      value: function createPreload() {
        return React.createElement(Preload, {
          vanish: typeof this.state.index === 'number',
          onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
          children: jsx$1(this.props.Preloader)
        })
      }
    },
    {
      key: 'createVeil',
      value: function createVeil() {
        return React.createElement(Veil, {
          drifting: this.state.drifting,
          onTouchEnd: this.listeners['RENDER:DRIFTING_LAG'],
          onTransitionEnd: this.listeners['RENDER:DRIFTING_OFF']
        })
      }
    },
    {
      key: 'createHead',
      value: function createHead() {
        return React.createElement(Head, {
          height: HEAD_HEIGHT,
          word: this.props.views[this.state.index].head,
          onTouchEnd: this.listeners['RENDER:DRIFTING_ON']
        })
      }
    },
    {
      key: 'createMiddle',
      value: function createMiddle() {
        var exhibitBgStyle = this.props.exhibitBgStyle

        var height = winnerHeight() - (HEAD_HEIGHT + BUTTON_HEIGHT)
        var rootStyle = Object.assign({}, exhibitBgStyle, { height: height })
        var withBgImg = Boolean(exhibitBgStyle.backgroundImage)

        var _state = this.state,
          exhibit = _state.exhibit,
          detail = _state.detail

        return React.createElement(Middle, {
          rootStyle: rootStyle,
          withBgImg: withBgImg,
          exhibit: jsx$1(exhibit.Component),
          detail: detail.Component && jsx$1(detail.Component, detail.props),
          mountWithShut: detail.mountWithShut,
          notScroll: Boolean(this.state.popdown.src),
          onQuitEnd: this.listeners['DOM:DETAIL_OFF']
        })
      }
    },
    {
      key: 'createButtons',
      value: function createButtons() {
        var _this3 = this

        return this.props.views.map(function(view, index, views) {
          return React.createElement(Button, {
            key: index,
            width: winnerWidth() / views.length - 0.5,
            buttonIndex: index,
            onTouchStart: _this3.listeners['DOM:VIEW_SWITCH'],
            inform: _this3.state.informs[index],
            children: jsx$1(view.Button, {
              choised: index === _this3.state.index
            })
          })
        })
      }
    }
  ])
  return LigureMobile
})(Component)

var a = Atra({
  ROOT: {
    style: {
      backgroundColor: 'var(--side-color)'
    }
  },

  HEAD_AND_MIDDLE: {
    style: {
      transition: '0.6s'
    }
  },

  BUTTONS: {
    style: {
      height: BUTTON_HEIGHT,
      fontSize: '2.4vh',
      background: '#fff',
      position: 'relative',
      margin: 'auto',
      textAlign: 'center'
    }
  },

  SIDES: {
    id: 'sideScrollElement',
    style: {
      position: 'fixed',
      top: 0,
      left: winnerWidth(),
      bottom: BUTTON_HEIGHT,
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowY: 'scroll'
    }
  }
})

var Desktop = Guardian(App)
var Mobile = Guardian(LigureMobile)

export { Desktop, Mobile }
