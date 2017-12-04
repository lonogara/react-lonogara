// @flow

export const SET_VIEW = setView
export const UPDATE_FACTORY = updateView
export const GET_DETAIL_INDEX = getDetailIndex
export const OFF_DETAIL_INDEX = offDetailIndex
export const GET_SCROLLTOP = getScrollTop
export const SET_SCROLLTOP = setScrollTop
export const GET_FACTORY_EXHIBIT = [
  getFactoryExhibit,
  { dispatches: ['DOM:ON_DETAIL', 'DOM:UPDATE_VIEW'] }
]
export const GET_FACTORY_DETAIL = getFactoryDetail

function setView({ index, factory }: { index: number, factory: Factory }) {
  views.set(index, new View(factory))
}
function updateView(viewIndex: number): Promise<void> {
  return views.get(viewIndex).factory.update()
}
function getDetailIndex(index) {
  return views.get(index).getDetailIndex()
}
function offDetailIndex(index) {
  views.get(index).setDetailIndex(false)
}
function getScrollTop(index) {
  return views.get(index).getScrollTop()
}
function setScrollTop({ index, value }) {
  views.get(index).setScrollTop(value)
}
function getFactoryExhibit(viewIndex: number, { dispatch }): React$Node {
  return views.get(viewIndex).factory.Exhibit({
    detailing: e => dispatch('DOM:ON_DETAIL', e.target.dataset.index),
    updating: () => dispatch('DOM:UPDATE_VIEW')
  })
}
function getFactoryDetail({ viewIndex, detailIndex }) {
  const view = views.get(viewIndex)
  view.setDetailIndex(detailIndex)
  const detailElements = view.factory.Detail(detailIndex)
  return detailElements
}

const views = new Map()

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
