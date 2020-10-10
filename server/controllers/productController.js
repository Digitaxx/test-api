const {product, article} = require('../models')

//POST
exports.add = async (req, res) => {
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
        if (req.query.sort) {
            res.send(await product.findAll({
                include: [{model: article}],
                order: [req.query.sort]
            }));
        } else {
            res.send(await product.findAll({
                include: [{model: article}]
            }));
        }
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

exports.getById = async (req, res) => {
    try {
        await product.sync();
        if (req.query.sort) {
            res.send(await product.findAll({
                where: {id: req.params.id},
                include: [{model: article}],
                order: [req.query.sort]
            }));
        } else {
            res.send(await product.findAll({
                where: {id: req.params.id},
                include: [{model: article}]
            }));
        }
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
exports.deleteAll = async (req, res) => {
    try{
        await product.destroy({where: {}});
        res.sendStatus(200)
    }catch(e){
        res.sendStatus(500);
    }
}

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
