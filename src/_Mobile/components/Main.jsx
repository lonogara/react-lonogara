import React from 'react'
import Atra from 'atra'

const BG_WITH_IMG ='rgba(255, 255, 255, 0.83)'
const BG_NO_IMG = 'rgb(245, 245, 245)'

export default ({ height, backgroundStyle, children }) => {
  const style = Object.assign({}, backgroundStyle, { height })
  const background = backgroundStyle.backgroundImage ? BG_WITH_IMG : BG_NO_IMG
  return (
    <main {...a('ROOT', { style })}>
      <div {...a('WRAP', { style: { background } })}>
        {children}
      </div>
    </main>
  )
}

const a = Atra({
  ROOT: {
    style: {
      position: 'relative',
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
