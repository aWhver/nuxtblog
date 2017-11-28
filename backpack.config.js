module.exports =  function () {
    webpack: (config, options, webpack) => {
        config.entry.main = './server/index.js'
        return config
    }
}