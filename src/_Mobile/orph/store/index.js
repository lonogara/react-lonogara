// @flow

const views = new Map()

type Exhibit$Props = {
  detailing: (SyntheticTouchEvent<*>) => void,
  updating: (SyntheticTouchEvent<*>) => void
}

type Factory = {
  init(): Promise<void>,
  update(): Promise<void>,
  Exhibit(props: Exhibit$Props): React$Node,
  Detail(index: number): React$Node
}

export const SET_VIEW = [
  ({ index, factory }: { index: number, factory: Factory }) =>
    views.set(index, new View(factory)),
  { states: [], dispatches: [] }
]

export const INIT_FACTORY = [
  (viewIndex: number): Promise<void> => views.get(viewIndex).factory.init(),
  { states: [], dispatches: [] }
]

export const UPDATE_FACTORY = [
  (viewIndex: number): Promise<void> => views.get(viewIndex).factory.update(),
  { states: [], dispatches: [] }
]

export const GET_FACTORY_EXHIBIT = [
  (viewIndex: number, { dispatch }): React$Node =>
    views.get(viewIndex).factory.Exhibit({
      detailing: e => dispatch('DOM:ON_DETAIL', e.target.dataset.index),
      updating: () => dispatch('DOM:UPDATE_VIEW')
    }),
  {
    states: [],
    dispatches: ['DOM:ON_DETAIL', 'DOM:UPDATE_VIEW']
  }
]

export const GET_FACTORY_DETAIL = [
  ({ viewIndex, detailIndex }) => {
    const view = views.get(viewIndex)
    view.setDetailIndex(detailIndex)
    return view.factory.Detail(detailIndex)
  },
  { states: [], dispatches: [] }
]

export const GET_DETAIL_INDEX = [
  index => views.get(index).getDetailIndex(),
  { states: [], dispatches: [] }
]

export const OFF_DETAIL_INDEX = [
  index => views.get(index).setDetailIndex(false),
  { states: [], dispatches: [] }
]

export const GET_SCROLLTOP = [
  index => views.get(index).getScrollTop(),
  { states: [], dispatches: [] }
]

export const SET_SCROLLTOP = [
  ({ index, value }) => views.get(index).setScrollTop(value),
  { states: [], dispatches: [] }
]

class View {
  constructor(factory) {
    this.factory = factory
    this._detailIndex = false
    this._scrollTop = 0
  }
  getDetailIndex() {
    return this._detailIndex
  }
  setDetailIndex(value) {
    this._detailIndex = value
  }
  getScrollTop() {
    return this._scrollTop
  }
  setScrollTop(value) {
    this._scrollTop = value
  }
}
