const findReactScriptsWebpackConfig = require("@cypress/react/plugins/react-scripts/findReactScriptsWebpackConfig")
const { startDevServer } = require('@cypress/webpack-dev-server')
const _ = require('lodash')

module.exports = (on, config) => {
  const webpackConfig = findReactScriptsWebpackConfig(config)

  on('dev-server:start', (options) => {
    return startDevServer({ options, webpackConfig })
  })

  return config
}

