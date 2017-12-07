import React from 'react'
import Atra from 'atra'
import { Burger } from './components'

const burger = <Burger />

export default ({
  height,
  word,
  onTouchEnd,
  children
}) =>
  <header {...a('HEAD_ROOT', { style: { height } })}>
    <span {...a('HEAD_WORD', { style: { marginTop: height - 105 } })}>
      {word}
    </span>
    <span {...a('HEAD_BUTTON', { onTouchEnd, style: { padding: `${(height - 100) / 2}px 25px` } })}>
      {burger}
    </span>
  </header>

const a = Atra({
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
