import React, { Component } from 'react'
import Atra from 'atra'
import Orph from 'orph'
import { ShutFromLeft } from 'react-shut'

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
        create = _ref2.create

      if (!isString(head)) {
        typerror('')
      }
      if (!isObjectPure(Button) && !isFunction(Button)) {
        typerror('')
      }
      if (!create) {
        error('view.create is required')
      }
      if (!isFunction(create)) {
        typerror(
          'view create must be "function" but ' +
            (typeof create === 'undefined' ? 'undefined' : _typeof(create))
        )
      }

      result.push({ head: head, Button: Button, create: create })
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

    return React.createElement(
      'div',
      null,
      exhibitBgURL &&
        React.createElement('link', { rel: 'prefetch', href: exhibitBgURL }),
      detailCssString &&
        React.createElement('style', { type: 'text/css' }, detailCssString),
      React.createElement(
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
      React.createElement(Component$$1, {
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
        return React.createElement('div', null, 'desktop')
      }
    }
  ])
  return App
})(Component)

//
var scrollDOM = function scrollDOM() {
  return document.getElementById('exhibitScrollElement')
}

var isNumber$1 = function isNumber(target) {
  return typeof target === 'number'
}

//
var BY_REACT_DIDMOUNT = [
  function(_ref, _ref2) {
    var index = _ref.index,
      exhibit = _ref.exhibit
    var render = _ref2.render
    return render({ index: index, exhibit: exhibit })
  },
  { states: ['index', 'exhibit'], dispatches: [] }
]

var BY_DOM_SWITCH_VIEW = [
  function(packet, _ref3) {
    var render = _ref3.render,
      dispatch = _ref3.dispatch
    var viewIndex = packet.viewIndex,
      exhibit = packet.exhibit,
      scrollTop = packet.scrollTop

    var detail = packet.detail
      ? { elements: packet.detail, mountWithShut: false }
      : undefined
    render({ index: viewIndex, exhibit: exhibit, detail: detail }, function() {
      scrollDOM().scrollTop = scrollTop
    })
  },
  {
    states: ['index', 'exhibit', 'detail'],
    dispatches: []
  }
]

var BY_DOM_UPDATE_VIEW = [
  function(exhibit, _ref4) {
    var render = _ref4.render
    return render({ exhibit: exhibit })
  },
  { states: ['exhibit'], dispatches: [] }
]

var ON_DETAIL = [
  function(detailElements, _ref5) {
    var render = _ref5.render
    return render({ detail: { elements: detailElements, mountWithShut: true } })
  },
  { states: ['detail'], dispatches: [] }
]

var OFF_DETAIL = [
  function(n, _ref6) {
    var render = _ref6.render
    return render({ detail: undefined })
  },
  { states: ['detail'], dispatches: [] }
]

var OFF_PRELOADING = [
  function(n, _ref7) {
    var render = _ref7.render
    return render({ preloading: false })
  },
  { states: ['preloading'], dispatches: [] }
]

var ON_DRIFTING = [
  function(n, _ref8) {
    var render = _ref8.render
    return render({ drifting: true })
  },
  { states: ['drifting'], dispatches: [] }
]

var LAG_DRIFTING = [
  function(n, _ref9) {
    var render = _ref9.render
    return render({ drifting: 'lag' })
  },
  { states: ['drifting'], dispatches: [] }
]

var OFF_DRIFTING = [
  function(n, _ref10) {
    var render = _ref10.render
    return render({ drifting: false })
  },
  { states: ['drifting'], dispatches: [] }
]

var _render = Object.freeze({
  BY_REACT_DIDMOUNT: BY_REACT_DIDMOUNT,
  BY_DOM_SWITCH_VIEW: BY_DOM_SWITCH_VIEW,
  BY_DOM_UPDATE_VIEW: BY_DOM_UPDATE_VIEW,
  ON_DETAIL: ON_DETAIL,
  OFF_DETAIL: OFF_DETAIL,
  OFF_PRELOADING: OFF_PRELOADING,
  ON_DRIFTING: ON_DRIFTING,
  LAG_DRIFTING: LAG_DRIFTING,
  OFF_DRIFTING: OFF_DRIFTING
})

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
  function(viewIndex) {
    return views.get(viewIndex).factory.init()
  },
  { states: [], dispatches: [] }
]

var UPDATE_FACTORY = [
  function(viewIndex) {
    return views.get(viewIndex).factory.update()
  },
  { states: [], dispatches: [] }
]

var GET_FACTORY_EXHIBIT = [
  function(viewIndex, _ref2) {
    var dispatch = _ref2.dispatch
    return views.get(viewIndex).factory.Exhibit({
      detailing: function detailing(e) {
        return dispatch('DOM:ON_DETAIL', e.target.dataset.index)
      },
      updating: function updating() {
        return dispatch('DOM:UPDATE_VIEW')
      }
    })
  },
  {
    states: [],
    dispatches: ['DOM:ON_DETAIL', 'DOM:UPDATE_VIEW']
  }
]

var GET_FACTORY_DETAIL = [
  function(_ref3) {
    var viewIndex = _ref3.viewIndex,
      detailIndex = _ref3.detailIndex

    var view = views.get(viewIndex)
    view.setDetailIndex(detailIndex)
    return view.factory.Detail(detailIndex)
  },
  { states: [], dispatches: [] }
]

var GET_DETAIL_INDEX = [
  function(index) {
    return views.get(index).getDetailIndex()
  },
  { states: [], dispatches: [] }
]

var OFF_DETAIL_INDEX = [
  function(index) {
    return views.get(index).setDetailIndex(false)
  },
  { states: [], dispatches: [] }
]

var GET_SCROLLTOP = [
  function(index) {
    return views.get(index).getScrollTop()
  },
  { states: [], dispatches: [] }
]

var SET_SCROLLTOP = [
  function(_ref4) {
    var index = _ref4.index,
      value = _ref4.value
    return views.get(index).setScrollTop(value)
  },
  { states: [], dispatches: [] }
]

var View = (function() {
  function View(factory) {
    classCallCheck(this, View)

    this.factory = factory
    this._detailIndex = false
    this._scrollTop = 0
  }

  createClass(View, [
    {
      key: 'getDetailIndex',
      value: function getDetailIndex() {
        return this._detailIndex
      }
    },
    {
      key: 'setDetailIndex',
      value: function setDetailIndex(value) {
        this._detailIndex = value
      }
    },
    {
      key: 'getScrollTop',
      value: function getScrollTop() {
        return this._scrollTop
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

var _store = Object.freeze({
  SET_VIEW: SET_VIEW,
  INIT_FACTORY: INIT_FACTORY,
  UPDATE_FACTORY: UPDATE_FACTORY,
  GET_FACTORY_EXHIBIT: GET_FACTORY_EXHIBIT,
  GET_FACTORY_DETAIL: GET_FACTORY_DETAIL,
  GET_DETAIL_INDEX: GET_DETAIL_INDEX,
  OFF_DETAIL_INDEX: OFF_DETAIL_INDEX,
  GET_SCROLLTOP: GET_SCROLLTOP,
  SET_SCROLLTOP: SET_SCROLLTOP
})

//

var DID_MOUNT = [
  async function(n, _ref) {
    var props = _ref.props,
      dispatch = _ref.dispatch

    var _props = props(),
      views = _props.views,
      firstIndex = _props.firstIndex

    // INIT

    await Promise.all(
      views.map(async function(_ref2, index) {
        var create = _ref2.create

        var factory = create()
        await dispatch('STORE:SET_VIEW', { index: index, factory: factory })
        await dispatch('STORE:INIT_FACTORY', index)
      })
    )

    // RENDER
    var exhibit = await dispatch('STORE:GET_FACTORY_EXHIBIT', firstIndex)
    dispatch('RENDER:BY_REACT_DIDMOUNT', {
      index: firstIndex,
      exhibit: exhibit
    })
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_VIEW',
      'STORE:INIT_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_REACT_DIDMOUNT'
    ]
  }
]

// export const DID_UPDATE = [
//   (n, util) => {},
//   {
//     states: [],
//     dispatches: []
//   }
// ]

var _react = Object.freeze({
  DID_MOUNT: DID_MOUNT
})

//
var OFF_PRELOADING$1 = [
  function(n, _ref) {
    var dispatch = _ref.dispatch
    return dispatch('RENDER:OFF_PRELOADING')
  },
  { states: [], dispatches: ['RENDER:OFF_PRELOADING'] }
]

var SWITCH_VIEW = [
  async function(e, _ref2) {
    var state = _ref2.state,
      dispatch = _ref2.dispatch

    var nowIndex = state().index
    var viewIndex = +e.target.dataset.index

    if (nowIndex === viewIndex) return

    // SET NOW SCROLLTOP STORE
    await dispatch('STORE:SET_SCROLLTOP', {
      index: nowIndex,
      value: scrollDOM().scrollTop
    })

    // RENDER
    var detailIndex = await dispatch('STORE:GET_DETAIL_INDEX', viewIndex)
    dispatch('RENDER:BY_DOM_SWITCH_VIEW', {
      viewIndex: viewIndex,
      exhibit: await dispatch('STORE:GET_FACTORY_EXHIBIT', viewIndex),
      scrollTop: await dispatch('STORE:GET_SCROLLTOP', viewIndex),
      detail:
        isNumber$1(detailIndex) &&
        (await dispatch('STORE:GET_FACTORY_DETAIL', {
          viewIndex: viewIndex,
          detailIndex: detailIndex
        }))
    })
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_SCROLLTOP',
      'STORE:GET_FACTORY_EXHIBIT',
      'STORE:GET_SCROLLTOP',
      'STORE:GET_DETAIL_INDEX',
      'STORE:GET_FACTORY_DETAIL',
      'RENDER:BY_DOM_SWITCH_VIEW'
    ]
  }
]

var UPDATE_VIEW = [
  function(e, _ref3) {
    var state = _ref3.state,
      dispatch = _ref3.dispatch

    var viewIndex = state().index
    return dispatch('STORE:UPDATE_FACTORY', viewIndex)
      .then(function() {
        return dispatch('STORE:GET_FACTORY_EXHIBIT', viewIndex)
      })
      .then(function(exhibit) {
        return dispatch('RENDER:BY_DOM_UPDATE_VIEW', exhibit)
      })
  },
  {
    states: [],
    dispatches: [
      'STORE:UPDATE_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_DOM_UPDATE_VIEW'
    ]
  }
]

var ON_DETAIL$1 = [
  function(index, _ref4) {
    var state = _ref4.state,
      dispatch = _ref4.dispatch
    return (
      index &&
      dispatch('STORE:GET_FACTORY_DETAIL', {
        viewIndex: state().index,
        detailIndex: +index
      }).then(function(detail) {
        return dispatch('RENDER:ON_DETAIL', detail)
      })
    )
  },
  {
    states: [],
    dispatches: ['STORE:GET_FACTORY_DETAIL', 'RENDER:ON_DETAIL']
  }
]

var OFF_DETAIL$1 = [
  function(e, _ref5) {
    var state = _ref5.state,
      dispatch = _ref5.dispatch
    return dispatch('STORE:OFF_DETAIL_INDEX', state().index).then(function() {
      return dispatch('RENDER:OFF_DETAIL')
    })
  },
  {
    states: [],
    dispatches: ['STORE:OFF_DETAIL_INDEX', 'RENDER:OFF_DETAIL']
  }
]

var ON_DRIFTING$1 = [
  function(e, _ref6) {
    var dispatch = _ref6.dispatch
    return dispatch('RENDER:ON_DRIFTING')
  },
  { states: [], dispatches: ['RENDER:ON_DRIFTING'] }
]

var LAG_DRIFTING$1 = [
  function(e, _ref7) {
    var dispatch = _ref7.dispatch
    return dispatch('RENDER:LAG_DRIFTING')
  },
  { states: [], dispatches: ['RENDER:LAG_DRIFTING'] }
]

var OFF_DRIFTING$1 = [
  function(e, _ref8) {
    var state = _ref8.state,
      dispatch = _ref8.dispatch
    return state().drifting === 'lag' && dispatch('RENDER:OFF_DRIFTING')
  },
  { states: [], dispatches: ['RENDER:OFF_DRIFTING'] }
]

var _dom = Object.freeze({
  OFF_PRELOADING: OFF_PRELOADING$1,
  SWITCH_VIEW: SWITCH_VIEW,
  UPDATE_VIEW: UPDATE_VIEW,
  ON_DETAIL: ON_DETAIL$1,
  OFF_DETAIL: OFF_DETAIL$1,
  ON_DRIFTING: ON_DRIFTING$1,
  LAG_DRIFTING: LAG_DRIFTING$1,
  OFF_DRIFTING: OFF_DRIFTING$1
})

var FUNCTION = [function() {}, { states: [], dispatches: [] }]

var _window = Object.freeze({
  FUNCTION: FUNCTION
})

var _ref

// import * as _util from './util'
var entries = Object.entries
var isArray$1 = Array.isArray

var isPureObject = function isPureObject(target) {
  return (
    (typeof target === 'undefined' ? 'undefined' : _typeof(target)) ===
      'object' && !isArray$1(target)
  )
}

var imports = [
  // ['UTIL', _util],
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

var Burger = function() {
  return React.createElement(
    'svg',
    a$1('SVG'),
    React.createElement(
      'g',
      a$1('G'),
      React.createElement('path', a$1('PATH_0')),
      React.createElement('path', a$1('PATH_1')),
      React.createElement('path', a$1('PATH_2'))
    )
  )
}

var a$1 = Atra({
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

var Button = function(_ref) {
  var inform = _ref.inform,
    buttonIndex = _ref.buttonIndex,
    onTouchStart = _ref.onTouchStart,
    children = _ref.children
  return React.createElement(
    'div',
    a$2('ROOT'),
    React.createElement('span', a$2('CHILDREN_WRAP'), children),
    inform > 0 && React.createElement('div', a$2('INFORM'), inform),
    React.createElement(
      'div',
      a$2('CLICK_COVER', {
        'data-index': buttonIndex,
        onTouchStart: onTouchStart
      })
    )
  )
}

var a$2 = Atra({
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

var Detail = function(_ref) {
  var mountWithShut = _ref.mountWithShut,
    onQuit = _ref.onQuit,
    children = _ref.children
  return React.createElement(
    ShutFromLeft,
    { mountWithShut: mountWithShut, onQuit: onQuit, Quit: Quit },
    children
  )
}

var Quit = function Quit(_ref2) {
  var fn = _ref2.fn
  return React.createElement(
    'span',
    a$3('ROOT'),
    React.createElement(
      'svg',
      a$3('SVG'),
      React.createElement('path', a$3('PATH'))
    ),
    React.createElement('span', a$3('COVER', { onTouchEnd: fn }))
  )
}

var a$3 = Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      height: 91,
      position: 'absolute',
      right: 24,
      top: 20
      // left: 16,
    }
  },
  SVG: {
    viewBox: '0 0 300 300'
    // viewBox:"0 -20 300 340"
  },
  PATH: {
    // d: "M 241.83659,7.6084992 58.731126,148.71429 241.83659,289.82008",
    // d: "M 58.370181,291.10579 241.47564,150 58.370181,8.8942098",
    d:
      'M 110.54023,257.79498 258.96569,150 110.54023,42.205019 M 136.35573,150 H 40.755811',
    style: {
      fill: 'none',
      // stroke:"rgb(97, 97, 97)",
      // stroke: "rgb(36, 38, 56)",
      // stroke: "#fff",
      stroke: 'rgb(30, 34, 67)',
      // strokeWidth: 30,
      strokeWidth: 42,
      strokeLinejoin: 'round',
      strokeLinecap: 'round'
    }
  },
  COVER: {
    style: {
      position: 'absolute',
      // background: "rgba(0,0,0,0.3)",
      top: -10,
      bottom: -10,
      left: -10,
      right: -10
    }
  }
})

var Exhibit = function(_ref) {
  var detail = _ref.detail,
    children = _ref.children
  return React.createElement(
    'div',
    a$4('ROOT', { style: { overflowY: !detail ? 'scroll' : 'hidden' } }),
    children
  )
}

var a$4 = Atra({
  ROOT: {
    id: 'exhibitScrollElement',
    style: {
      position: 'relative',
      height: '100%',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch'
    }
  }
})

// textAlign: textAlign || "center",
// paddingTop:160,
// height:innerHeight-160-160,
// overflowY: (!depth) ? "scroll" : "hidden"

var Head = function(_ref) {
  var height = _ref.height,
    word = _ref.word,
    onTouchEnd = _ref.onTouchEnd,
    children = _ref.children
  return React.createElement(
    'header',
    a$5('HEAD_ROOT', { style: { height: height } }),
    React.createElement(
      'span',
      a$5('HEAD_WORD', { style: { marginTop: height - 105 } }),
      word
    ),
    React.createElement(
      'span',
      a$5('HEAD_BUTTON', {
        onTouchEnd: onTouchEnd,
        style: { padding: (height - 100) / 2 + 'px 25px' }
      }),
      children
    )
  )
}

var a$5 = Atra({
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

var BG_WITH_IMG = 'rgba(255, 255, 255, 0.83)'
var BG_NO_IMG = 'rgb(245, 245, 245)'

var Main = function(_ref) {
  var height = _ref.height,
    backgroundStyle = _ref.backgroundStyle,
    children = _ref.children

  var style = Object.assign({}, backgroundStyle, { height: height })
  var background = backgroundStyle.backgroundImage ? BG_WITH_IMG : BG_NO_IMG
  return React.createElement(
    'main',
    a$6('ROOT', { style: style }),
    React.createElement(
      'div',
      a$6('WRAP', { style: { background: background } }),
      children
    )
  )
}

var a$6 = Atra({
  ROOT: {
    style: {
      position: 'relative'
      // backgroundSize: 'cover',
      // backgroundPosition: 'bottom center'
    }
  },

  WRAP: {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
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
        window.requestAnimationFrame(function() {
          return _this2.forceUpdate()
        })
      }
    },
    {
      key: 'wrapStyle',
      value: function wrapStyle() {
        var nowWrapHeight = this.nowWrapHeight

        return typeof nowWrapHeight === 'number'
          ? { top: (window.innerHeight - nowWrapHeight) / 2 - 100 }
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
  var size = _ref.size,
    href = _ref.href,
    buttonImage = _ref.buttonImage,
    coverColor = _ref.coverColor,
    descriptionText = _ref.descriptionText,
    descriptionStyle = _ref.descriptionStyle
  return React.createElement(
    'div',
    a$7('ROOT'),
    React.createElement(
      'span',
      a$7('WRAP', {
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
          a$7('COVER', {
            style: { backgroundColor: coverColor }
          })
        ),
      descriptionText &&
        React.createElement(
          'span',
          a$7('DESCRIPTION', {
            style: descriptionStyle,
            children: descriptionText
          })
        )
    )
  )
}
// style: { background: coverColor || 'rgba(0, 29, 36, 0.48)' }

var a$7 = Atra({
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

var Veil = function(_ref) {
  var drifting = _ref.drifting,
    onTouchEnd = _ref.onTouchEnd,
    onTransitionEnd = _ref.onTransitionEnd
  return React.createElement(
    'div',
    a$8('VEIL', {
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

var a$8 = Atra({
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
var valued = function valued(target) {
  return typeof target === 'function' ? target() : target
}

var SIDE_WIDTH = 370
var HEAD_HEIGHT = 170
var BUTTON_HEIGHT = 150

var listeners = [
  'DOM:OFF_PRELOADING',
  'DOM:SWITCH_VIEW',
  'DOM:OFF_DETAIL',
  'DOM:ON_DRIFTING',
  'DOM:LAG_DRIFTING',
  'DOM:OFF_DRIFTING'
]

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
        return React.createElement(
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
        var veil = this.createVeil()

        var drifting = this.state.drifting

        var transform =
          !drifting || drifting === 'lag'
            ? 'translateX(0px)'
            : 'translateX(' + -SIDE_WIDTH + 'px)'
        var transition = !drifting || drifting === 'lag' ? '0.6s' : '0.72s'

        return React.createElement(
          'div',
          a('ROOT'),
          React.createElement(
            'div',
            a('HEAD_AND_MAIN', { style: { transform: transform } }),
            this.createHead(),
            this.createMain(),
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
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.preloader && !this.state.preloading) {
          this.preloader = null
        }
      }

      /*----------------------- create -----------------------*/
    },
    {
      key: 'createPreload',
      value: function createPreload() {
        return React.createElement(Preload, {
          vanish: typeof this.state.index === 'number',
          onTransitionEnd: this.listeners['DOM:OFF_PRELOADING'],
          children: this.preloader
        })
      }
    },
    {
      key: 'createHead',
      value: function createHead() {
        return React.createElement(
          Head,
          {
            height: HEAD_HEIGHT,
            word: this.props.views[this.state.index].head,
            onTouchEnd: this.listeners['DOM:ON_DRIFTING']
          },
          React.createElement(Burger, null)
        )
      }
    },
    {
      key: 'createMain',
      value: function createMain() {
        var _state = this.state,
          exhibit = _state.exhibit,
          detail = _state.detail

        return React.createElement(
          Main,
          {
            height: window.innerHeight - (HEAD_HEIGHT + BUTTON_HEIGHT),
            backgroundStyle: this.props.exhibitBgStyle
          },
          React.createElement(Exhibit, { detail: detail, children: exhibit }),
          detail &&
            React.createElement(Detail, {
              mountWithShut: detail.mountWithShut,
              children: detail.elements,
              onQuit: this.listeners['DOM:OFF_DETAIL']
            })
        )
      }
    },
    {
      key: 'createButtons',
      value: function createButtons() {
        var _this3 = this

        return this.props.views.map(function(view, index) {
          return React.createElement(Button, {
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
      key: 'createVeil',
      value: function createVeil() {
        return React.createElement(Veil, {
          drifting: this.state.drifting,
          onTouchEnd: this.listeners['DOM:LAG_DRIFTING'],
          onTransitionEnd: this.listeners['DOM:OFF_DRIFTING']
        })
      }
    }
  ])
  return LigureMobile
})(Component)

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

// 'DOM:UPDATE_VIEW',
// 'DOM:ON_DETAIL',
// sides: Array<React$Element>
// backgroundImage: string
// css: string

var Desktop = Guardian(App)
var Mobile = Guardian(LigureMobile)

export { Desktop, Mobile }
