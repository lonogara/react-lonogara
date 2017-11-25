// @flow

export default class View {
  // _factory: any
  // _detailing: boolean
  // _scrollTop: number

  constructor(factory) {
    this._factory = factory
    this._detailing = false
    this._scrollTop = 0
  }
  factory() {
    return this._factory
  }
  detailing() {
    return this._detailing
  }
  scrollTop() {
    return this._scrollTop
  }
  setDetailing(value) {
    this._detailing = value
  }
  setScrollTop(value) {
    this._scrollTop = value
  }
}
