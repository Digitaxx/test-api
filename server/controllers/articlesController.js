//POST
exports.getAll = (req, res) => {
    console.log('send all data')
}

exports.addAll = (req, res) => {
    console.log('add all data');
}
//GET
exports.addById = (req, res) => {
    console.log(`add ${req.params.id} data`);
}

exports.getById = (req, res) => {
    console.log(`send ${req.params.id} data`)
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
