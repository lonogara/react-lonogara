import React from 'react'
import Atra from 'atra'
import Exhibit from './Exhibit'
import Detail from './Detail'

type Props = {
  height: number,
  // backgroundImage: string,
  exhibit: React$Element,
  detail?: React$Element
}

export default ({
  height,
  backgroundStyle,
  // backgroundImage,
  exhibit,
  detail
}) => (
  <main
    {...a('MAIN_ROOT', { style: Object.assign({ height }, backgroundStyle) })}
  >
    <div
      {...a('MAIN_WRAP', {
        style: {
          background: backgroundStyle
            ? 'rgba(255, 255, 255, 0.83)'
            : 'rgb(245, 245, 245)'
        }
      })}
    >
      <Exhibit />
      {detail && <Detail />}
    </div>
  </main>
)

const a = Atra({
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
