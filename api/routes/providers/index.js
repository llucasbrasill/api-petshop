const routes = require("express").Router()

const Provider = require("./Provider");
const TableProvider = require('./TableProvider')

routes.get('/', async (request, response) => {

    const result = await TableProvider.list();
    response.send(
        JSON.stringify(result)
    )
})

routes.post('/', async (request, response) => {

    const dataRecived = request.body;
    const provider = new Provider(dataRecived);
    await provider.create()
    response.send(
        JSON.stringify(provider)
    )
})

module.exports = routes