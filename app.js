let express = require('express')
let app = express()

let mongoose = require('mongoose')

let config = require('./config')

let port = process.env.PORT || 3000

let apiController = require('./controllers/apiController')

let setupController = require('./controllers/setupController')

app.use('/assets', express.static(`${__dirname}/public`))

app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString());

apiController(app)
setupController(app)

app.listen(port)