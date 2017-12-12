// @flow
import React, { Component } from 'react'
import Atra from 'atra'
import guardian from '../guardian'
import orph from './orph'

class LonogaraDesktop extends Component {
  constructor(props) {
    console.log(orph.list());
    super(props)
  }

  render() {
    return <div>{'desktop'}</div>
  }
}

export default guardian(LonogaraDesktop)