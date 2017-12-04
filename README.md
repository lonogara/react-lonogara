# ligure

[![Build Status]()]()
[![Coverage Status]()]()

* **Local figures gathered**

* **ローカルの形があつまった**

* **view the local's real.**

## usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Desktop, Mobile } from 'ligure'
import props from './props'

render(
  isMobile() ? <Mobile {...props} /> : <Desktop {...props} />,
  document.getElementById('app')
)
```

## props

```js
type Props = {
  firstIndex: number,
  colors: {
    base: string,
    sub: string,
    side: string
  },
  exhibitBackground: string | [string, { [key: string]: string }],
  detailStyle: {
    rootClassName: string,
    cssString: string
  },
  views: Array<View>,
  sides: Array<Side>
}

type View = {
  head: string,
  Button: ButtonComponent,
  create: Factory$Create
}

type ButtonComponent = (props: Button$Props) => React$Element
type Button$Props = { choised: boolean }

type Factory$Create = () => Factory
interface Factory = {
  init(): Promise<void>
  Exhibit(props: Factory$Props): React$Element
  Detail(index: number): React$Element
  update(): Promise<void>
}
type Factory$Props = {
  dispatchDetail: () => void,
  dispatchUpdate: () => void
}

type Side = {
  href: string,
  buttonBackground: string,
  coverBackground: string,
  description: string | [string, { [key: string]: string}]
}
```

<!-- ## development flow -->

<!-- ## Installation
```shell
```
## Usage
```js
```
## API
## License
MIT (http://opensource.org/licenses/MIT) -->
