import React from 'react'
import Atra from 'atra'
// import Veil from "../Veil.js";
import Burger from './Burger.js'

export default ({ height, headword, colors, listener }) => {
  let { base, sub } = colors
  return (
    <header
      {...a('root', {
        style: {
          height,
          backgroundColor: base
        }
      })}
    >
      <div {...a('wrap')}>
        <span
          {...a('word', {
            color: sub,
            marginTop: height - 105,
            children: headword
          })}
        />
        <span
          {...a('span', {
            onTouchEnd: listener,
            paddingFirst: (height - 100) / 2,
            children: <Burger {...{ color: sub }} />
          })}
        />
      </div>
    </header>
  )
}

const a = Atra({
  root: ({ height, backgroundColor }) => ({
    height,
    backgroundColor,
    // background: "rgb(36, 38, 56)",
    // position:"absolute",
    // top:0,
    // right:9,
    // height: 140,
    position: 'relative'
  }),

  wrap: {
    // height:"100%"
    // height: 100,
    textAlign: 'center'
    // padding: "20px 15px"
  },

  word: ({ children, color, marginTop }) => ({
    children,
    style: {
      color,
      marginTop,
      fontSize: '2.5em',
      fontWeight: 'bold',
      letterSpacing: 2,
      // color: "#ffffff",
      display: 'inline-block'
      // lineHeight: 3.8
      // marginTop: "9%"
      // marginTop: 72
      // marginTop: 80
    }
  }),

  // grand:{
  //     height: "100%",
  //     display: "inline-block",
  //     float: "right"
  // },

  span: ({ onTouchEnd, children, paddingFirst }) => ({
    id: 'forSlideAppear',
    onTouchEnd,
    children,
    style: {
      height: 100,
      padding: `${paddingFirst}px 25px`,
      // "45px 25px"
      position: 'absolute',
      right: 0,
      top: 0,
      display: 'inline-block',
      textAlign: 'center'
    }
  })
})
