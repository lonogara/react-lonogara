# ligure

view the local's real.

## usage
```js
import React from "react"
import { render } from "react-dom"
import { Desktop, Mobile } from "ligure"
import props from "./props"

render(
  isMobile()
    ? <Mobile {...props} />
    : <Desktop {...props} />,
  document.getElementById("app")
)
```

## props
```js
type StrFn = () => string

type Props = {
  firstView: number,
  backgroundURL: string | StrFn,
  colors: {
    base: string,
    sub: string,
    side: string
  },
  details: {
    root: string,
    css: string | StrFn
  },
  views: View[],
  sides: Side[]
}

type View = {
  head: string,
  button: ButtonComponent,
  create: NMS$Create
}

type ButtonComponent = (props: Button$Props) => React$Element
type Button$Props = { choised: boolean }

type NMS$Create = () => NMS
interface NMS = {
  init(): Promise<void>
  component(props: NMS$Props): React$Element
  details(): (React$Component | React$Element)[]
  next(): Promise<void>
}
type NMS$Props = {
  dispatchDetail: () => void,
  dispatchNext: () => void
}

type Side = {}
```
