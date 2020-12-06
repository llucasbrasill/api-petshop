const ModelTableProviders = require('../routes/providers/ModelTableProviders')
const modelTable = require('../routes/providers/ModelTableProviders')

modelTable
    .sync()
    .then(() => console.log('table successfully created'))
    .catch(console.log)

