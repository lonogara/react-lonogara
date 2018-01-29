import React from 'react'
import { render } from 'react-dom'
import { House } from 'lonogara-tool/button'
import { RotaingPlaneLoading as Preloader } from 'lonogara-tool/preloader'
import * as lonogara from '../src'

window.addEventListener('load', () => {

  const isMobile = navigator.userAgent.toLowerCase().includes('mobile')
  const App = isMobile ? lonogara.Mobile : lonogara.Desktop

  render(
    <App {...{

      firstIndex: 0,

      Preloader: () => <Preloader size={60} />,

      background: ['./background.jpg', {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }],

      colors: {
        base: 'rgb(24, 24, 35)',
        sub: 'rgb(255, 255, 255)',
        background: 'rgba(242, 242, 242, 0.5)',
        preloader: 'rgb(241, 241, 241)',
        detail: 'rgb(243, 243, 243)',
        detailQuit: 'rgb(201, 201, 201)',
        links: isMobile ? 'rgb(183, 220, 197)' : 'rgba(255, 254, 238, 0.8)'
      },

      links: arr(20).map(index => ({
        href: 'https://google.com',
        buttonImage: 'https://moshbox.jp/be/wp-content/uploads/2016/03/56e8898ca0705512x512bb_223x223.jpg',
        coverColor: 'rgba(228, 228, 228, 0.39)',
        description: ['Google', {}]
      })),

      // views: []
      views: arr(4).map(viewIndex => ({
        head: `head_${viewIndex}`,
        Button: House,
        create: async ({ renderDetail, setPopdown, setInform }) => {

          const divLength = 50
          const informs = arr(divLength).map(() => true)

          await setInform(divLength)

          return {

            Exhibit: () => informs.map((isInformed, index) =>
              <div key={index} {...{
                onClick: () =>
                  renderDetail({ index })
                  .then(() => {
                    if (isInformed) {
                      informs[index] = false
                      setInform(
                        informs.filter(inform => inform).length
                      )
                    }
                  }),
                style: {
                  opacity: 0.6,
                  cursor: 'pointer',
                  height: isMobile ? 300 : 200,
                  width: '97%',
                  margin: '20px auto',
                  backgroundColor: `rgb(${index * 5}, 70, 70)`,
                  borderRadius: 5
                }
              }}>
                <span {...{
                  style: {
                    marginLeft: 5,
                    color: '#ffffff'
                  }
                }}>
                  {`isInformed: ${isInformed}`}
                </span>
              </div>
            ),

            Detail: ({ data, isContinued }) =>
              <div {...{ style: { width: '95%', margin: 'auto' } }}>
                <p>{`index: ${data.index}`}</p>
                <p>{`isContinued: ${isContinued}`}</p>
                <p>{`backgroundColor: rgb(${data.index * 5}, 70, 70)`}</p>
              </div>
          }
        }
      }))
    }} />,
    document.getElementById('app')
  )
})

const arr = num => [...lengthGenerate(num)]
function* lengthGenerate(num) {
  let from = 0
  while (from < num) {
    yield from
    from++
  }
}
