import React from 'react'
import Atra from 'atra'
import Block from './Block.js'
// import More

export default ({ depth, centerMagnet, blocks, textAlign, done, listener }) => (
  <section {...a('shallow', { depth, textAlign })}>
    <div {...a('absolutyWrap', { centerMagnet })}>
      {blocks.map((block, blocksIndex) => (
        <Block
          {...{
            block,
            blocksIndex,
            done,
            listener,
            key: blocksIndex
          }}
        />
      ))}
      {/* <More /> */}
    </div>
  </section>
)

const a = Atra({
  shallow: ({ depth, textAlign }) => ({
    id: 'shallowTouched',
    // ref:(div)=>{
    //     console.log([div]);
    //     if(!div || depth) return false;
    //     div.scrollTop = scrollTop;
    // },
    style: {
      position: 'relative',
      height: '100%',
      textAlign: textAlign || 'center',
      // paddingTop:160,
      // height:innerHeight-160-160,
      WebkitOverflowScrolling: 'touch',
      overflowScrolling: 'touch',
      overflowY: !depth ? 'scroll' : 'hidden'
    }
  }),

  absolutyWrap: ({ centerMagnet }) =>
    typeof centerMagnet === 'number'
      ? {
          id: 'absoluty_wrap',
          'data-top': centerMagnet,
          style: {
            position: 'absolute',
            width: '100%'
          }
        }
      : {
          style: {
            position: 'absolute',
            width: '100%',
            top: 0
          }
        }
})
