const {product, article} = require('../models')

//POST
exports.add = async (req, res) => {
    try {
        await article.sync();
        let item = await article.create({
            product_id: req.body.product_id,
            name: req.body.name,
            content: req.body.content
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
            res.send(await article.findAll({
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ],
                order: [req.query.sort]
            }));
        } else {
            res.send(await article.findAll({
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ]
            }));
        }
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

exports.getById = async (req, res) => {
    try {
        await article.sync();
        if (req.query.sort) {
            res.send(await article.findAll({
                where: {id: req.params.id},
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ],
                order: [req.query.sort]
            }));
        } else {
            res.send(await article.findAll({
                where: {id: req.params.id},
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ]
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
        await article.update(
            {
                product_id: req.body.product_id,
                name: req.body.name,
                content: req.body.content
            },
            {
                where: {id: req.params.id}
            }
        )
        res.sendStatus(200);
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}
//DELETE
exports.deleteAll = async (req, res) => {
    try {
        await article.destroy({where: {}});
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(500);
    }
}

exports.deleteById = async (req, res) => {
    try {
        await article.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}
