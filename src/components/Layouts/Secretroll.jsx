import React, { Component } from 'react'
import { raf, caf, isNum } from '../../util.js'
const { assign } = Object
const SCROLL_BAR = 17
const pushBar = (value) => value + SCROLL_BAR

function ref(target){
  const { parentNode } = target || {}
  if(parentNode && !this.getParentSize){
    this.getParentSize = () => ({
      parentWidth: parentNode.offsetWidth,
      parentHeight: parentNode.offsetHeight
    })
  }
}

export default class Secretroll extends Component {
  constructor(props) {
    super(props)
    this.ref = ref.bind(this)
    this.state = { parentWidth: undefined, parentHeight: undefined }
  }

  render() {
    const attribute = assign({}, this.props, { style: assign({}, this.props.style) })
    const { style } = attribute
    const { parentWidth, parentHeight } = this.state

    if (!isNum(parentWidth) || !isNum(parentHeight)){
      style.visibility = 'hidden'
    } else {
      const { overflow, overflowY, overflowX } = style

      if(overflow === 'scroll' || overflowY === 'scroll') {
        style.width = pushBar(parentWidth)
      }
      if(overflow === 'scroll' || overflowX === 'scroll') {
        style.height = pushBar(parentHeight)
      }
    }

    return <div ref={this.ref} {...attribute} />
  }

  componentDidMount() {
    const size = this.getParentSize()
    return this.rafSetState(size)
  }

  componentDidUpdate() {
    const size = this.getParentSize()
    return this.isSetState(size) && this.rafSetState(size)
  }

  isSetState({ parentWidth, parentHeight }) {
    const { state } = this
    return parentWidth !== state.parentWidth || parentHeight !== state.parentHeight
  }

  rafSetState({ parentWidth, parentHeight }) {
    this.requestId = raf(() => this.setState({ parentWidth, parentHeight }))
  }

  componentWillUnmount() {
    caf(this.requestId)
  }
}