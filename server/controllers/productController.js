const {product, article} = require('../models')

//POST
exports.create = async (req, res) => {
    try {
        await product.sync();
        let item = await product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        });
        res.json(item);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}

//GET
exports.getAll = async (req, res) => {
    try {
            res.send(await product.findAll({
                include: [{model: article}],
                order: [!!req.query.sort]
            }));
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

exports.getById = async (req, res) => {
    try {
        await product.sync();
            res.send(await product.findAll({
                where: {id: req.params.id},
                include: [{model: article}],
                order: [!!req.query.sort]
            }));
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

//PUT
exports.updateById = async (req, res) => {
    try {
       await product.update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            },
            {
                where: {id: req.params.id}
            }
        )
        res.sendStatus(200);
    } catch(e) {
        console.error(e)
        res.sendStatus(500);
    }
}
//DELETE

exports.deleteById = async (req, res) => {
    try{
        await product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(200);
    }catch(e){
        res.sendStatus(500);
    }
}
