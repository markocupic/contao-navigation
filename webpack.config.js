const Encore = require('@symfony/webpack-encore');

Encore
.setOutputPath('public/')
.setPublicPath('/bundles/markocupiccontaonavigation')
.setManifestKeyPrefix('')

//.addEntry('select2', './assets/entries/select2.js')
//.addEntry('frontend', './assets/filepond.js')

.copyFiles({
    from: './assets/icons',
    to: 'icons/[path][name].[ext]',
    //pattern: /(angle-down\.svg|angle-up\.svg)$/,
})
.copyFiles({
    from: './assets/js',
    to: 'js/[path][name].[hash:8].[ext]',
})
.disableSingleRuntimeChunk()
.cleanupOutputBeforeBuild()
.enableSourceMaps()
.enableVersioning()

// enables @babel/preset-env polyfills
.configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
})

.enablePostCssLoader()
// Preprocessing scss in css
.enableSassLoader()
.enablePostCssLoader()
.addStyleEntry('style/navigation', './assets/scss/navigation.scss')
;

module.exports = Encore.getWebpackConfig();
