var configVal = require('./config.json')

module.exports = {
  getDbConnectionString: () => {
    return `mongodb://${configVal.user}:${configVal.pass}@ds129024.mlab.com:29024/pie`
  }
}