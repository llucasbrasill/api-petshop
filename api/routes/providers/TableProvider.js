const Model = require('./ModelTableProviders')

module.exports = {
    
    list() {
        return Model.findAll()
    },
    create (provider) {
        return Model.create(provider)
    }
}