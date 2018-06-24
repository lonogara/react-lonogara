# react-lonogara ![GitHub release](https://img.shields.io/github/release/lonogara/react-lonogara.svg?longCache=true&style=flat-square) [![CircleCI](https://img.shields.io/circleci/project/github/lonogara/react-lonogara.svg?longCache=true&style=flat-square)](https://circleci.com/gh/lonogara/react-lonogara) [![Codecov](https://img.shields.io/codecov/c/github/lonogara/react-lonogara.svg?longCache=true&style=flat-square)](https://codecov.io/gh/lonogara/react-lonogara)

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Mobile, Desktop } from 'lonogara'

const isMobile = () => navigator.userAgent.toLowerCase().includes('mobile')
const App = isMobile() ? Mobile : Desktop
render(<App {...props} />, document.getElementById('app'))
```

## Props

### firstIndex: number

### Preloader: () => ReactNode

Able to use: [`lonogara-tool/preloader`](https://github.com/lonogara/sdk/tree/master/preloader)

### background: url | [url, style]

same origin url will be fetched then used as `BlobUrl`.

### colors: { [key]: color }

* `base`
* `sub`
* `background`
* `preloader`
* `detail`
* `detailQuit`
* `links`

### links: Array<{...}>

* `href: url`
* `buttonImage: url`
* `coverColor: color`
* `description: string | [string, style]`

### views: Array<{...}>

#### head: string

#### Button: (props) => ReactNode

##### props

* `choised: boolean`
* `mainColor: colors.base`
* `subColor: colors.sub`

Able to use: [`lonogara-tool/button`](https://github.com/lonogara/sdk/tree/master/button)

#### create: (utils) => components | Promise<\components>

##### utils

* `renderDetail: (data: any) => Promise<void>`
* `setPopdown: (src: string) => Promise<void>`
* `setInform: (inform: number) => Promise<void>`

##### components

* `Exhibit: () => ReactNode`
* `Detail: ({ data, isContinued }) => ReactNode`

## License

MIT (http://opensource.org/licenses/MIT)
