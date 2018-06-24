import assert from 'assert'
import React from 'react'
import * as lonogara from '../src'

const test = (Lonogara) => () =>
<Lonogara {...{
  firstIndex: 0,
  Preloader: () => <div />,
  background: ['url', {}],
  colors: {},
  links: [
    { href: '', buttonImage: '', coverColor: '', description: ['', {}] }
  ],
  views: [
    {
      head: '',
      Button: (props) => <div />,
      create: ({ renderDetail, setPopdown, setInform }) => ({
        Exhibit: () => <div />,
        Detail: ({ data, isContinued }) => <div />
      })
    }
  ]
}} />

it('Desktop', test(lonogara.Desktop))
it('Mobile', test(lonogara.Mobile))