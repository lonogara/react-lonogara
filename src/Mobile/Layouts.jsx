// @flow
import React from 'react'
import Atra from 'atra'
import { ShutFromLeft, ShutFromTop } from "react-shut"
import Center from 'react-vertical-center'

export { ShutFromLeft, ShutFromTop, Center }

export const Button = ((a) =>

  ({ width, inform, svg, children }) =>
    <div {...a('ROOT', { style: { width } })}>
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
      height: '100%',
      position: 'relative'
    }
  },
  WRAP: {
    className: "lonogara_button", // for svg { height: 100%; }
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
      top: "-20%",
      right: "-18%",
      color: '#fff',
      lineHeight: 1.29
    }
  }
}))

export const Head = ((a) =>

  ({
    height,
    backgroundColor,
    word,
    color,
    children
  }) =>
    <header {...a('ROOT', { style: { height, backgroundColor } })}>
      <Center deduct={-12}>
        <span {...a('WORD', { style: { color } })}>
          {word}
        </span>
      </Center>
      <span {...a('BUTTON', { style: { padding: `${(height - 100) / 2}px 25px` } })}>
        {children}
      </span>
    </header>

)(Atra({
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
}))

export const SideItem = ((a) =>

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
      textAlign: 'center',
      marginTop: 75,
      marginBottom: 100
    }
  },
  WRAP: {
    onTouchStart: e => { e.currentTarget.style.borderStyle = 'inset' },
    onTouchEnd: e => { e.currentTarget.style.borderStyle = 'outset' },
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
}))

export const Preload = ((a) =>

  ({
    onTransitionEnd,
    backgroundColor,
    opacity,
    children
  }) =>
    <div {...a('ROOT', {
      onTransitionEnd,
      style: { backgroundColor, opacity }
    })}>
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

export const Veil = ((a) => {

  const BLACK = 'rgba(0, 0, 0, 0.8)'
  const TRANS = 'rgba(0, 0, 0, 0)'

  return ({ onTransitionEnd, drifting, children }) =>
    <div {...a('VEIL', {
      onTransitionEnd,
      style: {
        top: !drifting ? undefined : 0,
        backgroundColor: (!drifting || drifting === "lag") ? TRANS : BLACK
      }
    })}>
      {children}
    </div>

})(Atra({
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
}))

export const QuitDetail = ((a) =>

  ({ children }) => <span {...a("ROOT")}>{children}</span>

)(Atra({
  ROOT: {
    style: {
      zIndex: 1000,
      position: "absolute",
      top : 20,
      right: 24,
      width: 100,
      height: 100
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
      width: '32%',
      display: 'inline-block'
    }
  }
}))