// @flow

const views = new Map()

class View {
  constructor() {
    this.components = {}
    this.data = {}
  }

  setComponent({ componentName, Component }) {
    this.components[componentName] = Component
  }

  setData({ dataName, value }) {
    this.data[dataName] = value
  }

  getComponent({ componentName, dataName }) {
    const Component = this.components[componentName]
    const data = this.data[dataName]
    return { Component, data }
  }
}

export const INIT = (index): void => views.set(index, new View())

export const SET_COMPONENT = ({ index, componentName, Component }): void =>
  views.get(index).setComponent({ componentName, Component })

export const SET_DATA = ({ index, dataName, value }): void =>
  views.get(index).setData({ dataName, value })

export const GET_COMPONENT = ({ index, componentName, dataName }) =>
  views.get(index).getComponent({ componentName, dataName })
