'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var Atra = _interopDefault(require('atra'))
var Orph = _interopDefault(require('orph'))

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

var objectDestructuringEmpty = function(obj) {
  if (obj == null) throw new TypeError('Cannot destructure undefined')
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

var index = function(_ref) {
  var views = _ref.views

  var result = []

  if (views) {
    if (!isArray(views)) {
      typerror('')
    }

    views.forEach(function(_ref2) {
      var head = _ref2.head,
        Button = _ref2.Button,
        factory = _ref2.factory

      if (!isString(head)) {
        typerror('')
      }
      if (!isObjectPure(Button) && !isFunction(Button)) {
        typerror('')
      }
      if (!factory) {
        error('view.factory is required')
      }
      if (!isFunction(factory)) {
        typerror(
          'view factory must be "function" but ' +
            (typeof factory === 'undefined' ? 'undefined' : _typeof(factory))
        )
      }

      result.push({ head: head, Button: Button, factory: factory })
    })
  }

  return result
}

var index$1 = function(_ref) {
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

var index$2 = function(_ref) {
  var Preloader = _ref.Preloader

  console.log(Preloader)
  return Preloader
}

var index$3 = function(_ref) {
  var firstIndex = _ref.firstIndex
  return isNumber(firstIndex) ? firstIndex : 0
}

var index$4 = function(_ref) {
  var exhibitBg = _ref.exhibitBg

  var result = {
    exhibitBgURL: undefined,
    exhibitBgStyle: {}
  }

  if (exhibitBg) {
    if (isString(exhibitBg)) {
      var url = exhibitBg

      result.exhibitBgURL = url
      result.exhibitBgStyle = { backgroundImage: 'url(' + url + ')' }
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
      result.exhibitBgStyle = Object.assign(style, {
        backgroundImage: 'url(' + _url + ')'
      })
    } else {
      typerror('')
    }
  }

  return result
}

var index$5 = function(_ref) {
  var detailStyle = _ref.detailStyle

  var result = {
    detailRootClassName: '',
    detailCssString: undefined
  }

  if (detailStyle) {
    if (!isObjectPure(detailStyle)) {
      typerror('')
    }

    var rootClassName = detailStyle.rootClassName,
      cssString = detailStyle.cssString

    if (!isString(rootClassName)) {
      typerror('')
    }
    if (!isString(cssString)) {
      typerror('')
    }

    result.detailRootClassName = rootClassName
    result.detailCssString = cssString
  }

  return result
}

var keys = Object.keys
var values = Object.values

var colorsKey = ['base', 'sub', 'side']
var BASE_COLOR = '#484848'
var SUB_COLOR = '#ffffff'
var SIDE_COLOR = '#484848'

var index$6 = function(_ref) {
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
      !keys(colors).every(function(key) {
        return colorsKey.includes(key)
      })
    ) {
      error('props.colors contain invalied key')
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
var Guardian = function(Component$$1) {
  return function(props) {
    var firstIndex = index$3(props)

    var _guardian$colors = index$6(props),
      baseColor = _guardian$colors.baseColor,
      subColor = _guardian$colors.subColor,
      sideColor = _guardian$colors.sideColor

    var _guardian$exhibitBg = index$4(props),
      exhibitBgURL = _guardian$exhibitBg.exhibitBgURL,
      exhibitBgStyle = _guardian$exhibitBg.exhibitBgStyle

    var _guardian$detailStyle = index$5(props),
      detailRootClassName = _guardian$detailStyle.detailRootClassName,
      detailCssString = _guardian$detailStyle.detailCssString

    var Preloader = index$2(props)
    var views = index(props)
    var sides = index$1(props)

    return React__default.createElement(
      'div',
      null,
      exhibitBgURL &&
        React__default.createElement('link', {
          rel: 'prefetch',
          href: exhibitBgURL
        }),
      detailCssString &&
        React__default.createElement(
          'style',
          { type: 'text/css' },
          detailCssString
        ),
      React__default.createElement(
        'style',
        { type: 'text/css' },
        '\n        :root {\n          --base-color: ' +
          baseColor +
          ';\n          --sub-color: ' +
          subColor +
          ';\n          --side-color: ' +
          sideColor +
          ';\n        }\n        body {\n          margin: 0px;\n        }\n      '
      ),
      React__default.createElement(Component$$1, {
        firstIndex: firstIndex,
        exhibitBgStyle: exhibitBgStyle,
        detailRootClassName: detailRootClassName,
        Preloader: Preloader,
        views: views,
        sides: sides
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
        return React__default.createElement('div', null, 'desktop')
      }
    }
  ])
  return App
})(React.Component)

var SET_TIMEOUT = [
  function() {
    var time =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000
    return new Promise(function(resolve) {
      return setTimeout(resolve, time)
    })
  },
  { states: [], dispatches: [] }
]

var _util = Object.freeze({
  SET_TIMEOUT: SET_TIMEOUT
})

//

var INDEX_EXHIBIT = [
  function(packet, _ref) {
    var render = _ref.render
    return render({
      index: packet.index,
      exhibit: packet.exhibit
    })
  },
  {
    states: ['index', 'exhibit'],
    dispatches: []
  }
]

var INDEX_EXHIBIT_DETAIL = [
  function(packet, _ref2) {
    var render = _ref2.render
    return render({
      index: packet.index,
      exhibit: packet.exhibit,
      detail: packet.detail
    })
  },
  {
    states: ['index', 'exhibit', 'detail'],
    dispatches: []
  }
]

var DETAIL = [
  function(detail, _ref3) {
    var render = _ref3.render
    return render({ detail: detail })
  },
  {
    states: ['detail'],
    dispatches: []
  }
]

var OFF_PRELOADING = [
  function(n, _ref4) {
    var render = _ref4.render
    return render({ preloading: false })
  },
  {
    states: ['preloading'],
    dispatches: []
  }
]

var ON_DRIFTING = [
  function(n, _ref5) {
    var render = _ref5.render
    return render({ drifting: true })
  },
  {
    states: ['drifting'],
    dispatches: []
  }
]

var OFF_DRIFTING = [
  function(n, _ref6) {
    var render = _ref6.render
    return render({ drifting: false })
  },
  {
    states: ['drifting'],
    dispatches: []
  }
]

var _render = Object.freeze({
  INDEX_EXHIBIT: INDEX_EXHIBIT,
  INDEX_EXHIBIT_DETAIL: INDEX_EXHIBIT_DETAIL,
  DETAIL: DETAIL,
  OFF_PRELOADING: OFF_PRELOADING,
  ON_DRIFTING: ON_DRIFTING,
  OFF_DRIFTING: OFF_DRIFTING
})

//

var View = (function() {
  // _factory: any
  // _detailing: boolean
  // _scrollTop: number

  function View(factory) {
    classCallCheck(this, View)

    this._factory = factory
    this._detailing = false
    this._scrollTop = 0
  }

  createClass(View, [
    {
      key: 'factory',
      value: function factory() {
        return this._factory
      }
    },
    {
      key: 'detailing',
      value: function detailing() {
        return this._detailing
      }
    },
    {
      key: 'scrollTop',
      value: function scrollTop() {
        return this._scrollTop
      }
    },
    {
      key: 'setDetailing',
      value: function setDetailing(value) {
        this._detailing = value
      }
    },
    {
      key: 'setScrollTop',
      value: function setScrollTop(value) {
        this._scrollTop = value
      }
    }
  ])
  return View
})()

//
var views = new Map()

var SET_VIEW = [
  function(_ref) {
    var index = _ref.index,
      factory = _ref.factory
    return views.set(index, new View(factory))
  },
  { states: [], dispatches: [] }
]

var INIT_FACTORY = [
  function(index) {
    return views
      .get(index)
      .factory()
      .init()
  },
  { states: [], dispatches: [] }
]

var UPDATE_FACTORY = [
  function(index) {
    return views
      .get(index)
      .factory()
      .update()
  },
  { states: [], dispatches: [] }
]

var GET_FACTORY_EXHIBIT = [
  function(index) {
    return views
      .get(index)
      .factory()
      .Exhibit()
  },
  { states: [], dispatches: [] }
]

var GET_FACTORY_DETAIL = [
  function(_ref2) {
    var viewIndex = _ref2.viewIndex,
      exhibitIndex = _ref2.exhibitIndex

    var view = views.get(viewIndex)
    view.setDetailing(true)
    return view.factory().Detail(exhibitIndex)
  },
  { states: [], dispatches: [] }
]

var GET_DETAILING = [
  function(index) {
    return views.get(index).detailing()
  },
  { states: [], dispatches: [] }
]

var OFF_DETAILING = [
  function(index) {
    return views.get(index).setDetailing(false)
  },
  { states: [], dispatches: [] }
]

var GET_SCROLLTOP = [
  function(index) {
    return views.get(index).scrollTop()
  },
  { states: [], dispatches: [] }
]

var SET_SCROLLTOP = [
  function(_ref3) {
    var index = _ref3.index,
      value = _ref3.value
    return views.get(index).setScrollTop(value)
  },
  { states: [], dispatches: [] }
]

var _store = Object.freeze({
  SET_VIEW: SET_VIEW,
  INIT_FACTORY: INIT_FACTORY,
  UPDATE_FACTORY: UPDATE_FACTORY,
  GET_FACTORY_EXHIBIT: GET_FACTORY_EXHIBIT,
  GET_FACTORY_DETAIL: GET_FACTORY_DETAIL,
  GET_DETAILING: GET_DETAILING,
  OFF_DETAILING: OFF_DETAILING,
  GET_SCROLLTOP: GET_SCROLLTOP,
  SET_SCROLLTOP: SET_SCROLLTOP
})

//

var DID_MOUNT = [
  function(n, util) {
    var _util$props = util.props(),
      views = _util$props.views,
      firstIndex = _util$props.firstIndex

    var dispatch = util.dispatch

    Promise.all(
      views.map(function(_ref, index) {
        var factory = _ref.factory
        return dispatch('STORE:SET_VIEW', {
          index: index,
          factory: factory()
        }).then(function() {
          return dispatch('STORE:INIT_FACTORY', index)
        })
      })
    ).then(function() {
      return dispatch('STORE:GET_FACTORY_EXHIBIT', firstIndex).then(function(
        exhibit
      ) {
        return dispatch('RENDER:INDEX_EXHIBIT', {
          index: firstIndex,
          exhibit: exhibit
        })
      })
    })
    // .then(() =>
    //   dispatch("UTIL:SET_TIMEOUT", 1500).then(() =>
    //     dispatch("RENDER:OFF_PRELOADING")
    //   ))
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_VIEW',
      'STORE:INIT_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:INDEX_EXHIBIT'
      // "UTIL:SET_TIMEOUT",
      // "RENDER:OFF_PRELOADING"
    ]
  }
]

var DID_UPDATE = [
  function(n, util) {
    console.log('DID_UPDATE')
    console.log(util.state())
  },
  {
    states: [],
    dispatches: []
  }
]

var _react = Object.freeze({
  DID_MOUNT: DID_MOUNT,
  DID_UPDATE: DID_UPDATE
})

var OFF_PRELOADING$1 = [
  function(n, _ref) {
    var dispatch = _ref.dispatch
    return dispatch('RENDER:OFF_PRELOADING')
  },
  {
    states: [],
    dispatches: ['RENDER:OFF_PRELOADING']
  }
]

var SWITCH_VIEW = [
  function(e, util) {
    var nowIndex = util.state().index
    var nextIndex = +e.target.dataset.index

    var dispatch = util.dispatch
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_SCROLLTOP',
      'STORE:GET_SCROLLTOP',
      'STORE:GET_FACTORY_EXHIBIT',
      'STORE:GET_DETAILING',
      'STORE:GET_FACTORY_DETAIL'
    ]
  }
]

var UPDATE_VIEW = [
  function(e, _ref2) {
    objectDestructuringEmpty(_ref2)
  },
  {
    states: [],
    dispatches: []
  }
]

var ON_DETAIL = [
  function(e, _ref3) {
    objectDestructuringEmpty(_ref3)
  },
  {
    states: [],
    dispatches: []
  }
]

var OFF_DETAIL = [
  function(e, _ref4) {
    objectDestructuringEmpty(_ref4)
  },
  {
    states: [],
    dispatches: []
  }
]

var ON_DRIFTING$1 = [
  function(e, _ref5) {
    var dispatch = _ref5.dispatch
    return dispatch('RENDER:ON_DRIFTING')
  },
  {
    states: [],
    dispatches: ['RENDER:ON_DRIFTING']
  }
]

var OFF_DRIFTING$1 = [
  function(e, _ref6) {
    var dispatch = _ref6.dispatch
    return dispatch('RENDER:OFF_DRIFTING')
  },
  {
    states: [],
    dispatches: ['RENDER:OFF_DRIFTING']
  }
]

var _dom = Object.freeze({
  OFF_PRELOADING: OFF_PRELOADING$1,
  SWITCH_VIEW: SWITCH_VIEW,
  UPDATE_VIEW: UPDATE_VIEW,
  ON_DETAIL: ON_DETAIL,
  OFF_DETAIL: OFF_DETAIL,
  ON_DRIFTING: ON_DRIFTING$1,
  OFF_DRIFTING: OFF_DRIFTING$1
})

var FUNCTION = [function() {}, { states: [], dispatches: [] }]

var _window = Object.freeze({
  FUNCTION: FUNCTION
})

var _ref

var entries = Object.entries
var isArray$1 = Array.isArray

var isPureObject = function isPureObject(target) {
  return (
    (typeof target === 'undefined' ? 'undefined' : _typeof(target)) ===
      'object' && !isArray$1(target)
  )
}

var imports = [
  ['UTIL', _util],
  ['RENDER', _render],
  ['STORE', _store],
  ['REACT', _react],
  ['DOM', _dom],
  ['WINDOW', _window]
]

var orph = new Orph(
  (_ref = []).concat.apply(
    _ref,
    toConsumableArray(
      imports.map(function(_ref2) {
        var _ref3 = slicedToArray(_ref2, 2),
          prefix = _ref3[0],
          orphans = _ref3[1]

        return entries(orphans)
          .filter(function(_ref4) {
            var _ref5 = slicedToArray(_ref4, 2),
              name = _ref5[0],
              listener = _ref5[1]

            return !isPureObject(listener)
          })
          .map(function(_ref6) {
            var _ref7 = slicedToArray(_ref6, 2),
              name = _ref7[0],
              listener = _ref7[1]

            var NAME = prefix + ':' + name
            return isArray$1(listener)
              ? [NAME].concat(toConsumableArray(listener))
              : [NAME, listener]
          })
      })
    )
  )
)

var Veil = function(_ref) {
  var onTouchEnd = _ref.onTouchEnd,
    drifting = _ref.drifting
  return React__default.createElement(
    'div',
    a$1('veil', {
      onTouchEnd: onTouchEnd,
      style: {
        top: drifting ? 0 : undefined,
        background: drifting ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)'
        // backgroundはdrifting === "wait"の段階がある
      }
    })
  )
}

var a$1 = Atra({
  veil: {
    className: '',
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      transition: '0.6s',
      borderRight: 'solid 0.2px #3a3a3a'
    }
  }
})

var _style

var Side = function(_ref) {
  var size = _ref.size,
    href = _ref.href,
    buttonImage = _ref.buttonImage,
    coverColor = _ref.coverColor,
    descriptionText = _ref.descriptionText,
    descriptionStyle = _ref.descriptionStyle
  return React__default.createElement(
    'div',
    a$2('ROOT'),
    React__default.createElement(
      'span',
      a$2('WRAP', {
        onTouchStart: onTouchStart,
        onTouchEnd: HoTouchEnd(href),
        style: {
          width: size,
          height: size,
          backgroundImage: buttonImage
        }
      }),
      coverColor &&
        React__default.createElement(
          'span',
          a$2('COVER', {
            style: { backgroundColor: coverColor }
          })
        ),
      descriptionText &&
        React__default.createElement(
          'span',
          a$2('DESCRIPTION', {
            style: descriptionStyle,
            children: descriptionText
          })
        )
    )
  )
}
// style: { background: coverColor || 'rgba(0, 29, 36, 0.48)' }

var a$2 = Atra({
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
      // width: 176,
      // height: 176,
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

var Preload = function(_ref) {
  var vanish = _ref.vanish,
    onTransitionEnd = _ref.onTransitionEnd,
    children = _ref.children
  return React__default.createElement(
    'div',
    a$3('ROOT', {
      style: { opacity: vanish ? 0 : 1 },
      onTransitionEnd: onTransitionEnd
    }),
    React__default.createElement('span', a$3('WRAP'), children)
  )
}

var a$3 = Atra({
  ROOT: {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: '#eeeeee',
      transition: '0.4s'
    }
  },
  WRAP: {
    style: {
      position: 'absolute',
      top: (window.innerHeight - 140) / 2 - 100,
      left: (window.innerWidth - 140) / 2,
      display: 'inline-block',
      height: 140
    }
  }
})

var Exhibit = function() {
  return React__default.createElement('div', null)
}

var a$5 = Atra({})

var Detail = function() {
  return React__default.createElement('div', null)
}

var a$6 = Atra({})

var Main = function(_ref) {
  var height = _ref.height,
    backgroundStyle = _ref.backgroundStyle,
    exhibit = _ref.exhibit,
    detail = _ref.detail
  return React__default.createElement(
    'main',
    a$4('MAIN_ROOT', {
      style: Object.assign({ height: height }, backgroundStyle)
    }),
    React__default.createElement(
      'div',
      a$4('MAIN_WRAP', {
        style: {
          background: backgroundStyle
            ? 'rgba(255, 255, 255, 0.83)'
            : 'rgb(245, 245, 245)'
        }
      }),
      React__default.createElement(Exhibit, null),
      detail && React__default.createElement(Detail, null)
    )
  )
}

var a$4 = Atra({
  MAIN_ROOT: {
    style: {
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center'
    }
  },
  MAIN_WRAP: {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
    }
  }
})

var Burger = function() {
  return React__default.createElement(
    'svg',
    a$8('SVG'),
    React__default.createElement(
      'g',
      a$8('G'),
      React__default.createElement('path', a$8('PATH_0')),
      React__default.createElement('path', a$8('PATH_1')),
      React__default.createElement('path', a$8('PATH_2'))
    )
  )
}

var a$8 = Atra({
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

var Head = function(_ref) {
  var height = _ref.height,
    word = _ref.word,
    onTouchEnd = _ref.onTouchEnd
  return React__default.createElement(
    'header',
    a$7('HEAD_ROOT', { style: { height: height } }),
    React__default.createElement(
      'span',
      a$7('HEAD_WORD', { style: { marginTop: height - 105 } }),
      word
    ),
    React__default.createElement(
      'span',
      a$7('HEAD_BUTTON', {
        style: { padding: (height - 100) / 2 + 'px 25px' },
        onTouchEnd: onTouchEnd
      }),
      React__default.createElement(Burger, null)
    )
  )
}

var a$7 = Atra({
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

var Button = function(_ref) {
  var inform = _ref.inform,
    buttonIndex = _ref.buttonIndex,
    onTouchStart = _ref.onTouchStart,
    children = _ref.children
  return React__default.createElement(
    'div',
    a$9('ROOT'),
    React__default.createElement('span', a$9('CHILDREN_WRAP'), children),
    inform > 0 && React__default.createElement('div', a$9('INFORM'), inform),
    React__default.createElement(
      'div',
      a$9('CLICK_COVER', {
        'data-index': buttonIndex,
        onTouchStart: onTouchStart
      })
    )
  )
}

var a$9 = Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      position: 'relative'
    }
  },
  CHILDREN_WRAP: {
    style: {
      display: 'inline-block',
      color: 'white',
      objectFit: 'contain',
      position: 'relative',
      // height: '50%',
      width: '42%',
      // top: '23%',
      top: '18%'
      // strokeLinecap: 'round',
      // strokeLinejoin: 'round'
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
      top: 14,
      right: '20%',
      color: '#fff',
      lineHeight: 1.29
    }
  },
  CLICK_COVER: {
    className: 'for_view_change',
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
})

//
// const forcep = (value) => Promise.resolve(value)
// const firstCamel = (string) => `${string[0].toUpperCase()}${string.slice(1)}`
var valued = function valued(target) {
  return typeof target === 'function' ? target() : target
}

var SIDE_WIDTH = 370
var HEAD_HEIGHT = 170
var BUTTON_HEIGHT = 150

var listeners = [
  'DOM:OFF_PRELOADING',
  'DOM:SWITCH_VIEW',
  'DOM:UPDATE_VIEW',
  'DOM:ON_DETAIL',
  'DOM:OFF_DETAIL',
  'DOM:ON_DRIFTING',
  'DOM:OFF_DRIFTING'
]

var LigureMobile = (function(_Component) {
  inherits(LigureMobile, _Component)

  // sides: Array<React$Element>
  // backgroundImage: string
  // css: string

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
      index: undefined,
      exhibit: undefined,
      detail: undefined
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
        this.preloader = valued(this.props.Preloader)
      }
    },
    {
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          null,
          typeof this.state.index === 'number' && this.tree(),
          this.state.preloading && this.createPreload()
        )
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        orph.dispatch('REACT:DID_MOUNT')
      }
    },
    {
      key: 'tree',
      value: function tree() {
        var head = this.createHead()
        var main = this.createMain()
        var veil = this.createVeil()
        var buttons = this.createButtons()
        var sides = this.sides

        var drifting = this.state.drifting

        return React__default.createElement(
          'div',
          a('ROOT'),
          React__default.createElement(
            'div',
            a('HEAD_AND_MAIN', {
              style: {
                transform: 'translateX(' + (drifting ? -SIDE_WIDTH : 0) + 'px)'
              }
            }),
            head,
            main,
            veil
          ),
          React__default.createElement('nav', a('BUTTONS'), buttons, veil),
          React__default.createElement(
            'aside',
            a('SIDES', {
              style: {
                transform: 'translateX(' + (drifting ? -SIDE_WIDTH : 0) + 'px)',
                transition: (drifting ? 0.72 : 0.6) + 's'
              }
            }),
            sides
          )
        )
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.preloader && !this.state.preloading) {
          this.preloader = null
        }

        orph.dispatch('REACT:DID_UPDATE')
      }

      /*----------------------- create -----------------------*/
    },
    {
      key: 'createPreload',
      value: function createPreload() {
        return React__default.createElement(Preload, {
          vanish: typeof this.state.index === 'number',
          onTransitionEnd: this.listeners['DOM:OFF_PRELOADING'],
          children: this.preloader
        })
      }
    },
    {
      key: 'createHead',
      value: function createHead() {
        return React__default.createElement(Head, {
          height: HEAD_HEIGHT,
          word: this.props.views[this.state.index].head,
          onTouchEnd: this.listeners['DOM:ON_DRIFTING']
        })
      }
    },
    {
      key: 'createMain',
      value: function createMain() {
        return React__default.createElement(Main, {
          height: window.innerHeight - (HEAD_HEIGHT + BUTTON_HEIGHT),
          backgroundStyle: this.props.exhibitBgStyle,
          exhibit: this.state.exhibit,
          detail: this.state.detail
        })
      }
    },
    {
      key: 'createVeil',
      value: function createVeil() {
        return React__default.createElement(Veil, {
          drifting: this.state.drifting,
          onTouchEnd: this.listeners['DOM:OFF_DRIFTING']
        })
      }
    },
    {
      key: 'createButtons',
      value: function createButtons() {
        var _this3 = this

        return this.props.views.map(function(view, index) {
          return React__default.createElement(Button, {
            key: index,
            buttonIndex: index,
            onTouchStart: _this3.listeners['DOM:SWITCH_VIEW'],
            inform: 0,
            children: view.Button({ choised: index === _this3.state.index })
          })
        })
      }
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
          return React__default.createElement(Side, {
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
    }
  ])
  return LigureMobile
})(React.Component)

var a = Atra({
  ROOT: {},

  HEAD_AND_MAIN: {
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
    style: {
      position: 'fixed',
      top: 0,
      left: window.innerWidth,
      bottom: BUTTON_HEIGHT,
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      overflowY: 'scroll'
    }
  }
})

var Desktop = Guardian(App)
var Mobile = Guardian(LigureMobile)

exports.Desktop = Desktop
exports.Mobile = Mobile
