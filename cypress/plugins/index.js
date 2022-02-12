/// <reference types="cypress" />
// ***********************************************************
const path = require('path')
const findNextWebpackConfig = require('./findNextWebpackConfig')
const { getLegacyDevServer } = require('../utils/legacy-setup-dev-server')

async function devServer (cypressDevServerConfig) {
  const webpackConfig = await findNextWebpackConfig(cypressDevServerConfig.config)

  // require('webpack') now points to nextjs bundled version
  const { startDevServer } = require('@cypress/webpack-dev-server')

  return startDevServer({
    options: cypressDevServerConfig,
    webpackConfig,
    template: path.resolve(__dirname, 'index-template.html'),
  })
}

// Legacy signature
module.exports = getLegacyDevServer(devServer, (config) => {
  config.env.reactDevtools = true

  return config
})

// New signature
module.exports.devServer = devServer
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
