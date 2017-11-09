'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Stop = require('./Stop.js')

var _Stop2 = _interopRequireDefault(_Stop)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var transition = '0.3s ease-in-out'
// import CoverSlider from 'layout-coverslider'
// import Ghost from 'layout-svg-ghost'

var firstArg = {
  reactLifeCycle: true,
  type: 'render',
  listenerName: 'firstCallback'
}

var quitArg = {
  reactLifeCycle: true,
  type: 'render',
  listenerName: 'quitCallback'
}

exports.default = function(_ref) {
  var depth = _ref.depth,
    depthClassName = _ref.depthClassName,
    depthBackground = _ref.depthBackground,
    rash = _ref.rash,
    listener = _ref.listener
  return _react2.default.createElement(
    CoverSlider,
    {
      Quit: _Stop2.default,
      rash: rash,
      mobile: {
        transition: transition,
        background: depthBackground
      },
      callbacks: {
        first: function first() {
          return listener(firstArg)
        },
        quit: function quit() {
          return listener(quitArg)
        }
      }
    },
    _react2.default.createElement(
      'div',
      {
        className: depthClassName,
        style: {
          position: 'relative',
          // padding: "120px 50px 100px",
          padding: '20px 50px 100px',
          fontSize: 42,
          letterSpacing: 2
          // color: "#fff"
        }
      },
      _react2.default.createElement(Ghost, {
        rootStyle: ghostStyle,
        condition: { come: rash === true },
        children:
          typeof depth === 'function'
            ? (function(Depth) {
                return _react2.default.createElement(Depth, null)
              })(depth)
            : depth
      }),
      _react2.default.createElement(
        'style',
        null,
        '\n                img {\n                    width: 100%;\n                    object-fit: cover;\n                }\n                figure {\n                    margin: 0px;\n                }\n            '
      )
    )
  )
}

var ghostStyle = {
  display: 'inline-block',
  width: '100%'

  // // width: "92%",
  // // margin: "120px auto 100px",
  // {/* <Stop {...{listener}} /> */}
  /*
  firstCallback => rash = true
  => CoverSlider recognize `rash === true`
  => quit === true(rash === "quit") or transitionEnd run when `transform !== "translateX(0px)"`
  => quitCallback run
  => rash === false && depth === null
  */

  // transition,
  // firstCallback:
  // rash: rash,
  // quit: (rash === "quit"),
  // quitCallback:
  // {/* {depth} */}
  // {/* <Hast {...{rash: depth}} /> */}
  // {/* {rashToReact(depth)} */}
  // {/* {processor.processSync(data).blocks} */}
  // {/* <style jsx>{`
  //     :global(img) {
  //     width: 100%;
  //     object-fit: cover;
  // }
  // `}</style> */}
  // let {data,assets} = depth,
  // remarkReactComponents = ho_remarkReactComponents(assets),
  // processor = ho_markdownToReact(remarkReactComponents);

  // import ho_markdownToReact from "../ho_markdownToReact.js";
  // import svgToReact from "../svgToReact.js";
  // import Ghost from "layout-svg-ghost";
  // import Circuit from "layout-svg-circuit";
  // import rashToReact from "../rashToReact.js";
  // const layouts = {
  //     ghost: Ghost,
  //     circuit: Circuit
  // };
  //
  // const ho_remarkReactComponents = (assets) => ({
  //     img: (props) => (
  //         (props.src)
  //         ? <img src={props.src} />
  //         : (()=>{
  //             let {alt} = props,
  //                 asset = assets[alt],
  //                 {src,style} = asset;
  //
  //             if(src){
  //                 return <img {...{src,style}} />
  //             }else{
  //                 let {svg,layout} = asset,
  //                     Layout = layouts[layout];
  //                 return <Layout {...{
  //                     rootStyle: style,
  //                     children: svgToReact.processSync(svg).blocks
  //                 }} />;
  //             }
  //         })()
  //     )
  // })

  /*
  firstCallback(first)
  comeCallback(transitionEnd)
  rash(didmount)
  quit(willreceiveprops)
  quitCallback(transitionEnd)
  */

  // const divStyle = {
  //     background: "rgb(251, 251, 251)"
  // }

  // transition: "0.4s ease-in",
  // transition: "1s",
  // import CoverSlider from "../../../../common/willpublish/CoverSlider/index.js";
  // import CoverSlider from "sidelayer";
}
