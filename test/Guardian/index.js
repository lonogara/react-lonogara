import assert from 'assert'
import sinon from 'sinon'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
enzyme.configure({ adapter: new Adapter() })

import Guardian from '../../src/Guardian'

// console.log(Guardian);

describe(``, () => {
  it(``, () => {})
})
// new Promise((resolve) => {
//   const wrapper = enzyme.mount(<Mobile {...props} />)
//   console.log(wrapper.instance())
//   setTimeout(() => {
//     console.log(wrapper.html())
//     resolve()
//   }, 3000)
// })

const props = {
  // firstIndex: 0,
  // Preloader: () => <div></div>,
  Preloader: <div />,
  // colors: {
  //   base: "#232323",
  //   sub: "#232323",
  //   side: "#232323"
  // },
  exhibitBackground: ['./fewfw/f.png', {}],
  detailStyle: { rootClassName: 'markdownRoot', cssString: `` },
  // detailStyle: ["markdownRoot", ``],
  views: [
    {
      head: 'hoge',
      Button: props => {
        console.log(props.choised)
        return <div />
      },
      factory: () => ({
        init() {
          return new Promise((resolve, reject) => setTimeout(resolve, 1000))
        },
        Exhibit() {
          return <div />
        }
      })
    },
    {
      head: 'hoge',
      Button: () => <div />,
      factory: () => ({
        init() {
          return new Promise((resolve, reject) => setTimeout(resolve, 1000))
        },
        Exhibit() {
          return <div />
        }
      })
    },
    {
      head: 'hoge',
      Button: () => <div />,
      factory: () => ({
        init() {
          return new Promise((resolve, reject) => setTimeout(resolve, 1000))
        },
        Exhibit() {
          return <div />
        }
      })
    },
    {
      head: 'hoge',
      Button: () => <div />,
      factory: () => ({
        init() {
          return new Promise((resolve, reject) => setTimeout(resolve, 1000))
        },
        Exhibit() {
          return <div />
        }
      })
    }
  ],
  sides: [
    {
      href: 'https://github.com/'
    },
    {
      href: 'https://github.com/',
      buttonBackground:
        'url(https://78.media.tumblr.com/8e7b68e26cd7e53c72b66dd262c13727/tumblr_oyyoq3dOHP1wtbsfuo1_500.jpg)',
      coverBackground: '#373737'
    },
    {
      href: 'https://github.com/',
      description: [
        'hogheohgoege',
        {
          height: 100,
          top: -100
        }
      ]
    }
  ]
}
