import React from 'react'
import Atra from 'atra'
import { raf, caf, isNum } from '../../util.js'
const { assign } = Object
const lag = (time=0) => new Promise(resolve => setTimeout(resolve, time))

function ref(target){
  if(target && !this.getBothHeight){
    this.getBothHeight = () => ({
      targetHeight: target.clientHeight,
      parentHeight: target.parentNode.clientHeight
    })
  }
}

export default class Certicall extends React.Component {
  constructor(props) {
    super(props)
    this.ref = ref.bind(this)
    this.state = { targetHeight: undefined, parentHeight: undefined }
  }

  render() {
    const attribute = assign({}, this.props, { style: assign({}, this.props.style) })
    const { style, addition } = attribute
    const { targetHeight, parentHeight } = this.state

    if (!isNum(targetHeight) || !isNum(parentHeight)){
      style.visibility = 'hidden'
    } else {
      style.position = 'relative'
      style.top = (parentHeight - targetHeight) / 2 + (addition || 0)
    }

    attribute.addition = undefined

    return <div ref={this.ref} {...attribute} />
  }

  componentDidMount() {
    lag().then(() => {
      const heights = this.getBothHeight()
      return this.rafSetState(heights)
    })
  }

  componentDidUpdate() {
    lag().then(() => {
      const heights = this.getBothHeight()
      return this.isSetState(heights) && this.rafSetState(heights)
    })
  }

  isSetState({ targetHeight, parentHeight }) {
    const { state } = this
    return targetHeight !== state.targetHeight || parentHeight !== state.parentHeight
  }

  rafSetState({ targetHeight, parentHeight }) {
    this.requestId = raf(() => this.setState({ targetHeight, parentHeight }))
  }

  componentWillUnmount() {
    caf(this.requestId)
  }
}