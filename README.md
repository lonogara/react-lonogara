# 路の柄 / lonogara

![](https://i.gyazo.com/3a74206535199e07322a9ef8745fec47.png)

<!-- [![Build Status]()]()
[![Coverage Status]()]()

## ?catchphrase?

* **Local figures gathered**

* **ローカルの形があつまった**

* **view the local.** -->

<!-- ## Installation
```shell
yarn
``` -->

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Mobile, Desktop } from 'lonogara'

const isMobile = () => navigator.userAgent.toLowerCase().includes('mobile')

const App = isMobile() ? Mobile : Desktop

render(
  <App {...props} />,
  document.getElementById('app')
)
```

## Props

### firstIndex: number

### Preloader: () => ReactNode

Able to use: [`lonogara-tool/preloader`](https://github.com/kthjm/lonogara-tool/tree/master/preloader)

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

Able to use: [`lonogara-tool/button`](https://github.com/kthjm/lonogara-tool/tree/master/button)

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
