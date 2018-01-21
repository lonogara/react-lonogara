// @flow

export default (extension = {}) => {

  const views: Map<View> = new Map()

  return [Object.assign(extension, {
    
    INIT: ({ index, initials }): void => views.set(index, new View(initials)),

    SET_DATA: ({ index, key, value }): void => views.get(index).setData(key, value),

    GET_DATA: ({ index, key }) => views.get(index).getData(key)

  }),{
    prefix: 'STORE:',
    use: {}
  }]
}

class View {
  constructor(initials) {
    this.data = new Map()
    initials.forEach(({ key, value }) => this.data.set(key, value))
  }

  setData(key, value) {
    this.throwInvalidKey(key)
    this.data.set(key, value)
  }

  getData(key) {
    this.throwInvalidKey(key)
    return this.data.get(key)
  }

  throwInvalidKey(key) {
    if (!this.data.has(key)) {
      throw new Error(`STORE: ${key} is not set.`)
    }
  }
}