const targets = {
  browsers: [
    'last 2 versions',
    'safari >= 7'
  ]
}

module.exports = {
  presets: [
    '@babel/preset-flow',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }]
  ],
  env: {
    DEV: {
      presets: [
        ['@babel/preset-env', { targets }]
      ]
    },
    TEST: {
      presets: [
        '@babel/preset-env',
        'power-assert'
      ],
      plugins: [
        'istanbul'
      ]
    },
    BUILD: {
      presets: [
        ['@babel/preset-env', { targets, modules: false }]
      ],
      plugins: [
        'transform-react-constant-elements'
      ]
    }
  }
}