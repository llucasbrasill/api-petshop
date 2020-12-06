const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const routes = require('./routes/providers')

const app = express()

app.use(bodyParser.json())

app.use('/api/providers', routes)

app.listen(config.get('api.port'), () => console.log('Api it\'s working!'))




