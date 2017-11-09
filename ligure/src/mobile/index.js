import React, { Component } from 'react'
import orph from './orph'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  componentWillMount() {
    orph.attach(this)
  }

  render() {
    return <div>{this.state.num}</div>
  }

  componentDidMount() {
    orph.dispatch('DidMount')
  }

  componentDidUpdate() {}
}
