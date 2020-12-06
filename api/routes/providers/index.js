const routes = require("express").Router()

const TableProvider = require('./TableProvider')

routes.use('/', async (request, response) => {

    const result = await TableProvider.list();
    response.send(
        JSON.stringify(result)
    )
})

module.exports = routes