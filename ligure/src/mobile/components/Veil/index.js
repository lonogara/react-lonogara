import React from 'react'
import Atra from 'atra'

export default ({ listener, side }) => (
  <div {...a('veil', { listener, side })} />
)

const a = Atra({
  veil: ({ listener, side }) => ({
    className: 'black_veil',
    onTouchEnd: listener,
    style: {
      position: 'absolute',
      width: '100%',
      transition: '0.6s',
      bottom: 0,
      top: !side ? undefined : 0,
      background:
        !side || side === 'wait' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.8)',
      borderRight: 'solid 0.2px #3a3a3a'
    }
  })
})

// (({side})=>{
//     if(!side) return styles.veil;
//     if(side === true) return Object.assign({},styles.veil,styles._true);
//     if(side === "wait") return Object.assign({},styles.veil,styles.wait);
// })(style)
// style:(({side})=>{
//     if(!side) return styles.veil;
//     if(side === true) return Object.assign({},styles.veil,styles._true);
//     if(side === "wait") return Object.assign({},styles.veil,styles.wait);
// })(style)
// const styles = {
//     veil:{
//         position : "absolute",
//         width : "100%",
//         bottom : 0,
//         background : "rgba(0, 0, 0, 0)",
//         transition : "0.6s"
//     },
//     _true:{
//         top:0,
//         background:"rgba(0, 0, 0, 0.8)"
//     },
//     wait:{
//         top:0
//     }
// }
