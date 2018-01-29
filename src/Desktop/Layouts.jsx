// @flow
import React from 'react'
import Atra from 'atra'
import { ShutFromLeft, ShutFromTop } from 'react-shut'
import Center from 'react-centpn'
import { Preload } from '../Layouts.jsx'

export { ShutFromLeft, ShutFromTop, Center, Preload }

export const Button = ((a) =>

  ({
    width,
    borderBottomColor,
    inform,
    svg,
    children
  }) =>
    <div {...a('ROOT', { style: { width, borderBottomColor } })}>
      <span {...a('WRAP')}>
        {svg}
        {inform > 0 && <div {...a('INFORM')}>{inform}</div>}
        {children}
      </span>
    </div>

)(Atra({
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
    className: "lonogara_button", // for svg { height: 100%; }
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
      top: "-28%",
      right: "-24%",
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
}))

export const DimItem = ((a) =>

  ({
    size,
    buttonImage,
    coverColor,
    descriptionText,
    descriptionStyle,
    children
  }) =>
    <div {...a('ROOT')}>
      <span {...a('WRAP', { style: { width: size, height: size, backgroundImage: buttonImage } })}>
        {coverColor && <span {...a('COVER', { style: { backgroundColor: coverColor } })} />}
        {descriptionText && <span {...{ style: descriptionStyle }}>{descriptionText}</span>}
        {children}
      </span>
    </div>

)(Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      textAlign: 'center',
      padding: 28
    }
  },
  WRAP: {
    onMouseDown: e => { e.currentTarget.style.borderStyle = 'inset' },
    onMouseUp: e => { e.currentTarget.style.borderStyle = 'outset' },
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
}))

export const DimBoard = ((a) =>

  ({ backgroundColor, children }) =>
    <div {...a('ROOT', { style: { backgroundColor } })}>
      {children}
    </div>

)(Atra({
  ROOT: {
    style: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
  }
}))

export const DimSwitch = ((createA) => {

  const transform = -12
  const a = createA({ transform })

  return ({ children }) =>
    <div {...a('ROOT')}>
      <span {...a('WRAP')}>
        {children}
      </span>
    </div>

})(({ transform }) => Atra({
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
    onMouseDown: (e) => {
      const { style } = e.currentTarget

      style.transitionDuration = '0.1s'
      style.transform = 'translateY(0px)'

      setTimeout(() => {
        style.transitionDuration = '0.4s'
        style.transform = `translateY(${transform}px)`
      }, 100)
    },
    style: {
      display: 'inline-block',
      height: '100%',
      position: 'relative',
      transform: `translateY(${transform}px)`,
      cursor: 'pointer'
    }
  }
}))

export const QuitDetail = ((a) =>

  ({ children }) => <span {...a("ROOT")}>{children}</span>

)(Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      width: 50,
      height: 50,
      position: "absolute",
      top: 8,
      right: 20,
      cursor: 'pointer'
    }
  }
}))

export const QuitPopdown = ((a) =>

  ({ children }) =>
    <div {...a("ROOT")}>
      <span {...a("WRAP")}>
        {children}
      </span>
    </div>

)(Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      position: "absolute",
      bottom : 17,
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
}))