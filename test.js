describe(`test require`, () => {
  global.window = {}
  it(`cjs.js`, () => require('./dist/cjs.js'))
})
