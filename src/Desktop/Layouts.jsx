// @flow
import React from 'react'
import Atra from 'atra'
import { ShutFromLeft, ShutFromTop } from 'react-shut'
import { Certicall, Secretroll } from '../components/Layouts'

export { ShutFromLeft, ShutFromTop, Certicall, Secretroll }

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
      </span>
      {children}
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
      height: '44%'
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
}))

export const DimBoard = ((a) =>

  ({ children }) => <div {...a('ROOT')}>{children}</div>

)(Atra({
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
    },
    onMouseUp: (e) => {
      const { style } = e.currentTarget
      style.transitionDuration = '0.4s'
      style.transform = `translateY(${transform}px)`
    },
    style: {
      display: 'inline-block',
      height: '100%',
      position: 'relative',
      transform: `translateY(${transform}px)`
    }
  }
}))

export const Preload = ((a) =>

  ({
    onTransitionEnd,
    backgroundColor,
    opacity,
    children
  }) =>
    <div {...a('ROOT', { onTransitionEnd, style: { backgroundColor, opacity } })}>
      {children}
    </div>

)(Atra({
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
      right: 8
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
      display: 'inline-block'
    }
  }
}))