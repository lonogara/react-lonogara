import React from 'react'
import Atra from 'atra'

export default class Preload extends React.Component {
  constructor(props){
    super(props)
    this.a = A({ onTransitionEnd: props.onTransitionEnd, ref: wrapRef.bind(this) })
  }

  render(){
    const { a } = this
    return (
      <div {...a('ROOT', { style: { opacity: this.props.vanish ? 0 : 1 } })}>
        <span {...a('WRAP', { style: this.wrapStyle() })}>
          {this.props.children}
        </span>
      </div>
    )
  }

  componentDidMount(){
    this.nowWrapHeight = this.wrapHeight()
    window.requestAnimationFrame(() => this.forceUpdate())
  }

  wrapStyle(){
    const { nowWrapHeight } = this
    return typeof nowWrapHeight === "number"
      ? { top: (window.innerHeight - nowWrapHeight) / 2 - 100 }
      : { visibility: "hidden" }
  }
}

function wrapRef(target){
  this.wrapHeight = !this.wrapHeight
    ? () => target.clientHeight
    : null
}

const A = ({ onTransitionEnd, ref }) => Atra({
  ROOT: {
    onTransitionEnd,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: 'center',
      background: '#eeeeee',
      transition: '0.4s'
    }
  },
  WRAP: {
    ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }
})

