const model = require('../olD/productsModel')


//POST
exports.add = async (req, res) => {
    await model.create(req.body.name, req.body.description, req.body.price);
    res.sendStatus(200)
}
//GET
exports.getAll = async (req, res) => {
    res.send(await model.getAll());
}

exports.getById = async (req, res) => {
    res.send(await model.getById(req.params.id));
}
//PUT
exports.updateAll = (req, res) => {
    console.log('updating all data')
}
exports.updateById = (req, res) => {
    console.log(`update ${req.params.id} data`)
}
//DELETE
exports.deleteAll = (req, res) => {
    console.log('deleting all data')
}
exports.deleteById = (req, res) => {
    console.log(`deleting ${req.params.id} data`)
}
