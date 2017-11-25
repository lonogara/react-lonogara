// @flow
import View from './View.js'

const views = new Map()

export const SET_VIEW = [
  ({ index, factory }) => views.set(index, new View(factory)),
  { states: [], dispatches: [] }
]

export const INIT_FACTORY = [
  index =>
    views
      .get(index)
      .factory()
      .init(),
  { states: [], dispatches: [] }
]

export const UPDATE_FACTORY = [
  index =>
    views
      .get(index)
      .factory()
      .update(),
  { states: [], dispatches: [] }
]

export const GET_FACTORY_EXHIBIT = [
  index =>
    views
      .get(index)
      .factory()
      .Exhibit(),
  { states: [], dispatches: [] }
]

export const GET_FACTORY_DETAIL = [
  ({ viewIndex, exhibitIndex }) => {
    const view = views.get(viewIndex)
    view.setDetailing(true)
    return view.factory().Detail(exhibitIndex)
  },
  { states: [], dispatches: [] }
]

export const GET_DETAILING = [
  index => views.get(index).detailing(),
  { states: [], dispatches: [] }
]

export const OFF_DETAILING = [
  index => views.get(index).setDetailing(false),
  { states: [], dispatches: [] }
]

export const GET_SCROLLTOP = [
  index => views.get(index).scrollTop(),
  { states: [], dispatches: [] }
]

export const SET_SCROLLTOP = [
  ({ index, value }) => views.get(index).setScrollTop(value),
  { states: [], dispatches: [] }
]
