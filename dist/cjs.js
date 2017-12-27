'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var Atra = _interopDefault(require('atra'))
var Orph = _interopDefault(require('orph'))
var _regeneratorRuntime = _interopDefault(require('babel-runtime/regenerator'))
var reactShut = require('react-shut')
var Center = _interopDefault(require('react-vertical-center'))
var Scroll = _interopDefault(require('react-stealth-roll'))

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

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }

    return target
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

  var view = views.get(index)
  return view
    ? view.getComponent({ componentName: componentName, dataName: dataName })
    : {}
}

var STORE = Object.freeze({
  INIT: INIT,
  SET_COMPONENT: SET_COMPONENT,
  SET_DATA: SET_DATA,
  GET_COMPONENT: GET_COMPONENT
})

//
var isArr = Array.isArray
var isObj = function isObj(target) {
  return (
    (typeof target === 'undefined' ? 'undefined' : _typeof(target)) ===
      'object' && !isArr(target)
  )
}
var isStr = function isStr(target) {
  return typeof target === 'string'
}
var isNum = function isNum(target) {
  return typeof target === 'number'
}
var isFnc = function isFnc(target) {
  return typeof target === 'function'
}

var error = function error(message) {
  throw new Error(message)
}
var typerror = function typerror(message) {
  throw new TypeError(message)
}

var winnerWidth = function winnerWidth() {
  return window.innerWidth
}
var winnerHeight = function winnerHeight() {
  return window.innerHeight
}

var windowOn = function windowOn(type, fn, opts) {
  return window.addEventListener(type, fn, opts)
}

var jsx$1 = function jsx$$1(Component$$1, props) {
  return (
    isFnc(Component$$1) && React__default.createElement(Component$$1, props)
  )
}

var createClickA = function createClickA(href) {
  return function() {
    return (
      href &&
      setTimeout(function() {
        var a = document.createElement('a')
        a.href = href
        a.target = href.includes('tel') ? '' : '_blank'
        a.click()
      }, 50)
    )
  }
}

//
var exhibitScrollDOM = function exhibitScrollDOM() {
  return document.getElementById('exhibitScrollElement')
}

var add = function add(orph, prefix, imports) {
  return Object.entries(imports)
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

      if (isArr(value)) {
        var _value = slicedToArray(value, 2),
          opts = _value[0],
          fn = _value[1]

        listener = fn
        states = opts.states || []
        dispatches = opts.dispatches || []
      } else {
        listener = value
        states = []
        dispatches = []
      }

      orph.add(addedName, listener, { states: states, dispatches: dispatches })
    })
}

//
var PRELOADING_OFF = [
  { states: ['preloading'] },
  function(n, _ref) {
    var render = _ref.render
    return render({ preloading: false })
  }
]

var POPDOWN_ON = [
  { states: ['popdown'] },
  function(_ref2, _ref3) {
    var src = _ref2.src,
      vertically = _ref2.vertically
    var render = _ref3.render
    return render({ popdown: { src: src, vertically: vertically } })
  }
]

var POPDOWN_OFF = [
  { states: ['popdown'] },
  function(n, _ref4) {
    var render = _ref4.render
    return render({ popdown: {} })
  }
]

var DETAIL_ON = [
  { states: ['detail'] },
  function(_ref5, _ref6) {
    var Component$$1 = _ref5.Component,
      data = _ref5.data
    var render = _ref6.render
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
  function(n, _ref7) {
    var render = _ref7.render
    return render({ detail: {} })
  }
]

var BY_REACT_DIDMOUNT = [
  { states: ['index', 'exhibit'] },
  function(_ref8, _ref9) {
    var index = _ref8.index,
      Component$$1 = _ref8.Component
    var render = _ref9.render
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
  function(_ref10, _ref11) {
    var index = _ref10.index,
      exhibits = _ref10.exhibits,
      details = _ref10.details
    var render = _ref11.render

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
  function(_ref12, _ref13) {
    var index = _ref12.index,
      inform = _ref12.inform
    var state = _ref13.state,
      render = _ref13.render

    var _state = state(),
      informs = _state.informs

    informs[index] = inform
    render({ informs: informs })
  }
]

var RENDER = Object.freeze({
  PRELOADING_OFF: PRELOADING_OFF,
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
                var renderDetail, setPopdown, setInform, Components
                return _regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.next = 2
                          return dispatch('STORE:INIT', index)

                        case 2:
                          renderDetail = function renderDetail(data) {
                            return dispatch('PASS:DETAIL_ON', data)
                          }

                          setPopdown = function setPopdown(src) {
                            return dispatch('PASS:POPDOWN_ON', src)
                          }

                          setInform = function setInform(inform) {
                            return dispatch('PASS:INFORM_ON', {
                              index: index,
                              inform: inform
                            })
                          }

                          _context.next = 7
                          return create({
                            renderDetail: renderDetail,
                            setPopdown: setPopdown,
                            setInform: setInform
                          })

                        case 7:
                          _context.t0 = _context.sent

                          if (_context.t0) {
                            _context.next = 10
                            break
                          }

                          _context.t0 = {}

                        case 10:
                          Components = _context.t0
                          _context.next = 13
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

                        case 13:
                          _context.next = 15
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

                        case 15:
                          return _context.abrupt('return')

                        case 16:
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

var PASS = {
  DETAIL_ON: [
    {
      dispatches: ['STORE:SET_DATA', 'STORE:GET_COMPONENT', 'RENDER:DETAIL_ON']
    },
    function(data, _ref9) {
      var state = _ref9.state,
        dispatch = _ref9.dispatch

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
    function(arg, _ref10) {
      var dispatch = _ref10.dispatch

      if (isObj(arg) && arg.src) {
        dispatch('RENDER:POPDOWN_ON', arg)
      }
    }
  ],

  INFORM_ON: [
    {
      dispatches: ['RENDER:INFORM_CHANGE']
    },
    function(arg, _ref11) {
      var dispatch = _ref11.dispatch

      var inform = +arg.inform
      if (inform || inform === 0) {
        var index = arg.index

        dispatch('RENDER:INFORM_CHANGE', { index: index, inform: inform })
      }
    }
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
      var _ref12 = asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime.mark(function _callee3(e, _ref13) {
          var state = _ref13.state,
            dispatch = _ref13.dispatch
          var nowIndex, nextIndex, index, exhibits, details
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
                    index = nextIndex

                    // GET exhibits

                    _context3.next = 9
                    return dispatch('STORE:GET_COMPONENT', {
                      index: index,
                      componentName: 'Exhibit',
                      dataName: 'exhibitScrollTop'
                    })

                  case 9:
                    exhibits = _context3.sent
                    _context3.next = 12
                    return dispatch('STORE:GET_COMPONENT', {
                      index: index,
                      componentName: 'Detail',
                      dataName: 'detailProps'
                    })

                  case 12:
                    details = _context3.sent

                    // RENDER
                    dispatch('RENDER:BY_DOM_VIEW_SWITCH', {
                      index: index,
                      exhibits: exhibits,
                      details: details
                    })

                  case 14:
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
        return _ref12.apply(this, arguments)
      }
    })()
  ],

  DETAIL_OFF: [
    {
      dispatches: ['STORE:SET_DATA', 'RENDER:DETAIL_OFF']
    },
    function(n, _ref14) {
      var state = _ref14.state,
        dispatch = _ref14.dispatch

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

//
var DIMMING_ON = [
  { states: ['dimming'] },
  function(n, _ref) {
    var render = _ref.render
    return render({ dimming: true })
  }
]
var DIMMING_OFF = [
  { states: ['dimming'] },
  function(n, _ref2) {
    var render = _ref2.render
    return render({ dimming: false })
  }
]

var DIM_SWITCH = [
  { dispatches: ['RENDER:DIMMING_ON', 'RENDER:DIMMING_OFF'] },
  function(e, _ref3) {
    var state = _ref3.state,
      dispatch = _ref3.dispatch

    dispatch(!state().dimming ? 'RENDER:DIMMING_ON' : 'RENDER:DIMMING_OFF')
  }
]

var orph = new Orph()
add(orph, 'STORE', STORE)
add(
  orph,
  'RENDER',
  Object.assign({}, RENDER, {
    DIMMING_ON: DIMMING_ON,
    DIMMING_OFF: DIMMING_OFF
  })
)
add(orph, 'WINDOW', WINDOW)
add(orph, 'REACT', REACT)
add(orph, 'DOM', Object.assign({}, DOM, { DIM_SWITCH: DIM_SWITCH }))
add(orph, 'PASS', PASS)

//
var Button = (function(a) {
  return function(_ref) {
    var width = _ref.width,
      borderBottomColor = _ref.borderBottomColor,
      inform = _ref.inform,
      svg = _ref.svg,
      children = _ref.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        style: { width: width, borderBottomColor: borderBottomColor }
      }),
      React__default.createElement(
        'span',
        a('WRAP'),
        svg,
        inform > 0 && React__default.createElement('div', a('INFORM'), inform)
      ),
      children
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        display: 'inline-block',
        height: '94%',
        position: 'relative',
        textAlign: 'center',
        borderBottomStyle: 'solid'
      }
    },
    WRAP: {
      className: 'lonogara_button', // for svg { height: 100%; }
      style: {
        display: 'inline-block',
        position: 'relative',
        top: '34%',
        height: '44%'
      }
    },
    INFORM: {
      style: {
        position: 'absolute',
        top: '-28%',
        right: '-24%',
        display: 'inline-block',
        width: 24,
        height: 24,
        borderRadius: '100%',
        background: '#ff4444',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 1.5
      }
    }
  })
)

var DimItem = (function(a) {
  return function(_ref2) {
    var size = _ref2.size,
      buttonImage = _ref2.buttonImage,
      coverColor = _ref2.coverColor,
      descriptionText = _ref2.descriptionText,
      descriptionStyle = _ref2.descriptionStyle,
      children = _ref2.children
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement(
        'span',
        a('WRAP', {
          style: { width: size, height: size, backgroundImage: buttonImage }
        }),
        coverColor &&
          React__default.createElement(
            'span',
            a('COVER', { style: { backgroundColor: coverColor } })
          ),
        descriptionText &&
          React__default.createElement(
            'span',
            { style: descriptionStyle },
            descriptionText
          ),
        children
      )
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        display: 'inline-block',
        textAlign: 'center',
        padding: 28
      }
    },
    WRAP: {
      onMouseDown: function onMouseDown(e) {
        e.currentTarget.style.borderStyle = 'inset'
      },
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.style.borderStyle = 'outset'
      },
      style: {
        position: 'relative',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        border: '6px outset rgb(236, 236, 236)',
        borderRadius: '100%',
        verticalAlign: 'middle'
      }
    },
    COVER: {
      style: {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        borderRadius: '100%'
      }
    }
  })
)

var DimBoard = (function(a) {
  return function(_ref3) {
    var children = _ref3.children
    return React__default.createElement('div', a('ROOT'), children)
  }
})(
  Atra({
    ROOT: {
      style: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'rgba(28, 28, 28, 0.9)'
      }
    }
  })
)

var DimSwitch = (function(createA) {
  var transform = -12
  var a = createA({ transform: transform })

  return function(_ref4) {
    var children = _ref4.children
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement('span', a('WRAP'), children)
    )
  }
})(function(_ref5) {
  var transform = _ref5.transform
  return Atra({
    ROOT: {
      style: {
        position: 'absolute',
        right: 0,
        bottom: -62,
        width: 60,
        height: 60,
        overflowY: 'hidden'
      }
    },
    WRAP: {
      onMouseDown: function onMouseDown(e) {
        var style = e.currentTarget.style

        style.transitionDuration = '0.1s'
        style.transform = 'translateY(0px)'
      },
      onMouseUp: function onMouseUp(e) {
        var style = e.currentTarget.style

        style.transitionDuration = '0.4s'
        style.transform = 'translateY(' + transform + 'px)'
      },
      style: {
        display: 'inline-block',
        height: '100%',
        position: 'relative',
        transform: 'translateY(' + transform + 'px)'
      }
    }
  })
})

var Preload = (function(a) {
  return function(_ref6) {
    var onTransitionEnd = _ref6.onTransitionEnd,
      backgroundColor = _ref6.backgroundColor,
      opacity = _ref6.opacity,
      children = _ref6.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        onTransitionEnd: onTransitionEnd,
        style: { backgroundColor: backgroundColor, opacity: opacity }
      }),
      children
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        transitionDuration: '0.4s',
        transitionProperty: 'opacity'
      }
    }
  })
)

var QuitDetail = (function(a) {
  return function(_ref7) {
    var children = _ref7.children
    return React__default.createElement('span', a('ROOT'), children)
  }
})(
  Atra({
    ROOT: {
      style: {
        zIndex: 1000,
        width: 50,
        height: 50,
        position: 'absolute',
        top: 8,
        right: 8
      }
    }
  })
)

var QuitPopdown = (function(a) {
  return function(_ref8) {
    var children = _ref8.children
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement('span', a('WRAP'), children)
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 17,
        left: 0,
        width: '100%',
        textAlign: 'center'
      }
    },
    WRAP: {
      style: {
        position: 'relative',
        width: 200,
        display: 'inline-block'
      }
    }
  })
)

//
var Listen = (function(a) {
  var specifies = ['type', 'listener', 'positionValue']
  var reposition = function reposition(value) {
    return {
      top: value,
      bottom: value,
      left: value,
      right: value
    }
  }

  return function(props) {
    var type = props.type,
      listener = props.listener,
      positionValue = props.positionValue

    var reprops = {}
    reprops[type] = listener
    reprops.style = isNum(positionValue) ? reposition(positionValue) : {}
    Object.keys(props)
      .filter(function(key) {
        return !specifies.includes(key)
      })
      .forEach(function(key) {
        reprops[key] = props[key]
      })

    return React__default.createElement('span', a('EL', reprops))
  }
})(
  Atra({
    EL: {
      style: {
        display: 'inline-block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    }
  })
)

var Background = (function(a) {
  return function(props) {
    return React__default.createElement(
      'div',
      a('EL', Object.assign({}, props))
    )
  }
})(
  Atra({
    EL: {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    }
  })
)

var ArrowLeft = (function(a) {
  return function(_ref) {
    var stroke = _ref.stroke
    return React__default.createElement(
      'svg',
      a('SVG'),
      React__default.createElement(
        'path',
        a('PATH', { style: { stroke: stroke } })
      )
    )
  }
})(
  Atra({
    SVG: {
      viewBox: '0 0 300 300'
    },
    PATH: {
      d:
        'M 189.50288,42.205033 41.07742,150.00001 189.50288,257.79499 m -25.8155,-107.79498 95.59992,0',
      style: {
        fill: 'none',
        strokeWidth: 42,
        strokeLinejoin: 'round',
        strokeLinecap: 'round'
      }
    }
  })
)

var ArrowWideUp = (function(a) {
  return function() {
    return React__default.createElement(
      'svg',
      a('SVG'),
      React__default.createElement('path', a('PATH'))
    )
  }
})(
  Atra({
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
    }
  })
)

//
var Popdown = (function(a) {
  return function(_ref) {
    var src = _ref.src
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement('img', a('IMG', { src: src }))
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        position: 'relative',
        maxWidth: 1000,
        height: '87%',
        top: '3%',
        margin: 'auto',
        padding: '0px 15px'
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
)

var ArrowUp = (function(a) {
  return function(_ref2) {
    var fn = _ref2.fn,
      stroke = _ref2.stroke
    return React__default.createElement(
      'svg',
      a('SVG'),
      React__default.createElement(
        'path',
        a('PATH', { style: { stroke: stroke } })
      )
    )
  }
})(
  Atra({
    SVG: {
      viewBox: '0 0 300 300'
    },
    PATH: {
      d:
        'M 257.79498,189.74596 150.00001,41.320493 42.205023,189.74596 m 107.794987,-25.8155 v 95.59992',
      style: {
        fill: 'none',
        strokeWidth: 42,
        strokeLinejoin: 'round',
        strokeLinecap: 'round'
      }
    }
  })
)

var Strap = (function(a) {
  return function(_ref3) {
    var stroke = _ref3.stroke
    return React__default.createElement(
      'svg',
      a('SVG'),
      React__default.createElement(
        'path',
        a('PATH_0', { style: { stroke: stroke } })
      ),
      React__default.createElement('path', a('PATH_1'))
    )
  }
})(
  Atra({
    SVG: {
      viewBox: '0 0 300 300',
      style: {
        height: '100%'
      }
    },
    PATH_0: {
      d: 'M 149.99811,0 150,188.403',
      style: {
        strokeWidth: 8,
        strokeLinecap: 'round'
      }
    },
    PATH_1: {
      d:
        'm 172.32747,229.01407 c 0,12.33112 -9.99635,22.32747 -22.32747,22.32747 -12.33112,0 -22.32747,-9.99635 -22.32747,-22.32747 0,-12.33112 9.99635,-22.32747 22.32747,-22.32747 12.33112,0 22.32747,9.99635 22.32747,22.32747 z',
      style: {
        fill: '#c30000',
        stroke: '#780d00',
        strokeWidth: 12
      }
    }
  })
)

//
var HEAD_HEIGHT = 90
var BUTTON_HEIGHT = 110
var BOTTOM_MARGIN = 40
var MouseDown = function MouseDown(props) {
  return React__default.createElement(
    Listen,
    Object.assign({ type: 'onMouseDown' }, props)
  )
}
var MouseUp = function MouseUp(props) {
  return React__default.createElement(
    Listen,
    Object.assign({ type: 'onMouseUp' }, props)
  )
}
var listeners = [
  'WINDOW:RESIZE_FORCE_UPDATE',
  'RENDER:PRELOADING_OFF',
  'DOM:DETAIL_OFF',
  'DOM:VIEW_SWITCH',
  'DOM:DIM_SWITCH',
  'RENDER:POPDOWN_OFF'
]

var LonogaraDesktop = (function(_Component) {
  inherits(LonogaraDesktop, _Component)

  function LonogaraDesktop(props) {
    classCallCheck(this, LonogaraDesktop)

    var _this = possibleConstructorReturn(
      this,
      (
        LonogaraDesktop.__proto__ || Object.getPrototypeOf(LonogaraDesktop)
      ).call(this, props)
    )

    _this.state = {
      preloading: true,
      dimming: false,
      index: undefined,
      exhibit: {},
      detail: {},
      popdown: {},
      informs: [0, 0, 0, 0]
    }
    return _this
  }

  createClass(LonogaraDesktop, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this

        orph.attach(this)
        this.listeners = {}
        listeners.forEach(function(NAME) {
          _this2.listeners[NAME] = orph.create(NAME)
        })

        this.noButtons = this.props.views.length < 2

        this.layout = this.Layout()
        this.detailQuit = this.DetailQuit()
        this.popdownQuit = this.PopdownQuit()
      }
    },
    {
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          null,
          this.layout,
          isNum(this.state.index) && this.Tree(),
          this.state.popdown.src && this.Popdown(),
          this.state.preloading && this.Preload()
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        windowOn('resize', this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
        orph.dispatch('REACT:DID_MOUNT')
      }
    },
    {
      key: 'Tree',
      value: function Tree() {
        var noButtons = this.noButtons
        var base = this.props.colors.base
        var dimming = this.state.dimming

        var mainHeight =
          winnerHeight() -
          HEAD_HEIGHT -
          (noButtons ? 80 : BUTTON_HEIGHT) -
          BOTTOM_MARGIN

        return React__default.createElement(
          'div',
          a('ROOT'),
          React__default.createElement(
            'header',
            a('HEAD', { style: { visibility: dimming && 'hidden' } }),
            React__default.createElement(
              'span',
              a('HEAD:WORD', { style: { color: base } }),
              this.props.views[this.state.index].head
            )
          ),
          React__default.createElement(
            'div',
            a('MAIN', { style: { height: mainHeight, borderColor: base } }),
            this.Middle(),
            this.DimSwitch(),
            dimming && this.DimBoard()
          ),
          !noButtons &&
            React__default.createElement(
              'nav',
              a('BUTTONS', { style: { visibility: dimming && 'hidden' } }),
              this.Buttons()
            )
        )
      }

      /*-----------------------  -----------------------*/
    },
    {
      key: 'Layout',
      value: function Layout() {
        return React__default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          },
          React__default.createElement(Background, {
            style: this.props.backgroundStyle
          }),
          React__default.createElement(Background, {
            style: { backgroundColor: this.props.colors.background }
          })
        )
      }
    },
    {
      key: 'DetailQuit',
      value: function DetailQuit() {
        var _this3 = this

        return function(_ref) {
          var fn = _ref.fn
          return React__default.createElement(
            QuitDetail,
            null,
            React__default.createElement(ArrowLeft, {
              stroke: _this3.props.colors.detailQuit
            }),
            React__default.createElement(MouseDown, {
              positionValue: -20,
              listener: fn
            })
          )
        }
      }
    },
    {
      key: 'PopdownQuit',
      value: function PopdownQuit() {
        return function(_ref2) {
          var fn = _ref2.fn
          return React__default.createElement(
            QuitPopdown,
            null,
            React__default.createElement(ArrowWideUp, null),
            React__default.createElement(MouseDown, {
              positionValue: -10,
              listener: fn
            })
          )
        }
      }
    },
    {
      key: 'Preload',
      value: function Preload$$1() {
        var onTransitionEnd = this.listeners['RENDER:PRELOADING_OFF']
        var backgroundColor = this.props.colors.preloader
        var opacity = isNum(this.state.index) ? 0 : 1
        var deduct = 60
        var preloader = jsx$1(this.props.Preloader)

        return React__default.createElement(
          Preload,
          {
            onTransitionEnd: onTransitionEnd,
            backgroundColor: backgroundColor,
            opacity: opacity
          },
          React__default.createElement(Center, { deduct: deduct }, preloader)
        )
      }
    },
    {
      key: 'Popdown',
      value: function Popdown$$1() {
        var Quit = this.popdownQuit
        var onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
        var src = this.state.popdown.src

        return React__default.createElement(
          reactShut.ShutFromTop,
          a('POPDOWN_SHUT', { Quit: Quit, onQuitEnd: onQuitEnd }),
          React__default.createElement(Popdown, { src: src })
        )
      }
    },
    {
      key: 'Middle',
      value: function Middle() {
        var exhibit = jsx$1(this.state.exhibit.Component)
        return React__default.createElement(
          'div',
          a('MIDDLE'),
          React__default.createElement(
            Scroll,
            a('MIDDLE_WRAP:EXHIBIT'),
            exhibit
          ),
          this.state.detail.Component && this.Detail()
        )
      }
    },
    {
      key: 'Detail',
      value: function Detail() {
        var background = this.props.colors.detail
        var Quit = this.detailQuit
        var onQuitEnd = this.listeners['DOM:DETAIL_OFF']
        var _state$detail = this.state.detail,
          Component$$1 = _state$detail.Component,
          props = _state$detail.props,
          mountWithShut = _state$detail.mountWithShut

        var detail = jsx$1(Component$$1, props)

        return React__default.createElement(
          reactShut.ShutFromLeft,
          {
            hiddenBar: true,
            touchRatio: 0,
            background: background,
            Quit: Quit,
            onQuitEnd: onQuitEnd,
            mountWithShut: mountWithShut
          },
          detail
        )
      }
    },
    {
      key: 'DimSwitch',
      value: function DimSwitch$$1() {
        return React__default.createElement(
          DimSwitch,
          null,
          React__default.createElement(Strap, {
            stroke: this.props.colors.base
          }),
          React__default.createElement(MouseDown, {
            listener: this.listeners['DOM:DIM_SWITCH']
          })
        )
      }
    },
    {
      key: 'DimBoard',
      value: function DimBoard$$1() {
        return React__default.createElement(
          DimBoard,
          null,
          React__default.createElement(
            Scroll,
            { style: { overflowX: 'scroll' } },
            React__default.createElement(
              Center,
              { deduct: 24 },
              React__default.createElement(
                'div',
                {
                  style:
                    this.props.sides.length < 5
                      ? { textAlign: 'center' }
                      : { display: 'flex' }
                },
                this.DimItems()
              )
            )
          )
        )
      }
    },
    {
      key: 'DimItems',
      value: function DimItems() {
        return this.props.sides.map(function(_ref3, index) {
          var href = _ref3.href,
            buttonImage = _ref3.buttonImage,
            coverColor = _ref3.coverColor,
            descriptionText = _ref3.descriptionText,
            descriptionStyle = _ref3.descriptionStyle
          return React__default.createElement(
            DimItem,
            _extends(
              { key: index },
              {
                size: 130,
                buttonImage: buttonImage,
                coverColor: coverColor,
                descriptionText: descriptionText,
                descriptionStyle: descriptionStyle
              }
            ),
            React__default.createElement(MouseUp, {
              listener: createClickA(href)
            })
          )
        })
      }
    },
    {
      key: 'Buttons',
      value: function Buttons() {
        var _this4 = this

        var _props$colors = this.props.colors,
          base = _props$colors.base,
          sub = _props$colors.sub

        return this.props.views.map(function(view, index) {
          return React__default.createElement(
            Button,
            _extends(
              { key: index },
              {
                width: 100,
                borderBottomColor: base,
                inform: _this4.state.informs[index],
                svg: jsx$1(view.Button, {
                  choised: index === _this4.state.index,
                  mainColor: base,
                  subColor: sub
                })
              }
            ),
            React__default.createElement(MouseDown, {
              listener: _this4.listeners['DOM:VIEW_SWITCH'],
              'data-index': index
            })
          )
        })
      }
    }
  ])
  return LonogaraDesktop
})(React.Component)

var a = Atra({
  ROOT: {
    style: {
      maxWidth: 960,
      margin: 'auto',
      padding: '0px 12px'
    }
  },
  HEAD: {
    style: {
      height: HEAD_HEIGHT,
      textAlign: 'center'
    }
  },
  'HEAD:WORD': {
    style: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      letterSpacing: 2,
      display: 'inline-block',
      position: 'relative',
      top: '35%'
    }
  },
  MAIN: {
    style: {
      position: 'relative',
      borderStyle: 'solid'
    }
  },
  MIDDLE: {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%',
      overflow: 'hidden'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id: 'exhibitScrollElement',
    style: {
      overflowY: 'scroll',
      height: '100%'
    }
  },
  BUTTONS: {
    style: {
      height: BUTTON_HEIGHT,
      textAlign: 'center',
      overflowY: 'hidden'
    }
  },
  POPDOWN_SHUT: {
    mountWithShut: true,
    background: 'rgba(17, 17, 17, 0.98)',
    touchRatio: 0,
    notScroll: true
  }
})

//
var background = function(_ref) {
  var background = _ref.background

  var result = {
    backgroundURL: undefined,
    backgroundStyle: {}
  }

  if (background) {
    if (isStr(background)) {
      var url = background

      result.backgroundURL = url
      result.backgroundStyle.backgroundImage = 'url(' + url + ')'
    } else if (isArr(background)) {
      var _background = slicedToArray(background, 2),
        _url = _background[0],
        style = _background[1]

      if (!isStr(_url)) {
        typerror('')
      }
      if (!isObj(style)) {
        typerror('')
      }

      result.backgroundURL = _url
      Object.entries(style).forEach(function(_ref2) {
        var _ref3 = slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1]

        result.backgroundStyle[key] = value
      })
      result.backgroundStyle.backgroundImage = 'url(' + _url + ')'
    } else {
      typerror('')
    }
  }

  return result
}

//
var sides = function(_ref) {
  var sides = _ref.sides

  var result = []

  if (sides) {
    if (!isArr(sides)) {
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
        if (!isStr(href)) {
          typerror('')
        }
        side.href = href
      }

      if (buttonImage) {
        if (!isStr(buttonImage)) {
          typerror('')
        }
        side.buttonImage = 'url(' + buttonImage + ')'
      }

      if (coverColor) {
        if (!isStr(coverColor)) {
          typerror('')
        }
        side.coverColor = coverColor
      }

      if (description) {
        if (isStr(description)) {
          side.descriptionText = description
        } else if (isArr(description)) {
          var _description = slicedToArray(description, 2),
            text = _description[0],
            style = _description[1]

          if (!isStr(text)) {
            typerror('')
          }
          if (!isObj(style)) {
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
var views$1 = function(_ref) {
  var views = _ref.views

  var result = []

  if (views) {
    if (!isArr(views)) {
      typerror('')
    }

    if (views.length > 7) {
      error('')
    }

    views.forEach(function(_ref2) {
      var head = _ref2.head,
        Button = _ref2.Button,
        create = _ref2.create

      if (head && !isStr(head)) {
        typerror('')
      }
      if (!isFnc(Button)) {
        typerror('')
      }
      if (!create) {
        error('view.create is required')
      }
      if (!isFnc(create)) {
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
var firstIndex = function firstIndex(_ref) {
  var firstIndex = _ref.firstIndex
  return isNum(firstIndex) ? firstIndex : 0
}
var preloader = function preloader(_ref2) {
  var Preloader = _ref2.Preloader
  return isFnc(Preloader) && Preloader
}
var _guardian = function() {
  return {
    firstIndex: firstIndex,
    background: background,
    preloader: preloader,
    sides: sides,
    views: views$1
  }
}

var HoColors = function HoColors(Colors) {
  return function(_ref3) {
    var colors = _ref3.colors

    var result = Colors()

    if (colors) {
      if (!isObj(colors)) {
        typerror('props.colors must be "pure object"')
      }
      if (
        !Object.values(colors).every(function(value) {
          return isStr(value)
        })
      ) {
        typerror('props.colors contain invalied value')
      }

      Object.keys(result).forEach(function(key) {
        result[key] = colors[key] || result[key]
      })
    }

    return result
  }
}

var Guardian = function Guardian(_ref4) {
  var App = _ref4.App,
    guardian = _ref4.guardian
  return function(props) {
    var firstIndex = guardian.firstIndex(props)
    var colors = guardian.colors(props)

    var _guardian$background = guardian.background(props),
      backgroundURL = _guardian$background.backgroundURL,
      backgroundStyle = _guardian$background.backgroundStyle

    var Preloader = guardian.preloader(props)
    var sides$$1 = guardian.sides(props)
    var views = guardian.views(props)

    return React__default.createElement(
      'div',
      null,
      backgroundURL &&
        React__default.createElement('link', {
          rel: 'prefetch',
          href: backgroundURL
        }),
      React__default.createElement(
        'style',
        { type: 'text/css' },
        '\n        body {\n          margin: 0px;\n          overflow: hidden;\n          font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;\n        }\n        .lonogara_button svg {\n          height: 100%;\n        }\n      '
      ),
      React__default.createElement(App, {
        firstIndex: firstIndex,
        colors: colors,
        backgroundStyle: backgroundStyle,
        Preloader: Preloader,
        sides: sides$$1,
        views: views
      })
    )
  }
}

//
var guardian = _guardian()

guardian.colors = HoColors(function() {
  return {
    base: '#ffffff',
    sub: 'rgb(145, 145, 145)',
    background: 'rgba(0, 0, 0, 0.6)',
    preloader: 'rgb(241, 241, 241)',
    detail: 'rgb(243, 243, 243)',
    detailQuit: 'rgb(66, 62, 89)'
  }
})

var index = Guardian({ App: LonogaraDesktop, guardian: guardian })

//
var sideScrollDOM = function sideScrollDOM() {
  return document.getElementById('sideScrollElement')
}

var DRIFTING_ON = [
  { states: ['drifting'] },
  function(n, _ref) {
    var render = _ref.render
    return render({ drifting: true })
  }
]
var DRIFTING_LAG = [
  { states: ['drifting'] },
  function(n, _ref2) {
    var render = _ref2.render
    return render({ drifting: 'lag' })
  }
]
var DRIFTING_OFF = [
  { states: ['drifting'] },
  function(n, _ref3) {
    var state = _ref3.state,
      render = _ref3.render
    return (
      state().drifting === 'lag' &&
      render({ drifting: false }, function() {
        sideScrollDOM().scrollTop = 0
      })
    )
  }
]

var orph$2 = new Orph()
add(orph$2, 'STORE', STORE)
add(
  orph$2,
  'RENDER',
  Object.assign({}, RENDER, {
    DRIFTING_ON: DRIFTING_ON,
    DRIFTING_LAG: DRIFTING_LAG,
    DRIFTING_OFF: DRIFTING_OFF
  })
)
add(orph$2, 'WINDOW', WINDOW)
add(orph$2, 'REACT', REACT)
add(orph$2, 'DOM', DOM)
add(orph$2, 'PASS', PASS)

//
var Button$1 = (function(a) {
  return function(_ref) {
    var width = _ref.width,
      inform = _ref.inform,
      svg = _ref.svg,
      children = _ref.children
    return React__default.createElement(
      'div',
      a('ROOT', { style: { width: width } }),
      React__default.createElement(
        'span',
        a('WRAP'),
        svg,
        inform > 0 && React__default.createElement('div', a('INFORM'), inform)
      ),
      children
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        display: 'inline-block',
        height: '100%',
        position: 'relative'
      }
    },
    WRAP: {
      className: 'lonogara_button', // for svg { height: 100%; }
      style: {
        display: 'inline-block',
        position: 'relative',
        top: '20%',
        height: '62%'
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
    }
  })
)

var Head = (function(a) {
  return function(_ref2) {
    var height = _ref2.height,
      backgroundColor = _ref2.backgroundColor,
      word = _ref2.word,
      color = _ref2.color,
      children = _ref2.children
    return React__default.createElement(
      'header',
      a('ROOT', {
        style: { height: height, backgroundColor: backgroundColor }
      }),
      React__default.createElement(
        'span',
        a('WORD', { style: { color: color, marginTop: height - 105 } }),
        word
      ),
      React__default.createElement(
        'span',
        a('BUTTON', { style: { padding: (height - 100) / 2 + 'px 25px' } }),
        children
      )
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        position: 'relative',
        textAlign: 'center'
      }
    },
    WORD: {
      style: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        letterSpacing: 2,
        display: 'inline-block'
      }
    },
    BUTTON: {
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
)

var SideItem = (function(a) {
  return function(_ref3) {
    var size = _ref3.size,
      buttonImage = _ref3.buttonImage,
      coverColor = _ref3.coverColor,
      descriptionText = _ref3.descriptionText,
      descriptionStyle = _ref3.descriptionStyle,
      children = _ref3.children
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement(
        'span',
        a('WRAP', {
          style: { width: size, height: size, backgroundImage: buttonImage }
        }),
        coverColor &&
          React__default.createElement(
            'span',
            a('COVER', { style: { backgroundColor: coverColor } })
          ),
        descriptionText &&
          React__default.createElement(
            'span',
            { style: descriptionStyle },
            descriptionText
          ),
        children
      )
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        textAlign: 'center',
        marginTop: 75,
        marginBottom: 100
      }
    },
    WRAP: {
      onTouchStart: function onTouchStart(e) {
        e.currentTarget.style.borderStyle = 'inset'
      },
      onTouchEnd: function onTouchEnd(e) {
        e.currentTarget.style.borderStyle = 'outset'
      },
      style: {
        display: 'inline-block',
        position: 'relative',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '8px outset rgb(255, 255, 255)',
        borderRadius: '100%',
        verticalAlign: 'middle'
      }
    },
    COVER: {
      style: {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        borderRadius: '100%'
      }
    }
  })
)

var Preload$1 = (function(a) {
  return function(_ref4) {
    var onTransitionEnd = _ref4.onTransitionEnd,
      backgroundColor = _ref4.backgroundColor,
      opacity = _ref4.opacity,
      children = _ref4.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        onTransitionEnd: onTransitionEnd,
        style: { backgroundColor: backgroundColor, opacity: opacity }
      }),
      children
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        transitionDuration: '0.4s',
        transitionProperty: 'opacity'
      }
    }
  })
)

var Veil = (function(a) {
  var BLACK = 'rgba(0, 0, 0, 0.8)'
  var TRANS = 'rgba(0, 0, 0, 0)'

  return function(_ref5) {
    var onTransitionEnd = _ref5.onTransitionEnd,
      drifting = _ref5.drifting,
      children = _ref5.children
    return React__default.createElement(
      'div',
      a('VEIL', {
        onTransitionEnd: onTransitionEnd,
        style: {
          top: !drifting ? undefined : 0,
          backgroundColor: !drifting || drifting === 'lag' ? TRANS : BLACK
        }
      }),
      children
    )
  }
})(
  Atra({
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
)

var QuitDetail$1 = (function(a) {
  return function(_ref6) {
    var children = _ref6.children
    return React__default.createElement('span', a('ROOT'), children)
  }
})(
  Atra({
    ROOT: {
      style: {
        zIndex: 1000,
        position: 'absolute',
        top: 20,
        right: 24,
        width: 100,
        height: 100
      }
    }
  })
)

var QuitPopdown$1 = (function(a) {
  return function(_ref7) {
    var children = _ref7.children
    return React__default.createElement(
      'div',
      a('ROOT'),
      React__default.createElement('span', a('WRAP'), children)
    )
  }
})(
  Atra({
    ROOT: {
      style: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 17,
        left: 0,
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
    }
  })
)

//
var Popdown$1 = (function(a) {
  return function(_ref) {
    var src = _ref.src,
      top = _ref.top
    return React__default.createElement(
      'div',
      a('ROOT', { style: { top: top } }),
      React__default.createElement('img', a('IMG', { src: src }))
    )
  }
})(
  Atra({
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
)

var Burger = (function(a) {
  return function(_ref2) {
    var stroke = _ref2.stroke
    return React__default.createElement(
      'svg',
      a('SVG'),
      React__default.createElement(
        'g',
        a('G', { stroke: stroke }),
        React__default.createElement('path', a('PATH_0')),
        React__default.createElement('path', a('PATH_1')),
        React__default.createElement('path', a('PATH_2'))
      )
    )
  }
})(
  Atra({
    SVG: {
      viewBox: '0 0 300 300',
      style: {
        height: '100%'
      }
    },
    G: {
      style: {
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
)

//
var HEAD_HEIGHT$1 = 190
var BUTTON_HEIGHT$1 = 160
var SIDE_WIDTH = 370
var TouchStart = function TouchStart(props) {
  return React__default.createElement(
    Listen,
    Object.assign({ type: 'onTouchStart' }, props)
  )
}
var TouchEnd = function TouchEnd(props) {
  return React__default.createElement(
    Listen,
    Object.assign({ type: 'onTouchEnd' }, props)
  )
}
var TouchEndCapture = function TouchEndCapture(props) {
  return React__default.createElement(
    Listen,
    Object.assign({ type: 'onTouchEndCapture' }, props)
  )
}
var listeners$1 = [
  'WINDOW:RESIZE_FORCE_UPDATE',
  'RENDER:PRELOADING_OFF',
  'DOM:VIEW_SWITCH',
  'DOM:DETAIL_OFF',
  'RENDER:DRIFTING_ON',
  'RENDER:DRIFTING_LAG',
  'RENDER:DRIFTING_OFF',
  'RENDER:POPDOWN_OFF'
]

var LonogaraMobile = (function(_Component) {
  inherits(LonogaraMobile, _Component)

  // listeners: { [name: string]: () => {} }
  // sides: React$Node

  function LonogaraMobile(props) {
    classCallCheck(this, LonogaraMobile)

    var _this = possibleConstructorReturn(
      this,
      (LonogaraMobile.__proto__ || Object.getPrototypeOf(LonogaraMobile)).call(
        this,
        props
      )
    )

    _this.state = {
      preloading: true,
      drifting: false,
      index: undefined,
      exhibit: {},
      detail: {},
      popdown: {},
      informs: [0, 0, 0, 0]
    }
    return _this
  }

  createClass(LonogaraMobile, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this

        orph$2.attach(this)
        this.listeners = {}
        listeners$1.forEach(function(NAME) {
          _this2.listeners[NAME] = orph$2.create(NAME)
        })

        this.noButtons = this.props.views.length < 2

        this.sides = this.Sides()
        this.detailQuit = this.DetailQuit()
        this.popdownQuit = this.PopdownQuit()
      }
    },
    {
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          null,
          isNum(this.state.index) && this.Tree(),
          this.state.popdown.src && this.Popdown(),
          this.state.preloading && this.Preload()
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        windowOn('resize', this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
        orph$2.dispatch('REACT:DID_MOUNT')
      }
    },
    {
      key: 'Tree',
      value: function Tree() {
        var drifting = this.state.drifting

        var transform =
          !drifting || drifting === 'lag'
            ? 'translateX(0px)'
            : 'translateX(' + -SIDE_WIDTH + 'px)'
        var transition = !drifting || drifting === 'lag' ? '0.6s' : '0.72s'
        var bottom = this.noButtons ? 0 : BUTTON_HEIGHT$1
        var veil = this.Veil()

        return React__default.createElement(
          'div',
          { style: { backgroundColor: this.props.colors.side } },
          React__default.createElement(
            'div',
            a$1('HEAD_AND_MIDDLE', { style: { transform: transform } }),
            this.Head(),
            this.Middle(),
            veil
          ),
          !this.noButtons &&
            React__default.createElement(
              'nav',
              a$1('BUTTONS'),
              this.Buttons(),
              veil
            ),
          React__default.createElement(
            'aside',
            a$1('SIDES', {
              style: {
                transform: transform,
                transition: transition,
                bottom: bottom
              }
            }),
            this.sides
          )
        )
      }

      /*-----------------------  -----------------------*/
    },
    {
      key: 'Sides',
      value: function Sides() {
        return this.props.sides.map(function(_ref, index) {
          var href = _ref.href,
            buttonImage = _ref.buttonImage,
            coverColor = _ref.coverColor,
            descriptionText = _ref.descriptionText,
            descriptionStyle = _ref.descriptionStyle
          return React__default.createElement(
            SideItem,
            _extends(
              { key: index },
              {
                size: SIDE_WIDTH / 1.7,
                buttonImage: buttonImage,
                coverColor: coverColor,
                descriptionText: descriptionText,
                descriptionStyle: descriptionStyle
              }
            ),
            React__default.createElement(TouchEnd, {
              listener: createClickA(href)
            })
          )
        })
      }
    },
    {
      key: 'DetailQuit',
      value: function DetailQuit() {
        var _this3 = this

        return function(_ref2) {
          var fn = _ref2.fn
          return React__default.createElement(
            QuitDetail$1,
            null,
            React__default.createElement(ArrowLeft, {
              stroke: _this3.props.colors.detailQuit
            }),
            React__default.createElement(TouchEndCapture, {
              positionValue: -20,
              listener: function listener(e) {
                e.stopPropagation()
                e.preventDefault()
                fn()
              }
            })
          )
        }
      }
    },
    {
      key: 'PopdownQuit',
      value: function PopdownQuit() {
        return function(_ref3) {
          var fn = _ref3.fn
          return React__default.createElement(
            QuitPopdown$1,
            null,
            React__default.createElement(ArrowWideUp, null),
            React__default.createElement(TouchEnd, {
              onTouchStartCapture: function onTouchStartCapture(e) {
                return e.stopPropagation()
              },
              positionValue: -10,
              listener: function listener(e) {
                e.stopPropagation()
                fn()
              }
            })
          )
        }
      }
    },
    {
      key: 'Preload',
      value: function Preload$$1() {
        var onTransitionEnd = this.listeners['RENDER:PRELOADING_OFF']
        var backgroundColor = this.props.colors.preloader
        var opacity = isNum(this.state.index) ? 0 : 1
        var deduct = 100

        var preloader = jsx$1(this.props.Preloader)

        return React__default.createElement(
          Preload$1,
          {
            onTransitionEnd: onTransitionEnd,
            backgroundColor: backgroundColor,
            opacity: opacity
          },
          React__default.createElement(Center, { deduct: deduct }, preloader)
        )
      }
    },
    {
      key: 'Popdown',
      value: function Popdown$$1() {
        var Quit = this.popdownQuit
        var onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
        var _state$popdown = this.state.popdown,
          src = _state$popdown.src,
          vertically = _state$popdown.vertically

        var top = vertically && '4%'

        return React__default.createElement(
          reactShut.ShutFromTop,
          a$1('POPDOWN_SHUT', { Quit: Quit, onQuitEnd: onQuitEnd }),
          React__default.createElement(Popdown$1, { src: src, top: top })
        )
      }
    },
    {
      key: 'Veil',
      value: function Veil$$1() {
        return React__default.createElement(
          Veil,
          {
            onTransitionEnd: this.listeners['RENDER:DRIFTING_OFF'],
            drifting: this.state.drifting
          },
          React__default.createElement(TouchEnd, {
            listener: this.listeners['RENDER:DRIFTING_LAG']
          })
        )
      }
    },
    {
      key: 'Head',
      value: function Head$$1() {
        var _props$colors = this.props.colors,
          base = _props$colors.base,
          sub = _props$colors.sub

        return React__default.createElement(
          Head,
          {
            height: HEAD_HEIGHT$1,
            backgroundColor: base,
            word: this.props.views[this.state.index].head,
            color: sub
          },
          React__default.createElement(Burger, { stroke: sub }),
          React__default.createElement(TouchEnd, {
            listener: this.listeners['RENDER:DRIFTING_ON']
          })
        )
      }
    },
    {
      key: 'Middle',
      value: function Middle() {
        var height =
          winnerHeight() -
          HEAD_HEIGHT$1 -
          (this.noButtons ? 0 : BUTTON_HEIGHT$1)
        var backgroundStyle = this.props.backgroundStyle
        var backgroundColor = this.props.colors.background

        var exhibit = jsx$1(this.state.exhibit.Component)
        var isDetail = isFnc(this.state.detail.Component)

        return React__default.createElement(
          'div',
          a$1('MIDDLE', { style: { height: height } }),
          React__default.createElement(Background, { style: backgroundStyle }),
          React__default.createElement(Background, {
            style: { backgroundColor: backgroundColor }
          }),
          React__default.createElement(
            'div',
            a$1('MIDDLE_WRAP:BOTH'),
            React__default.createElement(
              'div',
              a$1('MIDDLE_WRAP:EXHIBIT', {
                style: { overflowY: isDetail ? 'hidden' : 'scroll' }
              }),
              exhibit
            ),
            isDetail && this.Detail()
          )
        )
      }
    },
    {
      key: 'Detail',
      value: function Detail() {
        var background = this.props.colors.detail
        var notScroll = Boolean(this.state.popdown.src)
        var Quit = this.detailQuit
        var onQuitEnd = this.listeners['DOM:DETAIL_OFF']

        var _state$detail = this.state.detail,
          Component$$1 = _state$detail.Component,
          props = _state$detail.props,
          mountWithShut = _state$detail.mountWithShut

        var detail = jsx$1(Component$$1, props)

        return React__default.createElement(
          reactShut.ShutFromLeft,
          {
            background: background,
            notScroll: notScroll,
            Quit: Quit,
            onQuitEnd: onQuitEnd,
            mountWithShut: mountWithShut
          },
          detail
        )
      }
    },
    {
      key: 'Buttons',
      value: function Buttons() {
        var _this4 = this

        var mainColor = this.props.colors.base
        var subColor = this.props.colors.sub

        return this.props.views.map(function(view, index, views) {
          return React__default.createElement(
            Button$1,
            _extends(
              { key: index },
              {
                width: winnerWidth() / views.length - 0.5,
                inform: _this4.state.informs[index],
                svg: jsx$1(view.Button, {
                  mainColor: mainColor,
                  subColor: subColor,
                  choised: index === _this4.state.index
                })
              }
            ),
            React__default.createElement(TouchStart, {
              listener: _this4.listeners['DOM:VIEW_SWITCH'],
              'data-index': index
            })
          )
        })
      }
    }
  ])
  return LonogaraMobile
})(React.Component)

var a$1 = Atra({
  HEAD_AND_MIDDLE: {
    style: {
      transition: '0.6s'
    }
  },
  MIDDLE: {
    style: {
      position: 'relative'
    }
  },
  'MIDDLE_WRAP:BOTH': {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id: 'exhibitScrollElement',
    style: {
      position: 'relative',
      height: '100%',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowX: 'hidden'
    }
  },
  POPDOWN_SHUT: {
    mountWithShut: true,
    background: 'rgba(17, 17, 17, 0.98)',
    touchRatio: 0,
    notScroll: true
  },
  BUTTONS: {
    style: {
      height: BUTTON_HEIGHT$1,
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
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowY: 'scroll'
    }
  }
})

//
var guardian$1 = _guardian()

guardian$1.colors = HoColors(function() {
  return {
    base: 'rgb(24, 24, 35)',
    sub: 'rgb(255, 255, 255)',
    background: 'rgba(242, 242, 242, 0.78)',
    preloader: 'rgb(241, 241, 241)',
    detail: 'rgb(243, 243, 243)',
    detailQuit: 'rgb(24, 24, 35)',
    side: 'rgb(77, 172, 125)'
  }
})

var index$1 = Guardian({ App: LonogaraMobile, guardian: guardian$1 })

exports.Desktop = index
exports.Mobile = index$1
