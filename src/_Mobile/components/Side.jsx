import React from 'react'
import Atra from 'atra'

type Props = {
  size: number,
  href: string,
  buttonImage: string,
  coverColor: string,
  description: [string, { [key: string]: string }]
}

export default ({
  href,
  size,
  buttonImage,
  coverColor,
  descriptionText,
  descriptionStyle
}) =>
  <div {...a('ROOT')}>
    <span {...a('WRAP', {
      onTouchStart,
      onTouchEnd: HoTouchEnd(href),
      style: {
        width: size,
        height: size,
        backgroundImage: buttonImage
      }
    })}>
      {coverColor && (
        <span {...a('COVER', {
          style: { backgroundColor: coverColor }
        })} />
      )}
      {descriptionText && (
        <span {...a('DESCRIPTION', {
          style: descriptionStyle,
          children: descriptionText
        })} />
      )}
    </span>
  </div>

const a = Atra({
  ROOT: {
    style: {
      textAlign: 'center',
      marginTop: 75,
      marginBottom: 100
    }
  },
  WRAP: {
    style: {
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      borderRadius: '100%',
      verticalAlign: 'middle',
      border: 'solid',
      border: '8px outset rgb(255, 255, 255)',
      position: 'relative'
    }
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

const onTouchStart = e => {
  e.currentTarget.style.borderStyle = 'inset'
}

const HoTouchEnd = href => e => {
  e.currentTarget.style.borderStyle = 'outset'
  return (
    href &&
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = href
      a.target = href.includes('tel') ? '' : '_blank'
      a.click()
    }, 0)
  )
}
