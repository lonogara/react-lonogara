import Orph from 'orph'

const orph = new Orph()

orph.add('DidMount', (e, { props, render }) => {
  const { views, viewIndex } = props()

  Promise.all(views.map(view => {})).then(views =>
    render({
      views,
      viewIndex
    })
  )
})

orph.add('ButtonChangeView', (e, { render }) => {
  render({
    viewIndex: +e.target.dataset.buttonindex
  })
})

export default orph
