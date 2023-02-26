const { VuetifyLoaderPlugin } = require('vuetify-loader')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

exports.plugins.push(
    new VuetifyLoaderPlugin()
)

module.exports = {
    plugins: [
        new VuetifyPlugin({ autoImport: true }), // Enabled by default
    ],
}