import React from 'react'
import Atra from 'atra'

export default ({ side, sides }) => (
  <aside {...a('root', { side })}>
    {sides.map(
      ({ src, href, text, style }, sideIndex) =>
        !text ? (
          <ButtonNoText
            {...{
              key: sideIndex,
              src,
              href
            }}
          />
        ) : (
          <ButtonWithText
            {...{
              key: sideIndex,
              src,
              href,
              text,
              style
            }}
          />
        )
    )}
  </aside>
)

const ButtonNoText = ({ src, href }) => (
  <div {...a('child')}>
    <span {...a('button', { src, href })} />
  </div>
)

const ButtonWithText = ({ src, href, text, style }) => {
  let { top, coverColor, textStyle } = style
  return (
    <div {...a('child')}>
      <span {...a('button', { src, href })}>
        <span {...a('color_cover', { style: coverColor })} />
        <span {...a('description', { top, text, textStyle })} />
        {/* <span {...a("button_href",{href})} /> */}
      </span>
    </div>
  )
}

const a = Atra({
  root: ({ side }) => ({
    id: 'side_root',
    style: {
      position: 'fixed',
      top: 0,
      bottom: 160,
      left: innerWidth,
      fontSize: 34,
      color: '#fff',
      // background: "rgba(255, 255, 255, 0.42)",
      width: 370,
      WebkitOverflowScrolling: 'touch',
      overflowScrolling: 'touch',
      overflowY: 'scroll',
      transform: `translateX(${!side || side == 'wait' ? 0 : -370}px)`,
      transition: !side || side == 'wait' ? '0.6s' : '0.72s'
    }
  }),
  child: {
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 100
    // marginLeft:50
  },
  button: ({ src, href }) => ({
    onTouchStart: touchstart,
    onTouchEnd: ho_touchend(href),
    style: {
      background: `url(${src})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: 176,
      height: 176,
      display: 'inline-block',
      borderRadius: 130,
      verticalAlign: 'middle',
      border: 'solid',
      border: '8px outset rgb(255, 255, 255)',
      position: 'relative'
    }
  }),
  color_cover: coverColor => ({
    display: 'inline-block',
    width: '100%',
    height: '100%',
    borderRadius: 130,
    background: coverColor || 'rgba(0, 29, 36, 0.48)'
  }),
  description: ({ top, text, textStyle }) => ({
    children: text,
    style: Object.assign(
      {
        position: 'relative',
        top: top,
        // fontSize:"0.9em"
        fontSize: '0.87em'
      },
      textStyle
    )
  })
})

const touchstart = e => {
  e.currentTarget.style.borderStyle = 'inset'
}

const ho_touchend = href => e => {
  e.currentTarget.style.borderStyle = 'outset'
  return setTimeout(() => clickA(href), 0)
}

const clickA = href => {
  if (!href) return false
  let a = document.createElement('a')
  a.href = href
  a.target = href.includes('tel') ? '' : '_blank'
  a.click()
}
