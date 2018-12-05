'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'))
var reactShut = require('react-shut')
var Center = _interopDefault(require('react-centpn'))
var React = require('react')
var React__default = _interopDefault(React)
var Atra = _interopDefault(require('atra'))
var Orph = _interopDefault(require('orph'))

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function(obj) {
      return typeof obj
    }
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }

  return _typeof(obj)
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args)

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }

      _next(undefined)
    })
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _extends() {
  _extends =
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

  return _extends.apply(this, arguments)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }

  return _setPrototypeOf(o, p)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return self
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call
  }

  return _assertThisInitialized(self)
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  )
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  )
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i]

    return arr2
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter)
}

function _iterableToArrayLimit(arr, i) {
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
      if (!_n && _i['return'] != null) _i['return']()
    } finally {
      if (_d) throw _e
    }
  }

  return _arr
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance')
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

var EXHIBIT_SCROLL_ID = 'exhibitScrollElement'
var DETAIL_SCROLL_ID = 'detailScrollParent'
var MOBILE_SIDE_SCROLL_ID = 'sideScrollElement'
var getElementById = function getElementById(id) {
  return document.getElementById(id)
}
var extractDetailScrollElement = function extractDetailScrollElement(el) {
  return el.children[0].children[0].children[0]
}
var isArr = Array.isArray
var isObj = function isObj(target) {
  return _typeof(target) === 'object' && !isArr(target)
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
var raf = function raf(callback) {
  return window.requestAnimationFrame(callback)
}
var windowOn = function windowOn(type, fn, opts) {
  return window.addEventListener(type, fn, opts)
}
var createBlobURL = function createBlobURL(blob) {
  return window.URL.createObjectURL(blob)
}
var lag = function lag() {
  var time =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
  return new Promise(function(resolve) {
    return setTimeout(resolve, time)
  })
}
var jsx = function jsx(Component, props) {
  return isFnc(Component) && React__default.createElement(Component, props)
}
var createClickA = function createClickA(href) {
  return function() {
    return (
      href &&
      setTimeout(function() {
        var a = document.createElement('a')
        a.href = href
        a.target = href.includes('tel') ? '' : '_blank'
        document.body.appendChild(a)
        a.click()
        a.remove()
      }, 50)
    )
  }
}

//
var Preload = (function(a) {
  return function(_ref) {
    var onTransitionEnd = _ref.onTransitionEnd,
      backgroundColor = _ref.backgroundColor,
      opacity = _ref.opacity,
      children = _ref.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        onTransitionEnd: onTransitionEnd,
        style: {
          backgroundColor: backgroundColor,
          opacity: opacity
        }
      }),
      React__default.createElement('div', a('RELATIVE'), children)
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
        transitionDuration: '0.45s',
        transitionProperty: 'opacity'
      }
    },
    RELATIVE: {
      style: {
        position: 'relative',
        height: '100%',
        textAlign: 'center'
      }
    }
  })
)

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
        style: {
          width: width,
          borderBottomColor: borderBottomColor
        }
      }),
      React__default.createElement(
        'span',
        a('WRAP'),
        svg,
        inform > 0 && React__default.createElement('div', a('INFORM'), inform),
        children
      )
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
      className: 'lonogara_button',
      // for svg { height: 100%; }
      style: {
        display: 'inline-block',
        position: 'relative',
        top: '34%',
        height: '44%',
        cursor: 'pointer'
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
          style: {
            width: size,
            height: size,
            backgroundImage: buttonImage
          }
        }),
        coverColor &&
          React__default.createElement(
            'span',
            a('COVER', {
              style: {
                backgroundColor: coverColor
              }
            })
          ),
        descriptionText &&
          React__default.createElement(
            'span',
            {
              style: descriptionStyle
            },
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
        verticalAlign: 'middle',
        cursor: 'pointer'
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
    var backgroundColor = _ref3.backgroundColor,
      children = _ref3.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        style: {
          backgroundColor: backgroundColor
        }
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
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }
    }
  })
)
var DimSwitch = (function(createA) {
  var transform = -12
  var a = createA({
    transform: transform
  })
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
        setTimeout(function() {
          style.transitionDuration = '0.4s'
          style.transform = 'translateY('.concat(transform, 'px)')
        }, 100)
      },
      style: {
        display: 'inline-block',
        height: '100%',
        position: 'relative',
        transform: 'translateY('.concat(transform, 'px)'),
        cursor: 'pointer'
      }
    }
  })
})
var QuitDetail = (function(a) {
  return function(_ref6) {
    var children = _ref6.children
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
        right: 20,
        cursor: 'pointer'
      }
    }
  })
)
var QuitPopdown = (function(a) {
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
        width: 200,
        display: 'inline-block',
        cursor: 'pointer'
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
        a('PATH', {
          style: {
            stroke: stroke
          }
        })
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
      React__default.createElement(
        'img',
        a('IMG', {
          src: src
        })
      )
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
        a('PATH', {
          style: {
            stroke: stroke
          }
        })
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
        a('PATH_0', {
          style: {
            stroke: stroke
          }
        })
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
        fill: '#c30000' // stroke: '#780d00',
        // strokeWidth: 12
      }
    }
  })
)

var HEAD_HEIGHT = 90
var BUTTON_HEIGHT = 110
var BOTTOM_MARGIN = 40

var MouseDown = function MouseDown(props) {
  return React__default.createElement(
    Listen,
    Object.assign(
      {
        type: 'onMouseDown'
      },
      props
    )
  )
}

var MouseUp = function MouseUp(props) {
  return React__default.createElement(
    Listen,
    Object.assign(
      {
        type: 'onMouseUp'
      },
      props
    )
  )
}

var _ref3 = React__default.createElement(ArrowWideUp, null)

var LonogaraDesktop =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(LonogaraDesktop, _Component)

    function LonogaraDesktop(props) {
      var _this

      _classCallCheck(this, LonogaraDesktop)

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(LonogaraDesktop).call(this, props)
      )
      props.orph.attach(_assertThisInitialized(_assertThisInitialized(_this)))
      _this.listeners = props.orph.order([
        'WINDOW:RESIZE_FORCE_UPDATE',
        'RENDER:PRELOADING_OFF',
        'DOM:DETAIL_OFF',
        'DOM:VIEW_SWITCH',
        'DOM:DIM_SWITCH',
        'RENDER:POPDOWN_OFF'
      ])
      _this.DetailQuit = _this.HoDetailQuit()
      _this.PopdownQuit = _this.HoPopdownQuit()
      return _this
    }

    _createClass(LonogaraDesktop, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          windowOn('resize', this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
          this.props.orph.dispatch('REACT:DID_MOUNT')
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.views && !('noButtons' in this)) {
            this.noButtons = nextProps.views.length < 2
          }
        }
      },
      {
        key: 'isReady',
        value: function isReady() {
          return Boolean(this.props.views)
        }
      },
      {
        key: 'render',
        value: function render() {
          var isReady = this.isReady()
          return React__default.createElement(
            React.Fragment,
            null,
            this.Background(),
            isReady && this.Tree(),
            this.state.popdown.src && this.Popdown(),
            this.state.preloading && this.Preload(isReady ? 0 : 1)
          )
        }
      },
      {
        key: 'Tree',
        value: function Tree() {
          var noButtons = this.noButtons
          var base = this.props.colors.base
          var dimming = this.state.dimming
          var height =
            winnerHeight() -
            HEAD_HEIGHT -
            (noButtons ? 80 : BUTTON_HEIGHT) -
            BOTTOM_MARGIN
          var view = this.props.views[this.state.index] || {}
          return React__default.createElement(
            'div',
            a('ROOT'),
            React__default.createElement(
              'header',
              a('HEAD', {
                style: {
                  visibility: dimming && 'hidden'
                }
              }),
              React__default.createElement(
                'span',
                a('HEAD:WORD', {
                  style: {
                    color: base
                  }
                }),
                view.head
              )
            ),
            React__default.createElement(
              'div',
              a('MAIN', {
                style: {
                  height: height,
                  borderColor: base
                }
              }),
              this.Middle(view),
              this.DimSwitch(),
              dimming && this.DimBoard()
            ),
            !noButtons &&
              React__default.createElement(
                'nav',
                a('BUTTONS', {
                  style: {
                    visibility: dimming && 'hidden'
                  }
                }),
                this.Buttons()
              )
          )
        }
      },
      {
        key: 'Background',
        value: function Background$$1() {
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
              style: this.props.backgroundStyle || {}
            }),
            React__default.createElement(Background, {
              style: {
                backgroundColor: this.props.colors.background
              }
            })
          )
        }
      },
      {
        key: 'HoDetailQuit',
        value: function HoDetailQuit() {
          var _this2 = this

          return function(_ref) {
            var fn = _ref.fn
            return React__default.createElement(
              QuitDetail,
              null,
              React__default.createElement(ArrowLeft, {
                stroke: _this2.props.colors.detailQuit
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
        key: 'HoPopdownQuit',
        value: function HoPopdownQuit() {
          return function(_ref2) {
            var fn = _ref2.fn
            return React__default.createElement(
              QuitPopdown,
              null,
              _ref3,
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
        value: function Preload$$1(opacity) {
          return React__default.createElement(
            Preload,
            {
              opacity: opacity,
              onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
              backgroundColor: this.props.colors.preloader
            },
            React__default.createElement(
              Center,
              {
                top: -60
              },
              jsx(this.props.Preloader)
            )
          )
        }
      },
      {
        key: 'Popdown',
        value: function Popdown$$1() {
          var Quit = this.PopdownQuit
          var onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
          var src = this.state.popdown.src
          return React__default.createElement(
            reactShut.ShutFromTop,
            a('POPDOWN_SHUT', {
              Quit: Quit,
              onQuitEnd: onQuitEnd
            }),
            React__default.createElement(Popdown, {
              src: src
            })
          )
        }
      },
      {
        key: 'Middle',
        value: function Middle(view) {
          return React__default.createElement(
            'div',
            a('MIDDLE_WRAP:BOTH'),
            React__default.createElement(
              'div',
              a('MIDDLE_WRAP:EXHIBIT'),
              jsx(view.Exhibit)
            ),
            React__default.createElement(
              'div',
              a('MIDDLE_WRAP:DETAIL'),
              this.state.detail.props && this.Detail(view)
            )
          )
        }
      },
      {
        key: 'Detail',
        value: function Detail(view) {
          return React__default.createElement(
            reactShut.ShutFromLeft,
            {
              mountWithShut: this.state.detail.mountWithShut,
              touchRatio: 0,
              duration: 0.55,
              background: this.props.colors.detail,
              Quit: this.DetailQuit,
              onQuitEnd: this.listeners['DOM:DETAIL_OFF']
            },
            jsx(view.Detail, this.state.detail.props)
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
            {
              backgroundColor: this.props.colors.links
            },
            React__default.createElement(
              'div',
              a('DIM_WRAP'),
              React__default.createElement(
                Center,
                {
                  top: -24
                },
                React__default.createElement(
                  'div',
                  {
                    style:
                      this.props.links.length < 5
                        ? {
                            textAlign: 'center'
                          }
                        : {
                            display: 'flex'
                          }
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
          return this.props.links.map(function(_ref4, index) {
            var href = _ref4.href,
              buttonImage = _ref4.buttonImage,
              coverColor = _ref4.coverColor,
              descriptionText = _ref4.descriptionText,
              descriptionStyle = _ref4.descriptionStyle
            return React__default.createElement(
              DimItem,
              _extends(
                {
                  key: index
                },
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
          var _this3 = this

          var _this$props$colors = this.props.colors,
            base = _this$props$colors.base,
            sub = _this$props$colors.sub
          return this.props.views.map(function(view, index) {
            return React__default.createElement(
              Button,
              _extends(
                {
                  key: index
                },
                {
                  width: 100,
                  borderBottomColor: base,
                  inform: _this3.state.informs[index],
                  svg: jsx(view.Button, {
                    choised: index === _this3.state.index,
                    mainColor: base,
                    subColor: sub
                  })
                }
              ),
              React__default.createElement(MouseDown, {
                listener: _this3.listeners['DOM:VIEW_SWITCH'],
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
  'MIDDLE_WRAP:BOTH': {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%',
      overflow: 'hidden'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id: EXHIBIT_SCROLL_ID,
    style: {
      overflowY: 'scroll',
      height: '100%'
    }
  },
  'MIDDLE_WRAP:DETAIL': {
    id: DETAIL_SCROLL_ID
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
  },
  DIM_WRAP: {
    style: {
      overflowX: 'scroll',
      height: '100%',
      paddingBottom: 17
    }
  }
})

//
var STORE = function() {
  var extension =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var views = new Map()
  return [
    Object.assign(extension, {
      INIT: function INIT(_ref) {
        var index = _ref.index,
          initials = _ref.initials
        return views.set(index, new View(initials))
      },
      SET_DATA: function SET_DATA(_ref2) {
        var index = _ref2.index,
          key = _ref2.key,
          value = _ref2.value
        return views.get(index).setData(key, value)
      },
      GET_DATA: function GET_DATA(_ref3) {
        var index = _ref3.index,
          key = _ref3.key
        return views.get(index).getData(key)
      }
    }),
    {
      prefix: 'STORE:',
      use: {}
    }
  ]
}

var View =
  /*#__PURE__*/
  (function() {
    function View(initials) {
      var _this = this

      _classCallCheck(this, View)

      this.data = new Map()
      initials.forEach(function(_ref4) {
        var key = _ref4.key,
          value = _ref4.value
        return _this.data.set(key, value)
      })
    }

    _createClass(View, [
      {
        key: 'setData',
        value: function setData(key, value) {
          this.throwInvalidKey(key)
          this.data.set(key, value)
        }
      },
      {
        key: 'getData',
        value: function getData(key) {
          this.throwInvalidKey(key)
          return this.data.get(key)
        }
      },
      {
        key: 'throwInvalidKey',
        value: function throwInvalidKey(key) {
          if (!this.data.has(key)) {
            throw new Error('STORE: '.concat(key, ' is not set.'))
          }
        }
      }
    ])

    return View
  })()

//
var RENDER = function() {
  var extension =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    Object.assign(extension, {
      PRELOADING_OFF: function PRELOADING_OFF(n, _ref) {
        var render = _ref.render
        return render({
          preloading: false
        })
      },
      POPDOWN_ON: function POPDOWN_ON(_ref2, _ref3) {
        var src = _ref2.src,
          vertically = _ref2.vertically
        var render = _ref3.render
        return render({
          popdown: {
            src: src,
            vertically: vertically
          }
        })
      },
      POPDOWN_OFF: function POPDOWN_OFF(n, _ref4) {
        var render = _ref4.render
        return render({
          popdown: {}
        })
      },
      DETAIL_ON: function DETAIL_ON(props, _ref5) {
        var render = _ref5.render
        return render({
          detail: {
            mountWithShut: true,
            props: Object.assign({}, props, {
              isContinued: false
            })
          }
        })
      },
      DETAIL_OFF: function DETAIL_OFF(n, _ref6) {
        var render = _ref6.render
        return render({
          detail: {}
        })
      },
      BY_REACT_DIDMOUNT: function BY_REACT_DIDMOUNT(index, _ref7) {
        var render = _ref7.render
        return render({
          index: index
        })
      },
      BY_DOM_VIEW_SWITCH: function BY_DOM_VIEW_SWITCH(_ref8, _ref9) {
        var index = _ref8.index,
          detailProps = _ref8.detailProps,
          renderCallback = _ref8.renderCallback
        var render = _ref9.render
        return render(
          {
            index: index,
            detail: !detailProps
              ? {}
              : {
                  mountWithShut: false,
                  props: Object.assign({}, detailProps, {
                    isContinued: true
                  })
                }
          },
          renderCallback
        )
      },
      INFORM_CHANGE: function INFORM_CHANGE(_ref10, _ref11) {
        var index = _ref10.index,
          inform = _ref10.inform
        var state = _ref11.state,
          render = _ref11.render
        return state('informs').then(function(informs) {
          informs[index] = inform
          render({
            informs: informs
          })
        })
      }
    }),
    {
      prefix: 'RENDER:',
      use: {
        state: true,
        render: true
      }
    }
  ]
}

var assign = Object.assign

var detailScrollElement = function detailScrollElement() {
  return extractDetailScrollElement(getElementById(DETAIL_SCROLL_ID))
}

var REACT = function REACT() {
  var extension =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    assign(extension, {
      DID_MOUNT: function DID_MOUNT(n, _ref) {
        var props = _ref.props,
          dispatch = _ref.dispatch
        return props('firstIndex').then(function(firstIndex) {
          return dispatch('RENDER:BY_REACT_DIDMOUNT', firstIndex)
        })
      }
    }),
    {
      prefix: 'REACT:',
      use: {
        props: true,
        dispatch: true
      }
    }
  ]
}

var DOM = function DOM() {
  var extension =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    assign(extension, {
      VIEW_SWITCH: function VIEW_SWITCH(e, _ref2) {
        var state = _ref2.state,
          dispatch = _ref2.dispatch
        var index = +e.target.dataset.index
        return state('index').then(function(nowIndex) {
          return (
            nowIndex !== index &&
            state('detail', true).then(function(detail) {
              return Promise.all([
                dispatch('STORE:SET_DATA', {
                  index: nowIndex,
                  key: 'exhibitScrollTop',
                  value: getElementById(EXHIBIT_SCROLL_ID).scrollTop
                }),
                detail.props &&
                  dispatch('STORE:SET_DATA', {
                    index: nowIndex,
                    key: 'detailScrollTop',
                    value: detailScrollElement().scrollTop
                  })
              ])
                .then(function() {
                  return dispatch('STORE:GET_DATA', {
                    index: index,
                    key: 'detailProps'
                  })
                })
                .then(function(detailProps) {
                  return dispatch('RENDER:BY_DOM_VIEW_SWITCH', {
                    index: index,
                    detailProps: detailProps,
                    renderCallback: (function() {
                      var _renderCallback = _asyncToGenerator(
                        /*#__PURE__*/
                        _regeneratorRuntime.mark(function _callee() {
                          return _regeneratorRuntime.wrap(
                            function _callee$(_context) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    _context.next = 2
                                    return dispatch('STORE:GET_DATA', {
                                      index: index,
                                      key: 'exhibitScrollTop'
                                    })

                                  case 2:
                                    getElementById(
                                      EXHIBIT_SCROLL_ID
                                    ).scrollTop =
                                      _context.sent

                                    if (!detailProps) {
                                      _context.next = 7
                                      break
                                    }

                                    _context.next = 6
                                    return dispatch('STORE:GET_DATA', {
                                      index: index,
                                      key: 'detailScrollTop'
                                    })

                                  case 6:
                                    detailScrollElement().scrollTop =
                                      _context.sent

                                  case 7:
                                  case 'end':
                                    return _context.stop()
                                }
                              }
                            },
                            _callee,
                            this
                          )
                        })
                      )

                      function renderCallback() {
                        return _renderCallback.apply(this, arguments)
                      }

                      return renderCallback
                    })()
                  })
                })
            })
          )
        })
      },
      DETAIL_OFF: function DETAIL_OFF(n, _ref3) {
        var state = _ref3.state,
          dispatch = _ref3.dispatch
        return state('index')
          .then(function(index) {
            return Promise.all([
              dispatch('STORE:SET_DATA', {
                index: index,
                key: 'detailScrollTop',
                value: 0
              }),
              dispatch('STORE:SET_DATA', {
                index: index,
                key: 'detailProps',
                value: undefined
              })
            ])
          })
          .then(function() {
            return dispatch('RENDER:DETAIL_OFF')
          })
      }
    }),
    {
      prefix: 'DOM:',
      use: {
        state: true,
        dispatch: true
      }
    }
  ]
}

var PASSED = function PASSED() {
  var extension =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    assign(extension, {
      DETAIL_ON: function DETAIL_ON(data, _ref4) {
        var state = _ref4.state,
          dispatch = _ref4.dispatch
        var props = {
          data: data
        }
        state('index')
          .then(function(index) {
            return dispatch('STORE:SET_DATA', {
              index: index,
              key: 'detailProps',
              value: props
            })
          })
          .then(function() {
            return dispatch('RENDER:DETAIL_ON', props)
          })
      },
      POPDOWN_ON: function POPDOWN_ON(arg, _ref5) {
        var dispatch = _ref5.dispatch

        if (isObj(arg) && arg.src) {
          dispatch('RENDER:POPDOWN_ON', arg)
        }
      },
      INFORM_ON: function INFORM_ON(arg, _ref6) {
        var dispatch = _ref6.dispatch
        var inform = +arg.inform

        if (inform || inform === 0) {
          var index = arg.index
          dispatch('RENDER:INFORM_CHANGE', {
            index: index,
            inform: inform
          })
        }
      }
    }),
    {
      prefix: 'PASSED:',
      use: {
        state: true,
        dispatch: true
      }
    }
  ]
}

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
    } else if (isArr(background)) {
      var _background = _slicedToArray(background, 2),
        _url = _background[0],
        style = _background[1]

      if (!isStr(_url)) {
        typerror('props.background url must be "string"')
      }

      if (!isObj(style)) {
        typerror('props.background style must be "object"')
      }

      result.backgroundURL = _url
      Object.entries(style).forEach(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1]

        result.backgroundStyle[key] = value
      })
    } else {
      typerror('props.background is invalid')
    }
  }

  return result
}

var links = function(_ref) {
  var links = _ref.links
  var result = []

  if (links) {
    if (!isArr(links)) {
      typerror('props.links must be "array"')
    }

    links.forEach(function(_ref2) {
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
          typerror('props.link.href must be "string"')
        }

        side.href = href
      }

      if (buttonImage) {
        if (!isStr(buttonImage)) {
          typerror('props.link.buttonImage must be "string"')
        }

        side.buttonImage = 'url('.concat(buttonImage, ')')
      }

      if (coverColor) {
        if (!isStr(coverColor)) {
          typerror('props.link.coverColor must be "string"')
        }

        side.coverColor = coverColor
      }

      if (description) {
        if (isStr(description)) {
          side.descriptionText = description
        } else if (isArr(description)) {
          var _description = _slicedToArray(description, 2),
            text = _description[0],
            style = _description[1]

          if (!isStr(text)) {
            typerror('props.link.description must be "string"')
          }

          if (!isObj(style)) {
            typerror('props.link.description style must be "object"')
          }

          side.descriptionText = text
          side.descriptionStyle = style
        } else {
          typerror('props.link.description is invalid')
        }
      }

      result.push(side)
    })
  }

  return result
}

var views = function(_ref) {
  var views = _ref.views
  var result = {
    views: [],
    creates: []
  }

  if (views) {
    if (!isArr(views)) {
      typerror('props.views must be "array"')
    }

    if (views.length > 7) {
      error('props.views max length => 7')
    }

    views.forEach(function(_ref2) {
      var head = _ref2.head,
        Button = _ref2.Button,
        create = _ref2.create

      if (head && !isStr(head)) {
        typerror('props.view.head must be "string"')
      }

      if (!isFnc(Button)) {
        typerror('props.view.Button required as component function')
      }

      if (!create) {
        error('view.create is required')
      }

      if (!isFnc(create)) {
        typerror('view.create must be "function" but '.concat(_typeof(create)))
      }

      result.views.push({
        head: head,
        Button: Button
      })
      result.creates.push(create)
    })
  }

  return result
}

//
var HoColors = function HoColors(Colors) {
  return function(_ref) {
    var colors = _ref.colors
    var result = Colors()

    if (colors) {
      if (!isObj(colors)) {
        typerror('props.colors must be "pure object"')
      }

      if (
        !Object.values(colors).every(function(value) {
          return isStr(value) || !value
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

var firstIndex = function firstIndex(_ref2) {
  var firstIndex = _ref2.firstIndex,
    views$$1 = _ref2.views

  if (firstIndex > views$$1.length - 1) {
    throw new Error('props.firstIndex > views.length - 1')
  }

  return isNum(firstIndex) ? firstIndex : 0
}

var preloader = function preloader(_ref3) {
  var Preloader = _ref3.Preloader
  return isFnc(Preloader) && Preloader
}

var create = function create() {
  return {
    firstIndex: firstIndex,
    background: background,
    preloader: preloader,
    links: links,
    views: views
  }
}

var initials = [
  {
    key: 'exhibitScrollTop',
    value: 0
  },
  {
    key: 'detailScrollTop',
    value: 0
  },
  {
    key: 'detailProps',
    value: undefined
  }
]
var Guardian = function(_ref) {
  var App = _ref.App,
    orph = _ref.orph,
    defaults = _ref.defaults
  return (
    /*#__PURE__*/
    (function(_Component) {
      _inherits(Guardian, _Component)

      function Guardian(props) {
        var _this

        _classCallCheck(this, Guardian)

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(Guardian).call(this, props)
        )
        _this.state = {
          ready: false
        }
        _this.asynces = []
        _this.results = {}
        _this.results.firstIndex = defaults.firstIndex(props)
        _this.results.colors = defaults.colors(props)
        _this.results.Preloader = defaults.preloader(props)
        _this.results.links = defaults.links(props)

        var _defaults$background = defaults.background(props),
          backgroundURL = _defaults$background.backgroundURL,
          backgroundStyle = _defaults$background.backgroundStyle

        _this.results.backgroundStyle = backgroundStyle

        if (backgroundURL) {
          if (backgroundURL.includes('http')) {
            _this.results.backgroundStyle.backgroundImage = 'url('.concat(
              backgroundURL,
              ')'
            )
          } else {
            _this.asynces.push(
              fetch(backgroundURL)
                .then(function(res) {
                  return res.ok && res.blob()
                })
                .then(function(blob) {
                  return blob && createBlobURL(blob)
                })
                .then(function(backgroundURL) {
                  if (backgroundURL) {
                    _this.results.backgroundStyle.backgroundImage = 'url('.concat(
                      backgroundURL,
                      ')'
                    )
                  }
                })
            )
          }
        }

        var _defaults$views = defaults.views(props),
          views = _defaults$views.views,
          creates = _defaults$views.creates

        _this.results.views = views
        creates.forEach(function(create, index) {
          return _this.asynces.push(
            orph
              .dispatch('STORE:INIT', {
                index: index,
                initials: initials
              })
              .then(function() {
                return create({
                  renderDetail: function renderDetail(data) {
                    return lag().then(function() {
                      return orph.dispatch('PASSED:DETAIL_ON', data)
                    })
                  },
                  setPopdown: function setPopdown(src) {
                    return lag().then(function() {
                      return orph.dispatch('PASSED:POPDOWN_ON', src)
                    })
                  },
                  setInform: function setInform(inform) {
                    return lag().then(function() {
                      return orph.dispatch('PASSED:INFORM_ON', {
                        index: index,
                        inform: inform
                      })
                    })
                  }
                })
              })
              .then(function() {
                var components =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {}
                return Object.keys(components).forEach(function(key) {
                  _this.results.views[index][key] = components[key]
                })
              })
          )
        })
        return _this
      }

      _createClass(Guardian, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this2 = this

            Promise.all(this.asynces).then(function() {
              return raf(function() {
                return _this2.setState({
                  ready: true
                })
              })
            })
          }
        },
        {
          key: 'render',
          value: function render() {
            return React__default.createElement(
              React.Fragment,
              null,
              React__default.createElement(
                'style',
                {
                  type: 'text/css'
                },
                '\n          body {\n            margin: 0px;\n            overflow: hidden;\n            font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;\n          }\n          .lonogara_button svg {\n            height: 100%;\n          }\n        '
              ),
              React__default.createElement(
                App,
                _extends(
                  {
                    orph: orph
                  },
                  {
                    firstIndex: this.results.firstIndex,
                    colors: this.results.colors,
                    Preloader: this.results.Preloader,
                    links: this.results.links,
                    backgroundStyle:
                      this.state.ready && this.results.backgroundStyle,
                    views: this.state.ready && this.results.views
                  }
                )
              )
            )
          }
        }
      ])

      return Guardian
    })(React.Component)
  )
}

var orph = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  dimming: false,
  informs: [0, 0, 0, 0]
})
orph.register.apply(orph, _toConsumableArray(STORE()))
orph.register.apply(
  orph,
  _toConsumableArray(
    RENDER({
      DIMMING_ON: function DIMMING_ON(n, _ref) {
        var render = _ref.render
        return render({
          dimming: true
        })
      },
      DIMMING_OFF: function DIMMING_OFF(n, _ref2) {
        var render = _ref2.render
        return render({
          dimming: false
        })
      }
    })
  )
)
orph.register.apply(orph, _toConsumableArray(REACT()))
orph.register.apply(
  orph,
  _toConsumableArray(
    DOM({
      DIM_SWITCH: function DIM_SWITCH(e, _ref3) {
        var state = _ref3.state,
          dispatch = _ref3.dispatch
        return state('dimming').then(function(dimming) {
          return dispatch(!dimming ? 'RENDER:DIMMING_ON' : 'RENDER:DIMMING_OFF')
        })
      }
    })
  )
)
orph.register.apply(orph, _toConsumableArray(PASSED()))
orph.register(
  {
    RESIZE_FORCE_UPDATE: function RESIZE_FORCE_UPDATE(e, _ref4) {
      var update = _ref4.update
      return update()
    }
  },
  {
    prefix: 'WINDOW:',
    use: {
      update: true
    }
  }
)
var defaults = create()
defaults.colors = HoColors(function() {
  return {
    base: '#ffffff',
    sub: 'rgb(145, 145, 145)',
    background: 'rgba(0, 0, 0, 0.6)',
    preloader: 'rgb(241, 241, 241)',
    detail: 'rgb(243, 243, 243)',
    detailQuit: 'rgb(66, 62, 89)',
    links: 'rgba(28, 28, 28, 0.9)'
  }
})
var index = Guardian({
  App: LonogaraDesktop,
  orph: orph,
  defaults: defaults
})

//
var Button$1 = (function(a) {
  return function(_ref) {
    var width = _ref.width,
      inform = _ref.inform,
      svg = _ref.svg,
      children = _ref.children
    return React__default.createElement(
      'div',
      a('ROOT', {
        style: {
          width: width
        }
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
        height: '100%',
        position: 'relative'
      }
    },
    WRAP: {
      className: 'lonogara_button',
      // for svg { height: 100%; }
      style: {
        display: 'inline-block',
        position: 'relative',
        top: '25%',
        height: '56%' // top: '20%',
        // height: '62%'
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
        style: {
          height: height,
          backgroundColor: backgroundColor
        }
      }),
      React__default.createElement(
        Center,
        {
          top: 12
        },
        React__default.createElement(
          'span',
          a('WORD', {
            style: {
              color: color
            }
          }),
          word
        )
      ),
      React__default.createElement(
        'span',
        a('BUTTON', {
          style: {
            padding: ''.concat((height - 100) / 2, 'px 25px')
          }
        }),
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
          style: {
            width: size,
            height: size,
            backgroundImage: buttonImage
          }
        }),
        coverColor &&
          React__default.createElement(
            'span',
            a('COVER', {
              style: {
                backgroundColor: coverColor
              }
            })
          ),
        descriptionText &&
          React__default.createElement(
            'span',
            {
              style: descriptionStyle
            },
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
var Veil = (function(a) {
  var BLACK = 'rgba(0, 0, 0, 0.8)'
  var TRANS = 'rgba(0, 0, 0, 0)'
  return function(_ref4) {
    var onTransitionEnd = _ref4.onTransitionEnd,
      drifting = _ref4.drifting,
      children = _ref4.children
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
  return function(_ref5) {
    var children = _ref5.children
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
  return function(_ref6) {
    var children = _ref6.children
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
      a('ROOT', {
        style: {
          top: top
        }
      }),
      React__default.createElement(
        'img',
        a('IMG', {
          src: src
        })
      )
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
        a('G', {
          stroke: stroke
        }),
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

var HEAD_HEIGHT$1 = 190
var BUTTON_HEIGHT$1 = 160
var SIDE_WIDTH = 370

var TouchStartCapture = function TouchStartCapture(props) {
  return React__default.createElement(
    Listen,
    Object.assign(
      {
        type: 'onTouchStartCapture'
      },
      props
    )
  )
}

var TouchEnd = function TouchEnd(props) {
  return React__default.createElement(
    Listen,
    Object.assign(
      {
        type: 'onTouchEnd'
      },
      props
    )
  )
}

var TouchEndCapture = function TouchEndCapture(props) {
  return React__default.createElement(
    Listen,
    Object.assign(
      {
        type: 'onTouchEndCapture'
      },
      props
    )
  )
}

var _ref4 = React__default.createElement(ArrowWideUp, null)

var LonogaraMobile =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(LonogaraMobile, _Component)

    // this.listeners: { [name: string]: () => {} }
    // links: React$Node
    function LonogaraMobile(props) {
      var _this

      _classCallCheck(this, LonogaraMobile)

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(LonogaraMobile).call(this, props)
      )
      props.orph.attach(_assertThisInitialized(_assertThisInitialized(_this)))
      _this.listeners = props.orph.order([
        'RENDER:PRELOADING_OFF',
        'DOM:VIEW_SWITCH',
        'DOM:DETAIL_OFF',
        'RENDER:DRIFTING_ON',
        'RENDER:DRIFTING_LAG',
        'RENDER:DRIFTING_OFF',
        'RENDER:POPDOWN_OFF'
      ])
      _this.links = _this.Links()
      _this.DetailQuit = _this.HoDetailQuit()
      _this.PopdownQuit = _this.HoPopdownQuit()
      return _this
    }

    _createClass(LonogaraMobile, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.orph.dispatch('REACT:DID_MOUNT')
        }
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.views) {
            // if (!('noHeader' in this)) {
            //   this.noHeader = nextProps.views.every(({ head }) => !head)
            // }
            if (!('noButtons' in this)) {
              this.noButtons = nextProps.views.length < 2
            }
          }
        }
      },
      {
        key: 'isReady',
        value: function isReady() {
          return Boolean(this.props.views)
        }
      },
      {
        key: 'render',
        value: function render() {
          var isReady = this.isReady()
          return React__default.createElement(
            React.Fragment,
            null,
            isReady && this.Tree(),
            this.state.popdown.src && this.Popdown(),
            this.state.preloading && this.Preload(isReady ? 0 : 1)
          )
        }
      },
      {
        key: 'Tree',
        value: function Tree() {
          var drifting = this.state.drifting
          var noButtons = this.noButtons
          var transform =
            !drifting || drifting === 'lag'
              ? 'translateX(0px)'
              : 'translateX('.concat(-SIDE_WIDTH, 'px)')
          var transition = !drifting || drifting === 'lag' ? '0.6s' : '0.72s'
          var height = winnerHeight() - (noButtons ? 0 : BUTTON_HEIGHT$1)
          var left = winnerWidth()
          var veil = this.Veil()
          var view = this.props.views[this.state.index] || {}
          return React__default.createElement(
            'div',
            {
              style: {
                backgroundColor: this.props.colors.links
              }
            },
            React__default.createElement(
              'aside',
              a$1('SIDES', {
                style: {
                  transform: transform,
                  transition: transition,
                  height: height,
                  left: left
                }
              }),
              this.links
            ),
            React__default.createElement(
              'div',
              a$1('HEAD_AND_MIDDLE', {
                style: {
                  transform: transform
                }
              }),
              this.Head(view),
              this.Middle(view),
              veil
            ),
            !noButtons &&
              React__default.createElement(
                'nav',
                a$1('BUTTONS'),
                this.Buttons(),
                veil
              )
          )
        }
      },
      {
        key: 'Links',
        value: function Links() {
          return this.props.links.map(function(_ref, index) {
            var href = _ref.href,
              buttonImage = _ref.buttonImage,
              coverColor = _ref.coverColor,
              descriptionText = _ref.descriptionText,
              descriptionStyle = _ref.descriptionStyle
            return React__default.createElement(
              SideItem,
              _extends(
                {
                  key: index
                },
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
        key: 'HoDetailQuit',
        value: function HoDetailQuit() {
          var _this2 = this

          return function(_ref2) {
            var fn = _ref2.fn
            return React__default.createElement(
              QuitDetail$1,
              null,
              React__default.createElement(ArrowLeft, {
                stroke: _this2.props.colors.detailQuit
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
        key: 'HoPopdownQuit',
        value: function HoPopdownQuit() {
          return function(_ref3) {
            var fn = _ref3.fn
            return React__default.createElement(
              QuitPopdown$1,
              null,
              _ref4,
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
        value: function Preload$$1(opacity) {
          return React__default.createElement(
            Preload,
            {
              opacity: opacity,
              onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
              backgroundColor: this.props.colors.preloader
            },
            React__default.createElement(
              Center,
              {
                top: -100
              },
              jsx(this.props.Preloader)
            )
          )
        }
      },
      {
        key: 'Popdown',
        value: function Popdown$$1() {
          var Quit = this.PopdownQuit
          var onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
          var _this$state$popdown = this.state.popdown,
            src = _this$state$popdown.src,
            vertically = _this$state$popdown.vertically
          var top = vertically && '4%'
          return React__default.createElement(
            reactShut.ShutFromTop,
            a$1('POPDOWN_SHUT', {
              Quit: Quit,
              onQuitEnd: onQuitEnd
            }),
            React__default.createElement(Popdown$1, {
              src: src,
              top: top
            })
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
        value: function Head$$1(view) {
          var _this$props$colors = this.props.colors,
            base = _this$props$colors.base,
            sub = _this$props$colors.sub
          return React__default.createElement(
            Head,
            {
              height: HEAD_HEIGHT$1,
              word: view.head,
              backgroundColor: base,
              color: sub
            },
            React__default.createElement(Burger, {
              stroke: sub
            }),
            React__default.createElement(TouchEnd, {
              listener: this.listeners['RENDER:DRIFTING_ON']
            })
          )
        }
      },
      {
        key: 'Middle',
        value: function Middle(view) {
          var height =
            winnerHeight() -
            HEAD_HEIGHT$1 -
            (this.noButtons ? 0 : BUTTON_HEIGHT$1)
          var backgroundStyle = this.props.backgroundStyle
          var backgroundColor = this.props.colors.background
          var isDetail = isObj(this.state.detail.props)
          return React__default.createElement(
            'div',
            a$1('MIDDLE', {
              style: {
                height: height
              }
            }),
            React__default.createElement(Background, {
              style: backgroundStyle
            }),
            React__default.createElement(Background, {
              style: {
                backgroundColor: backgroundColor
              }
            }),
            React__default.createElement(
              'div',
              a$1('MIDDLE_WRAP:BOTH'),
              React__default.createElement(
                'div',
                a$1('MIDDLE_WRAP:EXHIBIT', {
                  style: {
                    overflowY: isDetail ? 'hidden' : 'scroll'
                  }
                }),
                jsx(view.Exhibit)
              ),
              React__default.createElement(
                'div',
                a$1('MIDDLE_WRAP:DETAIL'),
                isDetail && this.Detail(view)
              )
            )
          )
        }
      },
      {
        key: 'Detail',
        value: function Detail(view) {
          return React__default.createElement(
            reactShut.ShutFromLeft,
            {
              mountWithShut: this.state.detail.mountWithShut,
              duration: 0.55,
              background: this.props.colors.detail,
              notScroll: Boolean(this.state.popdown.src),
              Quit: this.DetailQuit,
              onQuitEnd: this.listeners['DOM:DETAIL_OFF']
            },
            jsx(view.Detail, this.state.detail.props)
          )
        }
      },
      {
        key: 'Buttons',
        value: function Buttons() {
          var _this3 = this

          return this.props.views.map(function(view, index, views) {
            return React__default.createElement(
              Button$1,
              _extends(
                {
                  key: index
                },
                {
                  width: winnerWidth() / views.length - 0.5,
                  inform: _this3.state.informs[index],
                  svg: jsx(view.Button, {
                    choised: index === _this3.state.index,
                    mainColor: _this3.props.colors.base,
                    subColor: _this3.props.colors.sub
                  })
                }
              ),
              React__default.createElement(TouchStartCapture, {
                'data-index': index,
                listener: function listener(e) {
                  e.stopPropagation()

                  _this3.listeners['DOM:VIEW_SWITCH'](e)
                }
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
    id: EXHIBIT_SCROLL_ID,
    style: {
      position: 'relative',
      height: '100%',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowX: 'hidden'
    }
  },
  'MIDDLE_WRAP:DETAIL': {
    id: DETAIL_SCROLL_ID
  },
  POPDOWN_SHUT: {
    mountWithShut: true,
    background: 'rgba(17, 17, 17, 0.98)',
    touchRatio: 0,
    notScroll: true,
    duration: 0.5
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
    id: MOBILE_SIDE_SCROLL_ID,
    style: {
      position: 'fixed',
      top: 0,
      // left: winnerWidth(),
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      overflowY: 'scroll'
    }
  }
})

var orph$1 = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  drifting: false,
  informs: [0, 0, 0, 0]
})
orph$1.register.apply(orph$1, _toConsumableArray(STORE()))
orph$1.register.apply(
  orph$1,
  _toConsumableArray(
    RENDER({
      DRIFTING_ON: function DRIFTING_ON(n, _ref) {
        var render = _ref.render
        return render({
          drifting: true
        })
      },
      DRIFTING_LAG: function DRIFTING_LAG(n, _ref2) {
        var render = _ref2.render
        return render({
          drifting: 'lag'
        })
      },
      DRIFTING_OFF: function DRIFTING_OFF(n, _ref3) {
        var state = _ref3.state,
          render = _ref3.render
        return state('drifting').then(function(drifting) {
          return (
            drifting === 'lag' &&
            render(
              {
                drifting: false
              },
              function() {
                getElementById(MOBILE_SIDE_SCROLL_ID).scrollTop = 0
              }
            )
          )
        })
      }
    })
  )
)
orph$1.register.apply(orph$1, _toConsumableArray(REACT()))
orph$1.register.apply(orph$1, _toConsumableArray(DOM()))
orph$1.register.apply(orph$1, _toConsumableArray(PASSED()))
var defaults$1 = create()
defaults$1.colors = HoColors(function() {
  return {
    base: 'rgb(24, 24, 35)',
    sub: 'rgb(255, 255, 255)',
    background: 'rgba(242, 242, 242, 0.78)',
    preloader: 'rgb(241, 241, 241)',
    detail: 'rgb(243, 243, 243)',
    detailQuit: 'rgb(24, 24, 35)',
    links: 'rgb(77, 172, 125)'
  }
})
var index$1 = Guardian({
  App: LonogaraMobile,
  orph: orph$1,
  defaults: defaults$1
})

exports.Desktop = index
exports.Mobile = index$1
