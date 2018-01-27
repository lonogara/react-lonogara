import React, { Component, Fragment } from 'react'
import Atra from 'atra'
import { ShutFromLeft, ShutFromTop } from 'react-shut'
import Center from 'react-centpn'
import Orph from 'orph'
import _regeneratorRuntime from 'babel-runtime/regenerator'

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

var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i]

    return arr2
  } else {
    return Array.from(arr)
  }
}

//
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
var raf = function raf(callback) {
  return window.requestAnimationFrame(callback)
}

var windowOn = function windowOn(type, fn, opts) {
  return window.addEventListener(type, fn, opts)
}

var createBlobURL = function createBlobURL(blob) {
  return window.URL.createObjectURL(blob)
}

var jsx$1 = function jsx$$1(Component$$1, props) {
  return isFnc(Component$$1) && React.createElement(Component$$1, props)
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
var Preload = (function(a) {
  return function(_ref) {
    var onTransitionEnd = _ref.onTransitionEnd,
      backgroundColor = _ref.backgroundColor,
      opacity = _ref.opacity,
      children = _ref.children
    return React.createElement(
      'div',
      a('ROOT', {
        onTransitionEnd: onTransitionEnd,
        style: { backgroundColor: backgroundColor, opacity: opacity }
      }),
      React.createElement('div', a('RELATIVE'), children)
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
        transitionDuration: '0.7s',
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
    return React.createElement(
      'div',
      a('ROOT', {
        style: { width: width, borderBottomColor: borderBottomColor }
      }),
      React.createElement(
        'span',
        a('WRAP'),
        svg,
        inform > 0 && React.createElement('div', a('INFORM'), inform),
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
      className: 'lonogara_button', // for svg { height: 100%; }
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement(
        'span',
        a('WRAP', {
          style: { width: size, height: size, backgroundImage: buttonImage }
        }),
        coverColor &&
          React.createElement(
            'span',
            a('COVER', { style: { backgroundColor: coverColor } })
          ),
        descriptionText &&
          React.createElement(
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
    var children = _ref3.children
    return React.createElement('div', a('ROOT'), children)
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement('span', a('WRAP'), children)
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
          style.transform = 'translateY(' + transform + 'px)'
        }, 100)
      },
      style: {
        display: 'inline-block',
        height: '100%',
        position: 'relative',
        transform: 'translateY(' + transform + 'px)',
        cursor: 'pointer'
      }
    }
  })
})

var QuitDetail = (function(a) {
  return function(_ref6) {
    var children = _ref6.children
    return React.createElement('span', a('ROOT'), children)
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement('span', a('WRAP'), children)
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

    return React.createElement('span', a('EL', reprops))
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
    return React.createElement('div', a('EL', Object.assign({}, props)))
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
    return React.createElement(
      'svg',
      a('SVG'),
      React.createElement('path', a('PATH', { style: { stroke: stroke } }))
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
    return React.createElement(
      'svg',
      a('SVG'),
      React.createElement('path', a('PATH'))
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement('img', a('IMG', { src: src }))
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
    return React.createElement(
      'svg',
      a('SVG'),
      React.createElement('path', a('PATH', { style: { stroke: stroke } }))
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
    return React.createElement(
      'svg',
      a('SVG'),
      React.createElement('path', a('PATH_0', { style: { stroke: stroke } })),
      React.createElement('path', a('PATH_1'))
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
        fill: '#c30000'
        // stroke: '#780d00',
        // strokeWidth: 12
      }
    }
  })
)

//
var HEAD_HEIGHT = 90
var BUTTON_HEIGHT = 110
var BOTTOM_MARGIN = 40
var MouseDown = function MouseDown(props) {
  return React.createElement(
    Listen,
    Object.assign({ type: 'onMouseDown' }, props)
  )
}
var MouseUp = function MouseUp(props) {
  return React.createElement(
    Listen,
    Object.assign({ type: 'onMouseUp' }, props)
  )
}

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

    props.orph.attach(_this)
    _this.listeners = props.orph.order([
      'WINDOW:RESIZE_FORCE_UPDATE',
      'RENDER:PRELOADING_OFF',
      'DOM:DETAIL_OFF',
      'DOM:VIEW_SWITCH',
      'DOM:DIM_SWITCH',
      'RENDER:POPDOWN_OFF'
    ])

    _this.noButtons = props.views.length < 2
    _this.detailQuit = _this.DetailQuit()
    _this.popdownQuit = _this.PopdownQuit()
    return _this
  }

  createClass(LonogaraDesktop, [
    {
      key: 'isReady',
      value: function isReady() {
        return Boolean(this.props.views) && Boolean(this.props.backgroundStyle)
      }
    },
    {
      key: 'render',
      value: function render() {
        var isReady = this.isReady()
        return React.createElement(
          Fragment,
          null,
          this.Layout(),
          isReady && this.Tree(),
          this.state.popdown.src && this.Popdown(),
          this.state.preloading && this.Preload(isReady ? 0 : 1)
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        windowOn('resize', this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
        this.props.orph.dispatch('REACT:DID_MOUNT')
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
        return React.createElement(
          'div',
          a('ROOT'),
          React.createElement(
            'header',
            a('HEAD', { style: { visibility: dimming && 'hidden' } }),
            React.createElement(
              'span',
              a('HEAD:WORD', { style: { color: base } }),
              this.props.views[this.state.index].head
            )
          ),
          React.createElement(
            'div',
            a('MAIN', { style: { height: height, borderColor: base } }),
            this.Middle(),
            this.DimSwitch(),
            dimming && this.DimBoard()
          ),
          !noButtons &&
            React.createElement(
              'nav',
              a('BUTTONS', { style: { visibility: dimming && 'hidden' } }),
              this.Buttons()
            )
        )
      }
    },
    {
      key: 'Layout',
      value: function Layout() {
        return React.createElement(
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
          React.createElement(Background, {
            style: this.props.backgroundStyle || {}
          }),
          React.createElement(Background, {
            style: { backgroundColor: this.props.colors.background }
          })
        )
      }
    },
    {
      key: 'DetailQuit',
      value: function DetailQuit() {
        var _this2 = this

        return function(_ref) {
          var fn = _ref.fn
          return React.createElement(
            QuitDetail,
            null,
            React.createElement(ArrowLeft, {
              stroke: _this2.props.colors.detailQuit
            }),
            React.createElement(MouseDown, { positionValue: -20, listener: fn })
          )
        }
      }
    },
    {
      key: 'PopdownQuit',
      value: function PopdownQuit() {
        return function(_ref2) {
          var fn = _ref2.fn
          return React.createElement(
            QuitPopdown,
            null,
            React.createElement(ArrowWideUp, null),
            React.createElement(MouseDown, { positionValue: -10, listener: fn })
          )
        }
      }
    },
    {
      key: 'Preload',
      value: function Preload$$1(opacity) {
        return React.createElement(
          Preload,
          {
            opacity: opacity,
            onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
            backgroundColor: this.props.colors.preloader
          },
          React.createElement(Center, { top: -60 }, jsx$1(this.props.Preloader))
        )
      }
    },
    {
      key: 'Popdown',
      value: function Popdown$$1() {
        var Quit = this.popdownQuit
        var onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
        var src = this.state.popdown.src

        return React.createElement(
          ShutFromTop,
          a('POPDOWN_SHUT', { Quit: Quit, onQuitEnd: onQuitEnd }),
          React.createElement(Popdown, { src: src })
        )
      }
    },
    {
      key: 'Middle',
      value: function Middle() {
        return React.createElement(
          'div',
          a('MIDDLE_WRAP:BOTH'),
          React.createElement(
            'div',
            a('MIDDLE_WRAP:EXHIBIT'),
            jsx$1(this.props.views[this.state.index].Exhibit)
          ),
          React.createElement(
            'div',
            a('MIDDLE_WRAP:DETAIL'),
            this.state.detail.props && this.Detail()
          )
        )
      }
    },
    {
      key: 'Detail',
      value: function Detail() {
        return React.createElement(
          ShutFromLeft,
          {
            mountWithShut: this.state.detail.mountWithShut,
            touchRatio: 0,
            duration: 0.55,
            background: this.props.colors.detail,
            Quit: this.detailQuit,
            onQuitEnd: this.listeners['DOM:DETAIL_OFF']
          },
          jsx$1(
            this.props.views[this.state.index].Detail,
            this.state.detail.props
          )
        )
      }
    },
    {
      key: 'DimSwitch',
      value: function DimSwitch$$1() {
        return React.createElement(
          DimSwitch,
          null,
          React.createElement(Strap, { stroke: this.props.colors.base }),
          React.createElement(MouseDown, {
            listener: this.listeners['DOM:DIM_SWITCH']
          })
        )
      }
    },
    {
      key: 'DimBoard',
      value: function DimBoard$$1() {
        return React.createElement(
          DimBoard,
          null,
          React.createElement(
            'div',
            a('DIM_WRAP'),
            React.createElement(
              Center,
              { top: -24 },
              React.createElement(
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
          return React.createElement(
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
            React.createElement(MouseUp, { listener: createClickA(href) })
          )
        })
      }
    },
    {
      key: 'Buttons',
      value: function Buttons() {
        var _this3 = this

        var _props$colors = this.props.colors,
          base = _props$colors.base,
          sub = _props$colors.sub

        return this.props.views.map(function(view, index) {
          return React.createElement(
            Button,
            _extends(
              { key: index },
              {
                width: 100,
                borderBottomColor: base,
                inform: _this3.state.informs[index],
                svg: jsx$1(view.Button, {
                  choised: index === _this3.state.index,
                  mainColor: base,
                  subColor: sub
                })
              }
            ),
            React.createElement(MouseDown, {
              listener: _this3.listeners['DOM:VIEW_SWITCH'],
              'data-index': index
            })
          )
        })
      }
    }
  ])
  return LonogaraDesktop
})(Component)

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

var View = (function() {
  function View(initials) {
    var _this = this

    classCallCheck(this, View)

    this.data = new Map()
    initials.forEach(function(_ref4) {
      var key = _ref4.key,
        value = _ref4.value
      return _this.data.set(key, value)
    })
  }

  createClass(View, [
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
          throw new Error('STORE: ' + key + ' is not set.')
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
        return render({ preloading: false })
      },

      POPDOWN_ON: function POPDOWN_ON(_ref2, _ref3) {
        var src = _ref2.src,
          vertically = _ref2.vertically
        var render = _ref3.render
        return render({ popdown: { src: src, vertically: vertically } })
      },

      POPDOWN_OFF: function POPDOWN_OFF(n, _ref4) {
        var render = _ref4.render
        return render({ popdown: {} })
      },

      DETAIL_ON: function DETAIL_ON(props, _ref5) {
        var render = _ref5.render
        return render({
          detail: {
            mountWithShut: true,
            props: Object.assign({}, props, { isContinued: false })
          }
        })
      },

      DETAIL_OFF: function DETAIL_OFF(n, _ref6) {
        var render = _ref6.render
        return render({ detail: {} })
      },

      BY_REACT_DIDMOUNT: function BY_REACT_DIDMOUNT(index, _ref7) {
        var render = _ref7.render
        return render({ index: index })
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
                  props: Object.assign({}, detailProps, { isContinued: true })
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

        var informs = state('informs')
        informs[index] = inform
        render({ informs: informs })
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

var _this = undefined

//
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
                      var _ref3 = asyncToGenerator(
                        /*#__PURE__*/ _regeneratorRuntime.mark(
                          function _callee() {
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
                              _this
                            )
                          }
                        )
                      )

                      return function renderCallback() {
                        return _ref3.apply(this, arguments)
                      }
                    })()
                  })
                })
            })
          )
        })
      },

      DETAIL_OFF: function DETAIL_OFF(n, _ref4) {
        var state = _ref4.state,
          dispatch = _ref4.dispatch
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
      DETAIL_ON: function DETAIL_ON(data, _ref5) {
        var state = _ref5.state,
          dispatch = _ref5.dispatch

        var props = { data: data }

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

      POPDOWN_ON: function POPDOWN_ON(arg, _ref6) {
        var dispatch = _ref6.dispatch

        if (isObj(arg) && arg.src) {
          dispatch('RENDER:POPDOWN_ON', arg)
        }
      },

      INFORM_ON: function INFORM_ON(arg, _ref7) {
        var dispatch = _ref7.dispatch

        var inform = +arg.inform
        if (inform || inform === 0) {
          var index = arg.index

          dispatch('RENDER:INFORM_CHANGE', { index: index, inform: inform })
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
var views = function(_ref) {
  var views = _ref.views

  var result = { views: [], creates: [] }

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

      result.views.push({ head: head, Button: Button })
      result.creates.push(create)
      // result.push({ head, Button, create })
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

var firstIndex = function firstIndex(_ref2) {
  var firstIndex = _ref2.firstIndex
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
    sides: sides,
    views: views
  }
}

//
var initials = [
  { key: 'exhibitScrollTop', value: 0 },
  { key: 'detailScrollTop', value: 0 },
  { key: 'detailProps', value: undefined }
]

var Guardian = function(_ref) {
  var App = _ref.App,
    orph = _ref.orph,
    defaults$$1 = _ref.defaults
  return (function(_Component) {
    inherits(Guardian, _Component)

    function Guardian(props) {
      classCallCheck(this, Guardian)

      var _this = possibleConstructorReturn(
        this,
        (Guardian.__proto__ || Object.getPrototypeOf(Guardian)).call(
          this,
          props
        )
      )

      _this.state = { ready: false }
      _this.asynces = []
      _this.results = {}

      _this.results.firstIndex = defaults$$1.firstIndex(props)
      _this.results.colors = defaults$$1.colors(props)
      _this.results.Preloader = defaults$$1.preloader(props)
      _this.results.sides = defaults$$1.sides(props)

      var _defaults$background = defaults$$1.background(props),
        backgroundURL = _defaults$background.backgroundURL,
        backgroundStyle = _defaults$background.backgroundStyle

      _this.results.backgroundStyle = backgroundStyle

      if (backgroundURL) {
        if (backgroundURL.includes('http')) {
          _this.results.backgroundStyle.backgroundImage =
            'url(' + backgroundURL + ')'
        } else {
          _this.asynces.push(function() {
            return fetch(backgroundURL)
              .then(function(res) {
                return res.ok && res.blob()
              })
              .then(function(blob) {
                return blob && createBlobURL(blob)
              })
              .then(function(backgroundURL) {
                if (backgroundURL) {
                  _this.results.backgroundStyle.backgroundImage =
                    'url(' + backgroundURL + ')'
                }
              })
          })
        }
      }

      var _defaults$views = defaults$$1.views(props),
        views = _defaults$views.views,
        creates = _defaults$views.creates

      _this.results.views = views

      creates.forEach(function(create, index) {
        return _this.asynces.push(function() {
          return orph
            .dispatch('STORE:INIT', { index: index, initials: initials })
            .then(function() {
              return create({
                renderDetail: function renderDetail(data) {
                  return orph.dispatch('PASSED:DETAIL_ON', data)
                },
                setPopdown: function setPopdown(src) {
                  return orph.dispatch('PASSED:POPDOWN_ON', src)
                },
                setInform: function setInform(inform) {
                  return orph.dispatch('PASSED:INFORM_ON', {
                    index: index,
                    inform: inform
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
        })
      })
      return _this
    }

    createClass(Guardian, [
      {
        key: 'render',
        value: function render() {
          return React.createElement(
            Fragment,
            null,
            React.createElement(
              'style',
              { type: 'text/css' },
              '\n          body {\n            margin: 0px;\n            overflow: hidden;\n            font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;\n          }\n          .lonogara_button svg {\n            height: 100%;\n          }\n        '
            ),
            React.createElement(
              App,
              _extends(
                { orph: orph },
                {
                  firstIndex: this.results.firstIndex,
                  colors: this.results.colors,
                  Preloader: this.results.Preloader,
                  sides: this.results.sides,
                  backgroundStyle:
                    this.state.ready && this.results.backgroundStyle,
                  views: this.state.ready && this.results.views
                }
              )
            )
          )
        }
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this

          Promise.all(
            this.asynces.map(function(fn) {
              return fn()
            })
          ).then(function() {
            return raf(function() {
              return _this2.setState({ ready: true })
            })
          })
        }
      }
    ])
    return Guardian
  })(Component)
}

//
var orph = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  dimming: false,
  informs: [0, 0, 0, 0]
})

orph.register.apply(orph, toConsumableArray(STORE()))

orph.register.apply(
  orph,
  toConsumableArray(
    RENDER({
      DIMMING_ON: function DIMMING_ON(n, _ref) {
        var render = _ref.render
        return render({ dimming: true })
      },
      DIMMING_OFF: function DIMMING_OFF(n, _ref2) {
        var render = _ref2.render
        return render({ dimming: false })
      }
    })
  )
)

orph.register.apply(orph, toConsumableArray(REACT()))

orph.register.apply(
  orph,
  toConsumableArray(
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

orph.register.apply(orph, toConsumableArray(PASSED()))

orph.register(
  {
    RESIZE_FORCE_UPDATE: function RESIZE_FORCE_UPDATE(e, _ref4) {
      var update = _ref4.update
      return update()
    }
  },
  {
    prefix: 'WINDOW:',
    use: { update: true }
  }
)

var defaults$1 = create()

defaults$1.colors = HoColors(function() {
  return {
    base: '#ffffff',
    sub: 'rgb(145, 145, 145)',
    background: 'rgba(0, 0, 0, 0.6)',
    preloader: 'rgb(241, 241, 241)',
    detail: 'rgb(243, 243, 243)',
    detailQuit: 'rgb(66, 62, 89)'
  }
})

var index = Guardian({ App: LonogaraDesktop, orph: orph, defaults: defaults$1 })

//
var Button$1 = (function(a) {
  return function(_ref) {
    var width = _ref.width,
      inform = _ref.inform,
      svg = _ref.svg,
      children = _ref.children
    return React.createElement(
      'div',
      a('ROOT', { style: { width: width } }),
      React.createElement(
        'span',
        a('WRAP'),
        svg,
        inform > 0 && React.createElement('div', a('INFORM'), inform)
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
        top: '25%',
        height: '56%'
        // top: '20%',
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
    return React.createElement(
      'header',
      a('ROOT', {
        style: { height: height, backgroundColor: backgroundColor }
      }),
      React.createElement(
        Center,
        { top: 12 },
        React.createElement(
          'span',
          a('WORD', { style: { color: color } }),
          word
        )
      ),
      React.createElement(
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement(
        'span',
        a('WRAP', {
          style: { width: size, height: size, backgroundImage: buttonImage }
        }),
        coverColor &&
          React.createElement(
            'span',
            a('COVER', { style: { backgroundColor: coverColor } })
          ),
        descriptionText &&
          React.createElement(
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

var Veil = (function(a) {
  var BLACK = 'rgba(0, 0, 0, 0.8)'
  var TRANS = 'rgba(0, 0, 0, 0)'

  return function(_ref4) {
    var onTransitionEnd = _ref4.onTransitionEnd,
      drifting = _ref4.drifting,
      children = _ref4.children
    return React.createElement(
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
    return React.createElement('span', a('ROOT'), children)
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
    return React.createElement(
      'div',
      a('ROOT'),
      React.createElement('span', a('WRAP'), children)
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
    return React.createElement(
      'div',
      a('ROOT', { style: { top: top } }),
      React.createElement('img', a('IMG', { src: src }))
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
    return React.createElement(
      'svg',
      a('SVG'),
      React.createElement(
        'g',
        a('G', { stroke: stroke }),
        React.createElement('path', a('PATH_0')),
        React.createElement('path', a('PATH_1')),
        React.createElement('path', a('PATH_2'))
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
var TouchStartCapture = function TouchStartCapture(props) {
  return React.createElement(
    Listen,
    Object.assign({ type: 'onTouchStartCapture' }, props)
  )
}
var TouchEnd = function TouchEnd(props) {
  return React.createElement(
    Listen,
    Object.assign({ type: 'onTouchEnd' }, props)
  )
}
var TouchEndCapture = function TouchEndCapture(props) {
  return React.createElement(
    Listen,
    Object.assign({ type: 'onTouchEndCapture' }, props)
  )
}

var LonogaraMobile = (function(_Component) {
  inherits(LonogaraMobile, _Component)

  // this.listeners: { [name: string]: () => {} }
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

    props.orph.attach(_this)
    _this.listeners = props.orph.order([
      'RENDER:PRELOADING_OFF',
      'DOM:VIEW_SWITCH',
      'DOM:DETAIL_OFF',
      'RENDER:DRIFTING_ON',
      'RENDER:DRIFTING_LAG',
      'RENDER:DRIFTING_OFF',
      'RENDER:POPDOWN_OFF'
    ])

    _this.noButtons = props.views.length < 2
    _this.sides = _this.Sides()
    _this.detailQuit = _this.DetailQuit()
    _this.popdownQuit = _this.PopdownQuit()
    return _this
  }

  createClass(LonogaraMobile, [
    {
      key: 'isReady',
      value: function isReady() {
        return Boolean(this.props.views) && Boolean(this.props.backgroundStyle)
      }
    },
    {
      key: 'render',
      value: function render() {
        var isReady = this.isReady()
        return React.createElement(
          Fragment,
          null,
          isReady && this.Tree(),
          this.state.popdown.src && this.Popdown(),
          this.state.preloading && this.Preload(isReady ? 0 : 1)
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.orph.dispatch('REACT:DID_MOUNT')
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
            : 'translateX(' + -SIDE_WIDTH + 'px)'
        var transition = !drifting || drifting === 'lag' ? '0.6s' : '0.72s'
        var height = winnerHeight() - (noButtons ? 0 : BUTTON_HEIGHT$1)
        var veil = this.Veil()
        return React.createElement(
          'div',
          { style: { backgroundColor: this.props.colors.side } },
          React.createElement(
            'aside',
            a$1('SIDES', {
              style: {
                transform: transform,
                transition: transition,
                height: height
              }
            }),
            this.sides
          ),
          React.createElement(
            'div',
            a$1('HEAD_AND_MIDDLE', { style: { transform: transform } }),
            this.Head(),
            this.Middle(),
            veil
          ),
          !noButtons &&
            React.createElement('nav', a$1('BUTTONS'), this.Buttons(), veil)
        )
      }
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
          return React.createElement(
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
            React.createElement(TouchEnd, { listener: createClickA(href) })
          )
        })
      }
    },
    {
      key: 'DetailQuit',
      value: function DetailQuit() {
        var _this2 = this

        return function(_ref2) {
          var fn = _ref2.fn
          return React.createElement(
            QuitDetail$1,
            null,
            React.createElement(ArrowLeft, {
              stroke: _this2.props.colors.detailQuit
            }),
            React.createElement(TouchEndCapture, {
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
          return React.createElement(
            QuitPopdown$1,
            null,
            React.createElement(ArrowWideUp, null),
            React.createElement(TouchEnd, {
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
        return React.createElement(
          Preload,
          {
            opacity: opacity,
            onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
            backgroundColor: this.props.colors.preloader
          },
          React.createElement(
            Center,
            { top: -100 },
            jsx$1(this.props.Preloader)
          )
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
        return React.createElement(
          ShutFromTop,
          a$1('POPDOWN_SHUT', { Quit: Quit, onQuitEnd: onQuitEnd }),
          React.createElement(Popdown$1, { src: src, top: top })
        )
      }
    },
    {
      key: 'Veil',
      value: function Veil$$1() {
        return React.createElement(
          Veil,
          {
            onTransitionEnd: this.listeners['RENDER:DRIFTING_OFF'],
            drifting: this.state.drifting
          },
          React.createElement(TouchEnd, {
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

        return React.createElement(
          Head,
          {
            height: HEAD_HEIGHT$1,
            word: this.props.views[this.state.index].head,
            backgroundColor: base,
            color: sub
          },
          React.createElement(Burger, { stroke: sub }),
          React.createElement(TouchEnd, {
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
        var isDetail = isObj(this.state.detail.props)
        return React.createElement(
          'div',
          a$1('MIDDLE', { style: { height: height } }),
          React.createElement(Background, { style: backgroundStyle }),
          React.createElement(Background, {
            style: { backgroundColor: backgroundColor }
          }),
          React.createElement(
            'div',
            a$1('MIDDLE_WRAP:BOTH'),
            React.createElement(
              'div',
              a$1('MIDDLE_WRAP:EXHIBIT', {
                style: { overflowY: isDetail ? 'hidden' : 'scroll' }
              }),
              jsx$1(this.props.views[this.state.index].Exhibit)
            ),
            React.createElement(
              'div',
              a$1('MIDDLE_WRAP:DETAIL'),
              isDetail && this.Detail()
            )
          )
        )
      }
    },
    {
      key: 'Detail',
      value: function Detail() {
        return React.createElement(
          ShutFromLeft,
          {
            mountWithShut: this.state.detail.mountWithShut,
            duration: 0.55,
            background: this.props.colors.detail,
            notScroll: Boolean(this.state.popdown.src),
            Quit: this.detailQuit,
            onQuitEnd: this.listeners['DOM:DETAIL_OFF']
          },
          jsx$1(
            this.props.views[this.state.index].Detail,
            this.state.detail.props
          )
        )
      }
    },
    {
      key: 'Buttons',
      value: function Buttons() {
        var _this3 = this

        return this.props.views.map(function(view, index, views) {
          return React.createElement(
            Button$1,
            _extends(
              { key: index },
              {
                width: winnerWidth() / views.length - 0.5,
                inform: _this3.state.informs[index],
                svg: jsx$1(view.Button, {
                  choised: index === _this3.state.index,
                  mainColor: _this3.props.colors.base,
                  subColor: _this3.props.colors.sub
                })
              }
            ),
            React.createElement(TouchStartCapture, {
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
})(Component)

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
var orph$1 = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  drifting: false,
  informs: [0, 0, 0, 0]
})

orph$1.register.apply(orph$1, toConsumableArray(STORE()))

orph$1.register.apply(
  orph$1,
  toConsumableArray(
    RENDER({
      DRIFTING_ON: function DRIFTING_ON(n, _ref) {
        var render = _ref.render
        return render({ drifting: true })
      },
      DRIFTING_LAG: function DRIFTING_LAG(n, _ref2) {
        var render = _ref2.render
        return render({ drifting: 'lag' })
      },
      DRIFTING_OFF: function DRIFTING_OFF(n, _ref3) {
        var state = _ref3.state,
          render = _ref3.render
        return state('drifting').then(function(drifting) {
          return (
            drifting === 'lag' &&
            render({ drifting: false }, function() {
              getElementById(MOBILE_SIDE_SCROLL_ID).scrollTop = 0
            })
          )
        })
      }
    })
  )
)

orph$1.register.apply(orph$1, toConsumableArray(REACT()))

orph$1.register.apply(orph$1, toConsumableArray(DOM()))

orph$1.register.apply(orph$1, toConsumableArray(PASSED()))

var defaults$2 = create()

defaults$2.colors = HoColors(function() {
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

var index$1 = Guardian({
  App: LonogaraMobile,
  orph: orph$1,
  defaults: defaults$2
})

export { index as Desktop, index$1 as Mobile }
