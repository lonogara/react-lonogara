# lonogara

[![Build Status]()]()
[![Coverage Status]()]()

## ?catchphrase?

* **Local figures gathered**

* **ローカルの形があつまった**

* **view the local.**

## usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Desktop, Mobile } from 'lonogara'
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
  views: Array<View>,
  sides: Array<Side>
}

type View = {
  head: string,
  Button: ButtonComponent,
  create: Create
}

type ButtonComponent = (props: { choised: boolean }) => React$Element

type Create = (options: Create$Opts) => Promise<{ Exhibit, Detail }>
type Data = any
type Create$Opts = {
  renderDetail(Data)
  setPopdown({ src, vertically })
  setInform(number)
}
type Exhibit = React$Component<>
type Detail = React$Component<{ data: Data }>

type Side = {
  href: string,
  buttonImage: string,
  coverColor: string,
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
